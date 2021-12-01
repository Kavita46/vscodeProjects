const expressJwt=require('express-jwt')
const {KEY}=require('./const')
const jwtAuth=expressJwt({
    //密钥
    secret:KEY,
    //采用HS256算法进行加密
    algorithms:['HS256'],
    //如果未登录也要进行拦截
    credentialsRequired:true
}).unless({
    //白名单
    path:['/users/login','/users/register']
})

module.exports=jwtAuth;