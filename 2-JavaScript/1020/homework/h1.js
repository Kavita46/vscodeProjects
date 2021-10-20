// 1.换饮料问题，3个空瓶子可以换一瓶饮料，现在你买了30瓶，
// 问最后喝了多少瓶？剩下多少空瓶？

var empty = 0;
var drink = 0;
for (var i = 30; i > 0; i--) {
  empty++;
  drink++;
  if (empty == 3) {
    i++;
    empty = 0;
  }
}

console.log(drink);
console.log(empty);


// 要不要做一个递归函数?
// var x = 30;
// var y = x / 3;
// var z = y / 3;
// // var i = z /3;
// // var j = i / 3;

// var final = x + y + z ;
// console.log("\n");
// console.log(final);
