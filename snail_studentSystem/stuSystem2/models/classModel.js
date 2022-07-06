const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    cname: String,
    count:Number,
    cid:Number
}
    ,
    { versionKey: false });

const classModel = mongoose.model('classes', classSchema, 'classes');

module.exports = classModel;




