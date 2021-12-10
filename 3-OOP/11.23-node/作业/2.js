const obj = require('./1.js');

console.log(obj);

const {user, address, dogs} = require('./1.js');

console.log(`我叫${user.name} 今年${user.age} 住在${address}`);

dogs.forEach(item =>console.log(item.type))