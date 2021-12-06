const classModel = require("../models/classModel");


// async function getClasses(req, res) {
//     try {
//         const classes = await classModel.find();
//     }
//     catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }

//     res.status(200).json({
//         message: "Success",
//         data: classes
//     });
// }


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



module.exports = {getClasses, editClass};