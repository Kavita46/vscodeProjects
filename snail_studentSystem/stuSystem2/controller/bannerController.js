const jwt = require("jsonwebtoken");
const { uploadFiles, moveFiles, deleteFiles } = require("../utils/handleFiles");

const fs = require('fs');
const bannerModel = require('../models/bannerModel');

async function upload_temp(req, res) {

    let imageUpload = uploadFiles();

    const xx = imageUpload(req, res, err => {

        if (err) {
            console.log('异常');
            res.send({
                code: 500,
                msg: '上传失败'
            })
        } else {
            res.send({ banners: req.files })
        }
    }
    )



}

async function upload_sure(req, res) {

    let { filenames } = req.query;

    filenames = filenames.split(',');

    let fromPath = './public/temp/';
    let toPath = './public/banner_imgs/';

    // 遍历并且保存到服务器

    await bannerModel.deleteMany({});

    filenames.forEach(async function (item) {
        let obj = { fromPath, toPath, filename: item };
        moveFiles(obj)

        let data = bannerModel.create({ picName: item })
    })
    // 删除temp缓存
    deleteFiles(fromPath);

    // 保存到数据库

    // let data = await bannerModel.insertMany(filenames);
    res.send({
        code: 200,
        msg: '上传成功'
    })
}

async function getBanners(req, res) {
    const result = await bannerModel.find();



    res.send({ result })
}


module.exports = { upload_temp, upload_sure, getBanners }



