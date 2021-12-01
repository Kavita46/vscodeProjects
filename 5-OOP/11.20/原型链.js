// methods  和 _methods  一个属于Student类, 另一个属于Student 对象

let methodDistrict = {

    run:function(){
        console.log("running");
    }
,
say:function(){
    console.log("say");
}
}

Student.methods = methodDistrict;


function Student(name, age){

    return {
        name: name,
        age: age,
        _methods:Student.methods
    }
}


let student = new Student("John", 20);
student._methods.run();
student._methods.say();

console.log(student._methods);