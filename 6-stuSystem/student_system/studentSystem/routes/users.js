var express = require('express');
var router = express.Router();

const {register , login} = require('../controllers/userController.js');

/* GET users listing. */
// 注册
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 登录
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
