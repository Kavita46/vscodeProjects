import axios from '../axios'
import { EXAM } from '../const.js'

function getExams(data) {
    return axios({
        url: `/${EXAM}/getExams`,
        method: 'get',
        params: data
    })
}

function addExam(data) {
    const { cname, tname, time, site, isOpen } = data;
    return axios({
        url: `/${EXAM}/addExam`,
        method: 'post',
        data: {
            cname: cname,
            tname: tname,
            time: time,
            site: site,
            isOpen: isOpen,
            flag: 0
        }

    })
}

function censorExam(data) {
    return axios({
        url: `/${EXAM}/censorExam`,
        method: 'post',
        data: data
    })
}

export default { getExams, addExam, censorExam}
