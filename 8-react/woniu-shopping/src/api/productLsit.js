import axios from "@/utils/axios";

export function findGoods() {
    return axios.get('/goods/findGoods');
}

export function addGoods(data = {}) {
    return axios.post('/goods/addGoods', data);
}

export function searchGoods(data={}){
    return axios.post('/goods/findGoodsByName',data)
}

export function deleteGoods(data={}){
    return axios.post('/goods/deleteGoods',data)
}