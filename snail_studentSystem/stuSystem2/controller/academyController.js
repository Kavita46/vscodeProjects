const academyModel = require("../models/academyModel");

// 1-查询所有学院
async function getAcademys(req, res, next) {
    const result = await academyModel.find();
    res.send({ result });
}
module.exports = { getAcademys};

// 2-删除单个学生函数
// async function deleteScoreRecord(req, res, next) {
//     // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
//     const result = await scoreModel.findOneAndUpdate({ _id: req.body._id },{ new: true });
//     res.send({ result });

// }
// // 3-修改学生函数
// async function editStudent(req, res, next) {

//     console.log('前端传过来的是')
//     console.log(req.body)
//     const { _id,imgs, sname, age, address, gender, hobby, cla_id,score } = req.body;
//     // TODO 修改函数
//     // BUG 这里hobby空值的时候会成为一个带空白的数组

//     // 需要传进来一个字符串
//     console.log('这里的hobby是' + hobby)
//     const result = await scoreModel.updateOne({ _id }, { imgs,sname, age, address, gender, cla_id, hobby: hobby.split(","),score });

//     console.log('head的值是' + imgs);
//     // 移动图片

//     let fromPath = './public/temp';
//     let toPath = './public/images';

//     let obj = { fromPath, toPath, filename:imgs };
//     // 移动文件
//     moveFiles(obj);
//     // 删除临时文件的文件夹
//     deleteFiles('./public/temp/');

//     res.send(
//         req.body
//     )
// }
// // 4-通过Id查询
// async function getScoresById(req, res, next) {

//     const { _id } = req.query;
//     const result = await scoreModel.findOne(req.query);
//     res.send({ result });
// }

// // 4.1-这个search没有被用到
// async function searchStudent(req, res, next) {

//     const { k } = req.query;

//     let regExp = new RegExp(k);


//     const result = await scoreModel.find({ sname: { $regex: regExp } }).populate("cla_id");
//     res.send({ result })

//     // 返回的这个result 是符合条件的所有数据
// }

// 6 - 添成绩记录
// async function addScoreRecord(req, res, next) {
//     console.log("req.body")
//     const { sid, cid, score } = req.body;
//     // TODO 修改函数
//     // BUG 这里hobby空值的时候会成为一个带空白的数组
//     const result = await scoreModel.create({ sid, cid, score });
//     res.send(
//         req.body
//     )
// }



//  addScoreRecord ,deleteScoreRecord
//  deleteScore, editStudent, getScoresById,addStudent