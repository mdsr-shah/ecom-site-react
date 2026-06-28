const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// GET all products
router.get("/", productController.getProducts);

// GET product by ID
router.get("/:id", productController.getProduct);

// POST new product
router.post("/", productController.addProduct);

// PUT update product
router.put("/:id", productController.editProduct);

// DELETE product
router.delete("/:id", productController.removeProduct);

module.exports = router;