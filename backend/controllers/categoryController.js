const categoryModel = require("../models/categoryModel");

const getCategories = async (req,res)=>{

    try{

        const search = req.query.search || "";

        const categories = await categoryModel.getAllCategories(search);

        res.json(categories);

    }

    catch(err){

        console.log(err);

        res.status(500).json({

            message:"Failed to fetch categories"

        });

    }

};

const getCategory = async(req,res)=>{

    const category = await categoryModel.getCategoryById(req.params.id);

    res.json(category);

};

const addCategory = async(req,res)=>{

    const category = await categoryModel.createCategory(req.body);

    res.json(category);

};

const editCategory = async(req,res)=>{

    const category = await categoryModel.updateCategory(

        req.params.id,

        req.body

    );

    res.json(category);

};

const removeCategory = async(req,res)=>{

    await categoryModel.deleteCategory(req.params.id);

    res.json({

        message:"Deleted"

    });

};

module.exports={

    getCategories,

    getCategory,

    addCategory,

    editCategory,

    removeCategory

};