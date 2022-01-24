import axios from "@/utils/axios";

export function findRoles() {
    return axios.get('/roles/findRoles');
}

export function addRoles(data = {}) {
    return axios.post('/roles/addRoles', data);
    // name, createTime
}

export function addAuth(data={}){
    return axios.post('/roles/addAuth', data)
    // id, authTime, authUser, menus
}

export function deleteRoles(data={}){
    return axios.post('/roles/deleteRoles', data)
}
