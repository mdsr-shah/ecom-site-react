import { useNavigate } from "react-router-dom";
import {useAuth} from "../../context/AuthContext"
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaTags,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {

  const navigate = useNavigate();
  const {logoutAdmin} = useAuth();
  
  const handleLogout = () => {

    logoutAdmin();

    navigate("/login");

};

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>Super Store</h2>
        <span>Admin Panel</span>
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/admin/dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/products">
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/orders">
          <FaShoppingCart />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/admin/customers">
          <FaUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink to="/admin/categories">
          <FaTags />
          <span>Categories</span>
        </NavLink>

        <NavLink to="/admin/settings">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;