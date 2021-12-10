var express = require('express');
var router = express.Router();
const {getStudents,deleteStudent, editStudent, getById, searchStudent
,getByPages, addStudent} = require('../controller/studentController');


// 查询所有学生
router.get('/getStudents', getStudents);
// 删除学生
router.post('/deleteStudent', deleteStudent);
// 查询一个学生
router.get('/getById', getById);
// 修改学生
router.post('/editStudent', editStudent);
// 搜索功能
router.get('/searchStudent', searchStudent)
// 分页功能
router.get('/getByPages', getByPages);

router.post('/addStudent', addStudent)
module.exports = router;
