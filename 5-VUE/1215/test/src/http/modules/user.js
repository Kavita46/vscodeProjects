// modules模块里的JS文件用来封装所有的请求方法

// import axios from  '../axios.js'
import {USERS} from '../const.js'

import myaxios from '../myaxios'

//注册
function register(data){
   return myaxios({
       url:USERS+"/register",
       method:"post",
       data
   })
} 
//登录
function login(params){
    return myaxios({
        url:`${USERS}/login`,
        method:"get",
        params
    })
 } 

export default {register,login}