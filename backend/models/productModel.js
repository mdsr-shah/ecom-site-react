const pool = require("../config/db");

// Get all products
const getAllProducts = async () => {
    const result = await pool.query("SELECT * FROM products ORDER BY product_id");
    return result.rows;
};

// Get one product by ID
const getProductById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE product_id = $1",
        [id]
    );

    return result.rows[0];
};

// Add a new product
const createProduct = async (product) => {

    const {
        category_id,
        title,
        description,
        price,
        stock,
        image_url
    } = product;

    const result = await pool.query(
        `INSERT INTO products
        (category_id, title, description, price, stock, image_url)
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *`,
        [
            category_id,
            title,
            description,
            price,
            stock,
            image_url
        ]
    );

    return result.rows[0];
};

// Update product
const updateProduct = async (id, product) => {

    const {
        category_id,
        title,
        description,
        price,
        stock,
        image_url
    } = product;

    const result = await pool.query(
        `UPDATE products
        SET
        category_id=$1,
        title=$2,
        description=$3,
        price=$4,
        stock=$5,
        image_url=$6
        WHERE product_id=$7
        RETURNING *`,
        [
            category_id,
            title,
            description,
            price,
            stock,
            image_url,
            id
        ]
    );

    return result.rows[0];
};

// Delete product
const deleteProduct = async (id) => {

    await pool.query(
        "DELETE FROM products WHERE product_id=$1",
        [id]
    );

    return;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};