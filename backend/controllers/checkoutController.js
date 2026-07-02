const checkoutModel = require("../models/checkoutModel");

const placeOrder = async (req, res) => {

  try {

    const result = await checkoutModel.placeOrder(req.body);

    res.status(201).json(result);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Failed to place order",
    });

  }

};

module.exports = {
  placeOrder,
};