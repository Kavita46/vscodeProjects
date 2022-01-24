import axios from "@/utils/axios";

export function findRoles() {
    return axios.get('/roles/findRoles');
}

export function addAuth(data = {}) {
    return axios.post('/roles/addAuth', data);
}
