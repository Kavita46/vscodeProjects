const mongoose=require('mongoose')
//设置Schema结构(集合的字段)
const Schema=mongoose.Schema;
const stuSchema=new Schema({
    sname:String,   
    age:String,
    gender:String,
    address:String,
    hobby:Array,
    head:{
        type:String,
        default:"0.jpeg"
    },
    class_id:{
        type:Schema.Types.String,
        ref:"class"
    },
    flag:{
        type:String,
        default:1
    }
},{versionKey:false});//{versionKey:false}能够避免产生无意义字段
//设置model
//参数1：自定义，以后用于关联
//参数2：stuSchema
//参数3：集合名
const stusModel= mongoose.model("stus",stuSchema,"stus");
//暴露
module.exports=stusModel
