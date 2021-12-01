const mongoose=require('mongoose')
//设置Schema结构(集合的字段)
const Schema=mongoose.Schema;
const userSchema=new Schema({
    username:String,   
    password:String,
    head:{
        type:String,
        default:"a1.jpeg"
    }
},{versionKey:false});//{versionKey:false}能够避免产生无意义字段
//设置model
//参数1：自定义，以后用于关联
//参数2：userSchema
//参数3：集合名
const userModel= mongoose.model("users",userSchema,"users");
//暴露
module.exports=userModel
