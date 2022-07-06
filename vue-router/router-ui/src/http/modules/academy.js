import axios from '../axios'
import { ACADEMY} from '../const.js'

function getAcademys(data) {
    return axios({
        url: `/${ACADEMY}/getAcademys`,
        method: 'get',
        params: data
    })
}

// function editScore(data) {
//     const { _id, score } = data;
//     return axios({
//         url: `/${SCORES}/editScore`,
//         method: 'post',
//         data: {
//             _id: _id,
//             score: score,
//         }
//     })
// }

export default {getAcademys }
