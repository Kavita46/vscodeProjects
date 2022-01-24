import axios from "../utils/axios";

export function login(data = {}) {
    return axios.post('/users/login', data)
}
