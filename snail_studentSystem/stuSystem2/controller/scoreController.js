const scoreModel = require("../models/scoreModel");
// const classModel = require("../models/classModel");
const courseModel = require(
    "../models/courseModel"
)
const studentModel = require("../models/studentModel");

// 1-查询所有成绩函数
async function getScoreTable(req, res, next) {
    const result = await scoreModel.find();
    res.send({ result });
}

// 2-联立三个表查询 course表, score表和students表
async function getFullTable(req, res, next) {
    const result = await scoreModel.aggregate([
        {
            $lookup: {
                from: "courses",
                localField: "cid",
                foreignField: "cid",
                as: "cInfo"
            }
        },
        {
            $lookup: {
                from: "students",
                localField: "sid",
                foreignField: "sid",
                as: "stuInfo"
            }
        }

    ])
    res.send({ result })
}

// async function getById(req, res, next) {

//     const { _id } = req.query;
//     const result = await studentModel.findOne(req.query);
//     res.send({ result });
// }

// 3-通过Id查询
async function getScoresById(req, res, next) {
    const { sid } = req.query;
    // const {sid} = req.query
    console.log("此处的query是")
    console.log(req.query)
    console.log("此处的sid是")
    console.log(sid);
    console.log(typeof (sid))
    let data = Number.parseInt(sid);
    const result = await scoreModel.aggregate([
        {
            $match: {
                sid: data
            }
        },
        {
            $lookup: {
                from: "courses",
                localField: "cid",
                foreignField: "cid",
                as: "cInfo"
            }
        },
        {
            $lookup: {
                from: "students",
                localField: "sid",
                foreignField: "sid",
                as: "stuInfo"
            }
        }

    ])
    res.send({ result });
}

// 2-删除单个学生函数
async function deleteScoreRecord(req, res, next) {
    // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
    const result = await scoreModel.findOneAndUpdate({ _id: req.body._id }, { new: true });
    res.send({ result });

}
//  3-修改成绩函数
async function editScore(req, res, next) {
    console.log('前端传过来的是')
    console.log(req.body)
    const { _id, score } = req.body;
    const result = await scoreModel.updateOne({ _id }, { score });
    res.send(
        req.body
    )
}


// // 4.1-这个search没有被用到
// async function searchStudent(req, res, next) {

//     const { k } = req.query;

//     let regExp = new RegExp(k);


//     const result = await scoreModel.find({ sname: { $regex: regExp } }).populate("cla_id");
//     res.send({ result })

//     // 返回的这个result 是符合条件的所有数据
// }

// 6 - 添成绩记录
async function addScoreRecord(req, res, next) {
    console.log("req.body")
    const { sid, cid, score } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组
    const result = await scoreModel.create({ sid, cid, score });
    res.send(
        req.body
    )
}



module.exports = { getFullTable, getScoreTable, addScoreRecord, deleteScoreRecord, getScoresById, editScore };

//  deleteScore, editStudent, getScoresById,addStudent