// export function storageSetItem(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }
//
// export function storageGetItem(key) {
//     return JSON.parse(localStorage.getItem(key));
// }
//
// export function storageGetToken() {
//     return storageGetItem('token')
// }
//
// export function storageSetToken(token) {
//     storageSetItem('token', token);
// }

export default class StorageUtil {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    static setToken(token) {
        StorageUtil.setItem('token', token);
    }

    static getToken() {
        return StorageUtil.getItem('token')
    }
}
