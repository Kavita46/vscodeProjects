var express = require('express');
var router = express.Router();
const {register,login}=require('../controller/userController')

//注册
router.post('/register',register);
//登录
router.get('/login',login);



module.exports = router;
