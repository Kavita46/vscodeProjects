const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { KEY } = require("../utils/const.js");
const { uploadFiles, moveFiles, deleteFiles } = require("../utils/handleFiles");

const fs = require('fs');

async function register(req, res, next) {
  const { username, password } = req.body;
  // userModel.create({username, password});

  // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
  const result = await userModel.create(req.body);

  // resolve(result);
  res.send({
    result
  });
}
// TODO: 异步 async 相关知识
// TODO: mongoDB populate
// TODO 大括号解离
// TODO: 三个点 ...
// TODO map和forEach的区别
async function login(req, res, next) {
  const { username, password } = req.query;
  // userModel.create({username, password});

  // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
  const result = await userModel.findOne(req.query);

  // 这里如果没有查询到(登录失败),返回的result 是个null

  // 如果登陆成功,则生成token
  if (result != null) {
    const token = jwt.sign(
      // 保存任何数据,加密后随时解码

      { user: result },  //保存的数据,一般是user对象
      KEY,    //秘钥
      { expiresIn: '7d' }     //过期时间

    );

    res.send({ result, token: "Bearer " + token });
  } else {

    // BUG 登录失败的时候这个202进入不了
    res.send({ code: 202 })
  }

}

// 从token获取用户信息
async function getUserInfo(req, res) {
  const token_o = req.get('Authorization');
  console.log(token_o);
  token = token_o.split(' ')[1];

  const { user } = jwt.verify(token, KEY)

  console.log(user);

  res.send({ user });
  // res.send(token, user);
}

// 修改个人信息
async function updateUserInfo(req, res){
  const{_id, username,password, head} = req.body;
  const result = await userModel.updateOne({_id},{username,password,head});

  res.send(req.body);
}


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

      res.send({ head: req.files[0] });
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
if(fs.existsSync('./public/images/' + filename)){

  res.send({ code: 200 });
}else{
  res.send({code:201});
}


  // 最后修改数据库里的头像


}

module.exports = { register, login, getUserInfo, uploadTemp, uploadConfirm,
updateUserInfo
};
