const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    sname:String,
    password:String,
   gender:String,
age:Number,
address:String},
    
    {versionKey:false});

const stuModel  = mongoose.model("students", userSchema, "students");

module.exports = stuModel;



