const express = require("express");
const Router = require("./src/Router/API")
const App = new express()

const body_perser = require("body-parser");




// Security Middle Ware
const helmet = require('helmet')
const mongo_sanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')





// Security Middleware Implement
App.use(cors())
App.use(hpp())
App.use(xss())
App.use(mongo_sanitize())
App.use(helmet())





App.use(body_perser.json())


const mongos = require('mongoose');
let url = "mongodb+srv://CRUD_001:CRUD_001@cluster0.4v02e0h.mongodb.net/CRUD?retryWrites=true&w=majority"
let option ={user:"CRUD_001", pass:"CRUD_001", autoIndex:true}
mongos.connect(url, option, (error)=>{
    console.log("Connaction Success");
    console.log(error)
})


// font end connection 
App.use(express.static("./my_app/build"));

App.get("*", function(req, res){
    req.sendFile(path.resolve(__dirname, "./my_app", "build", "index.html"))
})







App.use("/news", Router)




module.exports = App;