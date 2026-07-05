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

const Sidebar = ({open,setOpen}) => {

  const navigate = useNavigate();
  const {logoutAdmin} = useAuth();
  
  const handleLogout = () => {

    logoutAdmin();

    navigate("/login");

};

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>

      <div className="sidebar-logo">
        <h2>Super Store</h2>
        <span>Admin Panel</span>
      </div>

      <nav className="sidebar-nav">

        <NavLink to="/admin/dashboard" onClick={()=>setOpen(false)}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/products" onClick={()=>setOpen(false)}>
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/orders" onClick={()=>setOpen(false)}>
          <FaShoppingCart />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/admin/customers" onClick={()=>setOpen(false)}>
          <FaUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink to="/admin/categories" onClick={()=>setOpen(false)}>
          <FaTags />
          <span>Categories</span>
        </NavLink>

        <NavLink to="/admin/settings" onClick={()=>setOpen(false)}>
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