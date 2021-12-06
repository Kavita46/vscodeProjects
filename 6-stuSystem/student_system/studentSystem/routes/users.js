var express = require('express');
var router = express.Router();

const {register , login} = require('../controller/userController.js');

/* GET users listing. */
// 注册
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});


// 登录
router.get('/register', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
