var express = require('express');
var router = express.Router();
const {upload_temp, upload_sure,getBanners} = require('../controller/bannerController');

// 查询所有班级
router.post('/upload_temp', upload_temp);
router.get('/upload_sure', upload_sure);

router.get('/getBanners', getBanners);
module.exports = router;
