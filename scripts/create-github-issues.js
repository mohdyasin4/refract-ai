// scripts/create-github-issues.js
const https = require("https");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const OWNER = "mohdyasin4";
const REPO = "refract-ai";

const issues = [
  {
    title: "[Sprint 1] Purge Unused and Dead React Files",
    labels: ["tech-debt", "cleanup"],
    body: `### Problem Statement
The codebase contains duplicate versions of heavy components (AI panels and SQL editors) that were copied and renamed, leading to bloated bundle sizes and search indexes.

### Acceptance Criteria
- Delete \`app/dashboard/_components/AISidePanelFixed.tsx\`
- Delete \`app/dashboard/_components/AISidePanelNew.tsx\`
- Delete \`app/dashboard/_components/AISidePanelOld.tsx\`
- Delete \`app/dashboard/_components/ProfessionalSQLEditor.tsx\`
- Ensure compilation (\`npm run build\`) still succeeds.

### Technical Notes
Verify imports via global search before deletion.

**Priority**: P0
**Size**: S
**Epic**: EP-04: Code Quality, Type Safety, & DX`,
  },
  {
    title: "[Sprint 1] Centralize Server-Side Supabase Client Instantiation",
    labels: ["refactor", "database", "dry"],
    body: `### Problem Statement
Supabase server client creation (\`createServerClient\`) is copy-pasted inline with identical cookie getter/setter logic in 10 separate backend routes.

### Acceptance Criteria
- Create \`lib/supabaseServer.ts\` exporting a default helper function.
- Replace inline client creation blocks in \`userUpdate.ts\`, \`userCreate.ts\`, \`isAuthorized.ts\`, \`/api/profile/update\`, and \`/api/profile/image/upload\`.

**Priority**: P0
**Size**: M
**Epic**: EP-04: Code Quality, Type Safety, & DX`,
  },
  {
    title: "[Sprint 1] Fix Next.js SSR Window Reference Crash in textToSpeech.ts",
    labels: ["bug", "ux"],
    body: `### Problem Statement
Server-side rendering fails because \`isSpeechSynthesisSupported()\` references the browser-only \`window\` object globally during compile/SSR.

### Acceptance Criteria
- Add \`typeof window !== 'undefined'\` guard before accessing \`window.speechSynthesis\`.

**Priority**: P0
**Size**: XS
**Epic**: EP-01: Workspace & Auth Stabilization`,
  },
  {
    title: "[Sprint 2] Add Custom Database Connection Port Configuration",
    labels: ["bug", "database", "ux"],
    body: `### Problem Statement
Postgres/MySQL clients default to standard ports, preventing connection to Docker, custom network tunnels, or cloud DB architectures on non-standard ports.

### Acceptance Criteria
- Add \`port Int?\` column to \`database_connections\` in \`schema.prisma\`.
- Update \`DatabaseConfig\` in \`utils/databaseUtils.ts\` to support port variable mapping.
- Render numeric Port input in \`DbDetailsForm.tsx\`, defaulting to 5432/3306.

**Priority**: P0
**Size**: S
**Epic**: EP-02: Core Query & SQL Engine`,
  },
  {
    title: "[Sprint 2] Implement 'Test Connection' API Endpoint and Form Validation",
    labels: ["enhancement", "database", "ux"],
    body: `### Problem Statement
Saving invalid database credentials fails silently, showing empty schemas and confusing users.

### Acceptance Criteria
- Create API endpoint \`/api/database/test-connection\`.
- Add a "Test Connection" button to \`SetupDatabaseDialog.tsx\` with success/error toast feeds.

**Priority**: P1
**Size**: M
**Epic**: EP-02: Core Query & Engine`,
  },
  {
    title: "[Sprint 3] Enforce Strict Public Schema Scope for Table Harvesting",
    labels: ["bug", "database"],
    body: `### Problem Statement
Database metadata queries harvest duplicate tables and columns if matching tables exist in schemas other than 'public'.

### Acceptance Criteria
- Add \`AND table_schema = 'public'\` to postgres metadata queries in \`utils/databaseUtils.ts\`.

**Priority**: P1
**Size**: XS
**Epic**: EP-02: Core Query & Engine`,
  },
  {
    title: "[Sprint 4] Consolidate Monaco SQL Editor Variants",
    labels: ["refactor", "ux", "dry"],
    body: `### Problem Statement
Multiple active editors duplicate autocomplete hooks, cursor height, and Monaco integrations.

### Acceptance Criteria
- Build a unified \`<SQLEditor />\` and replace instances of \`SmartSQLEditor\`, \`EnhancedSQLEditor\`, and \`SqlEditor\`.

**Priority**: P1
**Size**: L
**Epic**: EP-02: Core Query & Engine`,
  },
  {
    title: "[Sprint 5] API Key Environment Integration & Model Update",
    labels: ["bug", "ai", "security"],
    body: `### Problem Statement
Hardcoded API keys prevent developer environment settings, and experimental models block requests with 429 zero-quota errors.

### Acceptance Criteria
- Read key from \`process.env.GEMINI_API_KEY\`.
- Switch model to production-stable \`gemini-1.5-flash\` or \`gemini-flash-latest\`.

**Priority**: P0
**Size**: S
**Epic**: EP-02: Core Query & Engine`,
  },
  {
    title: "[Sprint 6] Move Database Details Fetching Prior to Query Transformation",
    labels: ["bug", "database"],
    body: `### Problem Statement
Query transformation helper is called before database connection details are loaded, causing query dialect quoting errors.

### Acceptance Criteria
- Reposition connection metadata load ahead of query transformations inside the datasets API route.

**Priority**: P0
**Size**: XS
**Epic**: EP-02: Core Query & Engine`,
  },
  {
    title: "[Sprint 7] Resolve PostgreSQL String-Encoded BigInt Auto-Charting",
    labels: ["bug", "ux", "performance"],
    body: `### Problem Statement
Postgres driver returns counts/bigints as strings (e.g. "893"). Auto-charting strictly checks \`typeof row[col] === "number"\`, filtering out valid metrics.

### Acceptance Criteria
- Update \`determineAxes\` and \`transformChartData\` in \`ResultPage.tsx\` to support parsed numeric checks.

**Priority**: P0
**Size**: S
**Epic**: EP-03: BI Visualization & Dashboard Experience`,
  },
  {
    title: "[Sprint 7] Implement Aggregate Column Type-Safety Dropdown Constraints",
    labels: ["bug", "ux"],
    body: `### Problem Statement
Running math aggregations like SUM/AVG on date/time fields triggers uncaught Postgres database driver failures.

### Acceptance Criteria
- Whitelist numeric columns for AVG/SUM operations inside the summarize side panel.

**Priority**: P0
**Size**: S
**Epic**: EP-03: BI Visualization & Dashboard Experience`,
  },
];

function createIssue(token, issue) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      title: issue.title,
      body: issue.body,
      labels: issue.labels,
    });

    const options = {
      hostname: "api.github.com",
      port: 443,
      path: `/repos/${OWNER}/${REPO}/issues`,
      method: "POST",
      headers: {
        "User-Agent": "Refract-AI-Backlog-Script",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Content-Length": data.length,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    };

    const req = https.request(options, (res) => {
      let responseBody = "";
      res.on("data", (chunk) => {
        responseBody += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 201) {
          try {
            const parsed = JSON.parse(responseBody);
            console.log(`✅ Created: "${issue.title}" -> ${parsed.html_url}`);
            resolve();
          } catch (e) {
            resolve();
          }
        } else {
          console.error(`❌ Failed: "${issue.title}" (Status ${res.statusCode})`);
          console.error(`Response: ${responseBody}`);
          resolve();
        }
      });
    });

    req.on("error", (error) => {
      console.error(`Error creating issue "${issue.title}":`, error);
      resolve();
    });

    req.write(data);
    req.end();
  });
}

rl.question("Please paste your GitHub Personal Access Token (PAT): ", async (token) => {
  const cleanToken = token.trim();
  if (!cleanToken) {
    console.error("Token cannot be empty.");
    rl.close();
    process.exit(1);
  }

  console.log(`\n🚀 Starting issue generation for ${OWNER}/${REPO}...\n`);
  for (const issue of issues) {
    await createIssue(cleanToken, issue);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log("\n🎉 Issue generation completed!");
  rl.close();
});
