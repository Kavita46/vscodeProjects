//3.将一段字符串进行翻转（例如：abc转为cba）



function myReverse(str) {

var strArray = str.split("");
strArray.reverse();
return  (newStr = strArray.join(""));
  // var len = str.length;
  // for (let i = 0; i < len / 2; i++) {
  //   console.log(str[i]);
  //   console.log(str[len - i - 1]);

  // var temp = str[i];
  // str[i] = str[len - i - 1];
  // str[len - i - 1] = temp;

  // console.log(str[i]);
  // console.log(str[len - i - 1]);
  // }
  // // console.log(str);
}

var str1 = "欧西给";
var str2 = "一条大河波浪宽,风吹稻花香两岸";
var str3 = "1145141919810";

// console.log(str1);
console.log(myReverse(str1));
console.log(myReverse(str2));
console.log(myReverse(str3));

// console.log(str1);
// console.log(myReverse(str2));
// console.log(myReverse(str3));
