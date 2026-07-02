const jwt = require("jsonwebtoken");

const generateToken = (admin) => {

    return jwt.sign(

        {

            id: admin.admin_id,

            username: admin.username

        },

        process.env.JWT_SECRET,

        {

            expiresIn:"1d"

        }

    );

};

module.exports = generateToken;