import axios from 'axios'
//创建axios对象，顺便配置url地址、和超时的时间
let myaxios = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout:3000
    // 3000毫秒=3秒
});

// 拦截响应
myaxios.interveptors.response.use(config=>{
    console.log(config);
    return config.data
})


export default myaxios;