console.log(...[2, 3, 4]);


function add(x, y) {
    return x + y
}

function push(array, ...items) {
    array.push(...items)

    return array
}

var numbers = [4, 5, 33, 25]


console.log('add结果为' + add(...numbers));

console.log('新数组' + push(numbers, ...[53, 77, 88]));

var array1 = ['i', 'love', 'you']
var array2 = [...array1]
console.log(array2);

let { name, url } = { name: '蜗牛', url: 'https://www.runoob.com' }


let [head, ...content] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(head);
console.log(content);
console.log(...content);
// console.log(typeof(...content));

console.log(2, 3, 4, 5, 6, 7, 8);
// console.log(tail);
// console.log(name);
// console.log(url);

function foo([a, b]) {
    console.log(a);
    console.log(b);
}

foo([1, 2]);



let person = { name: '张三', age: 18 }

let { age, name } = person
console.log(name);
console.log(age);



let obj = {
    name: 'zs',
    age: 12,
    realname: {
        first: 'zhai',
        last: 'san'
    }
}

let { name, age, realname: { first, last } } = obj

console.log(first, last);

let { name = '张三', age = 18, id } = { id: 1 };

console.log(name, age, id);
function foo() {
    return {
        name: 'Giles',
        age: 18
    }
}

let { name: n, age: a } = foo();
console.log(n)
console.log(a);

const [a, b, c, d, e] = 'hello'

let { length: len } = 'hello'
console.log(len);

console.log(a, b, c, d, e);

