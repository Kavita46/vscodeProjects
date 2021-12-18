import axios from '../axios'
import { STUDENTS } from '../const.js'
// BUG export default 不能用解构

function getStudents(data) {
    return axios({
        url: `/${STUDENTS}/getStudents`,
        method: 'get',
        params: data
    })
}

function getById(data) {
    let myaxios = axios({
        url: `/${STUDENTS}/getById`,
        method: 'get',
        params: { _id: data }
    })

    console.log(myaxios);
    return myaxios
}

function editStudent(data) {
    const { _id, sname, age, address, hobby, gender, cla_id } = data;

    return axios({
        url: `/${STUDENTS}/editStudent`,
        method: 'post',
        data: {
            _id: _id,
            sname: sname,
            age: age,
            address: address,
            hobby: hobby.join(),
            gender: gender,
            cla_id: cla_id
        }
    })

}

// POST 是data, get 是 params
function deleteStudent(data) {
    console.log(data);
    return axios({
        url: `/${STUDENTS}/deleteStudent`,
        method: 'post',
        data: { _id: data }

        // { _id }
    })

}

function addStudent(data) {
    console.log(data);

    return axios({
        url: `/${STUDENTS}/addStudent`,
        method: 'post',
        data: {
            sname: data.sname,
            age: data.age,
            gender: data.gender,
            address: data.address,
            hobby: ''
        }
    })
}

// function searchStudent(data){
//     console.log(data);
//     return axios({
//         url:`/${STUDENTS}/searchStudent`,
//         method:'get',
//         data:data
//     })
// }



export default { getStudents, deleteStudent, addStudent, getById, editStudent }