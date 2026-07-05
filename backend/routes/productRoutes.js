const express = require("express");
const router = express.Router();

const authenticateAdmin = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");
const upload = require("../middleware/upload");

// GET
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);

// POST
router.post(
    "/",
    authenticateAdmin,
    upload.single("image"),
    productController.addProduct
);

// PUT
router.put(
    "/:id",
    authenticateAdmin,
    upload.single("image"),
    productController.editProduct
);

// DELETE
router.delete(
    "/:id",
    authenticateAdmin,
    productController.removeProduct
);

module.exports = router;