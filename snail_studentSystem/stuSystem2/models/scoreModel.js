const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const scoreSchema = new Schema({
    sid: Number,
    cid: Number,
    score: Number,
}, {
    // 避免产生无意义字段
    versionKey: false
}
);

// model(name, schema, collectionName) collectionName 是数据库里的集合名字
const scoreModel = mongoose.model("scoreModel", scoreSchema, "scores")
// 后端暴露
module.exports = scoreModel;