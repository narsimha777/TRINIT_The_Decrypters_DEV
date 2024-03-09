const express = require("express");
const { gettut } = require("../Controllers/tutorController");
const route = express.Router();
const fetchtutor=require("../middleware/fetchtutor")
const fetchstudent=require("../middleware/fetchstudent")
// gettut

route.get("/gettutor",fetchstudent,gettut)
module.exports = route;