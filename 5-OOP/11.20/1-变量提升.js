// 第一道变量提升例题

var num = 10;
f();
function f(){
    console.log(num);
    var num = 20;
}

// 正确的顺序:变量声明和赋值是两个步骤

function f(){
    var num;
    console.log(num);
    num = 20;
}

var num;
num = 10;
f();

// 第二道变量提升例题

f1();
console.log(a);  //报错
console.log(b); //报错
console.log(c); //报错

function f1(){
    var a = b = c = 9;   //var a  = 9; b = 9; c = 9 这里的b和c 没有var  提升为全局
    console.log(a);   //9
    console.log(b);  //9
    console.log(c);  //9
}

// 

