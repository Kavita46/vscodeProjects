// JS 异步操作 
// 1-ajax
// 2-定时器

console.log(1);

// 这里函数放进了任务队列,先执行外部
setTimeout(function () {
    console.log(2);
}, 0);

console.log(3);

if (undefined) {
    console.log("OK");
}

let obj = null;
if (obj) {
    console.log("OK2");
}

let obj2 = {};
if (obj2) {
    console.log("OK3");
}



// 条件转换:undefined  null  ""   0   NaN  都会条件转换为false
