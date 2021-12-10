
'use strict'
name = 'woniu'
console.log(name);


function foo(){
    name = 'xueyuan'
}

foo();

console.log(name);

const s  = new Set();

let array  = [ 4, 5, 1 , 4, 1919, 810, 2007, 54,54];

array.forEach(item=>{
    s.add(item)
})
console.log(s);

console.log(s.has(1));


var newArray = Array.from(s)

console.log(newArray);

console.log(newArray.length);


