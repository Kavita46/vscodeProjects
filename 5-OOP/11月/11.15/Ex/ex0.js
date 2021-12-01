
var a;

  console.log(a)
//   console.log(typeof(a)); undefined

if(true){
    a=1;
    // console.log(typeof(a)); number
    function a(){}
    console.log(typeof(a));
    a=5;
    console.log(a);   
    // 在里面是number, 在外面是函数(变量提升?)
}

console.log("a的值是"  + a)   

// 输出1;