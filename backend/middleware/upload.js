const multer = require("multer");
const path = require("path");

// Storage configuration
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "uploads");
    },

    filename: function (req, file, cb) {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname);

        cb(null, uniqueName);
    }

});

// File filter
const fileFilter = (req, file, cb) => {

    const allowed = /jpg|jpeg|png|webp/;

    const isValid = allowed.test(
        path.extname(file.originalname).toLowerCase()
    );

    if (isValid) {

        cb(null, true);

    } else {

        cb(new Error("Only images are allowed"));

    }

};

module.exports = multer({

    storage,

    fileFilter

});