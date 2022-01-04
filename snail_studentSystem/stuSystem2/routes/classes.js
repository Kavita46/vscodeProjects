var express = require('express');
var router = express.Router();
const { getClasses, editClass,addClass } = require('../controller/classController');

// require('../controller/studentController');

// 查询所有班级
router.get('/getClasses', getClasses);

router.post('/editClass', editClass)

router.post('/addClass', addClass)
module.exports = router;
