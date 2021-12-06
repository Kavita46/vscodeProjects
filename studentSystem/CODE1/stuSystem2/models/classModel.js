const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    cname: String
}
    ,
    { versionKey: false });

const classModel = mongoose.model('classes',classSchema, 'classes'); 

module.exports = classModel;




    