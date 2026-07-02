const express = require("express");
const router = express.Router();
const authenticateAdmin = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");

// GET all products
router.get("/", productController.getProducts);

// GET product by ID
router.get("/:id", productController.getProduct);

// POST new product
router.post("/",authenticateAdmin, productController.addProduct);

// PUT update product
router.put("/:id",authenticateAdmin, productController.editProduct);

// DELETE product
router.delete("/:id",authenticateAdmin, productController.removeProduct);

module.exports = router;