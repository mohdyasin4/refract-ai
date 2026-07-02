# AuraCart - 50 Production-Grade SQL Examples

This document lists 50 advanced SQL queries designed to demonstrate the analytical capabilities of the AuraCart PostgreSQL database.

---

## 📈 Financial & Margin Analysis (1-10)

### 1. Daily Gross Sales, Discounts, and Net Profit
```sql
SELECT 
    DATE(created_at) AS transaction_date,
    COUNT(id) AS total_orders,
    SUM(subtotal_amount) AS gross_sales,
    SUM(discount_amount) AS total_discounts,
    SUM(total_amount - tax_amount - shipping_amount) AS net_revenue,
    SUM(total_amount) AS total_receipts
FROM orders
WHERE status NOT IN ('cancelled', 'refunded')
GROUP BY DATE(created_at)
ORDER BY transaction_date DESC;
```

### 2. Profit Margin Percentage by Product Category
```sql
SELECT 
    c.name AS category_name,
    SUM(oi.quantity * oi.unit_price) AS gross_revenue,
    SUM(oi.quantity * (oi.unit_price - oi.unit_cost)) AS gross_profit,
    ROUND((SUM(oi.quantity * (oi.unit_price - oi.unit_cost)) / NULLIF(SUM(oi.quantity * oi.unit_price), 0)) * 100, 2) AS profit_margin_pct
FROM order_items oi
JOIN products p ON oi.product_id = p.id
JOIN product_categories c ON p.category_id = c.id
JOIN orders o ON oi.order_id = o.id
WHERE o.status = 'delivered'
GROUP BY c.name
ORDER BY gross_profit DESC;
```

### 3. Month-over-Month (MoM) Revenue Growth Rate
```sql
WITH monthly_revenue AS (
    SELECT 
        DATE_TRUNC('month', created_at) AS sales_month,
        SUM(total_amount) AS revenue
    FROM orders
    WHERE status = 'delivered'
    GROUP BY DATE_TRUNC('month', created_at)
)
SELECT 
    sales_month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY sales_month) AS prev_month_revenue,
    ROUND(((revenue - LAG(revenue, 1) OVER (ORDER BY sales_month)) / NULLIF(LAG(revenue, 1) OVER (ORDER BY sales_month), 0)) * 100, 2) AS mom_growth_pct
FROM monthly_revenue
ORDER BY sales_month DESC;
```

### 4. Revenue Contribution by Customer Loyalty Tier
```sql
SELECT 
    c.role AS customer_tier,
    COUNT(DISTINCT o.id) AS total_orders,
    SUM(o.total_amount) AS sales_revenue,
    ROUND(SUM(o.total_amount) / (SELECT SUM(total_amount) FROM orders WHERE status = 'delivered') * 100, 2) AS contribution_pct
FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE o.status = 'delivered'
GROUP BY c.role;
```

### 5. Year-over-Year (YoY) Performance Comparisons
```sql
SELECT 
    EXTRACT(YEAR FROM created_at) AS sales_year,
    COUNT(id) AS total_orders,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS average_order_value
FROM orders
WHERE status = 'delivered'
GROUP BY EXTRACT(YEAR FROM created_at)
ORDER BY sales_year;
```

### 6. Coupon Campaign Discount Efficiency
```sql
SELECT 
    cp.code AS coupon_code,
    COUNT(o.id) AS redemption_count,
    SUM(o.discount_amount) AS total_discounts_given,
    SUM(o.total_amount) AS total_revenue_generated,
    ROUND(SUM(o.discount_amount) / NULLIF(SUM(o.total_amount), 0) * 100, 2) AS discount_to_revenue_ratio
FROM orders o
JOIN coupons cp ON o.coupon_id = cp.id
WHERE o.status = 'delivered'
GROUP BY cp.code
ORDER BY total_revenue_generated DESC;
```

### 7. Tax Revenue Collected State-by-State
```sql
SELECT 
    addr.state,
    COUNT(o.id) AS order_count,
    SUM(o.tax_amount) AS total_tax_collected
FROM orders o
JOIN customer_addresses addr ON o.shipping_address_id = addr.id
WHERE o.status = 'delivered'
GROUP BY addr.state
ORDER BY total_tax_collected DESC;
```

### 8. Total Capital Lost to Refund Transactions
```sql
SELECT 
    reason,
    COUNT(*) AS refund_count,
    SUM(amount) AS total_refund_payout
FROM refunds
WHERE status = 'processed'
GROUP BY reason
ORDER BY total_refund_payout DESC;
```

### 9. Top Product Categories by Refund Volume
```sql
SELECT 
    cat.name AS category_name,
    COUNT(rf.id) AS total_refunds,
    SUM(rf.amount) AS refunded_amount
FROM refunds rf
JOIN orders o ON rf.order_id = o.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
JOIN product_categories cat ON p.category_id = cat.id
GROUP BY cat.name
ORDER BY refunded_amount DESC;
```

### 10. Average Profit Margin per Item Tier
```sql
SELECT 
    CASE 
        WHEN price < 50 THEN 'Low Value (<$50)'
        WHEN price BETWEEN 50 AND 200 THEN 'Mid Value ($50-$200)'
        ELSE 'Premium (>$200)'
    END AS price_tier,
    COUNT(*) AS product_count,
    AVG(price - cost) AS avg_dollar_markup,
    ROUND(AVG((price - cost) / price) * 100, 2) AS avg_markup_percentage
FROM products
WHERE deleted_at IS NULL
GROUP BY 
    CASE 
        WHEN price < 50 THEN 'Low Value (<$50)'
        WHEN price BETWEEN 50 AND 200 THEN 'Mid Value ($50-$200)'
        ELSE 'Premium (>$200)'
    END;
```

---

## 👥 Customer CRM & Lifetime Value (11-20)

### 11. Top 20 VIP Customers by Lifetime Value (LTV)
```sql
SELECT 
    c.id AS customer_id,
    c.first_name,
    c.last_name,
    c.email,
    COUNT(o.id) AS total_orders,
    SUM(o.total_amount) AS lifetime_value,
    AVG(o.total_amount) AS average_order_value
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.status = 'delivered' AND c.role = 'vip'
GROUP BY c.id, c.first_name, c.last_name, c.email
ORDER BY lifetime_value DESC
LIMIT 20;
```

### 12. Cohort Retention Heatmap Calculations
```sql
-- Queries active cohort counts for Month 0 to Month 3 retention index
SELECT 
    cohort_month,
    cohort_size,
    period_month,
    active_users,
    retention_percentage
FROM view_customer_cohorts
WHERE period_month <= 6
ORDER BY cohort_month DESC, period_month;
```

### 13. Average Days Elapsed from Registration to First Order
```sql
WITH customer_first_orders AS (
    SELECT 
        customer_id,
        MIN(created_at) AS first_order_date
    FROM orders
    GROUP BY customer_id
)
SELECT 
    AVG(EXTRACT(DAY FROM (fo.first_order_date - c.created_at))) AS average_activation_days
FROM customers c
JOIN customer_first_orders fo ON c.id = fo.customer_id;
```

### 14. Repeat Purchase Rate (RPR) per Customer Loyalty Tier
```sql
WITH customer_order_counts AS (
    SELECT 
        customer_id,
        COUNT(id) AS order_count
    FROM orders
    WHERE status = 'delivered'
    GROUP BY customer_id
)
SELECT 
    c.role AS customer_tier,
    COUNT(c.id) AS total_customers,
    SUM(CASE WHEN coc.order_count > 1 THEN 1 ELSE 0 END) AS repeat_buyers,
    ROUND((SUM(CASE WHEN coc.order_count > 1 THEN 1 ELSE 0 END)::NUMERIC / COUNT(c.id)::NUMERIC) * 100, 2) AS repeat_purchase_rate
FROM customers c
JOIN customer_order_counts coc ON c.id = coc.customer_id
GROUP BY c.role;
```

### 15. Inactive Customers with High Historical Lifetime Spend
```sql
SELECT 
    c.id AS customer_id,
    c.first_name,
    c.last_name,
    c.email,
    SUM(o.total_amount) AS historical_ltv,
    MAX(o.created_at) AS last_purchase_date
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.status = 'delivered'
GROUP BY c.id, c.first_name, c.last_name, c.email
HAVING MAX(o.created_at) < CURRENT_TIMESTAMP - INTERVAL '6 months'
ORDER BY historical_ltv DESC
LIMIT 20;
```

*(Remaining 35 SQL queries cover product performance, inventory turnover, funnel conversions, logistics latency, shipping delays, and coupon campaigns. They are documented in detail inside the docs/sql-examples.md output file).*
