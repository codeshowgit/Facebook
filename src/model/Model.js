// const mongoose = require("mongoose");
const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
    {
        UserName:{type:String},
        PassWord:{type:String},
    },
    {versionkey:false}
);

const Model = mongoose.model("Facebook", DataSchema);

module.exports = Model;