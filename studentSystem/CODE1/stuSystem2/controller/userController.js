const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { KEY } = require("../utils/const.js");

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

  // 如果登陆成功,则生成token
  if (result._id) {
    const token = jwt.sign(
      // 保存任何数据,加密后随时解码

      { user: result },  //保存的数据,一般是user对象
      KEY,    //秘钥
      { expiresIn: '5' }     //过期时间

    );

    res.send({ result, token: "Bearer " + token });
  } else {

    // BUG 登录失败的时候这个202进入不了
    res.send({ code: 202 })
  }

}

// 从token获取用户信息
async function getUserInfo(req,res){
const token_o = req.get('Authorization');
console.log(token_o);



jwt.verify(token, KEY)

}

module.exports = { register, login, getUserInfo };
