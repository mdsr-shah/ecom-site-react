const router = require("express").Router();

const controller = require("../controllers/orderController");

router.get("/", controller.getOrders);

router.get("/:id", controller.getOrder);

router.put("/:id", controller.updateOrderStatus);

module.exports = router;