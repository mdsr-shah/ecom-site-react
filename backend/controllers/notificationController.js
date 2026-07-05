const Notification = require("../models/notificationModel");

exports.getNotifications = async (req, res) => {
    const notifications = await Notification.getNotifications();
    res.json(notifications);
};

exports.getUnreadCount = async (req, res) => {
    const count = await Notification.getUnreadCount();
    res.json(count);
};

exports.markAllRead = async (req, res) => {
    await Notification.markAllRead();

    res.json({
        success: true
    });
};