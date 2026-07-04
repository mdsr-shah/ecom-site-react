const pool = require("../config/db");

// Get all products
const getAllProducts = async (
    page = 1,
    limit = 10,
    search = "",
    category = ""
) => {

    const offset = (page - 1) * limit;

    let values = [];
    let where = [];

    if (search) {
        values.push(`%${search}%`);
        where.push(`p.title ILIKE $${values.length}`);
    }

    if (category) {
        values.push(category);
        where.push(`p.category_id = $${values.length}`);
    }

    const whereClause =
        where.length > 0
            ? `WHERE ${where.join(" AND ")}`
            : "";

    values.push(limit);
    values.push(offset);

    const products = await pool.query(

        `
        SELECT
            p.*,
            c.name AS category_name

        FROM products p

        LEFT JOIN categories c
        ON p.category_id = c.category_id

        ${whereClause}

        ORDER BY p.product_id

        LIMIT $${values.length - 1}
        OFFSET $${values.length}
        `,

        values

    );

    const countResult = await pool.query(

        `
        SELECT COUNT(*)

        FROM products p

        ${whereClause}
        `,

        values.slice(0, values.length - 2)

    );

    const totalProducts = Number(countResult.rows[0].count);

    return {

        products: products.rows,

        totalProducts,

        totalPages: Math.ceil(totalProducts / limit),

        currentPage: page,

        limit

    };

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