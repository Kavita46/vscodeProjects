var express = require('express');
var router = express.Router();
const { getMajors, } = require('../controller/majorController');

// require('../controller/studentController');

// 查询所有班级
router.get('/getMajors', getMajors);

// router.post('/editClass', editClass)

// router.post('/addClass', addClass)
module.exports = router;
