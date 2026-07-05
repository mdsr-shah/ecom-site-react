import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = ({ setSidebarOpen }) => {
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

        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="admin-user">
          <FaUserCircle />
          <span>Admin</span>
        </div>

      </div>

    </header>
  );
};

export default Topbar;