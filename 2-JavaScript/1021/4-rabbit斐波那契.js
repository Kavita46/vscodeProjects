// 不死神兔问题,有一个农场养殖兔子，
// 假如兔子都不会死。第一个月有1对兔子，
// 从第三个月开始每对兔子会生一对小兔子
// ，问一年以后有多少兔子?

// 前两个月不管,
// 第三个月 p1:1 y3  p2:1 y1
// 第四个月  p1:1 y4 p2:1 y2 p2:1 y1

var n1 = 1;
var n2 = 1;
var temp = 0;
var total = 0;
console.log("第 1月一共有1" );
console.log("第 2月一共有1" );
for (var i = 2; i < 12; i++) {
  total = n1 + n2;
  temp = n2;
  n1 = temp;
  n2 = total;
  console.log("第 " + (i+1) + "月一共有" + total);
}



