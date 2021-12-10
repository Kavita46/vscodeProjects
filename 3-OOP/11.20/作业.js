// 作业1:链式编程
let arr = [
    { name: '张三', age: 55 },
    { name: '李四', age: 30 },
    { name: '王五', age: 21 },
    { name: '赵六', age: 42 },
    { name: '田七', age: 36 },
    { name: '钱八', age: 14 },
    { name: '孙九', age: 80 },
    { name: '周十', age: 90 },
    { name: '吴十一', age: 100 },
    { name: '赵十二', age: 58 },
    { name: '钱十三', age: 120 },
    { name: '孙十四', age: 13 },
    { name: '周十五', age: 14 },
    { name: '吴十六', age: 15 },

]

let arr3 = arr.filter(item => item.age > 50);
console.log(arr3);


let arr2 = arr.filter(item => item.age >= 20
).sort((a, b) => a.age - b.age).map(item=>item.name + "_" + item.age)

console.log(arr2);


// 作业2 解构

let  result = {
    code:1,
    msg:'success',
    data:[
        {name:'张三',age:55, id :1},
        {name:'李四',age:30, id:2},
        {name:'王五',age:21, id:3},
        {name:'赵六',age:42, id:4},
    ]
};

let {data:data} = result;
console.log(data);
let data2 = data.sort((a,b) =>(b.age - a.age));
console.log(data2);

