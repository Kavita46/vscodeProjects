const expressJwt = require('express-jwt');
const {KEY} = require('./const');

const jwtAuth = expressJwt({
secret:KEY,
// 采取HS256算法
algorithms:['HS256'],
// 拦截未登录
credentialsRequired:true
}).unless({

    // 拦截的白名单, 这里放行了以下方法
    // path:['/users/login','/users/register','/students/getByPages']

    path:['/users/login','/users/register']

})

module.exports = jwtAuth;