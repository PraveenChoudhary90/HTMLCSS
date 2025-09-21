const express = require("express");
const route = express.Router();
const StuController = require("../Controller/StuController");


route.post("/insert", StuController.InsertStudent);








module.exports  = route;