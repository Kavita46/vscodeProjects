const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const courseSchema = new Schema({
    cid: Number,
    cname: String,
    delFlag: Number,
    aname: String,
    tname: String,
    type: String
}, {
    // 避免产生无意义字段
    versionKey: false
}
);

// model(name, schema, collectionName) collectionName 是数据库里的集合名字
const courseModel = mongoose.model("courseModel", courseSchema, "courses")
// 后端暴露
module.exports = courseModel;