const express = require("express");
const { gettut, postcourse } = require("../Controllers/tutorController");
const route = express.Router();
const fetchtutor=require("../middleware/fetchtutor")
const fetchstudent=require("../middleware/fetchstudent")
// postcourse
// gettut

route.get("/gettutor",fetchstudent,gettut)
route.post("/postcourse",fetchtutor,postcourse)

module.exports = route;
