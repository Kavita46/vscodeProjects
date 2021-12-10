const mongoose=require('mongoose')
//设置Schema结构(集合的字段)
const Schema=mongoose.Schema;
const classSchema=new Schema({
    cname:String,
},{versionKey:false});//{versionKey:false}能够避免产生无意义字段
//设置model
//参数1：自定义，以后用于关联
//参数2：stuSchema
//参数3：集合名
const classModel= mongoose.model("class",classSchema,"class");
//暴露
module.exports=classModel