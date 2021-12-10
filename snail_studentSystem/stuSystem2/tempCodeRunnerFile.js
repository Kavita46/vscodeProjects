var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 数据库开服
require("./utils/db.js");

// require了路由,一定会执行的代码
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/students');
var classRouter = require('./routes/classes');
const jwt = require('express-jwt');

require("./utils/jwtAuth");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// 先经过public(所有静态页面)的路径,再使用拦截规则
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwtAuth);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentRouter);
app.use('/classes', classRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

const portNum = 3333;
app.listen(portNum, function(){
  console.log('Server is running on port ' + portNum);
});
