const studentModel = require("../models/studentModel");
const classModel = require("../models/classModel");
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
    console.log("req.body")
    const { _id, sname, age, address, gender, hobby, cla_id } = req.body;
    // TODO 修改函数
    // BUG 这里hobby空值的时候会成为一个带空白的数组

    console.log('这里的hobby是' + hobby)
    const result = await studentModel.updateOne({ _id }, { sname, age, address, gender, cla_id, hobby: hobby.split(",") });
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


module.exports = { getStudents, deleteStudent, editStudent, getById, searchStudent, getByPages, addStudent };
