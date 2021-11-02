var menu = [
  [1, "鱼香肉丝", 17],
  [2, "回锅肉", 22],
  [3, "青椒肉丝", 18],
  [4, "泡椒猪肝", 20],
  [5, "麻婆豆腐", 18],
  [6, "炒莲白", 15],
  [7, "番茄炒蛋", 18],
  [8, "小菜豆腐汤", 12],
];

function showMenu() {
  console.log("以下是菜单****");
  console.log("编号-菜名-价格(元)****");
  for (let i = 0; i < menu.length; i++) {
    let item = menu[i].join("-");
    console.log(item);
  }
}

showMenu();

var orders = [
  [0, 0, " "],
  [0, 0, " "],
  [0, 0, " "],
  [0, 0, " "],
];
var orderNum = 0;
var isContinue = true;

function makeOrder() {
  while (isContinue) {
    //   询问是否下单
    let choose = prompt("请问是否需要下订单? 请输入Y / N");
    if(choose == "N" || choose =="n"){
        isContinue = false;
    }else if(choose == "Y" || choose =="y"){
        isContinue = true;
    }

    if(orderNum == 4){
document.write("订单已经满了四个,不能继续点单.");
    }else if (orderNum < 4){
        showMenu();
    }
  }
}
