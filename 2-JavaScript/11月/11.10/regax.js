var reg  = new RegExp("正则表达式");

var reg1 = /^正则表达式$/;

var account= "正式";
var account1  = "正则表达式";

// console.log(reg.test(account));
// console.log(reg.test(account1));

var reg2 = /^[0-9]{4,5}$/;
var account6= "123456789a";  
var account2 = "123456789";
var account3 = "12345678"; 
var account4 = "1234"; 
var account5 = "12345"; 

// console.log(reg2.test(account6));
// console.log(reg2.test(account2));
// console.log(reg2.test(account3));
// console.log(reg2.test(account4));
// console.log(reg2.test(account5));

// 用户名 下划线  大写字母开头  数字 ,  长度 10-20;

var reg3 = /^[A-Z][a-zA-Z_0-9]{9,19}$/;
var account7 = "123456789a";
var account8 = "123456789";
var account9 = "A12345678911";

// console.log(reg3.test(account7));
// console.log(reg3.test(account8));
// console.log(reg3.test(account9));

var regPhone = /^1[3-9]\d{9}$/;
var phone = "13388974237";
var phone1 = "1338897423";
var phone2 = "1338897423a";
var phone3 = "1338897423b";
var phone4 = "1338897";
var phone5 = "10131234352";
var phone6 = "16131234328";
// console.log(regPhone.test(phone));
// console.log(regPhone.test(phone1));
// console.log(regPhone.test(phone2));
// console.log(regPhone.test(phone3));
// console.log(regPhone.test(phone4));
// console.log(regPhone.test(phone5));
// console.log(regPhone.test(phone6));



var str = "acva.com.cn";

var emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

var myEmail = "acva.com.cn";
var myEmail1 = "acva.com.cn";
var myEmail2 = "343223987@qq.com.cn";
console.log(emailRegex.test(myEmail));
console.log(emailRegex.test(myEmail1));
console.log(emailRegex.test(myEmail2));

var dotRegex = /\./;

console.log(dotRegex.test("."));
console.log(dotRegex.test("a"));

