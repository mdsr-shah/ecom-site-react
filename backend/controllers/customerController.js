const Customer = require("../models/customerModel");

const getCustomers = async(req,res)=>{

    try{

        const customers = await Customer.getCustomers();

        res.json(customers);

    }

    catch(err){

        console.log(err);

        res.status(500).json({

            message:"Server Error"

        });

    }

};

module.exports={

    getCustomers

};