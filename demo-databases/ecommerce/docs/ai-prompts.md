# AuraCart - 100 Chart-Friendly AI Prompts for Refract AI

This list contains 100 natural language queries structured specifically to test Refract AI's SQL generation, schema explorer, and automated charting features.

---

## 📊 How Refract AI Charts Data
To render a chart, the generated SQL must return a dataset containing:
- **Dimension (X-Axis)**: A categorical column (`varchar`, `enum`) or temporal column (`date`, `timestamp`).
- **Metric (Y-Axis / Measure)**: One or more numeric columns (`int`, `decimal`, `numeric`) that can be plotted.

---

## 📈 Financial & Revenue Prompts (1-20)
1.  Show total gross revenue for the current year. `[KPI Card]`
2.  What is the net profit margin percentage overall? `[KPI Card]`
3.  List daily sales and total discounts applied for the last 30 days. `[Line Chart]`
4.  Show monthly gross revenue, total cost of goods sold, and net profit for 2025. `[Line Chart]`
5.  Show the average gross profit margin percentage grouped by product category. `[Bar Chart]`
6.  Compare total shipping fee collected against total order tax by month. `[Line Chart]`
7.  List total sales discounts applied grouped by coupon code. `[Bar Chart]`
8.  Show the count of orders over $500 grouped by payment provider. `[Donut Chart]`
9.  Show daily net profit trends for the 'Electronics' category. `[Line Chart]`
10. Find the total tax collected in the state of California during 2025. `[KPI Card]`
11. Show our weekly revenue growth rate over the last quarter. `[Line Chart]`
12. Compare total gross revenue between regular, VIP, and corporate customers. `[Bar Chart]`
13. Show total refund amounts grouped by payment provider. `[Donut Chart]`
14. What are the total sales, discounts, and profits for each month in 2026? `[Line Chart]`
15. Calculate the average price-to-cost markup ratio per category. `[Bar Chart]`
16. Find the top 5 states by total net sales revenue. `[Bar Chart]`
17. Show total order cancellations and the corresponding revenue lost. `[KPI Card]`
18. List monthly sales totals for products with a unit cost greater than $100. `[Line Chart]`
19. Display the daily sales contribution of corporate customers. `[Line Chart]`
20. Calculate our total gross sales before discounts and tax for last week. `[KPI Card]`

---

## 👥 Customer CRM & Segmentation Prompts (21-40)
21. Find the top 10 VIP customers by lifetime transaction volume. `[Bar Chart]`
22. Show the average order value (AOV) grouped by customer role. `[Bar Chart]`
23. Find the count of customers who signed up in 2025 but have never placed an order. `[KPI Card]`
24. List customers whose email domain ends with ".edu" and their total orders count. `[Bar Chart]`
25. Show active vs suspended customer counts by account type. `[Bar Chart]`
26. Which customer has placed the highest number of separate orders? `[KPI Card]`
27. List the count of customers grouped by shipping address city. `[Bar Chart]`
28. Find the count of VIP accounts that have not made a purchase in the last 6 months. `[KPI Card]`
29. Show the average number of days between signup and first order. `[KPI Card]`
30. Show customer counts grouped by the number of shipping addresses saved. `[Bar Chart]`
31. How many corporate clients are active in Texas? `[KPI Card]`
32. What is the average lifetime value (LTV) of a VIP customer? `[KPI Card]`
33. Show the total number of regular customers who have upgraded to VIP orders. `[KPI Card]`
34. Find customers who have applied the coupon code "WELCOME10" more than once. `[Bar Chart]`
35. What is the state-by-state distribution of our customer database? `[Donut Chart]`
36. Show the most popular payment provider selected by VIP customers. `[Donut Chart]`
37. Identify customer counts sharing a phone number. `[KPI Card]`
38. Which customers have requested refunds exceeding $500 in total value? `[Bar Chart]`
39. Find corporate customers whose average transaction size is above $1,000. `[Bar Chart]`
40. Show the monthly trend of new customer sign-ups over the past year. `[Line Chart]`

---

## 🛍 Product & Inventory Prompts (41-60)
41. List the top 10 best-selling products by total units sold. `[Bar Chart]`
42. Which products currently have a stock level below their warning threshold? `[Bar Chart]`
43. List product categories that have never generated a single order. `[Bar Chart]`
44. Show product category names and the total number of active SKUs in each. `[Bar Chart]`
45. Find the product with the highest gross profit contribution. `[KPI Card]`
46. What is the average price of products in the 'Home & Living' category? `[KPI Card]`
47. List all products in 'Sports & Outdoors' sorted by price descending. `[Bar Chart]`
48. Show the total remaining stock and retail value of all active products. `[KPI Card]`
49. Which products have been added to shopping carts but never purchased? `[Bar Chart]`
50. What is the inventory turnover rate for electronics products? `[KPI Card]`
51. Find the top 3 best-selling products in each category. `[Bar Chart]`
52. List the SKUs of products that have been soft-deleted. `[Bar Chart]`
53. Show the price distribution (min, max, average) for all apparel items. `[Bar Chart]`
54. Which products are currently draft status but have active inventory? `[Bar Chart]`
55. Show inventory levels for products that have a refund rate higher than 10%. `[Bar Chart]`
56. Find the SKU with the lowest stock remaining that is currently in 'active' status. `[KPI Card]`
57. Which product categories contribute to over 40% of overall sales volume? `[Donut Chart]`
58. List products that have a cost-to-price margin of less than 20%. `[Bar Chart]`
59. Display products with descriptions containing the word "leather". `[Bar Chart]`
60. Show the total quantity of inventory units grouped by category. `[Donut Chart]`

---

## 🗺 Funnels, Cohorts & Session Prompts (61-80)
61. What is the conversion rate from item view to purchase across all sessions? `[KPI Card]`
62. How many shopping sessions started but stopped before adding items to a cart? `[KPI Card]`
63. Show the checkout funnel conversion counts grouped by event type. `[Bar Chart]`
64. Show customer retention percentages for the January 2025 cohort. `[Line Chart]`
65. Find the average session duration for users who completed a purchase. `[KPI Card]`
66. Which day of the week has the highest checkout conversion rates? `[Bar Chart]`
67. Show monthly cohort size and active users count for period 3. `[Line Chart]`
68. Compare funnel conversion rates between regular and VIP sessions. `[Bar Chart]`
69. What is the most common exit event type in abandoned checkouts? `[Donut Chart]`
70. Display the count of distinct sessions that triggered the 'begin_checkout' event. `[KPI Card]`
71. Show retention rates of users who applied coupon codes during signup. `[Line Chart]`
72. List sessions that viewed more than 10 products without purchasing. `[Bar Chart]`
73. Calculate the conversion rate for sessions utilizing mobile payment gateways. `[KPI Card]`
74. How does the July 2025 signup cohort perform in customer retention by month 6? `[Line Chart]`
75. Compare the cohort sizes of customers who joined in Q1 vs Q2 of 2025. `[Bar Chart]`
76. Show the daily count of sessions that triggered 'add_to_cart' events. `[Line Chart]`
77. List the top 5 exit products where users abandoned their cart view. `[Bar Chart]`
78. What percentage of users return to buy within 30 days of their first session? `[KPI Card]`
79. What is the ratio of guest checkout sessions to registered customer purchases? `[KPI Card]`
80. Chart monthly active users (MAU) based on clickstream event logs. `[Line Chart]`

---

## 📦 Fulfillment, Shipping & Return Prompts (81-100)
81. What is our average delivery transit time in days? `[KPI Card]`
82. Show the percentage of shipments that were delivered late. `[KPI Card]`
83. Which shipping carrier has the highest count of delayed deliveries? `[Bar Chart]`
84. Find the total cost of refunds processed for damaged items. `[KPI Card]`
85. List orders that are currently in 'shipped' status but have no tracking number. `[Bar Chart]`
86. Show the total count of returns grouped by refund reason. `[Donut Chart]`
87. What is the refund rate percentage for the Electronics category? `[KPI Card]`
88. Compare average transit times (in days) between UPS, FedEx, and DHL. `[Bar Chart]`
89. How many refunds are currently in 'pending' status? `[KPI Card]`
90. Show the monthly trend of order returns compared to order volume. `[Line Chart]`
91. Which states have the highest shipping delay rates? `[Bar Chart]`
92. List orders where the shipping address state is different from the billing state. `[Bar Chart]`
93. What is the total revenue returned to customers due to fraud cancellations? `[KPI Card]`
94. Show the count of shipments delivered within 48 hours of order placement. `[KPI Card]`
95. Find orders where shipment failed and tracking status is 'failed'. `[Bar Chart]`
96. Display carrier performance metrics: average, min, and max delivery days. `[Bar Chart]`
97. List products that have been refunded more than 5 times due to defects. `[Bar Chart]`
98. What is the ratio of shipping cost to total order value? `[KPI Card]`
99. Show the daily count of processed refunds for last month. `[Line Chart]`
100. Calculate the total cost savings of order items that were cancelled before shipping. `[KPI Card]`
