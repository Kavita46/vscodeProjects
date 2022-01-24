import axios from 'axios'
import StorageUtil from './StorageUtil'
import { notification } from "antd"
const myAxios = axios.create({
    baseURL: 'http://localhost:8002',
    timeout: 10000
})

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 调用api将token添加到请求头里(如果有的话)
    config.headers.token = StorageUtil.getToken();
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const response = error.response;
    console.log(error.message)
    if(response){
        const status = response.status;
        if(status ===500){
            notification.error({
                message:'错误',
                description:'服务器错误'
            })
        }else if (status ===401){
            notification.error({
                message:'错误',
                description:'权限过期,请重新登陆'
            })
        }else if(status ===404){
            notification.error({
                message:'错误',
                description:'访问路径不存在'
            })
        }
    }else if (error.message ==='Network Error'){
        notification.error({
            message:'错误',
            description:'网络错误,请重新尝试'
        })

    }else if (error.message.includes('timeout')){
        notification.error({
            message:'错误',
            description:'请求超时'
        })
    }
    return Promise.reject(error);
});
export default myAxios;