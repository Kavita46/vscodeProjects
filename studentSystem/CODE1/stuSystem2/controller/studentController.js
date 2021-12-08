const studentModel = require("../models/studentModel");

const classModel = require("../models/classModel");
// 1-查询函数


async function getStudents(req, res, next) {
    const result = await studentModel.find().populate("cla_id");


    res.send({ result });
}

// 2-删除函数
async function deleteStudent(req, res, next) {
    // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
    const result = await studentModel.deleteOne(req.body);

    res.send({ result });

}


async function editStudent(req, res, next) {
    console.log("req.body")
    const { _id, sname, age, address, gender, hobby } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组
    const result = await studentModel.updateOne({ _id }, { sname, age, address, gender, hobby: hobby.split(",") });

    res.send(
        req.body

    )
    // const { _id, sname, age, address, gender, hobby } = req.body;
    // const result = await studentModel.updateOne({_id}, {sname,age,address,gender,hobby});
    // res.send({
    //     result
    // })
}

async function getById(req, res, next) {

    const { _id } = req.query;
    const result = await studentModel.findOne(req.query);
    res.send({ result });
    // res.send({req.query});
    // console.log(req.query)
}

async function searchStudent(req, res, next) {

    const { k } = req.query;

    let regExp = new RegExp(k);


    const result = await studentModel.find({ sname: { $regex: regExp } }).populate("cla_id");
    res.send({ result })

}

async function getByPages(req, res, next) {

    let { pageIndex, pageSize } = req.query;
    pageIndex = Number.parseInt(pageIndex);
    pageSize = Number.parseInt(pageSize);

    // const pageIndex = 1;
    // // const{pageIndex} = req.query
    // const pageSize  = 5;

    let count = await studentModel.find().countDocuments();

    let pageCount = Math.ceil(count / pageSize);

    let result = await studentModel.find({}, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize }).populate("cla_id");


    res.send({
        result,
        pageIndex,
        pageCount,
        pageSize,
        count
    })

}

module.exports = { getStudents, deleteStudent, editStudent, getById, searchStudent, getByPages };
