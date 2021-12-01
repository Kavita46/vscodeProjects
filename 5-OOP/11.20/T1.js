var str = "dajsldasnkfbadskfhjdafnslkfbdavskjboiwfr";


let obj = {};

for (let i = 0; i < str.length; i++) {
    let attr = str[i];
    if (obj[attr]) {
        obj[attr]++;
    } else {
        obj[attr] = 1;
    }
};

let max = 0;
let zimu;
for (let i in obj) {
    if (obj[i] > max) {
        zimu = i;
        max = obj[i];
    }
}

console.log(max); 
console.log(zimu);
console.log(obj);