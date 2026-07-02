import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import WebsiteLayout from "./layouts/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout";

// Website Pages
import Home from "./pages/website/Home";
import Men from "./pages/website/Men";
import Kids from "./pages/website/Kids";
import Checkout from "./pages/website/Checkout";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Customers from "./pages/admin/Customers";
import Categories from "./pages/admin/Categories";
import Settings from "./pages/admin/Settings";

import Login from "./pages/admin/Login";
import ProtectedRoute from "./routes/ProtectedRoute"


function App() {
  return (

      <Router>

        <Routes>

          {/* WEBSITE */}
          <Route element={<WebsiteLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/checkout" element={<Checkout />} />

          </Route>

          {/* Login Route */}
            <Route path="/login" element={<Login/>} />


          {/* ADMIN */}

          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>

            <Route index element={<Dashboard />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="products" element={<Products />} />

            <Route path="orders" element={<Orders />} />

            <Route path="customers" element={<Customers />} />

            <Route path="categories" element={<Categories />} />

            <Route path="settings" element={<Settings />} />

          </Route>

        </Routes>

      </Router>

  );
}

export default App;