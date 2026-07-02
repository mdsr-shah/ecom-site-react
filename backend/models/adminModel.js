const pool = require("../config/db");

const findByEmail = async (email) => {

    const result = await pool.query(

        "SELECT * FROM admin WHERE email=$1",

        [email]

    );

    return result.rows[0];

};

module.exports = {

    findByEmail

};