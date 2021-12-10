// 数组到对象,变成伪数组

let arr = ['a', 'b', 'c']
let obj = { ...arr }

console.log(obj);


async function foo() {
    console.log(('hello'));
}

console.log(foo());


function f() {

    try {
        console.log(1);
        for (let i of {}) { }

        return 2
    } catch (e) {
        console.log(3)
        return 4
    } finally {
        console.log(5)
    }
}

console.log(f());


function fun(x=8, y){
    console.log(x-y)
}

fun(7,5)
fun('7', '5')
fun(undefined, 5)
fun(undefined, undefined)
fun(null, 5)

let x = 1;
let y = 2;

[x,y] = [y, x]

console.log(x,y)