import axios from '../axios'
import {USERS} from '../const.js'


// BUG export default 不能用解构

function register(data){
    return axios({
        url:USERS + '/register',
        method:'post',
        data:data
        })
}
function login(data){

return axios({
url:`/${USERS}/login`,
method:'get',
params:data

})
}



export default{register, login
}