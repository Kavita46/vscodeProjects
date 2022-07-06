import axios from '../axios'
import { SCORES } from '../const.js'
// BUG export default 不能用解构

function getScoreTable(data) {
    return axios({
        url: `/${SCORES}/getScoreTable`,
        method: 'get',
        params: data
    })
}

function getFullTable(data) {
    return axios({
        url: `/${SCORES}/getFullTable`,
        method: 'get',
        params: data
    })
}

function getScoresById(data) {
    return axios({
        url: `/${SCORES}/getScoresById`,
        method: 'get',
        params: { sid: data }
    })
}

function editScore(data) {
    const { _id, score } = data;
    return axios({
        url: `/${SCORES}/editScore`,
        method: 'post',
        data: {
            _id: _id,
            score: score,
        }
    })
}

export default { getScoreTable, getFullTable, getScoresById, editScore }
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
