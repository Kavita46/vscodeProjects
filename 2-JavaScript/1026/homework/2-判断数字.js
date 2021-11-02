//2.判断一个字符串是否是由数字组成的


var str1 = "431941984109";
var str2 = "213313fewlj452fjsel";
var str3 = "123fajk312lfajdksl123";

// console.log(str1[0].charCodeAt(0));

// console.log(str1[1].charCodeAt(0));
// console.log(str1[str1.length - 1].charCodeAt(0));

function fullNumber(str) {
  var flag = true;
  for (let i = 0; i < str.length; i++) {
    // 判断ASCII码
    if (str[i].charCodeAt(0) < 48 || str[i].charCodeAt(0) > 57) {
      console.log(str + "不是由纯数字组成的");
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(str + "是纯数字组成的");
  }
}

fullNumber(str1);
fullNumber(str2);
fullNumber(str3);

