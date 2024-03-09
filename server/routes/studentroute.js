const express = require("express");
const { recommend} = require("../Controllers/studentControllers");
const route = express.Router();
const fetchtutor=require("../middleware/fetchtutor")
const fetchstudent=require("../middleware/fetchstudent")

route.get("/",(req,res)=>{
    console.log("hello");
})
route.get("/recommend",fetchstudent,recommend)

module.exports=route;