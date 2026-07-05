const pool = require("../config/db");

const getNotifications = async () => {
    const result = await pool.query(`
        SELECT *
        FROM notifications
        ORDER BY created_at DESC
    `);

    return result.rows;
};

const markAllRead = async () => {
    await pool.query(`
        UPDATE notifications
        SET is_read = TRUE
        WHERE is_read = FALSE
    `);
};

const getUnreadCount = async () => {
    const result = await pool.query(`
        SELECT COUNT(*) AS count
        FROM notifications
        WHERE is_read = FALSE
    `);

    return result.rows[0];
};

module.exports = {
    getNotifications,
    markAllRead,
    getUnreadCount
};