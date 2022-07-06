var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 数据库开服
require("./utils/db.js");
var allowCrossDomain = function (req, res, next) {
  // 只允许这个域名跨域
  // res.header('Access-Control-Allow-Origin','https://localhost:8080');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Origin,Accept,Content-Type,Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
}

// require了路由,一定会执行的代码
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/students');
var classRouter = require('./routes/classes');
var bannerRouter = require('./routes/banners')
var scoreRouter = require('./routes/scores')
var courseRouter = require('./routes/courses')
var teacherRouter = require('./routes/teachers')
var academyRouter = require('./routes/academy')
var majorRouter = require('./routes/major')
var examRouter = require('./routes/exam')
// var scoreRouter = require('./routes/scores')
// var bannerRouter = require('./routes/banners')
// var scoreRouter = require('./routes/scores')
const jwt = require('express-jwt');

const jwtAuth = require("./utils/jwtAuth.js");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// 先经过public(所有静态页面)的路径
app.use(express.static(path.join(__dirname, 'public')));


// 可以使用跨域来访问
app.use(allowCrossDomain);
// 通过路径之后再使用拦截规则
// app.use(jwtAuth);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentRouter);
app.use('/classes', classRouter);
app.use('/banners', bannerRouter);
app.use('/scores', scoreRouter);
app.use('/courses', courseRouter)
app.use('/teachers', teacherRouter)
app.use('/major', majorRouter)
app.use('/academy', academyRouter)
app.use('/exam', examRouter)
// app.use('/scores', scoreRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

const portNum = 7777;
app.listen(portNum, function () {
  console.log('Server is running on port ' + portNum);
});
