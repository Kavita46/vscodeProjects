class Student{

    static class = "67期前端";

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static show(){
        console.log(this.age);
    }
}

console.log(Student.class);
Student.show();