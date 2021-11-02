var arr  = "I am your father Dark vader";

console.log(arr.lastIndexOf());


let t1 = setTimeout(()=>{
    console.log(1);
}, 2000);

let t2 = setInterval(()=>{
    console.log(2);
    clearInterval(t2);
}, 2000);

clearTimeout(t1);