import axios from '../axios'
import { USERS } from '../const.js'
// BUG export default 不能用解构
// 1-注册
function register(data) {
    return axios({
        url: USERS + '/register',
        method: 'post',
        data: data
    })
}
// 2-登录
function login(data) {
    return axios({
        url: `/${USERS}/login`,
        method: 'get',
        params: data
    })
}

// 3-临时上传图片

function uploadTemp(data) {

    console.log(data);
    return axios({
        url: `/${USERS}/uploadTemp`,
        method: 'post',
        data: data
    })
}

function getUserInfo(){
    return axios({
        url: `/${USERS}/getUserInfo`,
        method: 'get'
    })
}
// 4-确认上传图片

export default {
    register, login,uploadTemp,getUserInfo
}