const express  = require("express");
const app  =express();
const cors  = require("cors");
const bodyParser  =require("body-parser");
const mongoose  =require("mongoose");









app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})