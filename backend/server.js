const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const customerRoutes = require("./routes/customerRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/products", productRoutes);
app.use("/auth",authRoutes);
app.use("/dashboard",dashboardRoutes)
app.use("/checkout",checkoutRoutes);
app.use("/orders",orderRoutes)
app.use("/customers",customerRoutes)
app.use("/settings",settingsRoutes)
app.use("/categories",categoryRoutes)
app.use("/uploads", express.static("uploads"));
app.use("/notifications", notificationRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Super Store API is Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});