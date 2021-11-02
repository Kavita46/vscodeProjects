var url = 
"?share" +
"_source=qq_web&share_medium=web&share_source=qq" +
"&bbid=36CE6B7F-C2A2-5B92-040A-EFCCE2C52C5F64288infoc&ts=1635759038199";
var url = url.substr(1);

// console.log(url);
var paras = url.split("&");
// console.log(paras);

for(let i = 0; i < paras.length; i++){
   var data =  paras[i].split("=");
console.log(data[1]);
}
