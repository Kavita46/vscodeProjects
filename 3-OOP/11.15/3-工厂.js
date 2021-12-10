// 工厂模式无法识别对象原型

function createPerson(name, age){

    var obj = new Object();
obj.name = name;
obj.age= age;
obj.sayName = function(){
    console.log("我的名字是" + this.name);
}

return  obj;
}

var person  =  createPerson("张三", 20);


console.log(person);
person.sayName();


function Person1(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log("我的名字是" + this.name);
    }

}

var person1 = new Person1("李四", 30);
var person2 = new Person1("王五", 40);

console.log(person1);
console.log(person2);

// console.log(person1.sayName());

function Person2(){}

Person2.prototype = {
    constructor:Person2,
    name:"miku",
    age:18,
    hobby:"sing",
    sayName:function(){
        console.log("我的名字是" + this.name);}

    }
    
