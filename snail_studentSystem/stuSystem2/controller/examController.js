const examModel = require("../models/examModel");

// 1-查询所有学院
async function getExams(req, res, next) {
    const result = await examModel.find();
    res.send({ result });
}

// 6-添加考试
async function addExam(req, res, next) {
    console.log("req.body")
    const { cname, tname, site, time, isOpen } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组
    const result = await examModel.create({ cname, tname, site, time, isOpen, flag: 0 });
    res.send(
        req.body
    )
}

async function censorExam(req, res, next) {
    const { _id, flag } = req.body;
    console.log('req.body是');
    console.log(req.body)
    const result = await examModel.updateOne({ _id: _id }, { flag: flag })
    res.send(
        req.body
    )
}

module.exports = { getExams, addExam, censorExam };