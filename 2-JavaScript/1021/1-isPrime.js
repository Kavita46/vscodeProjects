// 1-100以内的质数
// 一共25个

//2 是 质数


var count = 1;  // 1.这里加上了2
var isPrime = true;
// 这里剔除掉偶数
for (var i = 3; i < 1000; i += 2) {
  var isPrime = true;
  // 这里让除数小于等于被除数开根号,
  for (var j = 3; j <= Math.sqrt(i); j+=2) {
    if (i % j == 0) {
      isPrime = false;
      break;
      // 不是质数
    }
    
  }
  if (isPrime) {
    console.log(i);
    count++;
  }
}

console.log("count = " + count);
