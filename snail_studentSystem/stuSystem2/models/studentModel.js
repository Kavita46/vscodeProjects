// 关于Schema和model的说明
//  模型使用 Schema 接口进行定义。 
// Schema 可以定义每个文档中存储的字段，及字段的验证要求和默认值。
// 还可以通过定义静态和实例辅助方法来更轻松地处理各种类型的数据，
// 还可以像使用普通字段一样使用数据库中并不存在的虚拟属性（稍后讨论）。

// mongoose.model() 方法将模式“编译”为模型。模型就可以用来查找、创建、
// 更新和删除特定类型的对象。


const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    sname: String,
    sid:Number,
    // String,Number, Object, Array
    address: String,
    age: Number,
    gender: String,
    hobby: { type: Array, default: [] },
    major:String,

    cla_id: {
        type: Schema.Types.String,
        ref: "classes",
        default: '61aae2cea97579378d12c169'
    },
    flag: {
        type: Number,
        default: 1
    },
    imgs: { type: String, default: 'head.png' }
}, {
    // 避免产生无意义字段
    versionKey: false
}
);

// model(name, schema, collectionName) collectionName 是数据库里的集合名字
const studentModel = mongoose.model("studentModel", studentSchema, "students")
// 后端暴露
module.exports = studentModel;