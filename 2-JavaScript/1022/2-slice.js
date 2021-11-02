var a = [114,520,314,514,250,77,170,330];

console.log(a);
console.log(a.length);
a.splice(2, 2);

console.log(a);
console.log(a.length);

a.splice(2,0,114514 );
a.splice(3,0,114515 );
console.log(a);
console.log(a.length);

var arr=new Array("023","66668888", "233", "250");
var str=arr.join("-");
console.log(str);
//输出结果 023-66668888