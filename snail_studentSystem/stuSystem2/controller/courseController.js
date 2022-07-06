const courseModel = require("../models/courseModel");
// 1-查询所有课程
async function getCourses(req, res, next) {
    const result = await courseModel.find({ delFlag: 0 });
    res.send({ result });
}
// 2-删除单个课程函数
async function deleteCourse(req, res, next) {
    // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
    let result = await courseModel.findOneAndUpdate({ _id: req.body._id }, { delFlag: 1 });
    res.send({ result });
}

// 3-修改课程函数
async function editCourse(req, res, next) {
    console.log('前端传过来的是')
    console.log(req.body)
    const { _id, cname, aname, tname, type } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组

    // 需要传进来一个字符串
    let result = await courseModel.updateOne({ _id }, { cname, aname, tname, type });
    res.send(
        req.body
    )
}
// // 4-通过Id查询
// async function getScoresById(req, res, next) {

//     const { _id } = req.query;
//     const result = await courseModel.findOne(req.query);
//     res.send({ result });
// }

// // 4.1-这个search没有被用到
// async function searchStudent(req, res, next) {

//     const { k } = req.query;

//     let regExp = new RegExp(k);


//     const result = await courseModel.find({ sname: { $regex: regExp } }).populate("cla_id");
//     res.send({ result })

//     // 返回的这个result 是符合条件的所有数据
// }

// 6 - 添成绩记录
// async function addScoreRecord(req, res, next) {
//     console.log("req.body")
//     const { sid, cid, score } = req.body;
//     // TODO 修改函数
//     // BUG 这里hobby空值的时候会成为一个带空白的数组
//     const result = await courseModel.create({ sid, cid, score });
//     res.send(
//         req.body
//     )
// }



module.exports = { getCourses, deleteCourse, editCourse };

//  addScoreRecord ,deleteScoreRecord
//  deleteScore, editStudent, getScoresById,addStudent