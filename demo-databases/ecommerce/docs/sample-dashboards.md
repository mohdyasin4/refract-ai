# AuraCart - Sample Dashboards Guide

This document lists the recommended BI dashboard layouts, widgets, and metric configurations that can be built in Refract AI using this database.

---

## 👔 1. Executive Operations Dashboard
*   **Target Audience**: C-Suite, VP of Sales, Operations Directors
*   **Objective**: High-level corporate performance, profit margins, and sales health.

| Widget Title | Visualisation Type | Underlying Data Source |
| :--- | :---: | :--- |
| **Gross Revenue (YTD)** | Metric Card | `SELECT SUM(total_amount) FROM orders WHERE status != 'cancelled';` |
| **Net Profit (YTD)** | Metric Card | `SELECT SUM(net_profit) FROM view_daily_sales_performance;` |
| **Corporate Profit Margin (%)** | Metric Card | `SELECT ROUND((SUM(net_profit) / SUM(gross_revenue)) * 100, 2) FROM view_daily_sales_performance;` |
| **Daily Sales Performance** | Line Chart | X-Axis: `order_date`, Y-Axis: `gross_revenue`, `net_profit` (using `view_daily_sales_performance`) |
| **Revenue by Customer Tier** | Pie/Donut Chart | Group `orders.total_amount` by `customers.role` |
| **Top 10 Products by Gross Profit** | Horizontal Bar | X-Axis: `product_gross_profit`, Y-Axis: `product_name` (using `view_product_performance`) |

---

## 📈 2. Marketing & Conversion Funnel Dashboard
*   **Target Audience**: Growth Marketers, Product Managers, CRO Specialists
*   **Objective**: Analyze web traffic acquisition, shopping cart abandonments, and campaign performance.

| Widget Title | Visualisation Type | Underlying Data Source |
| :--- | :---: | :--- |
| **Total Web Sessions** | Metric Card | `SELECT COUNT(DISTINCT session_id) FROM system_events;` |
| **Overall Checkout Conversion (%)** | Metric Card | `SELECT total_conversion_rate FROM view_checkout_funnel;` |
| **User Checkout Funnel** | Funnel/Bar Chart | X-Axis: Funnel Step, Y-Axis: `view_item_sessions`, `cart_add_sessions`, `checkout_sessions`, `purchase_sessions` (from `view_checkout_funnel`) |
| **Coupon Code Performance** | Table | Lists coupon codes, usage count, total discount given, and gross revenue generated. |
| **Cart Abandonment Trend** | Area Chart | Tracking abandoned sessions daily (sessions with `add_to_cart` but no `purchase` event). |

---

## 👥 3. Customer Retention & Cohort Dashboard
*   **Target Audience**: Customer Success Managers, Product Leads
*   **Objective**: Track customer lifetime value (CLV) and cohort retention trends over time.

| Widget Title | Visualisation Type | Underlying Data Source |
| :--- | :---: | :--- |
| **VIP Customer Count** | Metric Card | `SELECT COUNT(*) FROM customers WHERE role = 'vip' AND status = 'active';` |
| **Average Customer Lifetime Value**| Metric Card | `SELECT AVG(clv) FROM (SELECT SUM(total_amount) AS clv FROM orders GROUP BY customer_id) sub;` |
| **Cohort Retention Heatmap** | Heatmap Grid | X-Axis: `period_month`, Y-Axis: `cohort_month`, Cell: `retention_percentage` (from `view_customer_cohorts`) |
| **VIP vs Regular Repurchase Rate**| Bar Chart | Compares repeat order percentages grouped by customer roles. |

---

## 📦 4. Supply Chain & Inventory Dashboard
*   **Target Audience**: Logistics Leads, Warehouse Managers
*   **Objective**: Track shipment fulfillment times, low stock warnings, and refund rates.

| Widget Title | Visualisation Type | Underlying Data Source |
| :--- | :---: | :--- |
| **Low Stock SKUs Alert** | Metric Card | `SELECT COUNT(*) FROM product_inventory WHERE quantity_available <= low_stock_threshold;` |
| **Average Delivery Time (Days)** | Metric Card | `SELECT ROUND(AVG(EXTRACT(DAY FROM (delivered_at - shipped_at))), 1) FROM shipments WHERE status = 'delivered';` |
| **Stock Out Risk Details** | Table | Shows Product Name, SKU, Category, Stock Remaining, and Threshold (from `view_product_performance` where status is `LOW_STOCK` or `OUT_OF_STOCK`). |
| **Carrier Delay Comparisons** | Bar Chart | Group shipments delayed past estimated dates by `carrier`. |
| **Refund Reason Distribution** | Pie Chart | Group refunds volume by `reason` (damaged, wrong item, buyer's remorse). |
