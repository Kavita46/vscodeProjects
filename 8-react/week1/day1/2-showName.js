function Cat() {
    let showName = function () {
        console.log(1)
    }
    return this;
}
Cat.showName = function () {
    console.log(2)
}
Cat.prototype.showName = function () {
    console.log(3)
}
var showName = function () {
    console.log(4)
}
function showName() {
    console.log(5)
}
Cat.showName();      //2  访问静态属性
showName();   // var变量提升
Cat().showName(); //运行cat函数, 返回this 
showName();
new Cat.showName();  //2 创建类Cat的实例, 运行静态属性的showName
new Cat().showName();  //1  

