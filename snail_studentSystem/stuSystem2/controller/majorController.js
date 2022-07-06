const majorModel = require("../models/majorModel");

// 1-查询所有学院
async function getMajors(req, res, next) {
    const result = await majorModel.find();
    res.send({ result });
}
module.exports = { getMajors};