const { adminsModel } = require('../model/adminsModel');
const { swipersModel } = require('../model/swipersModel');
const { uploadFiles, moveFiles, deleteFiles } = require('../utils/handleFiles')
// const path = require("path")
// const fs = require("fs")
let jwt = require('jsonwebtoken');

// 解码token获取user对象
async function getUserInfo(req, res) {
    const token = req.get('Authorization').split(" ")[1];
    console.log(token);
    if (token) {
        const { user } = jwt.verify(token, "PRIVATE_KEY");
        res.send({ user, code: 200 });

    } else {
        res.send({ code: 401 })
    }
}


// 登录
async function login(req, res, next) {
    let { account, password } = req.body;
    let message = await adminsModel.find({ account, password, status: 1 });
    if (message.length > 0) {
        let { _id, account, password } = message[0];
        let token = jwt.sign(
            {
                user:message[0]
            },//有效载荷
            'PRIVATE_KEY',
            { expiresIn: 200000 }
        );
        res.send({ token: 'Bearer ' + token, code: 200, msg: '用户登录成功' });
    } else {
        res.send({ code: 201, msg: '用户登录失败' });
    }
}
//管理员列表
async function getAllAdmins(req, res, next) {
    let message = await adminsModel.find();
    console.log(message);
    if (message.length > 0) {
        res.send({
            code: 200,
            msg: '获取管理员信息成功',
            message
        });
    } else {
        res.send({
            code: 201,
            msg: '获取管理员信息失败'
        });
    }
}
//新增管理员
async function addAdmins(req, res, next) {
    console.log(req.body);
    const { account, password, realname, telephone } = req.body
    console.log(account, password, realname, telephone);
    if (account && password && realname && telephone) {
        let message = await adminsModel.create({ account, password, realname, telephone, status: 1 })
        console.log(message);
        if (message._id) {
            res.send({
                code: 200,
                msg: '添加成功'
            });
        } else {
            res.send({
                code: 201,
                msg: '添加失败'
            });
        }

    } else {
        res.send({
            code: 201,
            msg: '参数不匹配'
        });
    }
}
//删除管理员
async function delAdmins(req, res, next) {
    const { _id } = req.body
    if (_id && _id != "61132f3ab30c00004d003602") {
        let message = await adminsModel.deleteOne({ _id })
        console.log(message);
        if (message.deletedCount) {
            res.send({
                code: 200,
                msg: '删除成功'
            });
        } else {
            res.send({
                code: 201,
                msg: '删除失败'
            });
        }

    } else {
        res.send({
            code: 201,
            msg: '参数不匹配,默认值不能删除'
        });
    }
}
//轮播图列表信息
async function getAllSwiper(req, res, next) {
    let message = await swipersModel.find({ state: 1 });
    if (message.length > 0) {
        res.send({
            message,
            meta: {
                msg: '获取成功',
                status: 200
            }
        });
    } else {
        res.send({
            message,
            meta: {
                msg: '获取失败',
                status: 201
            }
        });
    }
}
// 添加轮播图
async function addSwiper(req, res, next) {
    const { goods_id, image_src, open_type, navigator_url } = req.body;
    if (goods_id && image_src && navigator_url && open_type) {
        //state代表添加成功,show代表轮播图是否上架显示
        let result = await swipersModel.create({ goods_id, image_src, open_type, navigator_url, state: 1, show: 0 });
        try {
            let fromPath = "./public/temp";
            let toPath = "./public/images";
            let obj = { fromPath, toPath, filename }
            //移动到最终路径
            moveFiles(obj)
            //删除temp
            deleteFiles("./public/temp")
            //入库修改
            res.send({
                code: 200,
                msg: "上传成功"
            })
        } catch (e) {
            res.send({
                code: 500,
                msg: "上传失败"
            })
        }
    } else {
        res.send({
            code: 202,
            error: '参数错误'
        });
    }

}
// 轮播图上架
async function updateSwiperShow(req, res, next) {
    const { _id } = req.body
    if (_id) {
        const swiperObj = await swipersModel.findOne({ _id })
        if (swiperObj._id) {
            let result = await swipersModel.updateOne({ _id }, { show: !swiperObj.show });
            if (result) {
                res.send({
                    code: 200,
                    message: '轮播图状态修改成功'
                });
            } else {
                res.send({
                    code: 201,
                    error: '轮播图状态修改失败'
                });
            }
        } else {
            res.send({
                code: 202,
                error: '找不到轮播图,确认id是否正确'
            });
        }
    } else {
        res.send({
            code: 202,
            error: '参数错误'
        });
    }

}
var filename;
// 文件上传：临时上传
async function upload_temp(req, res) {
    //调用工具js中的uploadFiles函数，它会返回一个函数uplaod
    // let obj= { path : "./public/temp2", key : "file", size : 2000 }
    const upload = uploadFiles();
    //执行upload函数，必须要把req和res传进去
    upload(req, res, err => {
        if (err) {
            console.log("上传失败");
        } else {
            //只能在该函数下req.files才能够获取页面上传的文件
            console.log(req.files[0]);
            //为全局filename赋值
            filename = req.files[0].filename
            console.log(filename);
            res.send({
                code: 200,
                data: req.files[0]
            })
        }
    })
}
// // 删除文件的接口，需要传递一个文件名字
// async function deleteFiles(req, resp, next) {
//     // const { fileName } = req.body;
//     // const delPath = path.join(__dirname, "../public/images/" + fileName)
//     // console.log(fileName);
//     // try {
//     //     /**
//     //      * @des 判断文件或文件夹是否存在
//     //      */
//     //     if (fs.existsSync(delPath)) {
//     //         fs.unlinkSync(delPath);
//     //         resp.send({
//     //             code: 200,
//     //             msg: "删除成功"
//     //         });
//     //     } else {
//     //         resp.send({
//     //             code: 201,
//     //             msg: "删除失败，文件不存在"
//     //         });
//     //     }
//     // } catch (error) {
//     //     console.log(error);
//     //     resp.send({
//     //         code: 500,
//     //         msg: "删除失败，服务器异常"
//     //     });
//     // }
// }
//删除轮播图信息
async function deleteSwiper(req, res, next) {
    const { _id } = req.query;
    console.log(_id);
    // let array = ["60dff4570f0f00003f0079c3", "60dff4620f0f00003f0079c4", "610624f40b2a000043001b72", "60dff3ee0f0f00003f0079c2"]
    if (_id) {
        let { nModified } = await swipersModel.updateOne({ _id }, { state: 0 });
        if (nModified === 1) {
            res.send({
                code: 200,
                message: '轮播图删除成功'
            });
        } else {
            res.send({
                code: 201,
                error: '轮播图删除失败'
            });
        }
    } else {
        res.send({
            code: 405,
            error: '波哥御用数据,不要乱删...'
        });
    }

}
//根据编号查询轮播图
async function findByIdSwiper(req, res, next) {
    const { _id } = req.query
    if (_id) {
        let object = await swipersModel.findOne({ _id });
        if (object._id) {
            res.send({
                code: 200,
                data: object
            });
        } else {
            res.send({
                code: 201,
                error: "获取失败"
            });
        }
    } else {
        res.send({
            code: 202,
            error: "参数错误"
        });
    }

}
//修改轮播图
async function updateSwiper(req, res, next) {
    const { _id, goods_id, image_src } = req.body
    console.log(_id, goods_id, image_src);
    if (_id && goods_id && image_src) {
        let { nModified } = await swipersModel.updateOne({ _id }, { goods_id, image_src });
        try {
            let fromPath = "./public/temp";
            let toPath = "./public/images";
            let obj = { fromPath, toPath, filename }
            //移动到最终路径
            moveFiles(obj)
            //删除temp
            deleteFiles("./public/temp")
            //入库修改
            res.send({
                code: 200,
                msg: "上传成功"
            })
        } catch (e) {
            res.send({
                code: 500,
                msg: "上传失败"
            })
        }
        // if (nModified === 1) {
        //     res.send({
        //         code: 200,
        //         msg: "修改轮播图成功"
        //     });
        // } else {
        //     res.send({
        //         code: 201,
        //         error: "修改轮播图失败"
        //     });
        // }
    } else {
        res.send({
            code: 202,
            error: "参数错误"
        });
    }

}
module.exports = {
    login,
    getAllAdmins,
    getAllSwiper,
    addSwiper,
    deleteSwiper,
    updateSwiper,
    addAdmins,
    delAdmins,
    upload_temp,
    deleteFiles,
    updateSwiperShow,
    findByIdSwiper,
    getUserInfo
};