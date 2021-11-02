// var myForEach = (arr, fun) => {
//   for (let i = 0; i < arr.length; i++) {
//     fun(arr[i]);
//   }
// };

// a = [1, 3, 5, 7, 10];
// myForEach(a, (b) => {
//   console.log(b);
// });

var myEvery = (arr, fun) => {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) == false) {
      console.log(arr + "  Not all even");
      break;
    }
  }

  if (fun(arr[arr.length - 1]) == true) {
    console.log(arr + "  all even");
  }
};

a = [2, 4, 8, 16, 32, 64];
b = [2, 4, 6, 8, 11];

myEvery(b, (c) => {
  return c % 2 == 0;
  //   返回到函数调用处
});

myEvery(a, (c) => {
  return c % 2 == 0;
  //   返回到函数调用处
});

var mySome= (arr,fun)=>{
for(let i = 0; i < arr.length; i++){
    fun(arr[i]);
}

}

var test = [3,114,520, 1919, 1999];

mySome(test, x =>{
    if(x> 1900){
        console.log("存在大于1900的数字");
    }
})