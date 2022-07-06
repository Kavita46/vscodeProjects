var express = require('express');
var router = express.Router();
const { getExams, addExam, censorExam } = require('../controller/examController');

// require('../controller/studentController');

// 查询所有班级
router.get('/getExams', getExams);

// router.post('/editClass', editClass)

router.post('/addExam', addExam)

router.post('/censorExam', censorExam)
module.exports = router;
