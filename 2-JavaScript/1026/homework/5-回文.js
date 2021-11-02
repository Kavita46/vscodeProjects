//5.判断一个字符串是否是回文(例如：上海自来水来自海上)

function judge(str) {
  var strArray = str.split("");
  var temp =[];

  for(let i = 0; i < strArray.length; i++){
      temp.push(strArray[i]);
  }
//   console.log(temp);
//  先转换为数组,复制副本,再反转,再用toString 比较
  strArray.reverse();
  console.log(temp);
  console.log(strArray);

  if(strArray.toString() === temp.toString()){
      return true;
  }else {
      return false;
  }
}

var str = "上海自来水来自海上";
var str2 = "天上人上天"

console.log(judge(str));
console.log(judge(str2));