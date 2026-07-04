const express=require("express");

const router=express.Router();

const controller=require("../controllers/categoryController");

router.get("/",controller.getCategories);

router.get("/:id",controller.getCategory);

router.post("/",controller.addCategory);

router.put("/:id",controller.editCategory);

router.delete("/:id",controller.removeCategory);

module.exports=router;