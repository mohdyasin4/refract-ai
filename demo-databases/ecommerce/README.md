# Refract AI Demo Database - PostgreSQL Ecommerce

This repository hosts a production-quality, fully normalized PostgreSQL Ecommerce database designed to demonstrate the analytics, visualization, and AI SQL capabilities of Refract AI. 

Rather than serving as a basic CRUD prototype, this database simulates a high-growth retail environment (e.g., similar to Amazon or Shopify) with realistic seasonality, order anomalies, and user behaviour funnels.

---

## 💼 Business Scenario

This database models **AuraCart**, a fictional, mid-market consumer electronics and apparel retailer. 
The data spans from **January 2025 through December 2026**, modeling real-world transactional patterns:
*   **Seasonality & Spikes**: Daily sales trends include seasonal spikes (Summer Sale peaks) and extreme anomalies like Black Friday/Cyber Monday volume surges (400% baseline increases).
*   **Customer Lifecycles**: Customers are segmented into regular, VIP, and corporate tiers, showcasing varying repurchase rates, average order values (AOV), and customer lifetime value (CLV).
*   **Operational Friction**: Includes simulated operational exceptions such as delayed shipments, out-of-stock thresholds, refund reasons (damaged, wrong item, buyer's remorse), and high-risk fraud cancellations.
*   **Web Traffic Logs**: Tracks customer clickstream sessions (item view -> cart addition -> begin checkout -> purchase) to model funnel drop-offs and cohort retention.

---

## 📊 Business Intelligence Capabilities Demonstrated

This schema is optimized for testing advanced relational SQL and BI reporting structures:

| BI Capability | Implementation Example | Target Analytical View / Query |
| :--- | :--- | :--- |
| **KPI Dashboards** | Gross revenue, discounts, net profit, margins | `view_daily_sales_performance` |
| **Cohort Analysis** | User retention by signup month over 12-24 periods | `view_customer_cohorts` |
| **Funnel Analysis** | Conversion rates across web browsing sessions | `view_checkout_funnel` |
| **Window Functions** | Top 3 best-selling products per category | Windowed ranking (`DENSE_RANK()`) |
| **Time Series** | Year-over-Year (YoY) and Month-over-Month (MoM) growth | Lag and lead intervals on order dates |
| **Drill-down Analytics** | Location hierarchies: Country → State → City | Aggregated address spatial lookup |
| **Forecasting** | Linear historical sales trend lines | Aggregated weekly revenue intervals |
| **AI SQL Generation** | Processing complex joins, aggregates, and enums | Natural language schema optimization |

---

## 📂 Folder Structure

```text
demo-databases/
└── ecommerce/
    ├── README.md               # Main developer guide and capabilities map
    ├── docker-compose.yml      # Port mappings, persistent volumes, init config
    ├── .env                    # Active local environment variables
    ├── .env.example            # Environment variables template
    ├── schema.sql              # Database DDL: Tables, enums, indexes, and views
    ├── seed.ts                 # Seeder script populating 100K orders & 200K events
    ├── package.json            # Node.js seeder dependencies and run scripts
    └── docs/
        ├── business-overview.md # Detailed retail model and KPI dictionary
        ├── erd.md              # Entity Relationship Diagram and descriptions
        ├── sample-dashboards.md # Mock configs for executive and operations dashboards
        ├── ai-prompts.md       # 100 AI queries and natural language triggers
        └── sql-examples.md     # 50 production-grade SQL analytical scripts
```

---

## 🚀 Quick Start

Ensure **Docker Desktop** and **Node.js** (v18+) are running locally.

1.  **Configure Environment**:
    ```bash
    cp .env.example .env
    ```
2.  **Start Database Container**:
    ```bash
    docker compose up -d
    ```
3.  **Install Seeder Dependencies**:
    ```bash
    npm install
    ```
4.  **Run Seeder Script**:
    ```bash
    npm run seed
    ```

---

## 🔌 Connection Guidelines

### Connecting via pgAdmin / DBeaver
*   **Host**: `localhost`
*   **Port**: `5433`  *(Note: Port 5432 is commonly occupied by a local PostgreSQL installation; 5433 is used here to avoid port conflicts).*
*   **Database**: `refract_ecommerce_demo`
*   **Username**: `refract_admin`
*   **Password**: `refract_secure_password_2026`

### Connecting inside Refract AI
Select the **PostgreSQL** source in the Refract connection settings UI:
*   **Host**: `localhost`
*   **Port**: `5433`
*   **Database**: `refract_ecommerce_demo`
*   **Username**: `refract_admin`
*   **Password**: `refract_secure_password_2026`
*   **SSL**: `Disabled` (Local sandbox)

---

## 📈 Dataset Statistics

Following successful seeding, the database contains:
*   **Customers**: 10,000 (regular, VIP, and corporate)
*   **Addresses**: ~15,000 (shipping and billing locations)
*   **Products**: 5,000 (distributed across 7 categories with pricing and COGS)
*   **Inventory**: 5,000 records (mapping stock count and warning thresholds)
*   **Coupons**: Active promo codes (WELCOME10, SUMMER25, etc.)
*   **Orders**: 100,000 (dating from Jan 2025 to present day)
*   **Order Items**: ~300,000 product line items
*   **Shipments**: ~92,000 records tracking carrier, status, and transit dates
*   **Refunds**: ~4,600 logs tracking wrong item, damaged, or returns
*   **Web events**: 200,000 logs tracking clickstream conversion funnels

---

## 🛠 Troubleshooting & Operations

### Useful Docker CLI Commands
*   **Stream Container Logs**:
    ```bash
    docker compose logs -f
    ```
*   **Stop the Container**:
    ```bash
    docker compose down
    ```
*   **Stop Container and Wipe Data Volume**:
    ```bash
    docker compose down -v
    ```
    *(Useful for resetting the database and starting a fresh seeder).*

---

## 💡 Example AI Prompts (Test these in Refract AI)
*   "Show monthly gross revenue and profit margin percentage for apparel products."
*   "What are the top 20 VIP customers by total purchase volume?"
*   "Show the conversion drop-off percentages at each stage of the checkout funnel."
*   "List the SKUs that have never generated a sale."
*   "Rank product categories by total units sold using window functions."
