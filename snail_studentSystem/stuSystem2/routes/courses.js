var express = require('express');
var router = express.Router();
// , deleteScore, editScore, getById,addScoreRecord
const { getCourses,deleteCourse ,editCourse}
    = require('../controller/courseController');

// getScoreTable
// 查询所有成绩表
router.get('/getCourses', getCourses);
// 删除学生
router.post('/deleteCourse', deleteCourse)
// // 查询一个学生
// router.get('/getById', getById);
// // 修改学生
router.post('/editCourse', editCourse);
// 搜索功能
// router.get('/searchScore', searchScore)
// // 分页功能
// router.get('/getByPages', getByPages);

// router.post('/addScoreRecord', addScoreRecord)
module.exports = router;

