import axios from '../axios'
import { COURSES } from '../const.js'
// BUG export default 不能用解构

function getCourses(data) {
    return axios({
        url: `/${COURSES}/getCourses`,
        method: 'get',
        params: data
    })
}

function deleteCourse(data) {
    return axios({
        url: `/${COURSES}/deleteCourse`,
        method: 'post',
        data: { _id: data }
        // { _id }
    })
}

function editCourse(data) {
    const { _id, cname, tname, aname, type } = data;
    return axios({
        url: `/${COURSES}/editCourse`,
        method: 'post',
        data: {
            _id: _id,
            cname: cname,
            aname: aname,
            type: type,
            tname: tname
        }
    })
}



export default { getCourses, deleteCourse, editCourse }