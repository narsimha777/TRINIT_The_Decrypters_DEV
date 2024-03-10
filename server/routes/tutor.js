const express = require("express");
const { gettut, postcourse, getlang,getall} = require("../Controllers/tutorController");
const route = express.Router();
const fetchtutor=require("../middleware/fetchtutor")
const fetchstudent=require("../middleware/fetchstudent")

route.get("/gettutor",fetchstudent,gettut)
route.get("/getall",fetchstudent,getall)
route.post("/postcourse",fetchtutor,postcourse)
route.get("/getlang",fetchtutor,getlang)

module.exports = route;
