const express  =require("express");
const route  = express.Router();
const STuController = require("../Controller/StuController");

route.get("/home", STuController.Homepage);
route.get("/about", STuController.Aboutpage);
route.get("/insert", STuController.Insertpage)
route.post("/save" , STuController.SaveData);
route.get("/display", STuController.Dispalydata);


module.exports  = route;