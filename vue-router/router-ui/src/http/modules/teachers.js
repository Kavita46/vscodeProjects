import axios from '../axios'
import { TEACHERS } from '../const.js'
// BUG export default 不能用解构
function getTeachers(data) {
    return axios({
        url: `/${TEACHERS}/getTeachers`,
        method: 'get',
        params: data
    })
}

function getById(data) {
    return axios({
        url: `/${TEACHERS}/getById`,
        method: 'get',
        params: { tid: data }
    })
}

function editTeacher(data) {
    // const { aname,tid, title, age, sex, years } = data;
    return axios({
        url: `/${TEACHERS}/editTeacher`,
        method: 'post',
        data: data
    })
}

export default { getTeachers, editTeacher, getById }
// function getById(data) {
//     let myaxios = axios({
//         url: `/${STUDENTS}/getById`,
//         method: 'get',
//         params: { _id: data }
//     })

//     console.log(myaxios);
//     return myaxios
// }

// function editStudent(data) {
//     const { _id, sname, age, imgs, address, hobby, gender, cla_id, score, major } = data;

//     return axios({
//         url: `/${STUDENTS}/editStudent`,
//         method: 'post',
//         data: {
//             _id: _id,
//             sname: sname,
//             age: age,
//             address: address,
//             hobby: hobby.join(),
//             gender: gender,
//             cla_id: cla_id,
//             imgs: imgs,
//             score: score,
//             major:major
//         }
//     })

// }

// // POST 是data, get 是 params
// function deleteStudent(data) {
//     console.log(data);
//     return axios({
//         url: `/${STUDENTS}/deleteStudent`,
//         method: 'post',
//         data: { _id: data }

//         // { _id }
//     })

// }

// function addStudent(data) {
//     console.log(data);

//     return axios({
//         url: `/${STUDENTS}/addStudent`,
//         method: 'post',
//         data: {
//             sname: data.sname,
//             age: data.age,
//             gender: data.gender,
//             address: data.address,
//             hobby: data.hobby.join(',')
//         }
//     })
// }

// function searchStudent(data){
//     console.log(data);
//     return axios({
//         url:`/${STUDENTS}/searchStudent`,
//         method:'get',
//         data:data
//     })
// }
