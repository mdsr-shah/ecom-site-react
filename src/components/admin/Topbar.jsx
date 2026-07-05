import { useEffect, useState } from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Topbar = ({ setSidebarOpen }) => {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchNotifications = async () => {
    try {
      const countRes = await axios.get(
        "http://localhost:5000/notifications/count"
      );
      setCount(Number(countRes.data.count));

      const notifRes = await axios.get(
        "http://localhost:5000/notifications"
      );
      setNotifications(notifRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const interval = setInterval(fetchNotifications, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = async () => {
    setShowDropdown(!showDropdown);

    if (!showDropdown && count > 0) {
      await axios.put("http://localhost:5000/notifications/read");
      setCount(0);
      fetchNotifications();
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <h2>Admin Dashboard</h2>
      </div>

      <div className="topbar-right">

        <div className="notification-wrapper">

          <button
            className="notification-btn"
            onClick={toggleDropdown}
          >
            <FaBell />

            {count > 0 && (
              <span className="notification-badge">
                {count}
              </span>
            )}
          </button>

          {showDropdown && (
            <div className="notification-dropdown">

              <h4>Notifications</h4>

              {notifications.length === 0 ? (
                <p className="empty-notification">
                  No notifications
                </p>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.notification_id}
                    className={`notification-item ${
                      !n.is_read ? "unread" : ""
                    }`}
                  >
                    <p>{n.message}</p>
                    <small>
                      {new Date(
                        n.created_at
                      ).toLocaleString()}
                    </small>
                  </div>
                ))
              )}

            </div>
          )}

        </div>

        <div className="admin-user">
          <FaUserCircle />
          <span>Admin</span>
        </div>

      </div>
    </header>
  );
};

export default Topbar;