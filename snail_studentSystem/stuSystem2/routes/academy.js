var express = require('express');
var router = express.Router();
const { getAcademys, } = require('../controller/academyController');

// require('../controller/studentController');

// 查询所有班级
router.get('/getAcademys', getAcademys);

// router.post('/editClass', editClass)

// router.post('/addClass', addClass)
module.exports = router;

