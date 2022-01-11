

// 改变this指向

const { ContextExclusionPlugin } = require("webpack");


var obj = {
    name: '张三',
    getName() {
        return this.name;
    }
}

var obj2 = {
    name: '李四',
}

console.log(obj.getName.call(obj2, 18, '男'));

console.log(obj.getName.apply(obj2, [18, '男']));

console.log9obj.getName.bond(obj2, 18, '男');

