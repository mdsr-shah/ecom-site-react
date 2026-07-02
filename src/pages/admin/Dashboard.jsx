import { useEffect, useState } from "react";

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaExclamationTriangle
} from "react-icons/fa";

import DashboardCard from "../../components/admin/DashboardCard";

import { getDashboard } from "../../services/dashboardService";

const Dashboard = () => {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {

      const data = await getDashboard();

      setStats(data);

    } catch (err) {

      console.log(err);

    }
  };

  if (!stats) return <h2>Loading...</h2>;

  return (

    <div>

      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <DashboardCard
          title="Products"
          value={stats.totalProducts}
          icon={<FaBox />}
          color="#2563eb"
        />

        <DashboardCard
          title="Orders"
          value={stats.totalOrders}
          icon={<FaShoppingCart />}
          color="#10b981"
        />

        <DashboardCard
          title="Customers"
          value={stats.totalCustomers}
          icon={<FaUsers />}
          color="#9333ea"
        />

        <DashboardCard
          title="Revenue"
          value={`Rs. ${stats.totalRevenue}`}
          icon={<FaMoneyBillWave />}
          color="#f59e0b"
        />

        <DashboardCard
          title="Low Stock"
          value={stats.lowStock.length}
          icon={<FaExclamationTriangle />}
          color="#ef4444"
        />

      </div>

      <div className="dashboard-bottom">

        <div className="recent-orders">

          <h2>Recent Orders</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Customer</th>

                <th>Status</th>

                <th>Total</th>

              </tr>

            </thead>

            <tbody>

              {stats.recentOrders.map(order => (

                <tr key={order.order_id}>

                  <td>#{order.order_id}</td>

                  <td>{order.full_name}</td>

                  <td>{order.order_status}</td>

                  <td>Rs. {order.total_amount}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="low-stock-list">

          <h2>Low Stock Products</h2>

          {stats.lowStock.map(product => (

            <div
              key={product.product_id}
              className="stock-item"
            >

              <span>{product.title}</span>

              <strong>{product.stock}</strong>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Dashboard;