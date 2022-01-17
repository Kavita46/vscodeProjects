

export default function parseURL(str) {
    let arr = str.split('?')[1].split('&');  //分解得到?后面所需字符串,再通过&分解,保存在数组里
    let obj = {};
    for (let i of arr) {

        obj[i.split['='][0]] = i.split['='][1];
    }

    return obj
}