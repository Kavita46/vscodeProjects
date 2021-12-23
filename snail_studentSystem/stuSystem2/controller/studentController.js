const studentModel = require("../models/studentModel");
const classModel = require("../models/classModel");
const { uploadFiles, moveFiles, deleteFiles } = require("../utils/handleFiles");

// 1-查询所有学生函数
async function getStudents(req, res, next) {
    const result = await studentModel.find().populate("cla_id");
    res.send({ result });
}
// 2-删除单个学生函数
async function deleteStudent(req, res, next) {
    // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
    const result = await studentModel.findOneAndUpdate({ _id: req.body._id }, { flag: 0 }, { new: true });

    res.send({ result });

}
// 3-修改学生函数
async function editStudent(req, res, next) {

    console.log('前端传过来的是')
    console.log(req.body)
    const { _id,imgs, sname, age, address, gender, hobby, cla_id } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组

    // 需要传进来一个字符串
    console.log('这里的hobby是' + hobby)
    const result = await studentModel.updateOne({ _id }, { imgs,sname, age, address, gender, cla_id, hobby: hobby.split(",") });

    console.log('head的值是' + imgs);
    // 移动图片

    let fromPath = './public/temp';
    let toPath = './public/images';

    let obj = { fromPath, toPath, filename:imgs };
    // 移动文件
    moveFiles(obj);
    // 删除临时文件的文件夹
    deleteFiles('./public/temp/');

    res.send(
        req.body
    )
}
// 4-通过Id查询
async function getById(req, res, next) {

    const { _id } = req.query;
    const result = await studentModel.findOne(req.query);
    res.send({ result });
}

// 4.1-这个search没有被用到
async function searchStudent(req, res, next) {

    const { k } = req.query;

    let regExp = new RegExp(k);


    const result = await studentModel.find({ sname: { $regex: regExp } }).populate("cla_id");
    res.send({ result })

    // 返回的这个result 是符合条件的所有数据
}
// BUG 5-分页带搜索
async function getByPages(req, res, next) {
    let { pageIndex, pageSize, k } = req.query;
    pageSize = Number.parseInt(pageSize);
    pageIndex = Number.parseInt(pageIndex);
    // 如果k不为undefined,则查询再分页
    console.log("k的值是" + k);
    console.log('k的长度是' + k.length);

    console.log('k的类型是' + typeof (k));
    if (k != '') {
        // 有搜索值
        let regExp = new RegExp(k);
        let totalResult = await studentModel.find({ flag: 1, sname: { $regex: regExp } });
        let count = totalResult.length;
        let result = await studentModel.find({ flag: 1, sname: { $regex: regExp } }, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize }).populate("cla_id");
        let pageCount = Math.ceil(count / pageSize);
        res.send({
            result,
            pageIndex,
            pageCount,
            pageSize,
            count
        })
    } else {
        // 没搜索值
        let result = await studentModel.find({ flag: 1 }, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize }).populate("cla_id");
        let totalResult = await studentModel.find({ flag: 1 });
        let count = totalResult.length;
        console.log('count' + count);
        let pageCount = Math.ceil(count / pageSize);
        console.log('pageCount' + pageCount)

        res.send({
            result,
            pageIndex,
            pageCount,
            pageSize,
            count
        })
    }
    // const result = await studentModel.find({ sname: { $regex: regExp }, flag: 1 }).populate("cla_id");
    // res.send({ result })
    // 如果k为undefined,则直接分页
    // let count = await studentModel.find().countDocuments({ flag: 1 , sname: { $regex: regExp }});
    //     let result = await studentModel.find({ flag: 1, sname: { $regex: regExp } }, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize }).populate("cla_id");
    // let count = result.length;
    // let pageCount = Math.ceil(count / pageSize);
    // const pageIndex = 1;
    // // const{pageIndex} = req.query
    // const pageSize  = 5;


}
// 6-添加学生
async function addStudent(req, res, next) {
    console.log("req.body")
    const { sname, age, address, gender, hobby } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组
    const result = await studentModel.create({ sname, age, address, gender, hobby: hobby.split(",") });
    res.send(
        req.body
    )
}

// 上传头像图片方法


async function uploadTemp(req, res, next) {
    let imageUpload = await uploadFiles();
    imageUpload(req, res, err => {
        if (err) {
            console.log('异常');
            res.send({ code: 202 })
        }
        else {
            console.log(req.files[0])
            // 这里 如果 request不send  的话就会被挂起
            res.send({ head: req.files[0].filename })
            // res.send({ head: req.files[0] });
        }
    })
}

async function uploadConfirm(req, res, next) {
    const { filename } = req.query;
    console.log('现在的filename是' + filename)
    let fromPath = './public/temp';
    let toPath = './public/images';

    let obj = { fromPath, toPath, filename };
    // 移动文件
    moveFiles(obj);
    // 删除临时文件的文件夹
    deleteFiles('./public/temp/');
    // BUG 这里可以上传任意文件,如何验证文件是图片?
    // TAG 如果/images目录里含有文件名为filename的文件
    if (fs.existsSync('./public/images/' + filename)) {
        res.send({ code: 200 });
    } else {
        res.send({ code: 201 });
    }


    // 最后修改数据库里的头像


}



module.exports = { uploadTemp, uploadConfirm, getStudents, deleteStudent, editStudent, getById, searchStudent, getByPages, addStudent };
