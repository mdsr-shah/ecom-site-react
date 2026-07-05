const express = require("express");

const router = express.Router();

const notificationController = require("../controllers/notificationController");

router.get("/", notificationController.getNotifications);

router.get("/count", notificationController.getUnreadCount);

router.put("/read", notificationController.markAllRead);

module.exports = router;