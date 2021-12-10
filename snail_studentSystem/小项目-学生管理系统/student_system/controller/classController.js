const classModel = require('../models/classModel');
//渲染
async function show(req, res, next) {
    const result = await classModel.find();
    res.send({
        result
    })
}
//添加
async function add(req, res, next) {
    const result = await classModel.create(req.body);
    res.send({
        code: 200,
        result
    })
}
//根据Id渲染要修改的班级信息
async function getById(req, res, next) {
    // const {sname,age,gender,address,hobby}=req.query
    const result = await classModel.findOne(req.query);
    res.send({
        result
    })
}
//修改
async function upd(req, res, next) {
    const { _id, cname } = req.body
    const result = await classModel.updateOne({ _id }, { cname });
    res.send({
        code: 200,
        result
    })
}
module.exports = { show, add, upd, getById }