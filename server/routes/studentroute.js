const express = require("express");
const { recommend, subscribe, joinclass, flashs,flashd,flashget,courseget, mycourseget,getuser} = require("../Controllers/studentControllers");
const route = express.Router();
const fetchtutor=require("../middleware/fetchtutor")
const fetchstudent=require("../middleware/fetchstudent")
const jwt = require('jsonwebtoken');

route.get("/",(req,res)=>{
    console.log("hello");
})
route.get("/recommend",fetchstudent,recommend);
route.get("/getuser",getuser);
route.post("/subscribe",fetchstudent,subscribe);
route.post("/joinclass",fetchstudent,joinclass);
route.post("/flashs",fetchstudent,flashs);
route.post("/flashd",fetchstudent,flashd);
route.get("/flashget",fetchstudent,flashget);
route.get("/courseget",fetchstudent,courseget);
route.get("/mycourseget",fetchstudent,mycourseget);

module.exports=route;