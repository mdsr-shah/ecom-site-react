const Order = require("../models/orderModel");

exports.getOrders = async (req, res) => {
  const orders = await Order.getAllOrders();
  res.json(orders);
};

exports.getOrder = async (req, res) => {
  const order = await Order.getOrderById(req.params.id);
  res.json(order);
};

exports.updateOrderStatus = async (req, res) => {
  await Order.updateStatus(
    req.params.id,
    req.body.status
  );

  res.json({
    success: true,
  });
};