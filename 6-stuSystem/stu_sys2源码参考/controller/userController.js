const userModel= require('../models/userModel')

//注册
async  function register(req, res, next) {
    // const {username,password}=req.body
    //添加
    // userModel.create({username,password})
    const result=await userModel.create(req.body);
    console.log(result);
    if(result._id){
        res.send({code:200})
    }else{
        res.send({code:202})
    }
    
}
//登录
async  function login(req, res, next) {
    // const {username,password}=req.query
    //添加
    // userModel.create({username,password})
    const result=await userModel.findOne(req.query);
    console.log(result);
    res.send(result)
    
}

module.exports={register,login}