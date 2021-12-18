import axios from 'axios'
// 拦截请求

let myaxios = axios.create({
    baseURL: 'http://localhost:7777',

    timeout: 3000
    // 超时
})

myaxios.interceptors.response.use(config => {
    // 发送请求之后返回的数据(res.send?)
    // console.log(config);
    // console.log(config.data);

    console.log(1);
    return config.data;


})
export default myaxios