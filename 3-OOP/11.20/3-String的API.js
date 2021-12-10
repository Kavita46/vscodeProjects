let str = "I love JS"

// 1-长度 length
console.log(str.length);
// 2-indexOf  和 lastIndexOf
console.log(str.indexOf("JS"));

// 3- charAt()

// 4-concat拼接 或者 用 +号拼接(占用内存,之前的不消失)


let str2 = '123';
let str3 = str.concat(str2);

console.log(str3);


// 5-截取
// substr(beginindex,length)
// substring(beginindex,endindex)

console.log(str.substr(1,3));
console.log(str.substring(1,3));


// 6-替换: replace 和 replaceAll

// 7-分隔 :字符串转为数组
// split("分隔符", limit) limit 代表分隔的限制数


var str1 = "a-b2-c34r-ds"

console.log(str1.split("-", 2));

// 8-是否包含:includes

// 9-去空格 trim
// 去中间的空格:用replace 把空格替换为空

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// console.log(emp.replaceAll(" ", ""));


// 10-大小写转换: toUpperCase() toLowerCase()


