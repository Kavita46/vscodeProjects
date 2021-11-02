// 换零钱问题:有1块的100张，2块的50张，5块的20张，
// 凑100块，问有多少组合方式（可以单独使用一种面额）

var count = 0;

for (var a = 0; a <= 100; a++) {
  for (var b = 0; b <= 50; b++) {

    // 1元和2元的总价格不能超过100,然后能被5除尽,然后 c 需要大于等于0
    if (a + 2 * b <= 100 && (a + 2 * b) % 5 == 0) {
      c = Math.floor((100 - a - 2 * b) / 5);
      if (c >= 0) {
        // console.log(c);

        console.log("a=" + a + " b = " + b + " c = " + c);
        count++;
      }
    }

    // console.log("c=" + c);
    // if (c >= 0 && a +2 * b + 5 * c == 100) {
    //     count ++;
    //     console.log(count);
    //   console.log("a = " + a + " b = " + b + " c = " + c);
    // }
  }
}

console.log("一共有" + count + "种解法");
