class Weapon{
    // 名字、伤害值。行为
    constructor(name,damage){
        this.name = name;
        this.damage = damage;
    }
    // 行为：输出武器所有信息。
    show(){
        console.log(`${this.name}，伤害值：${this.damage}`);
    }

}
var w1 = new Weapon('倚天剑',15);
var w2 = new Weapon('屠龙刀',20);
var w3 = new Weapon('打狗棒',10);


w1.show();
w2.show();
w3.show();

