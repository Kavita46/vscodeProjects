const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    // String,Number, Object, Array
    password: String,
    role: String,
    campusId:Number,
    head: {
        type: String,
        default: "1.jpeg"
    },

    privilege: {
        type: String,
        default: ''
    }
}, {
    // 避免产生无意义字段
    versionKey: false
}
);

const userModel = mongoose.model("userModel", userSchema, "users")
// 后端暴露
module.exports = userModel;