import axios from '../axios'
import { MAJOR} from '../const.js'

function getMajors(data) {
    return axios({
        url: `/${MAJOR}/getMajors`,
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

export default {getMajors }
