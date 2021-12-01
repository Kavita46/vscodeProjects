// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.sayName = function () {
//         console.log(this.name);
//     }
// }

// const p1 = new Person('张三', 20);
// console.log(p1.prototype)

// console.log(p1.__proto__);
// console.log(Object.getPrototypeOf(p1));


let f = function(a, b){
    this.a = a,
    this.b = b
}


var f1 = f(3, 4);
console.log(f1);
f.prototype.c = 5;
console.log(f1);

