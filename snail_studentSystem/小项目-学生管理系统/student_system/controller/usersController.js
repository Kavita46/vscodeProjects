const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const { KEY } = require('../utils/const');
const { uploadFiles, moveFiles, deleteFiles } = require('../utils/handleFiles');
//登录
async function login(req, res, next) {
    const result = await usersModel.findOne(req.query);
    if (result != null) {
        //登录成功，产生token
        const token = jwt.sign(
            { user: result },//保存的数据，一般是user对象
            KEY,//密钥
            { expiresIn: 60 * 60 }//设置过期时间 s
        )
        res.send({
            code: 200,
            result,
            token: "Bearer " + token
        })
    } else {
        res.send({
            code: 202,
            msg: "账号或密码错误"
        })
    }
}
//注册
async function register(req, res, next) {
    const result = await usersModel.create(req.body);
    res.send({
        code: 200
    })
}
//注册时判断用户名是否已存在
async function checked(req, res, next) {
    const result = await usersModel.findOne(req.query);
    console.log(req.query);
    if (result == null) {
        res.send({ code: 200, msg: "用户名可用" })
    } else {
        res.send({ code: 202, msg: "用户名已存在,请重试" })
    }
}
//根据名字搜索
async function getByName(req, res, next) {
    const result = await usersModel.findOne(req.query);
    res.send({
        result
    })
}
//登录成功后渲染用户名
async function getUserInfo(req, res, next) {
    //获取请求头保存的信息
    const token = req.get('Authorization').split(" ")[1];
    //解码
    const { user } = jwt.verify(token, KEY)
    res.send({ user })
}
//修改密码时判断旧密码是否正确
async function checkedpsw(req, res, next) {
    const { _id, oldpsw } = req.query;
    const result = await usersModel.findOne({ _id });
    console.log(req.query.oldpsw);
    console.log(result.password);
    if (result.password == req.query.oldpsw) {
        res.send({ code: 200, msg: "密码正确" })
    } else {
        res.send({ code: 202, msg: "密码输入错误❌,请重试" })
    }
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
    const { filename, _id, password } = req.query;
    if (filename != "") {
        let fromPath = "./public/temp";
        let toPath = "./public/img";
        let obj = { fromPath, toPath, filename };
        console.log(password);
        //移动
        moveFiles(obj);
        //删除临时目录temp
        deleteFiles("./public/temp");
        //修改数据库
        const result = await usersModel.updateOne({ _id }, { head: filename, password: password });
        res.send({
            result
        })
    } else {
        const result = await usersModel.updateOne({ _id }, { password: password });
        res.send({
            result
        })
    }
}
module.exports = { register, login, checked, getByName, getUserInfo, checkedpsw, upload_temp, upload_sure }