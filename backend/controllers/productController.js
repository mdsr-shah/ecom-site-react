const productModel = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 10;

const search = req.query.search || "";

const category = req.query.category || "";

const products = await productModel.getAllProducts(

    page,

    limit,

    search,

    category

);
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
        const productData = { ...req.body };
        if(req.file) {
            productData.image_url = `/uploads/${req.file.filename}`;
        }
        const newProduct = await productModel.createProduct(productData);

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

        const productData = { ...req.body };
        if(req.file) {
            productData.image_url = `/uploads/${req.file.filename}`;
        }

        const updatedProduct = await productModel.updateProduct(
            id,
            productData
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