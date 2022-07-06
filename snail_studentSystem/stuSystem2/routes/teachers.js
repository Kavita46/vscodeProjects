var express = require('express');
var router = express.Router();
const { getTeachers, editTeacher, getById } = require('../controller/teacherController');

// require('../controller/studentController');

// 查询所有班级
router.get('/getTeachers', getTeachers);

router.post('/editTeacher', editTeacher)

router.get('/getById', getById)
module.exports = router;
