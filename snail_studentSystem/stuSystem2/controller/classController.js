const classModel = require("../models/classModel");

async function getClasses(req, res){
    const result = await classModel.find();
    res.send({
        result
    });
}
async function editClass(req, res){
    const {_id, cname} = req.body;
    // TODO 查清楚findOneAndUpdate的参数和 find 的区别
    const result = await classModel.updateOne({_id}, {cname});
    // const result await又需要用async
    res.send(
        req.body
    )
    console.log("修改班级")
}

async function addClass(req,res){
    const {cname} = req.body;
    const {classCount} = Number(await classModel.find().countDocuments()) +1;
    console.log(classCount)
    console.log(typeof(classCount))
    const result = await classModel.create({cname:cname, cid:classCount});
    res.send(
        req.body
    )
    console.log("添加班级")
}



module.exports = {getClasses, editClass,addClass};