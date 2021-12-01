// 定义一个战斗机类


class airCraft {
    // 种类、速度、型号 ，行为：起飞，降落 。 
    constructor(type, speed, model) {
        this.type = type;
        this.speed = speed;
        this.model = model;
    }

    takeOff() {
        console.log("芜湖起飞");
    }
    land() {
        console.log("直升机降落");
    }
}

class fighter extends airCraft {

    // 种类、速度、型号 ，行为：起飞，降落 。 
    constructor(type, speed, model, bulletNum) {
        super(type, speed, model),
            this.bulletNum = bulletNum;
    }
    takeOff() {
        console.log("战斗机起飞");
    }
    land() {
        console.log("战斗机降落");
    }

    attack() {
        console.log("战斗机攻击");
    }
}

var aircraft1 = new airCraft("直升机", "100", "EC225");
aircraft1.takeOff();
aircraft1.land();
// aircraft1.attack();

var fighter1 = new fighter("战斗机", "130", "F-22", "100");
fighter1.takeOff();
fighter1.land();
fighter1.attack();





