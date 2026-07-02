-- ============================================================================
-- REFRACT AI - ENTERPRISE ECOMMERCE SCHEMA (POSTGRESQL)
-- ============================================================================

-- Enable UUID extension for secure, scalable IDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ────────────────────────────────────────────────────────────────────────────
-- CUSTOM ENUM TYPES
-- ────────────────────────────────────────────────────────────────────────────

CREATE TYPE customer_role AS ENUM ('regular', 'vip', 'corporate');
CREATE TYPE customer_status AS ENUM ('active', 'inactive', 'suspended');
CREATE TYPE product_status AS ENUM ('draft', 'active', 'archived');
CREATE TYPE order_status AS ENUM ('pending', 'paid', 'shipped', 'delivered', 'cancelled', 'refunded');
CREATE TYPE payment_method AS ENUM ('credit_card', 'paypal', 'stripe', 'apple_pay');
CREATE TYPE shipment_status AS ENUM ('pending', 'in_transit', 'out_for_delivery', 'delivered', 'failed', 'returned');
CREATE TYPE refund_reason AS ENUM ('damaged', 'wrong_item', 'customer_return', 'fraud', 'cancelled_order');
CREATE TYPE refund_status AS ENUM ('pending', 'processed', 'rejected');
CREATE TYPE address_type AS ENUM ('shipping', 'billing');
CREATE TYPE discount_type AS ENUM ('percentage', 'fixed_amount');

-- ────────────────────────────────────────────────────────────────────────────
-- TABLES DEFINITION
-- ────────────────────────────────────────────────────────────────────────────

-- 1. Customers Table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    role customer_role DEFAULT 'regular'::customer_role,
    status customer_status DEFAULT 'active'::customer_status,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE -- Soft delete column
);

-- 2. Customer Addresses Table
CREATE TABLE customer_addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
    type address_type NOT NULL,
    street_address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Product Categories Table
CREATE TABLE product_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id INT REFERENCES product_categories(id) ON DELETE SET NULL, -- Hierarchical categories
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Products Table
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(12, 2) NOT NULL CHECK (price >= 0.00),
    cost NUMERIC(12, 2) NOT NULL CHECK (cost >= 0.00), -- Margin tracking
    category_id INT REFERENCES product_categories(id) ON DELETE SET NULL,
    status product_status DEFAULT 'draft'::product_status,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- 5. Product Inventory Table
CREATE TABLE product_inventory (
    product_id UUID PRIMARY KEY REFERENCES products(id) ON DELETE CASCADE,
    quantity_available INT NOT NULL DEFAULT 0 CHECK (quantity_available >= 0),
    low_stock_threshold INT NOT NULL DEFAULT 10 CHECK (low_stock_threshold >= 0),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Coupons Table
CREATE TABLE coupons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) UNIQUE NOT NULL,
    type discount_type NOT NULL,
    value NUMERIC(12, 2) NOT NULL CHECK (value > 0.00),
    min_purchase_amount NUMERIC(12, 2) DEFAULT 0.00 CHECK (min_purchase_amount >= 0.00),
    max_discount_amount NUMERIC(12, 2), -- Cap for percentage discounts
    starts_at TIMESTAMP WITH TIME ZONE NOT NULL,
    ends_at TIMESTAMP WITH TIME ZONE NOT NULL,
    usage_limit INT CHECK (usage_limit > 0),
    usage_count INT NOT NULL DEFAULT 0 CHECK (usage_count >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_coupon_dates CHECK (ends_at > starts_at)
);

-- 7. Shopping Carts Table
CREATE TABLE carts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE, -- Nullable for guest checkouts
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Cart Items Table
CREATE TABLE cart_items (
    cart_id UUID REFERENCES carts(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (cart_id, product_id)
);

-- 9. Orders Table
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number VARCHAR(100) UNIQUE NOT NULL,
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    status order_status DEFAULT 'pending'::order_status,
    
    -- Financial breakdown
    subtotal_amount NUMERIC(12, 2) NOT NULL CHECK (subtotal_amount >= 0.00),
    discount_amount NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (discount_amount >= 0.00),
    tax_amount NUMERIC(12, 2) NOT NULL CHECK (tax_amount >= 0.00),
    shipping_amount NUMERIC(12, 2) NOT NULL CHECK (shipping_amount >= 0.00),
    total_amount NUMERIC(12, 2) NOT NULL CHECK (total_amount >= 0.00),
    
    coupon_id UUID REFERENCES coupons(id) ON DELETE SET NULL,
    shipping_address_id UUID REFERENCES customer_addresses(id) ON DELETE SET NULL,
    billing_address_id UUID REFERENCES customer_addresses(id) ON DELETE SET NULL,
    payment_provider payment_method NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. Order Items Table
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(12, 2) NOT NULL CHECK (unit_price >= 0.00),
    unit_cost NUMERIC(12, 2) NOT NULL CHECK (unit_cost >= 0.00), -- Retain historical product cost for margin queries
    discount_amount NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (discount_amount >= 0.00)
);

-- 11. Shipments Table
CREATE TABLE shipments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    carrier VARCHAR(100) NOT NULL,
    tracking_number VARCHAR(150) UNIQUE,
    status shipment_status DEFAULT 'pending'::shipment_status,
    shipped_at TIMESTAMP WITH TIME ZONE,
    estimated_delivery_at TIMESTAMP WITH TIME ZONE,
    delivered_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 12. Refunds Table
CREATE TABLE refunds (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    reason refund_reason NOT NULL,
    amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0.00),
    status refund_status DEFAULT 'pending'::refund_status,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP WITH TIME ZONE
);

-- 13. System Events Table (For Funnel / Session Analytics)
CREATE TABLE system_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    session_id VARCHAR(150) NOT NULL,
    event_type VARCHAR(100) NOT NULL, -- 'view_item', 'add_to_cart', 'remove_from_cart', 'begin_checkout', 'purchase'
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ────────────────────────────────────────────────────────────────────────────
-- COMPOSITE INDEXES & PERFORMANCE OPTIMIZATIONS
-- ────────────────────────────────────────────────────────────────────────────

-- Fast user lookups
CREATE INDEX idx_customers_email ON customers(email) WHERE deleted_at IS NULL;

-- Fast address queries per customer
CREATE INDEX idx_customer_addresses_lookup ON customer_addresses(customer_id, is_default);

-- Fast catalog lookup
CREATE INDEX idx_products_category_status ON products(category_id, status) WHERE deleted_at IS NULL;
CREATE INDEX idx_products_sku ON products(sku);

-- Fast order timeline lookup for BI dashboards
CREATE INDEX idx_orders_customer_date ON orders(customer_id, created_at);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_orders_status ON orders(status);

-- Join table optimization
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- Funnel session analysis optimization
CREATE INDEX idx_system_events_session_type ON system_events(session_id, event_type);
CREATE INDEX idx_system_events_created_at ON system_events(created_at);

-- ────────────────────────────────────────────────────────────────────────────
-- TRIGGERS FOR UPDATE TIMESTAMP
-- ────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp_customers BEFORE UPDATE ON customers FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_customer_addresses BEFORE UPDATE ON customer_addresses FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_product_categories BEFORE UPDATE ON product_categories FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_products BEFORE UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_orders BEFORE UPDATE ON orders FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_shipments BEFORE UPDATE ON shipments FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- ============================================================================
-- BUSINESS INTELLIGENCE ANALYTICAL VIEWS
-- ============================================================================

-- 1. Daily Sales and Financial Performance View
CREATE OR REPLACE VIEW view_daily_sales_performance AS
SELECT
    DATE(o.created_at) AS order_date,
    COUNT(o.id) AS total_orders,
    SUM(o.total_amount) AS gross_revenue,
    SUM(o.discount_amount) AS total_discounts,
    SUM(o.shipping_amount) AS total_shipping_revenue,
    SUM(oi.quantity) AS total_items_sold,
    SUM(oi.quantity * oi.unit_cost) AS total_cost_of_goods_sold,
    SUM(o.total_amount) - SUM(oi.quantity * oi.unit_cost) AS net_profit,
    ROUND(
        ((SUM(o.total_amount) - SUM(oi.quantity * oi.unit_cost)) / NULLIF(SUM(o.total_amount), 0)) * 100, 
        2
    ) AS profit_margin_percentage
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
WHERE o.status NOT IN ('cancelled', 'refunded')
GROUP BY DATE(o.created_at)
ORDER BY order_date DESC;

-- 2. Customer Cohort Retention Analysis View
CREATE OR REPLACE VIEW view_customer_cohorts AS
WITH user_cohorts AS (
    -- Get user sign up month (the cohort definition)
    SELECT
        id AS customer_id,
        DATE_TRUNC('month', created_at) AS cohort_month
    FROM customers
),
user_orders AS (
    -- Track purchase month relative to signup cohort month
    SELECT
        o.customer_id,
        DATE_TRUNC('month', o.created_at) AS order_month,
        -- Month difference
        EXTRACT(YEAR FROM AGE(DATE_TRUNC('month', o.created_at), uc.cohort_month)) * 12 +
        EXTRACT(MONTH FROM AGE(DATE_TRUNC('month', o.created_at), uc.cohort_month)) AS period_month
    FROM orders o
    JOIN user_cohorts uc ON o.customer_id = uc.customer_id
    WHERE o.status = 'delivered'
)
SELECT
    uc.cohort_month,
    COUNT(DISTINCT uc.customer_id) AS cohort_size,
    uo.period_month,
    COUNT(DISTINCT uo.customer_id) AS active_users,
    ROUND((COUNT(DISTINCT uo.customer_id)::NUMERIC / COUNT(DISTINCT uc.customer_id)::NUMERIC) * 100, 2) AS retention_percentage
FROM user_cohorts uc
LEFT JOIN user_orders uo ON uc.customer_id = uo.customer_id
GROUP BY uc.cohort_month, uo.period_month
ORDER BY uc.cohort_month, uo.period_month;

-- 3. Shopping Funnel Analysis View
CREATE OR REPLACE VIEW view_checkout_funnel AS
WITH session_counts AS (
    SELECT
        COUNT(DISTINCT session_id) AS total_sessions,
        COUNT(DISTINCT CASE WHEN event_type = 'view_item' THEN session_id END) AS view_item_sessions,
        COUNT(DISTINCT CASE WHEN event_type = 'add_to_cart' THEN session_id END) AS cart_add_sessions,
        COUNT(DISTINCT CASE WHEN event_type = 'begin_checkout' THEN session_id END) AS checkout_sessions,
        COUNT(DISTINCT CASE WHEN event_type = 'purchase' THEN session_id END) AS purchase_sessions
    FROM system_events
)
SELECT
    total_sessions,
    view_item_sessions,
    ROUND((view_item_sessions::NUMERIC / total_sessions::NUMERIC) * 100, 2) AS view_item_pct,
    cart_add_sessions,
    ROUND((cart_add_sessions::NUMERIC / view_item_sessions::NUMERIC) * 100, 2) AS cart_add_pct,
    checkout_sessions,
    ROUND((checkout_sessions::NUMERIC / cart_add_sessions::NUMERIC) * 100, 2) AS checkout_pct,
    purchase_sessions,
    ROUND((purchase_sessions::NUMERIC / checkout_sessions::NUMERIC) * 100, 2) AS purchase_pct,
    ROUND((purchase_sessions::NUMERIC / total_sessions::NUMERIC) * 100, 2) AS total_conversion_rate
FROM session_counts;

-- 4. Product Performance Metrics View
CREATE OR REPLACE VIEW view_product_performance AS
SELECT
    p.id AS product_id,
    p.sku,
    p.name AS product_name,
    c.name AS category_name,
    COALESCE(SUM(oi.quantity), 0) AS units_sold,
    COALESCE(SUM(oi.quantity * oi.unit_price), 0.00) AS gross_sales_revenue,
    COALESCE(SUM(oi.quantity * (oi.unit_price - oi.unit_cost)), 0.00) AS product_gross_profit,
    pi.quantity_available AS stock_remaining,
    CASE 
        WHEN pi.quantity_available = 0 THEN 'OUT_OF_STOCK'
        WHEN pi.quantity_available <= pi.low_stock_threshold THEN 'LOW_STOCK'
        ELSE 'IN_STOCK'
    END AS stock_status
FROM products p
LEFT JOIN product_categories c ON p.category_id = c.id
LEFT JOIN order_items oi ON p.id = oi.product_id
LEFT JOIN orders o ON oi.order_id = o.id AND o.status = 'delivered'
LEFT JOIN product_inventory pi ON p.id = pi.product_id
WHERE p.deleted_at IS NULL
GROUP BY p.id, p.sku, p.name, c.name, pi.quantity_available, pi.low_stock_threshold
ORDER BY units_sold DESC;
