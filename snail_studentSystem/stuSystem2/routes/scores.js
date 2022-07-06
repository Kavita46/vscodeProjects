var express = require('express');
var router = express.Router();
// , deleteScore, editScore, getById,addScoreRecord
const {getScoresById,getScoreTable, addScoreRecord, deleteScoreRecord,getFullTable,editScore} 
= require('../controller/scoreController');

// getScoreTable
// 查询所有成绩表
router.get('/getScoreTable', getScoreTable);
router.get('/getFullTable', getFullTable);
// 删除学生
router.post('/deleteScoreRecord', deleteScoreRecord);
// // 查询一个学生
router.get('/getScoresById', getScoresById);
// // 修改学生
router.post('/editScore', editScore);
// 搜索功能
// router.get('/searchScore', searchScore)
// // 分页功能
// router.get('/getByPages', getByPages);

router.post('/addScoreRecord', addScoreRecord)
module.exports = router;
