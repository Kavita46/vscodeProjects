const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema({
    mname: String,
    stuCount:Number,
    mid:Number
}
    ,
    { versionKey: false });

const majorModel = mongoose.model('majors', majorSchema, 'majors');

module.exports = majorModel;




