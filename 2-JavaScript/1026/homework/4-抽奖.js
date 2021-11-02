var names = [
    "嘉然",
    "乃琳",
    "向晚",
    "贝拉",
    "珈乐",
    "阿草",
    "七海",
    "林忆宁",
    "星瞳",
    "文静"
  ];
var a = [-1, -1, -1, -1, -1, -1];

for (let i = 0; a.length < 12; i++) {
  var index = Math.floor(Math.random() * 10);
  var pushFlag = true;
  for (let i = 0; i < a.length; i++) {
    if (index == a[i]) {
      pushFlag = false;
      break;
    }
  }
  if(pushFlag){
      a.push(index);
  }
}

a.splice(0, 6);
console.log(a);

console.log(names[a[0]] + "是一等奖");
console.log(names[a[1]] + "是二等奖");
console.log(names[a[2]] + "是二等奖");
console.log(names[a[3]] + "是三等奖");
console.log(names[a[4]] + "是三等奖");
console.log(names[a[5]] + "是三等奖");
