const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:String,
    password:String,
    head:{
        type:String,
        default:"/images/default.jpg"
    }},
    
    {versionKey:false});

const userModel  = mongoose.model("users", userSchema, "users");

module.exports = userModel;



