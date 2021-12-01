var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '海拉鲁呀哈哈' });
});

module.exports = router;
