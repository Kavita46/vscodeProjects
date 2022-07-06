const teacherModel = require("../models/teacherModel");

async function getTeachers(req, res) {
    const result = await teacherModel.find();
    res.send({
        result
    });
}

async function editTeacher(req, res) {
    const { tid, title, age, sex, years,aname } = req.body;
    console.log('前端数据')
    console.log(req.body)
    // // TODO 查清楚findOneAndUpdate的参数和 find 的区别
    const result = await teacherModel.updateOne({ tid }, { aname,title, age, sex, years });
    // const result await又需要用async
    res.send(
        req.body
    )
    console.log("修改教师信息")
}

// async function getById() {
//     console.log('根据ID查找')
// }

// 传一个对象进来
async function getById(req, res, next) {
    const { tid } = req.query;
    console.log(req.query)
    const result = await teacherModel.findOne(req.query);
    res.send({ result });
}

// async function addClass(req,res){
//     const {cname} = req.body;
//     const {classCount} = Number(await classModel.find().countDocuments()) +1;
//     console.log(classCount)
//     console.log(typeof(classCount))
//     const result = await classModel.create({cname:cname, cid:classCount});
//     res.send(
//         req.body
//     )
//     console.log("添加班级")
// }



module.exports = { getTeachers, editTeacher, getById };