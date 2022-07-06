const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
   aname:String,
   aid:Number,
   mcount:Number
}
    ,
    { versionKey: false });

const academyModel = mongoose.model('academy', academySchema, 'academy');

module.exports = academyModel;




