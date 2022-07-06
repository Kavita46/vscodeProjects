const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    cname: String,
    tname: String,
    site: String,
    time: String,
    isOpen: String,
   flag:Number

}
    ,
    { versionKey: false });

const examModel = mongoose.model('exams', examSchema, 'exams');

module.exports = examModel;




