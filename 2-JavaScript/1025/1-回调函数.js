var test = function (abc, defv) {
  abc("Hello, JAVA", "Hello , JavaScript");
  defv("Hello,JavaScript");
};

// 这里的ABC 传进来的是操作数据的方法

// test( (a, b)=>{console.log(a);
// console.log(b);}  );

test(
  (a, c) => {
    console.log("箭头函数1 " + a );
    console.log(c);
  },
  (b) => {
    console.log("箭头函数2" + b);
  }
);
