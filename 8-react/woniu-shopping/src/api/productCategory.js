import axios from "@/utils/axios";

/**
 * @description 查询商品分类
 * @param params
 * @return {Promise<AxiosResponse<any>>}
 */
export function findCategroy(params = {parentId: 0, pageNumber: 1, pageSize: 10}) {
    return axios.get('/categroy/findCategroy', {
        params
    });
}

export function addCategroy(data = {}) {
    return axios.post('/categroy/addCategroy', data);
}

export function deleteCateGroy(id) {
    return axios.post('/categroy/deleteCateGroy', {
        id
    });
}
