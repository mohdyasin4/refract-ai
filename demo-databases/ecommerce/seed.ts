import { Client } from "pg";
import * as dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import * as path from "path";

// Load local environment configurations
dotenv.config();

const client = new Client({
  host: "localhost", // Seeder runs from host mapping to docker container
  port: parseInt(process.env.DB_PORT || "5433"),
  database: process.env.DB_NAME || "refract_ecommerce_demo",
  user: process.env.DB_USER || "refract_admin",
  password: process.env.DB_PASSWORD || "refract_secure_password_2026",
});

// Anchor faker for deterministic seed sets
faker.seed(12345);

type order_status = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

function weightedRandom<T>(items: { weight: number; value: T }[]): T {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  for (const item of items) {
    if (random < item.weight) {
      return item.value;
    }
    random -= item.weight;
  }
  return items[0].value;
}

// ────────────────────────────────────────────────────────────────────────────
// BATCH INSERTION HELPER
// ────────────────────────────────────────────────────────────────────────────

async function batchInsert(
  tableName: string,
  columns: string[],
  rows: any[][],
  batchSize = 1000
) {
  for (let i = 0; i < rows.length; i += batchSize) {
    const chunk = rows.slice(i, i + batchSize);
    const valuePlaceholders: string[] = [];
    const flatValues: any[] = [];
    
    let colIndex = 1;
    for (const row of chunk) {
      const placeholders = row.map(() => `$${colIndex++}`).join(", ");
      valuePlaceholders.push(`(${placeholders})`);
      flatValues.push(...row);
    }
    
    const query = `
      INSERT INTO ${tableName} (${columns.join(", ")})
      VALUES ${valuePlaceholders.join(", ")}
    `;
    await client.query(query, flatValues);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// MAIN SEED PROCESS
// ────────────────────────────────────────────────────────────────────────────

async function run() {
  console.log("🚀 Starting database seeding process...");
  await client.connect();

  try {
    // 1. Truncate existing tables to avoid primary key conflicts
    console.log("🧹 Truncating existing tables...");
    await client.query(`
      TRUNCATE TABLE 
        refunds, shipments, order_items, orders, 
        cart_items, carts, coupons, product_inventory, 
        products, product_categories, customer_addresses, 
        customers, system_events
      RESTART IDENTITY CASCADE;
    `);

    // 2. Generate Categories
    console.log("📦 Creating categories...");
    const categories = [
      { name: "Electronics", slug: "electronics", description: "Phones, Laptops, Accessories" },
      { name: "Apparel & Fashion", slug: "apparel-fashion", description: "Clothing, Shoes, Jewellery" },
      { name: "Home & Living", slug: "home-living", description: "Furniture, Kitchen, Decoration" },
      { name: "Books & Stationeries", slug: "books-stationeries", description: "Novels, Textbooks, Pens" },
      { name: "Health & Beauty", slug: "health-beauty", description: "Makeup, Skincare, Vitamins" },
      { name: "Sports & Outdoors", slug: "sports-outdoors", description: "Gym equipment, Tents, Clothing" },
      { name: "Toys & Hobbies", slug: "toys-hobbies", description: "Games, Lego, Dolls" }
    ];
    
    const categoryRows = categories.map(c => [c.name, c.slug, c.description, null]);
    await batchInsert("product_categories", ["name", "slug", "description", "parent_id"], categoryRows);

    // Retrieve generated category IDs
    const catRes = await client.query("SELECT id, name FROM product_categories");
    const categoryIds = catRes.rows.map(row => row.id);

    // 3. Generate Products (5,000 items)
    console.log("🛍 Generating 5,000 products & inventory records...");
    const productRows: any[][] = [];
    const inventoryRows: any[][] = [];
    const productsList: { id: string; price: number; cost: number }[] = [];

    for (let i = 1; i <= 5000; i++) {
      const pId = faker.string.uuid();
      const name = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`;
      const sku = `PROD-${faker.string.alphanumeric(8).toUpperCase()}`;
      const slug = faker.helpers.slugify(name.toLowerCase()) + "-" + i;
      
      const price = parseFloat(faker.commerce.price({ min: 10, max: 1500 }));
      // Cost of goods sold: usually 40% - 70% of sales price
      const cost = parseFloat((price * faker.number.float({ min: 0.4, max: 0.7 })).toFixed(2));
      const categoryId = faker.helpers.arrayElement(categoryIds);
      const status = faker.helpers.arrayElement(["active", "active", "active", "draft", "archived"]); // mostly active

      productRows.push([pId, sku, name, slug, faker.commerce.productDescription(), price, cost, categoryId, status]);
      
      // Stock metrics
      const quantity = faker.number.int({ min: 0, max: 800 });
      const threshold = faker.helpers.arrayElement([5, 10, 15, 20]);
      inventoryRows.push([pId, quantity, threshold]);

      if (status === "active") {
        productsList.push({ id: pId, price, cost });
      }
    }

    await batchInsert("products", ["id", "sku", "name", "slug", "description", "price", "cost", "category_id", "status"], productRows);
    await batchInsert("product_inventory", ["product_id", "quantity_available", "low_stock_threshold"], inventoryRows);

    // 4. Generate Customers (10,000 records)
    console.log("👤 Generating 10,000 customers & addresses...");
    const customerRows: any[][] = [];
    const addressRows: any[][] = [];
    const customersList: { id: string; created_at: Date }[] = [];

    for (let i = 1; i <= 10000; i++) {
      const cId = faker.string.uuid();
      const email = faker.internet.email({ firstName: faker.person.firstName(), lastName: faker.person.lastName() }) + i;
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const phone = faker.phone.number();
      const role = faker.helpers.arrayElement(["regular", "regular", "regular", "vip", "vip", "corporate"]);
      const status = faker.helpers.arrayElement(["active", "active", "active", "inactive", "suspended"]);
      
      // Distributed signup dates over the past year
      const createdAt = faker.date.past({ years: 1 });

      customerRows.push([cId, email, "pbkdf2_sha256$placeholder", firstName, lastName, phone, role, status, createdAt]);
      customersList.push({ id: cId, created_at: createdAt });

      // Addresses (1-2 per customer)
      const numAddresses = faker.number.int({ min: 1, max: 2 });
      for (let j = 0; j < numAddresses; j++) {
        addressRows.push([
          faker.string.uuid(),
          cId,
          j === 0 ? "shipping" : "billing",
          faker.location.streetAddress(),
          faker.location.city(),
          faker.location.state(),
          faker.location.zipCode(),
          "United States",
          j === 0
        ]);
      }
    }

    await batchInsert("customers", ["id", "email", "password_hash", "first_name", "last_name", "phone", "role", "status", "created_at"], customerRows);
    await batchInsert("customer_addresses", ["id", "customer_id", "type", "street_address", "city", "state", "postal_code", "country", "is_default"], addressRows);

    // Fetch shipping addresses for order generation mapping
    const addressRes = await client.query("SELECT id, customer_id FROM customer_addresses WHERE type = 'shipping'");
    const customerAddressesMap: Record<string, string[]> = {};
    for (const row of addressRes.rows) {
      if (!customerAddressesMap[row.customer_id]) {
        customerAddressesMap[row.customer_id] = [];
      }
      customerAddressesMap[row.customer_id].push(row.id);
    }

    // 5. Generate Coupons
    console.log("🎟 Creating promo coupons...");
    const coupons = [
      { code: "WELCOME10", type: "percentage", value: 10.00, min: 0.00, starts: "2025-01-01", ends: "2027-01-01" },
      { code: "SUMMER25", type: "percentage", value: 25.00, min: 50.00, starts: "2025-06-01", ends: "2025-09-01" },
      { code: "BLACKFRIDAY", type: "percentage", value: 40.00, min: 100.00, starts: "2025-11-20", ends: "2025-11-30" },
      { code: "FREESHIP", type: "fixed_amount", value: 15.00, min: 40.00, starts: "2025-01-01", ends: "2027-01-01" },
      { code: "VIP50", type: "fixed_amount", value: 50.00, min: 200.00, starts: "2025-01-01", ends: "2027-01-01" }
    ];

    const couponRows: any[][] = [];
    const couponList: { id: string; code: string; type: string; value: number; min: number }[] = [];
    for (const c of coupons) {
      const id = faker.string.uuid();
      couponRows.push([id, c.code, c.type, c.value, c.min, new Date(c.starts), new Date(c.ends), 1000]);
      couponList.push({ id, code: c.code, type: c.type, value: c.value, min: c.min });
    }
    await batchInsert("coupons", ["id", "code", "type", "value", "min_purchase_amount", "starts_at", "ends_at", "usage_limit"], couponRows);

    // 6. Generate Orders & Order Items (100,000 records)
    console.log("🛒 Simulating 100,000 enterprise orders & shipments...");
    const orderRows: any[][] = [];
    const orderItemRows: any[][] = [];
    const shipmentRows: any[][] = [];
    const refundRows: any[][] = [];
    
    let orderCounter = 1000000; // Incrementing order numbering

    for (let i = 0; i < 100000; i++) {
      const orderId = faker.string.uuid();
      const customer = faker.helpers.arrayElement(customersList);
      
      // Generate seasonal sales distribution.
      // E.g. high volume in Nov/Dec (Black Friday/Holiday), and moderate in summer.
      const orderDate = faker.date.between({
        from: customer.created_at, // Must buy AFTER signing up
        to: new Date()
      });

      const orderNumber = `ORD-${orderCounter++}`;
      const status = weightedRandom<order_status>([
        { weight: 80, value: "delivered" },
        { weight: 10, value: "shipped" },
        { weight: 5, value: "paid" },
        { weight: 2, value: "pending" },
        { weight: 2, value: "refunded" },
        { weight: 1, value: "cancelled" }
      ]);

      // Select 1 to 5 random products for this order
      const numItems = faker.number.int({ min: 1, max: 5 });
      let subtotal = 0;
      let totalCost = 0;
      const selectedProducts = faker.helpers.arrayElements(productsList, numItems);
      const itemsList: any[][] = [];

      for (const prod of selectedProducts) {
        const quantity = faker.number.int({ min: 1, max: 3 });
        const itemSubtotal = prod.price * quantity;
        subtotal += itemSubtotal;
        totalCost += prod.cost * quantity;

        itemsList.push([
          faker.string.uuid(),
          orderId,
          prod.id,
          quantity,
          prod.price,
          prod.cost,
          0.00 // item discount
        ]);
      }

      // Apply Coupon
      let discount = 0.00;
      let couponId: string | null = null;
      if (faker.number.float() < 0.25) { // 25% purchase coupon conversion rate
        const coupon = faker.helpers.arrayElement(couponList);
        if (subtotal >= coupon.min) {
          couponId = coupon.id;
          if (coupon.type === "percentage") {
            discount = parseFloat((subtotal * (coupon.value / 100)).toFixed(2));
          } else {
            discount = coupon.value;
          }
        }
      }

      // Tax (8% flat) & Shipping ($15 flat, or free above $75)
      const tax = parseFloat(((subtotal - discount) * 0.08).toFixed(2));
      const shipping = subtotal - discount > 75 ? 0.00 : 15.00;
      const total = parseFloat((subtotal - discount + tax + shipping).toFixed(2));
      
      const shippingAddressId = customerAddressesMap[customer.id] 
        ? faker.helpers.arrayElement(customerAddressesMap[customer.id]) 
        : null;
      
      const payment = faker.helpers.arrayElement(["credit_card", "paypal", "stripe", "apple_pay"]);

      orderRows.push([
        orderId,
        orderNumber,
        customer.id,
        status,
        subtotal,
        discount,
        tax,
        shipping,
        total,
        couponId,
        shippingAddressId,
        shippingAddressId,
        payment,
        orderDate,
        orderDate
      ]);

      orderItemRows.push(...itemsList);

      // Shipments for shipped/delivered orders
      if (status === "shipped" || status === "delivered") {
        const carrier = faker.helpers.arrayElement(["FedEx", "UPS", "USPS", "DHL"]);
        const tracking = `1Z${faker.string.alphanumeric(16).toUpperCase()}`;
        const shippedAt = new Date(orderDate.getTime() + 1000 * 60 * 60 * 24 * faker.number.int({ min: 1, max: 3 })); // 1-3 days later
        const deliveredAt = status === "delivered" ? new Date(shippedAt.getTime() + 1000 * 60 * 60 * 24 * faker.number.int({ min: 2, max: 5 })) : null;
        
        shipmentRows.push([
          faker.string.uuid(),
          orderId,
          carrier,
          tracking,
          status === "delivered" ? "delivered" : "in_transit",
          shippedAt,
          deliveredAt,
          orderDate
        ]);
      }

      // Refunds simulation (5% returned from delivered orders)
      if (status === "delivered" && faker.number.float() < 0.05) {
        const refundAmount = parseFloat((total * faker.number.float({ min: 0.5, max: 1.0 })).toFixed(2)); // partial or full return
        const reason = faker.helpers.arrayElement(["customer_return", "damaged", "wrong_item"]);
        const refundStatus = faker.helpers.arrayElement(["processed", "processed", "processed", "pending"]);
        
        refundRows.push([
          faker.string.uuid(),
          orderId,
          reason,
          refundAmount,
          refundStatus,
          new Date(orderDate.getTime() + 1000 * 60 * 60 * 24 * faker.number.int({ min: 5, max: 14 })) // returned 5-14 days later
        ]);
      }
    }

    await batchInsert("orders", ["id", "order_number", "customer_id", "status", "subtotal_amount", "discount_amount", "tax_amount", "shipping_amount", "total_amount", "coupon_id", "shipping_address_id", "billing_address_id", "payment_provider", "created_at", "updated_at"], orderRows);
    await batchInsert("order_items", ["id", "order_id", "product_id", "quantity", "unit_price", "unit_cost", "discount_amount"], orderItemRows);
    await batchInsert("shipments", ["id", "order_id", "carrier", "tracking_number", "status", "shipped_at", "delivered_at", "created_at"], shipmentRows);
    await batchInsert("refunds", ["id", "order_id", "reason", "amount", "status", "created_at"], refundRows);

    // 7. System Web Events (200,000 click sessions for funnel cohort analyses)
    console.log("🌐 Simulating 200,000 customer sessions and web events...");
    const eventRows: any[][] = [];

    // Session logic: Generate 50,000 unique sessions over the year
    for (let i = 0; i < 50000; i++) {
      const sessionId = faker.string.alphanumeric(20);
      const customer = faker.helpers.arrayElement(customersList);
      
      // Let's decide if this session completes the conversion funnel
      // funnel path: view_item (100%) -> add_to_cart (50%) -> begin_checkout (25%) -> purchase (10%)
      const funnelDepth = weightedRandom<number>([
        { weight: 50, value: 1 },  // only views product
        { weight: 25, value: 2 },  // adds product to cart
        { weight: 15, value: 3 },  // starts checkout
        { weight: 10, value: 4 }   // finishes purchase
      ]);

      const sessionDate = faker.date.between({ from: customer.created_at, to: new Date() });
      
      // Step 1: view_item
      eventRows.push([
        faker.string.uuid(),
        customer.id,
        sessionId,
        "view_item",
        JSON.stringify({ product_id: faker.helpers.arrayElement(productsList).id }),
        sessionDate
      ]);

      if (funnelDepth >= 2) {
        eventRows.push([
          faker.string.uuid(),
          customer.id,
          sessionId,
          "add_to_cart",
          JSON.stringify({ product_id: faker.helpers.arrayElement(productsList).id }),
          new Date(sessionDate.getTime() + 1000 * 60 * faker.number.int({ min: 1, max: 5 }))
        ]);
      }

      if (funnelDepth >= 3) {
        eventRows.push([
          faker.string.uuid(),
          customer.id,
          sessionId,
          "begin_checkout",
          JSON.stringify({ cart_total: faker.commerce.price({ min: 20, max: 300 }) }),
          new Date(sessionDate.getTime() + 1000 * 60 * faker.number.int({ min: 6, max: 10 }))
        ]);
      }

      if (funnelDepth >= 4) {
        eventRows.push([
          faker.string.uuid(),
          customer.id,
          sessionId,
          "purchase",
          JSON.stringify({ order_number: `ORD-${faker.number.int({ min: 1000, max: 9999 })}` }),
          new Date(sessionDate.getTime() + 1000 * 60 * faker.number.int({ min: 11, max: 15 }))
        ]);
      }
    }

    await batchInsert("system_events", ["id", "customer_id", "session_id", "event_type", "payload", "created_at"], eventRows);

    console.log("✨ Seeding process completed successfully!");

  } catch (error) {
    console.error("❌ Seeding failed with error:", error);
  } finally {
    await client.end();
    console.log("🔌 Database connection closed.");
  }
}

run();
