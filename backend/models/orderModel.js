const pool = require("../config/db");

const getAllOrders = async () => {
  const result = await pool.query(`
    SELECT
      o.order_id,
      o.total_amount,
      o.order_status,
      o.payment_method,
      o.shipping_address,
      o.order_date,
      u.full_name,
      u.email,
      u.city
    FROM orders o
    JOIN users u
      ON o.user_id = u.user_id
    ORDER BY o.order_date DESC
  `);

  return result.rows;
};

const getOrderById = async (id) => {
  const order = await pool.query(
    `
    SELECT
      o.*,
      u.full_name,
      u.email,
      u.city
    FROM orders o
    JOIN users u
      ON o.user_id=u.user_id
    WHERE order_id=$1
`,
    [id]
  );

  const items = await pool.query(
    `
SELECT
oi.*,
p.title,
p.image_url
FROM order_items oi
JOIN products p
ON oi.product_id=p.product_id
WHERE order_id=$1
`,
    [id]
  );

  return {
    order: order.rows[0],
    items: items.rows,
  };
};

const updateStatus = async (id, status) => {
  await pool.query(
    `
UPDATE orders
SET order_status=$1
WHERE order_id=$2
`,
    [status, id]
  );
};

module.exports = {
  getAllOrders,
  getOrderById,
  updateStatus,
};