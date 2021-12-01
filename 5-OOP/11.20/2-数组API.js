// 数组的遍历 , 推荐使用forEach 箭头函数

var arr = [1, 2, 3, 4, 5];

// 这里的i是数组的索引
for(let i in arr){
    console.log(arr[i]);
}

for(let item of arr){
    console.log(item);
}

for (const iterator of arr) {
    console.log(iterator);
}

arr.forEach(item=>{
    console.log(item);
})

// concat 扩容数组

let array = [1, 2, 3, 4, 5];

let arr2 = array.concat(6, 7, 8);
console.log(arr2);


// 4-扩展运算符追加数组

let a = [1,2,3];
let a2 = [4,5,6];

a.push(...a2);

console.log(a);

// 5-slice 和 splice

// 6- 排序 sort  升序和降序
arr.sort((a,b)=a-b);    // 升序
arr.sort((a,b)=b-a); // 降序

// 7-根据内容找下标,找不到返回-1

arr.indexOf("内容");  //第一个满足的
arr.lastIndexOf("内容");   //最后一个满足的

// 8-数组包含某个元素   NaN 不是自己本身
arr.includes("内容");

let test1 = [1,2,3,NaN];
console.log(test1.includes(NaN));   //true
console.log(test1.indexOf(NaN));  //false
console.log(NaN ===NaN);   //false

//9- filter  筛选出符合条件的数组   重点
// 如:删除偶数:查询不属于偶数的数组
let test2 = [1,2,3,4,5,6,7,8,9];
let test3= test2.filter(item=>item>5);

//10-map映射 原数组不改变, 把更新后的元素放入新的数组
// react 离不开map 

let arrMap = [
    {name:"张三",age:18},
    {name:"李四",age:19},
    {name:"王五",age:20},
];
let arrMap2 = arrMap.map(item=>{
    return{
name:"重庆" + item.name,
age:item.age +10
    }}
    );
console.log(arrMap2);

// some 一真则真
// every 一假则假

// 累计 reduce

let arrReduce = [1,2,3,4,5,6,7,8,9];
let arrReduce2 = arrReduce.reduce((item, next)=>{
    return item+next;
}, 0);

console.log(arrReduce2);



