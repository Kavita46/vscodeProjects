var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//跨域
var allowCrossDomain = function (req, res, next) {
  // 设置允许跨域访问的请求源（* 表示接受任意域名的请求）
      res.header("Access-Control-Allow-Origin", "*");
      // 设置允许跨域访问的请求头
      res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept,Authorization");
      // 设置允许跨域访问的请求类型
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      // 同意 cookie 发送到服务器（如果要发送cookie，Access-Control-Allow-Origin 不能设置为星号）
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
  };


//数据库开服
require('./utils/db')
const jwtAuth = require('./utils/jwtAuth')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stusRouter = require('./routes/stus');
var classRouter = require('./routes/class');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//使用拦截规则，请放在下面这行的下面，代表静态资源不会被拦截
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCrossDomain);
// app.use(jwtAuth);  

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stus',stusRouter);
app.use('/class',classRouter);

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

app.listen(3000,function(){
  console.log("3000开服成功");
})

