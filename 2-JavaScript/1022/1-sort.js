var arrays = [113, 224, 56, 77, 20, 520, 444];

// 每一轮把最大的数放在最后面,比较 n-1轮
var l = arrays.length - 1;
console.log(l);
for (var i = 0; i < l; i++) {
  if (arrays[i] >= arrays[i + 1]) {
  
lL1   
    // 左边大于右边

    console.log("arrays[i]=" + arrays[i]);
    console.log("arrays[i+1]=" + arrays[i + 1]);

    var temp = arrays[i + 1 ] ;
      arrays[i + 1] = arrays[i];
    arrays[i] = temp;
  }
}

console.log(arrays);
