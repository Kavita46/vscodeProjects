var text="abcAy123GG";
// var reg=new RegExp("[a-z]{1}",);
var reg = /[a-z]{1}/g;
var newText=text.replace(reg,"0");

console.log(newText);