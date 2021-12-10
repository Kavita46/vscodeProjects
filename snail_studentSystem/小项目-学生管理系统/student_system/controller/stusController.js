const stusModel = require('../models/stusModel');
const { uploadFiles, moveFiles, deleteFiles } = require('../utils/handleFiles');
//添加
async function add(req, res, next) {
    const { sname, age, gender, address, hobby, class_id } = req.body
    const result = await stusModel.create({ sname, age, gender, address, hobby: hobby.split(","), class_id });
    res.send({
        code: 200,
        result
    })
}
//渲染
async function show(req, res, next) {
    const result = await stusModel.find({ flag: "1" }).populate("class_id");
    res.send({
        result
    })
}
//删除
async function del(req, res, next) {
    const { _id } = req.body
    const result = await stusModel.updateOne({ _id }, { flag: "0" });
    res.send({
        result
    })
}
//根据Id渲染要修改的学生信息
async function getById(req, res, next) {
    const result = await stusModel.findOne(req.query);
    res.send({
        result
    })
}
//修改
async function upd(req, res, next) {
    const { _id, sname, age, gender, address, hobby, class_id } = req.body
    const result = await stusModel.updateOne({ _id }, { sname, age, gender, address, hobby: hobby.split(","), class_id });
    res.send({
        code: 200,
        result
    })
}
//搜索
async function search(req, res, next) {
    const { k } = req.query;
    let regExp = new RegExp(k)//默认就是 /值/
    const result = await stusModel.find({ flag: "1", $or: [{ sname: { $regex: regExp } }, { age: { $regex: regExp } }, { address: { $regex: regExp } }, { hobby: { $regex: regExp } }, { gender: { $regex: regExp } }] }).populate("class_id");
    res.send({
        result
    })
}
// async function search(req, res, next) {
//         const { k } = req.query;
//         let regExp = new RegExp(k)//默认就是 /值/
//         const result = await stusModel.find({flag:"1", sname: { $regex: regExp }}).populate("class_id");
//         res.send({
//             result
//         })
//     }

//分页（无条件）
async function getStusByPage(req, res, next) {
    const { pageindex, pagesize } = req.query;
    //当前页
    // let pageindex = 1;
    //页容量
    // let pagesize = 5;
    //总条数
    let count = await stusModel.find({ flag: "1" }).count();
    //总页数
    let pagecount = count % pagesize == 0 ? count / pagesize : parseInt(count / pagesize) + 1;
    //分页数组
    let skip = (pageindex - 1) * pagesize;
    let limit = pagesize - 0;
    let result = await stusModel.find({ flag: "1" }, {}, { skip, limit }).populate("class_id");
    res.send({
        result,
        pagecount: pagecount - 0,
        count,
        pageindex: pageindex - 0
    })
}
//临时上传
async function upload_temp(req, res) {
    //获取请求头保存的信息
    let imageUpload = uploadFiles();
    imageUpload(req, res, err => {
        if (err) {
            console.log("异常");
            res.send({ code: 202 })
        } else {
            console.log(req.files[0]);
            res.send({ head: req.files[0] })
        }
    })
}
//确认上传
async function upload_sure(req, res) {
    const { filename, _id } = req.query;
    if (filename != "") {
        let fromPath = "./public/temp";
        let toPath = "./public/img";
        let obj = { fromPath, toPath, filename };
        //移动
        moveFiles(obj);
        //删除临时目录temp
        deleteFiles("./public/temp");
        //修改数据库
        const result = await stusModel.updateOne({ _id }, { head: filename });
        res.send({
            result
        })
    }
}
module.exports = { add, show, del, getById, upd, search, getStusByPage, upload_temp, upload_sure }