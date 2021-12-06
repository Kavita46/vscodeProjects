const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    sname:String,
    // String,Number, Object, Array
    address:String,
    age:Number,
    gender:String,
    hobby:Array,
    cla_id:{
        type:Schema.Types.String,
        ref:"classes"
    },
    flag:Number,
    imgs:String
   },{
        // 避免产生无意义字段
        versionKey:false}
);

// model(name, schema, collectionName) collectionName 是数据库里的集合名字
const studentModel = mongoose.model("studentModel", studentSchema, "students")
// 后端暴露
module.exports  = studentModel;