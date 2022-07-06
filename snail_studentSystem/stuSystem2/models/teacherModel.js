const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    tid: Number,
    tname: String,
    sex: String,
    title: String,
    age:Number,
    aname:String
}
    ,
    { versionKey: false });

const teacherModel = mongoose.model('teachers', teacherSchema, 'teachers');

module.exports = teacherModel;




