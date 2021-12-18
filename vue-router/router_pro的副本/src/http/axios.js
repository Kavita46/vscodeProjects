import axios from 'axios'
// 拦截请求

import router from '../router'
let myaxios = axios.create({
    baseURL: 'http://localhost:7777',

    timeout: 3000
    // 超时
})

// myaxios.interceptors.response.use(config => {
//     // 发送请求之后返回的数据(res.send?)
//     // console.log(config);
//     // console.log(config.data);
//     return config.data;
// }, err=>{
//     console.log(err.response.status);
//     if(err.response.status==401){
//         router.push('/home')
//     }
// })


myaxios.interceptors.response.use(config => {
    // 发送请求之后返回的数据(res.send?)
    // console.log(config);
    // console.log(config.data);
    return config.data;
})

export default myaxios