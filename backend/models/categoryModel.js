const pool = require("../config/db");

// Get all categories
const getAllCategories = async (search = "") => {

    let values = [];
    let whereClause = "";

    if (search) {
        values.push(`%${search}%`);
        whereClause = `WHERE c.name ILIKE $1`;
    }

    const result = await pool.query(

        `
        SELECT

            c.category_id,
            c.name,
            c.description,

            COUNT(p.product_id) AS total_products

        FROM categories c

        LEFT JOIN products p
        ON c.category_id = p.category_id

        ${whereClause}

        GROUP BY c.category_id

        ORDER BY c.category_id
        `,

        values

    );

    return result.rows;
};

// Get one category
const getCategoryById = async (id) => {

    const result = await pool.query(

        "SELECT * FROM categories WHERE category_id=$1",

        [id]

    );

    return result.rows[0];

};

// Create category
const createCategory = async (category) => {

    const {

        name,

        description

    } = category;

    const result = await pool.query(

        `

        INSERT INTO categories

        (name,description)

        VALUES($1,$2)

        RETURNING *

        `,

        [

            name,

            description

        ]

    );

    return result.rows[0];

};

// Update category
const updateCategory = async (id, category) => {

    const {

        name,

        description

    } = category;

    const result = await pool.query(

        `

        UPDATE categories

        SET

        name=$1,

        description=$2

        WHERE category_id=$3

        RETURNING *

        `,

        [

            name,

            description,

            id

        ]

    );

    return result.rows[0];

};

// Delete
const deleteCategory = async (id) => {

    await pool.query(

        "DELETE FROM categories WHERE category_id=$1",

        [id]

    );

};

module.exports = {

    getAllCategories,

    getCategoryById,

    createCategory,

    updateCategory,

    deleteCategory

};