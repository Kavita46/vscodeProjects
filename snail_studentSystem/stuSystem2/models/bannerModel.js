const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bannerSchema = new Schema({
    picName: String,
},{versionKey: false});

const bannerModel  = mongoose.model('banners', bannerSchema, 'banners');

module.exports = bannerModel;