const pool = require("../config/db");

const placeOrder = async (orderData) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const {
      fullName,
      email,
      city,
      address,
      paymentMethod,
      totalAmount,
      cart,
    } = orderData;

    // Check existing customer
    let user = await client.query(
      "SELECT user_id FROM users WHERE email = $1",
      [email]
    );

    let userId;

    if (user.rows.length > 0) {
      userId = user.rows[0].user_id;
    } else {
      const newUser = await client.query(
        `
        INSERT INTO users
        (full_name,email,password,address,city,role)
        VALUES($1,$2,$3,$4,$5,'customer')
        RETURNING user_id
        `,
        [
          fullName,
          email,
          "",
          address,
          city,
        ]
      );

      userId = newUser.rows[0].user_id;
    }

    // Create Order
    const order = await client.query(
      `
      INSERT INTO orders
      (
        user_id,
        total_amount,
        order_status,
        payment_method,
        shipping_address
      )
      VALUES($1,$2,'Pending',$3,$4)
      RETURNING order_id
      `,
      [
        userId,
        totalAmount,
        paymentMethod,
        address,
      ]
    );

    const orderId = order.rows[0].order_id;

    await client.query(
      `
      INSERT INTO notifications
      (title, message)
      VALUES($1,$2)`,
      [
        "New Order Placed",
        `A new order with ID ${orderId} has been placed.`,
      ]
    );

    // Order Items
    for (const item of cart) {
      await client.query(
        `
        INSERT INTO order_items
        (
          order_id,
          product_id,
          quantity,
          price
        )
        VALUES($1,$2,$3,$4)
        `,
        [
          orderId,
          item.product_id,
          item.quantity,
          item.price,
        ]
      );

      // Reduce Stock
      await client.query(
        `
        UPDATE products
        SET stock = stock - $1
        WHERE product_id=$2
        `,
        [
          item.quantity,
          item.product_id,
        ]
      );
    }

    await client.query("COMMIT");

    return {
      success: true,
      orderId,
    };

  } catch (err) {

    await client.query("ROLLBACK");

    throw err;

  } finally {

    client.release();

  }
};

module.exports = {
  placeOrder,
};