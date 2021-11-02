let arr = [1, 2, 3, 4];

console.log(arr.every((e, i, a) =>{
    a[i+1] -=1;   //1234
    console.log(`[${a}][${i}] -> ${e}`);
    return e< 2;
}));


var arr = [1,3 ,5,7,8,10,12];

arr.forEach((v, i , a) =>{
    console.log(i + ":" + v);
});