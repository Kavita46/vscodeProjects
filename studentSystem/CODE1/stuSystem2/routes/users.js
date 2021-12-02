var express = require('express');
var router = express.Router();
const userModel = require('../models/userModel');
const {register} = require('../controllers/userController');
/* GET users listing. */
router.post('/register',register);

module.exports = router;
