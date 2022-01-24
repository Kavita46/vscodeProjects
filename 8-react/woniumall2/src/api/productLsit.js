import axios from "@/utils/axios";

export function findGoods() {
    return axios.get('/goods/findGoods');
}

export function findGoodsByName(data = {}) {
    return axios.post('/goods/findGoodsByName', data)
}

export function updateGoods(data = {}) {
    return axios.post('/goods/updateGoods', data)
}

export function deleteGoods(id) {
    return axios.post('/goods/deleteGoods', {
        id
    });
}

export function addGoods(data = {}) {
    return axios.post('/goods/addGoods', data);
}
