class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(`我的名字是${this.name},我的年龄是${this.age}`);
    }
}
let person = new Person('张三',18);

console.log(person);
person.say();

class Student extends Person{
    constructor(name,age,school){
        super(name,age);
        this.school = school;
    }
    say(){
        super.say();
        console.log(`我的学校是${this.school}`);
    }
}

let student = new Student('李四',20,'清华');

console.log(student);

student.say();