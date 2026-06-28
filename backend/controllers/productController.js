const productModel = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();

        res.status(200).json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch products"
        });
    }
};

// GET one product
const getProduct = async (req, res) => {

    try {

        const id = req.params.id;

        const product = await productModel.getProductById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(product);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to fetch product"
        });

    }

};

// POST product
const addProduct = async (req, res) => {

    try {

        const newProduct = await productModel.createProduct(req.body);

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to create product"
        });

    }

};

// PUT product
const editProduct = async (req, res) => {

    try {

        const id = req.params.id;

        const updatedProduct = await productModel.updateProduct(
            id,
            req.body
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to update product"
        });

    }

};

// DELETE product
const removeProduct = async (req, res) => {

    try {

        const id = req.params.id;

        await productModel.deleteProduct(id);

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to delete product"
        });

    }

};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    removeProduct
};