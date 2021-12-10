var express = require('express');
var router = express.Router();
const { register, login, getUserInfo, uploadTemp, uploadConfirm
,updateUserInfo
} = require('../controller/userController');

router.post('/register', register);
router.get('/login', login);

router.get('/getUserInfo', getUserInfo);

router.post('/uploadTemp', uploadTemp);

router.get('/uploadConfirm', uploadConfirm)

router.post('/updateUserInfo', updateUserInfo)
module.exports = router;