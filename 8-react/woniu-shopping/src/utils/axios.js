import axios from "axios";
import StorageUtil from "./StorageUtil";
import {notification} from "antd";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8002',
    timeout: 10000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // console.log('请求拦截config：', config)
    // 在发送请求之前做些什么

    config.headers.token = StorageUtil.getToken();

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    const response = error.response;
    console.log(error.message)
    if (response) {
        const status = response.status;
        if (status === 500) {
            notification.error({
                message: '错误',
                description: '服务器错误'
            })
        } else if (status === 401) {
            notification.error({
                message: '错误',
                description: '权限过期，请重新登录'
            });
            window.location.href = '/login';
        } else if (status === 404) {
            notification.error({
                message: '错误',
                description: '访问路劲不存在'
            })
        }
    } else if (error.message === 'Network Error') {
        notification.error({
            message: '错误',
            description: '网络错误，请重新尝试'
        })
    } else if (error.message.includes('timeout')) {
        notification.error({
            message: '错误',
            description: '请求超时'
        })
    }
    return Promise.reject(error);
});

export default instance;
