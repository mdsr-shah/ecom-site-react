const bcrypt = require("bcryptjs");

const Admin = require("../models/adminModel");

const generateToken = require("../utils/generateToken");

const login = async (req,res)=>{

    try{

        const{

            email,

            password

        }=req.body;

        const admin = await Admin.findByEmail(email);

        if(!admin){

            return res.status(401).json({

                message:"Invalid Email"

            });

        }

        const isMatch = await bcrypt.compare(

            password,

            admin.password

        );

        if(!isMatch){

            return res.status(401).json({

                message:"Invalid Password"

            });

        }

        const token = generateToken(admin);

        res.json({

            message:"Login Successful",

            token,

            admin:{

                id:admin.admin_id,

                username:admin.username,

                email:admin.email

            }

        });

    }

    catch(err){

        console.log(err);

        res.status(500).json({

            message:"Server Error"

        });

    }

};

module.exports={

    login

};