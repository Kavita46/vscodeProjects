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

Cat.showName();    
showName();
Cat().showName(); //运行cat函数, 返回this 

showName();
new Cat.showName();
new Cat().showName();


