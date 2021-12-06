var express = require('express');
var router = express.Router();
const {register, login, getUserInfo} = require('../controller/userController');

router.post('/register', register);
router.get('/login', login);

router.get('/getUserInfo', getUserInfo)
module.exports = router;
