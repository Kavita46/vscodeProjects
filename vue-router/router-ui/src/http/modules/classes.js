import axios from '../axios'
import { CLASSES } from '../const.js'


// BUG export default 不能用解构

// 1-注册


function getStudents(data) {
    return axios({
        url: `/${STUDENTS}/getStudents`,
        method: 'get',
        params: data
    })
}

function getClasses(data) {
    return axios({
        // http://localhost:7777/classes/getClasses
        url: 'http://localhost:7777/classes/getClasses',
        method: 'get',
        params: data

    })
}

function editClass(data) {
    console.log('data需要传入 const {_id, cname} = req.body; ');
    console.log('data = ' + data);
    return axios({
        url: `/${CLASSES}/editClass`,
        type: 'post',
        data: data

    })
}

function addClass(data) {
    console.log(data)
    return axios({
        // url:'http://localhost:7777/classes/addClass'
        url: 'http://localhost:7777/classes/addClass',
        method:'post',
        data: data
    })
}

export default {
    getClasses, addClass
}