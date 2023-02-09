const UserMode = require("../model/Model");

exports.CreateUser = (req, res)=>{
    let RequestBody = req.body;
    UserMode.create(RequestBody, (error, Data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }else{
            res.status(200).json({status:"success",data:Data})
        }
    })
}
