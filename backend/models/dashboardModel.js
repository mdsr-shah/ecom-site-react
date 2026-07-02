const pool = require("../config/db");

const getDashboardStats = async () => {

    const products = await pool.query(`
        SELECT COUNT(*) FROM products
    `);

    const orders = await pool.query(`
        SELECT COUNT(*) FROM orders
    `);

    const customers = await pool.query(`
        SELECT COUNT(*) FROM users
        WHERE role='customer'
    `);

    const revenue = await pool.query(`
        SELECT COALESCE(SUM(total_amount),0)
        FROM orders
    `);

    const recentOrders = await pool.query(`
        SELECT

        orders.order_id,
        users.full_name,
        orders.total_amount,
        orders.order_status,
        orders.order_date

        FROM orders

        JOIN users
        ON users.user_id=orders.user_id

        ORDER BY orders.order_date DESC

        LIMIT 5
    `);

    const lowStock = await pool.query(`
        SELECT *

        FROM products

        ORDER BY stock ASC

        LIMIT 5
    `);

    return {

        totalProducts:products.rows[0].count,

        totalOrders:orders.rows[0].count,

        totalCustomers:customers.rows[0].count,

        totalRevenue:revenue.rows[0].coalesce,

        recentOrders:recentOrders.rows,

        lowStock:lowStock.rows

    };

};

module.exports={

getDashboardStats

};