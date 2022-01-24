import axios from "@/utils/axios";

export function getAccountList() {
    return axios.post('/users/getAccountList');
}

export function delAccount(id) {
    return axios.get('/users/delAccount', {
        params: {
            id
        }
    });
}

export function accountadd(data = {}) {
    return axios.post('/users/accountadd', data);
}
