import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";
import multer from "multer";
import { Webhook } from "svix";
import Stripe from "stripe";
import Papa from "papaparse";
import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "database";
import { requireAuth, AuthRequest } from "./middleware/auth";
import { userCreate } from "./utils/user";
import {
  connectToPostgres,
  listPostgresTables,
  connectToMySQL,
  listMySQLTables,
  connectToMongoDB,
  listMongoDBCollections,
  listPostgresColumns,
  listMySQLColumns,
  listMongoDBColumns,
  getPostgresColumnTypes,
  getMySQLColumnTypes,
  executePostgresQuery,
} from "./utils/databaseUtils";
import { getDbConnectionDetails, setDbConnectionDetails } from "./utils/dbCache";
import { manipulateRawQueryWithGroupBy } from "./utils/queryUtils";

// Load environment variables from workspace root
dotenv.config({ path: path.join(__dirname, "../../../.env") });

const app = express();
const port = process.env.PORT || 3001;

// Capture raw body for signature verification (needed for svix / stripe webhooks)
app.use(
  express.json({
    verify: (req: any, res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: true }));

// Setup CORS
app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    credentials: true,
  })
);

const upload = multer();

// Initialize Stripe if secret key is present
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "";
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

// Initialize Supabase Client for storage operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = (supabaseUrl && supabaseServiceKey) ? createClient(supabaseUrl, supabaseServiceKey) : null;

// Helper function to score search results for relevance
function scoreResult(title: string, description: string, query: string): number {
  const titleLower = title.toLowerCase();
  const descLower = description.toLowerCase();
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/);
  
  let score = 0;
  if (titleLower === queryLower) score += 100;
  if (titleLower.startsWith(queryLower)) score += 50;
  if (titleLower.includes(queryLower)) score += 25;
  
  queryWords.forEach(word => {
    if (titleLower.includes(word)) score += 10;
    if (titleLower.startsWith(word)) score += 15;
  });
  
  if (descLower.includes(queryLower)) score += 5;
  queryWords.forEach(word => {
    if (descLower.includes(word)) score += 2;
  });
  
  return score;
}

// Helper for fetching database details from Cache or Prisma
async function resolveDbConnection(id: string) {
  let connectionDetails = getDbConnectionDetails(id);
  if (!connectionDetails) {
    connectionDetails = await prisma.database_connections.findUnique({
      where: { id: parseInt(id) },
    });
    if (connectionDetails) {
      setDbConnectionDetails(id, connectionDetails);
    }
  }
  return connectionDetails;
}

// ────────────────────────────────────────────────────────────────────────────────
// Webhook Routes (Public)
// ────────────────────────────────────────────────────────────────────────────────

// 1. Clerk User Sync Webhook
const handleUserWebhook = async (req: any, res: any) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    console.error("Missing CLERK_WEBHOOK_SECRET env");
    return res.status(400).send("Webhook secret not configured");
  }

  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).send("Error: missing svix headers");
  }

  const payload = req.body;
  const body = req.rawBody ? req.rawBody.toString("utf8") : JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: any;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).send("Error: Verification failed");
  }

  const { id } = evt.data;
  const eventType = evt.type;

  try {
    if (eventType === "user.created" || eventType === "user.updated") {
      const email = payload?.data?.email_addresses?.[0]?.email_address;
      const first_name = payload?.data?.first_name;
      const last_name = payload?.data?.last_name;
      const profile_image_url = payload?.data?.profile_image_url;

      await userCreate({
        email,
        first_name,
        last_name,
        profile_image_url,
        user_id: id,
      });

      return res.status(200).json({ success: true, message: "User synced" });
    }
    return res.status(200).json({ success: true, message: "Event received but unhandled" });
  } catch (error: any) {
    console.error("Webhook processing error:", error);
    return res.status(500).json({ error: error.message });
  }
};

app.post("/api/auth/webhook", handleUserWebhook);
app.post("/api/webhooks/user", handleUserWebhook);

// 2. Stripe Webhook Handler
app.post("/api/payments/webhook", async (req: any, res) => {
  if (!stripe || !supabase) {
    return res.status(400).send("Stripe or Supabase not initialized");
  }

  const sig = req.headers["stripe-signature"] as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !endpointSecret) {
    return res.status(400).send("Missing Stripe signature or webhook secret");
  }

  let event: Stripe.Event;

  try {
    const rawBody = req.rawBody ? req.rawBody : Buffer.from(JSON.stringify(req.body));
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    console.error("Stripe signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const getCustomerEmail = async (customerId: string): Promise<string | null> => {
    try {
      const customer = await stripe.customers.retrieve(customerId);
      return (customer as Stripe.Customer).email;
    } catch (error) {
      console.error("Error fetching customer:", error);
      return null;
    }
  };

  try {
    if (event.type.startsWith("customer.subscription.")) {
      const subscription = event.data.object as Stripe.Subscription;
      const customerEmail = await getCustomerEmail(subscription.customer as string);
      if (!customerEmail) {
        return res.status(500).json({ error: "Customer email could not be fetched" });
      }

      const subscriptionData: any = {
        subscription_id: subscription.id,
        stripe_user_id: subscription.customer,
        status: subscription.status,
        start_date: new Date(subscription.created * 1000).toISOString(),
        plan_id: subscription.items.data[0]?.price.id,
        user_id: subscription.metadata?.userId || "",
        email: customerEmail,
      };

      if (event.type === "customer.subscription.deleted") {
        await supabase
          .from("subscriptions")
          .update({ status: "cancelled", email: customerEmail })
          .match({ subscription_id: subscription.id });
        await supabase
          .from("user") // In previous schema the model was user/users
          .update({ subscription: null })
          .eq("email", customerEmail);
      } else if (event.type === "customer.subscription.created") {
        await supabase.from("subscriptions").insert([subscriptionData]);
      } else {
        await supabase
          .from("subscriptions")
          .update(subscriptionData)
          .match({ subscription_id: subscription.id });
      }
    }
    return res.status(200).json({ received: true });
  } catch (error: any) {
    console.error("Stripe webhook processing error:", error);
    return res.status(500).json({ error: error.message });
  }
});

// ────────────────────────────────────────────────────────────────────────────────
// Authenticated Routes (requireAuth)
// ────────────────────────────────────────────────────────────────────────────────

// 3. Search Handler
app.get("/api/search", requireAuth, async (req: AuthRequest, res) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const query = (req.query.q as string) || "";
    const type = (req.query.type as string) || "all";

    if (!query.trim()) return res.json({ results: [] });

    const searchPromises: Promise<any[]>[] = [];

    if (type === "all" || type === "databases") {
      searchPromises.push(
        prisma.database_connections.findMany({
          where: {
            user_id: userId,
            OR: [
              { connection_name: { contains: query, mode: "insensitive" } },
              { database_type: { contains: query, mode: "insensitive" } },
            ],
          },
          take: 20,
        }).then((data) =>
          data.map((conn) => ({
            id: conn.id,
            title: conn.connection_name,
            type: "database",
            description: `${conn.database_type} • ${conn.host}`,
            icon: "database",
            url: `/dashboard/db-details/${conn.id}`,
            score: scoreResult(conn.connection_name, `${conn.database_type} ${conn.host}`, query),
          }))
        )
      );
    }

    if (type === "all" || type === "connections") {
      searchPromises.push(
        prisma.api_connections.findMany({
          where: {
            user_id: userId,
            OR: [
              { connection_name: { contains: query, mode: "insensitive" } },
              { table_name: { contains: query, mode: "insensitive" } },
            ],
          },
          take: 20,
        }).then((data) =>
          data.map((conn) => {
            let hostname;
            try {
              hostname = new URL(conn.api_url).hostname;
            } catch {
              hostname = conn.api_url;
            }
            return {
              id: conn.id,
              title: conn.connection_name,
              type: "api",
              description: conn.table_name ? `${conn.table_name} • ${hostname}` : hostname,
              icon: "globe",
              url: conn.database_connection_id && conn.table_name
                ? `/dashboard/db-details/${conn.database_connection_id}/tables/${conn.table_name}`
                : `/dashboard/api-details/${conn.id}`,
              score: scoreResult(conn.connection_name, `${conn.table_name || ""} ${hostname}`, query),
            };
          })
        )
      );
    }

    if (type === "all" || type === "connections") {
      searchPromises.push(
        prisma.csvData.findMany({
          where: {
            user_id: userId,
            OR: [
              { connection_name: { contains: query, mode: "insensitive" } },
              { file_name: { contains: query, mode: "insensitive" } },
            ],
          },
          take: 20,
        }).then((data) =>
          data.map((conn) => ({
            id: Number(conn.id),
            title: conn.connection_name || conn.file_name || "CSV Data",
            type: "csv",
            description: conn.file_name || "",
            icon: "file-spreadsheet",
            url: `/dashboard/csv-details/${conn.id}`,
            score: scoreResult(conn.connection_name || conn.file_name || "", conn.file_name || "", query),
          }))
        )
      );
    }

    if (type === "all" || type === "datasets") {
      searchPromises.push(
        prisma.datasets.findMany({
          where: {
            user_id: userId,
            OR: [
              { dataset_name: { contains: query, mode: "insensitive" } },
              { dataset_description: { contains: query, mode: "insensitive" } },
            ],
          },
          take: 20,
        }).then((data) =>
          data.map((conn) => ({
            id: conn.id,
            title: conn.dataset_name,
            type: "dataset",
            description: conn.dataset_description || "",
            icon: "layout-dashboard",
            url: conn.connection_id
              ? `/dashboard/datasets/${conn.connection_id}/${conn.id}/${conn.dataset_name}`
              : `/dashboard/datasets/api/${conn.id}/${conn.dataset_name}`,
            score: scoreResult(conn.dataset_name, conn.dataset_description || "", query),
          }))
        )
      );
    }

    const settled = await Promise.all(searchPromises);
    const flatResults = settled.flat().sort((a, b) => b.score - a.score);

    return res.json({ results: flatResults });
  } catch (error: any) {
    console.error("Search error:", error);
    return res.status(500).json({ error: error.message });
  }
});

// 4. Database tables list
app.get("/api/database/:id", requireAuth, async (req: AuthRequest, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: "Invalid ID" });

  try {
    const connectionDetails = await resolveDbConnection(id);
    if (!connectionDetails) return res.status(404).json({ error: "Connection not found" });

    const { database_type, host, port, database_name, username, password } = connectionDetails;
    let tables: string[] = [];

    switch (database_type) {
      case "postgres":
        const pgClient = await connectToPostgres({ host, port, database: database_name, user: username, password });
        tables = await listPostgresTables(pgClient);
        await pgClient.end();
        break;
      case "mysql":
        const mysqlConnection = await connectToMySQL({ host, port, database: database_name, user: username, password });
        tables = await listMySQLTables(mysqlConnection);
        await mysqlConnection.end();
        break;
      case "mongodb":
        const mongoDb = await connectToMongoDB({ host, port, database: database_name, user: username, password });
        tables = await listMongoDBCollections(mongoDb);
        await mongoDb.client.close();
        break;
      default:
        return res.status(400).json({ error: "Unsupported database type" });
    }

    return res.json(tables);
  } catch (err: any) {
    console.error("Db tables list error:", err);
    return res.status(500).json({ error: "Error connecting to the database" });
  }
});

// 5. Database Schema
app.get("/api/database/:id/schema", requireAuth, async (req: AuthRequest, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: "Invalid ID" });

  try {
    const connectionDetails = await resolveDbConnection(id);
    if (!connectionDetails) return res.status(404).json({ error: "Connection not found" });

    const { database_type, host, port, database_name, username, password } = connectionDetails;
    const schema = {
      tables: [] as string[],
      columns: {} as Record<string, string[]>,
      columnTypes: {} as Record<string, { columnName: string; dataType: string }[]>,
    };

    switch (database_type) {
      case "postgres": {
        const pgClient = await connectToPostgres({ host, port, database: database_name, user: username, password });
        schema.tables = await listPostgresTables(pgClient);
        for (const table of schema.tables) {
          try {
            schema.columns[table] = await listPostgresColumns(pgClient, table);
            schema.columnTypes[table] = await getPostgresColumnTypes(pgClient, table);
          } catch {
            schema.columns[table] = [];
            schema.columnTypes[table] = [];
          }
        }
        await pgClient.end();
        break;
      }
      case "mysql": {
        const mysqlConnection = await connectToMySQL({ host, port, database: database_name, user: username, password });
        schema.tables = await listMySQLTables(mysqlConnection);
        for (const table of schema.tables) {
          try {
            schema.columns[table] = await listMySQLColumns(mysqlConnection, table);
            schema.columnTypes[table] = await getMySQLColumnTypes(mysqlConnection, table);
          } catch {
            schema.columns[table] = [];
            schema.columnTypes[table] = [];
          }
        }
        await mysqlConnection.end();
        break;
      }
      case "mongodb": {
        const { db, client } = await connectToMongoDB({ host, port, database: database_name, user: username, password });
        schema.tables = await listMongoDBCollections(db);
        for (const table of schema.tables) {
          try {
            schema.columns[table] = await listMongoDBColumns(db, table);
            schema.columnTypes[table] = schema.columns[table].map((col) => ({ columnName: col, dataType: "mixed" }));
          } catch {
            schema.columns[table] = [];
            schema.columnTypes[table] = [];
          }
        }
        await client.close();
        break;
      }
      default:
        return res.status(400).json({ error: "Unsupported database type" });
    }

    return res.json(schema);
  } catch (err: any) {
    console.error("Schema fetch error:", err);
    return res.status(500).json({ error: "Error connecting to the database or fetching schema" });
  }
});

// 6. Database Preview Table Data
app.get("/api/database/:id/tables/:tableName", requireAuth, async (req: AuthRequest, res) => {
  const { id, tableName } = req.params;
  if (!id || !tableName) return res.status(400).json({ error: "Invalid ID or tableName" });

  try {
    const connectionDetails = await resolveDbConnection(id);
    if (!connectionDetails) return res.status(404).json({ error: "Connection not found" });

    const { database_type, host, port, database_name, username, password } = connectionDetails;
    let data: any[] = [];

    const limit = parseInt(req.query.limit as string) || 100;
    const offset = parseInt(req.query.offset as string) || 0;
    const sortColumn = req.query.sortColumn as string;
    const sortOrder = (req.query.sortOrder as string) || "ASC";

    switch (database_type) {
      case "postgres": {
        const pgClient = await connectToPostgres({ host, port, database: database_name, user: username, password });
        let queryStr = `SELECT * FROM "${tableName}"`;
        if (sortColumn) {
          queryStr += ` ORDER BY "${sortColumn}" ${sortOrder === "DESC" ? "DESC" : "ASC"}`;
        }
        queryStr += ` LIMIT ${limit} OFFSET ${offset}`;
        const result = await pgClient.query(queryStr);
        data = result.rows;
        await pgClient.end();
        break;
      }
      case "mysql": {
        const mysqlConnection = await connectToMySQL({ host, port, database: database_name, user: username, password });
        let queryStr = `SELECT * FROM \`${tableName}\``;
        if (sortColumn) {
          queryStr += ` ORDER BY \`${sortColumn}\` ${sortOrder === "DESC" ? "DESC" : "ASC"}`;
        }
        queryStr += ` LIMIT ${limit} OFFSET ${offset}`;
        const [result] = await mysqlConnection.execute(queryStr);
        data = result as any[];
        await mysqlConnection.end();
        break;
      }
      case "mongodb": {
        const { db, client } = await connectToMongoDB({ host, port, database: database_name, user: username, password });
        const collection = db.collection(tableName);
        let mongoQuery = collection.find({}).limit(limit).skip(offset);
        if (sortColumn) {
          mongoQuery = mongoQuery.sort({ [sortColumn]: sortOrder === "DESC" ? -1 : 1 });
        }
        data = await mongoQuery.toArray();
        await client.close();
        break;
      }
      default:
        return res.status(400).json({ error: "Unsupported database type" });
    }

    return res.json(data);
  } catch (err: any) {
    console.error("Table preview error:", err);
    return res.status(500).json({ error: "Error querying the table" });
  }
});

// 7. Database Table Columns
app.get("/api/database/:id/tables/:tableName/columns", requireAuth, async (req: AuthRequest, res) => {
  const { id, tableName } = req.params;
  if (!id || !tableName) return res.status(400).json({ error: "Invalid ID or tableName" });

  try {
    const connectionDetails = await resolveDbConnection(id);
    if (!connectionDetails) return res.status(404).json({ error: "Connection not found" });

    const { database_type, host, port, database_name, username, password } = connectionDetails;
    let columns: string[] = [];

    switch (database_type) {
      case "postgres":
        const pgClient = await connectToPostgres({ host, port, database: database_name, user: username, password });
        columns = await listPostgresColumns(pgClient, tableName);
        await pgClient.end();
        break;
      case "mysql":
        const mysqlConnection = await connectToMySQL({ host, port, database: database_name, user: username, password });
        columns = await listMySQLColumns(mysqlConnection, tableName);
        await mysqlConnection.end();
        break;
      case "mongodb":
        const { db, client } = await connectToMongoDB({ host, port, database: database_name, user: username, password });
        columns = await listMongoDBColumns(db, tableName);
        await client.close();
        break;
      default:
        return res.status(400).json({ error: "Unsupported database type" });
    }

    return res.json(columns);
  } catch (err: any) {
    console.error("Columns fetch error:", err);
    return res.status(500).json({ error: "Error connecting to the database or querying the columns" });
  }
});

// 8. Dataset query execution handler
app.get("/api/datasets/:connection_id/:dataset_id/:dataset_name", requireAuth, async (req: AuthRequest, res) => {
  const { connection_id, dataset_id, dataset_name } = req.params;
  if (!connection_id || !dataset_id) return res.status(400).json({ error: "Invalid ID" });

  try {
    const dataset = await prisma.datasets.findFirst({
      where: {
        connection_id: parseInt(connection_id),
        id: parseInt(dataset_id),
      },
    });

    if (!dataset) return res.status(404).json({ error: "Dataset not found" });

    const connectionDetails = await resolveDbConnection(connection_id);
    if (!connectionDetails) return res.status(404).json({ error: "Connection not found" });

    const { database_type, host, port, database_name, username, password } = connectionDetails;
    let sqlQuery = dataset.sql_query;

    const dateBy = req.query.dateBy as string;
    const additionalGroupBy = req.query.additionalGroupBy as string;

    if (dateBy) {
      sqlQuery = manipulateRawQueryWithGroupBy(sqlQuery, dateBy, additionalGroupBy, database_type);
    }

    let rows: any[] = [];
    switch (database_type) {
      case "postgres": {
        const pgClient = await connectToPostgres({ host, port, database: database_name, user: username, password });
        rows = await executePostgresQuery(pgClient, sqlQuery);
        await pgClient.end();
        break;
      }
      case "mysql": {
        const mysqlConnection = await connectToMySQL({ host, port, database: database_name, user: username, password });
        const [mysqlRows] = await mysqlConnection.execute(sqlQuery);
        rows = mysqlRows as any[];
        await mysqlConnection.end();
        break;
      }
      case "mongodb": {
        const { db, client } = await connectToMongoDB({ host, port, database: database_name, user: username, password });
        rows = await db.collection(dataset.table_name || dataset_name).find({}).toArray();
        await client.close();
        break;
      }
      default:
        return res.status(400).json({ error: "Unsupported database type" });
    }

    return res.json(rows);
  } catch (err: any) {
    console.error("Dataset execution error:", err);
    return res.status(500).json({ error: "Error executing the dataset query" });
  }
});

// 9. Dataset columns
app.get("/api/datasets/:connection_id/:dataset_id/:dataset_name/columns", requireAuth, async (req: AuthRequest, res) => {
  const { connection_id, dataset_id, dataset_name } = req.params;
  if (!connection_id || !dataset_name) return res.status(400).json({ error: "Invalid ID" });

  try {
    const dataset = await prisma.datasets.findFirst({
      where: {
        connection_id: parseInt(connection_id),
        dataset_name: dataset_name,
      },
    });

    if (!dataset) return res.status(404).json({ error: "Dataset not found" });

    const connectionDetails = await resolveDbConnection(connection_id);
    if (!connectionDetails) return res.status(404).json({ error: "Connection not found" });

    const { database_type, host, port, database_name, username, password } = connectionDetails;
    let columns: string[] = [];

    switch (database_type) {
      case "postgres":
        const pgClient = await connectToPostgres({ host, port, database: database_name, user: username, password });
        columns = await listPostgresColumns(pgClient, dataset.sql_query);
        await pgClient.end();
        break;
      case "mysql":
        const mysqlConnection = await connectToMySQL({ host, port, database: database_name, user: username, password });
        columns = await listMySQLColumns(mysqlConnection, dataset.sql_query);
        await mysqlConnection.end();
        break;
      case "mongodb":
        const { db, client } = await connectToMongoDB({ host, port, database: database_name, user: username, password });
        columns = await listMongoDBColumns(db, dataset.sql_query);
        await client.close();
        break;
    }

    return res.json(columns);
  } catch (err: any) {
    console.error("Dataset columns error:", err);
    return res.status(500).json({ error: "Error retrieving dataset columns" });
  }
});

// 10. Profile details update
app.post("/api/profile/update", requireAuth, async (req: AuthRequest, res) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      return res.status(400).json({ error: "First name and last name are required" });
    }

    const user = await prisma.users.findUnique({ where: { user_id: userId } });
    const currentAttributes = user?.attributes ? (user.attributes as any) : {};
    const updatedAttributes = {
      ...currentAttributes,
      first_name: firstName,
      last_name: lastName,
    };

    await prisma.users.upsert({
      where: { user_id: userId },
      update: {
        attributes: updatedAttributes,
        updatedAt: new Date(),
      },
      create: {
        user_id: userId,
        attributes: updatedAttributes,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return res.json({ success: true, message: "Profile updated successfully" });
  } catch (err: any) {
    console.error("Profile update error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// 11. Profile Image Upload
app.post("/api/profile/image/upload", requireAuth, upload.single("image"), async (req: AuthRequest, res) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const file = req.file;
    if (!file) return res.status(400).json({ error: "No image file provided" });

    if (!file.mimetype.startsWith("image/")) {
      return res.status(400).json({ error: "File must be an image" });
    }

    const clerkSecretKey = process.env.CLERK_SECRET_KEY || process.env.NEXT_PUBLIC_CLERK_SECRET_KEY;
    if (!clerkSecretKey) {
      return res.status(500).json({ error: "Clerk API Key not configured" });
    }

    const formData = new FormData();
    const blob = new Blob([file.buffer], { type: file.mimetype });
    formData.append("file", blob, file.originalname);

    const clerkResponse = await fetch(`https://api.clerk.com/v1/users/${userId}/profile_image`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${clerkSecretKey}`,
      },
      body: formData,
    });

    if (!clerkResponse.ok) {
      const errorText = await clerkResponse.text();
      console.error("Clerk Profile Image Upload failed:", errorText);
      return res.status(500).json({ error: "Failed to upload image to Clerk" });
    }

    const clerkUser = (await clerkResponse.json()) as any;
    const imageUrl = clerkUser.image_url || clerkUser.profile_image_url;

    const user = await prisma.users.findUnique({ where: { user_id: userId } });
    const currentAttributes = user?.attributes ? (user.attributes as any) : {};
    const updatedAttributes = {
      ...currentAttributes,
      profile_image_url: imageUrl,
      updated_at: new Date().toISOString(),
    };

    await prisma.users.upsert({
      where: { user_id: userId },
      update: {
        attributes: updatedAttributes,
        updatedAt: new Date(),
      },
      create: {
        user_id: userId,
        attributes: updatedAttributes,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return res.json({
      success: true,
      message: "Profile image updated successfully",
      data: { imageUrl, updatedAt: new Date().toISOString() },
    });
  } catch (err: any) {
    console.error("Profile image upload error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// 12. Retrieve CSV detail list
app.get("/api/csv/:csvId", requireAuth, async (req: AuthRequest, res) => {
  if (!supabase) {
    return res.status(400).json({ error: "Supabase storage client not initialized" });
  }

  const { csvId } = req.params;
  const userId = req.auth?.userId;

  if (!csvId || !userId) {
    return res.status(400).json({ error: "Invalid CSV or User ID" });
  }

  try {
    const csvConnection = await prisma.csvData.findFirst({
      where: {
        id: BigInt(csvId),
        user_id: userId,
      },
    });

    if (!csvConnection) {
      return res.status(404).json({ error: "CSV connection not found" });
    }

    const { bucket_name, file_name, selectedFields } = csvConnection;

    if (!bucket_name || !file_name || !selectedFields) {
      return res.status(400).json({ error: "Missing required CSV metadata details" });
    }

    const { data: fileData, error: fileError } = await supabase.storage.from(bucket_name).download(file_name);

    if (fileError || !fileData) {
      console.error("Error downloading file from Supabase storage:", fileError);
      return res.status(500).json({ error: "Error downloading CSV file from storage" });
    }

    const csvText = await fileData.text();
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });

    if (parsed.errors.length > 0) {
      return res.status(500).json({ error: `Parsing error: ${parsed.errors[0].message}` });
    }

    const filteredRows = parsed.data.map((row: any) => {
      const filteredRow: Record<string, any> = {};
      selectedFields.forEach((field) => {
        if (field in row) {
          filteredRow[field] = row[field];
        }
      });
      return filteredRow;
    });

    const datasetDetails = await prisma.datasets.findFirst({
      where: { csv_id: parseInt(csvId) },
    });

    return res.json({
      columns: selectedFields,
      rows: filteredRows,
      visualization: datasetDetails
        ? {
            x_axis: datasetDetails.x_axis,
            y_axis: datasetDetails.y_axis ? [datasetDetails.y_axis] : [],
            selectedField: datasetDetails.selectedField,
            visualization_type: datasetDetails.visualization_type,
            is_stacked: datasetDetails.is_stacked,
          }
        : {
            x_axis: null,
            y_axis: [],
            selectedField: null,
            visualization_type: "table",
            is_stacked: false,
          },
    });
  } catch (err: any) {
    console.error("CSV details fetch error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// 13. Create checkout session (Stripe)
app.post("/api/payments/create-checkout-session", requireAuth, async (req: AuthRequest, res) => {
  if (!stripe) {
    return res.status(400).json({ error: "Stripe client not initialized" });
  }

  const { userId, email, priceId, subscription } = req.body;

  try {
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId, email, subscription: String(subscription) },
      mode: subscription ? "subscription" : "payment",
      success_url: `${process.env.FRONTEND_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || "http://localhost:3000"}/cancel`,
    };

    if (subscription) {
      sessionConfig.allow_promotion_codes = true;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    return res.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Error creating stripe checkout session:", error);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// 14. Bulk refresh data from API source
app.post("/api/api/:apiId/refresh", requireAuth, async (req: AuthRequest, res) => {
  const { connectionId, tableName, data } = req.body;
  if (!connectionId || !tableName || !data || data.length === 0) {
    return res.status(400).json({ error: "Missing connectionId, tableName, or data" });
  }

  try {
    const connectionDetails = await resolveDbConnection(connectionId);
    if (!connectionDetails) {
      return res.status(403).json({ error: "Invalid database connection or access denied." });
    }

    const { database_type: type, host, port, database_name: database, username: user, password } = connectionDetails;
    const primaryKey = "id";

    if (type === "postgres") {
      const client = await connectToPostgres({ host, port, database, user, password });
      const firstRow = data[0];
      const columns = Object.keys(firstRow);
      const columnDefs = columns.map((key) => `"${key}" TEXT`).join(", ");
      
      await client.query(`CREATE TABLE IF NOT EXISTS "${tableName}" (${columnDefs}, PRIMARY KEY ("${primaryKey}"));`);
      
      const incomingIds = data.map((row: any) => row[primaryKey]);
      await client.query(
        `DELETE FROM "${tableName}" WHERE "${primaryKey}" NOT IN (${incomingIds.map((_: any, i: number) => `$${i + 1}`).join(", ")})`,
        incomingIds
      );

      const colNames = columns.map((k) => `"${k}"`).join(", ");
      const placeholders = columns.map((_, i) => `$${i + 1}`).join(", ");
      const updateSet = columns
        .filter((col) => col !== primaryKey)
        .map((col) => `"${col}" = EXCLUDED."${col}"`)
        .join(", ");

      const upsertQuery = `
        INSERT INTO "${tableName}" (${colNames})
        VALUES (${placeholders})
        ON CONFLICT ("${primaryKey}") DO UPDATE SET ${updateSet};
      `;

      for (const row of data) {
        const values = columns.map((key) => row[key]);
        await client.query(upsertQuery, values);
      }
      await client.end();
    } else if (type === "mysql") {
      const connection = await connectToMySQL({ host, port, database, user, password });
      const firstRow = data[0];
      const columns = Object.keys(firstRow);
      const columnDefs = columns.map((key) => `\`${key}\` TEXT`).join(", ");
      
      await connection.execute(`CREATE TABLE IF NOT EXISTS \`${tableName}\` (${columnDefs}, PRIMARY KEY (\`${primaryKey}\`));`);
      
      const incomingIds = data.map((row: any) => row[primaryKey]);
      const placeholders = incomingIds.map(() => "?").join(", ");
      await connection.execute(`DELETE FROM \`${tableName}\` WHERE \`${primaryKey}\` NOT IN (${placeholders})`, incomingIds);

      const colNames = columns.map((k) => `\`${k}\``).join(", ");
      const valuePlaceholders = columns.map(() => "?").join(", ");
      const updateSet = columns
        .filter((col) => col !== primaryKey)
        .map((col) => `\`${col}\` = VALUES(\`${col}\`)`)
        .join(", ");

      const upsertQuery = `
        INSERT INTO \`${tableName}\` (${colNames})
        VALUES (${valuePlaceholders})
        ON DUPLICATE KEY UPDATE ${updateSet};
      `;

      for (const row of data) {
        const values = columns.map((key) => row[key]);
        await connection.execute(upsertQuery, values);
      }
      await connection.end();
    } else {
      return res.status(400).json({ error: "Unsupported database type for refresh." });
    }

    return res.status(200).json({
      message: "Data refreshed successfully.",
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("Refresh error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// 15. Update Query builder
app.post("/api/updateQuery", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { query, dateBy, additionalGroupBy } = req.body;
    if (!query || !dateBy) {
      return res.status(400).json({ error: "Missing query or dateBy" });
    }
    const updatedQuery = manipulateRawQueryWithGroupBy(query, dateBy, additionalGroupBy);
    return res.json({ updatedQuery });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 16. CSV database tables loader
app.post("/api/upload-csv", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { connectionId, tableName, data } = req.body;
    if (!connectionId || !tableName || !data) {
      return res.status(400).json({ error: "Missing required fields: connectionId, tableName, or data." });
    }

    const connectionDetails = await resolveDbConnection(connectionId);
    if (!connectionDetails) {
      return res.status(400).json({ error: "Invalid database connection provided." });
    }

    const { database_type: type, host, port, database_name: database, username: user, password } = connectionDetails;

    if (type === "postgres") {
      const client = await connectToPostgres({ host, port, database, user, password });
      const firstRow = data[0];
      const columns = Object.keys(firstRow).map((key) => `"${key}" TEXT`).join(", ");
      
      await client.query(`CREATE TABLE IF NOT EXISTS "${tableName}" (${columns});`);
      
      for (const row of data) {
        const keys = Object.keys(row);
        const values = keys.map((key) => row[key]);
        const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
        const insertQuery = `INSERT INTO "${tableName}" (${keys.map((k) => `"${k}"`).join(", ")}) VALUES (${placeholders});`;
        await client.query(insertQuery, values);
      }
      await client.end();
    } else if (type === "mysql") {
      const connection = await connectToMySQL({ host, port, database, user, password });
      const firstRow = data[0];
      const columns = Object.keys(firstRow).map((key) => `\`${key}\` TEXT`).join(", ");
      
      await connection.execute(`CREATE TABLE IF NOT EXISTS \`${tableName}\` (${columns});`);
      
      for (const row of data) {
        const keys = Object.keys(row);
        const values = keys.map((key) => row[key]);
        const placeholders = keys.map(() => "?").join(", ");
        const insertQuery = `INSERT INTO \`${tableName}\` (${keys.map((k) => `\`${k}\``).join(", ")}) VALUES (${placeholders});`;
        await connection.execute(insertQuery, values);
      }
      await connection.end();
    } else {
      return res.status(400).json({ error: "Unsupported database type." });
    }

    return res.status(200).json({ message: "CSV data uploaded successfully." });
  } catch (err: any) {
    console.error("CSV upload error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// 17. Gemini AI Assistant Route
app.post("/api/gemini", requireAuth, async (req: AuthRequest, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(400).json({ error: "Gemini API Key not configured" });

  const genAI = new GoogleGenerativeAI(apiKey);
  const fastModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const { message, connection_id, conversation_id, inlineCompletion } = req.body;

    if (inlineCompletion) {
      return res.json({ completion: " " });
    }

    if (!message) return res.status(400).json({ error: "Message is required" });

    const result = await fastModel.generateContent(message);
    const responseText = result.response.text();

    return res.json({ response: responseText });
  } catch (err: any) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// Boot Server
app.listen(port, () => {
  console.log(`🚀 Standalone Express API backend listening on port ${port}`);
});
