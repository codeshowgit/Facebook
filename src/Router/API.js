const express = require("express");
const CreateUser = require("../controller/Controll")


const Router = express.Router();

Router.post("/bd", CreateUser.CreateUser)






module.exports= Router