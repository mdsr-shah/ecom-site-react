const db = require("../config/db");

const getCustomers = async () => {

  const result = await db.query(`

    SELECT

      u.user_id,
      u.full_name,
      u.email,
      u.city,
      u.address,
      u.created_at,

      COUNT(o.order_id) AS total_orders,

      COALESCE(SUM(o.total_amount),0) AS total_spent

    FROM users u

    LEFT JOIN orders o
    ON u.user_id = o.user_id

    WHERE u.role='customer'

    GROUP BY
      u.user_id

    ORDER BY
      u.created_at DESC

  `);

  return result.rows;

};

module.exports = {

  getCustomers

};