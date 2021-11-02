var school = {
  classOfteacherGou: [
    {
      name: "张三",
      age: 18,
      sex: "男",
      chinese:80,
      math:130,
      english:145
    },
    {
      name: "李四",
      age: 17,
      sex: "女",
      chinese:80,
      math:130,
      english:145
    },
    (fan1Open = false),
    (fan2Open = true),
  ],
  classOfteacherLong: [
    {
      name: "王五",
      age: 20,
      sex: "女",
      chinese:80,
      math:130,
      english:145
    },
    {
      name: "钱六",
      age: 20,
      sex: "男",
      chinese:80,
      math:130,
      english:145
    },
  ],

  showS: function () {
    console.log(school);
  }
};

school.showS();

console.log(typeof(school));

var json1 = JSON.stringify(school);
console.log(json1);

// console.log(school.classOfteacherGou[0]);
// console.log(school.classOfteacherGou);
// console.log(school.classOfteacherGou[1]);
// console.log(school.classOfteacherLong[0]);
// console.log(school.classOfteacherLong[1]);

// console.log(typeof school);
// console.log(typeof school.classOfteacherGou);
// console.log(typeof school.classOfteacherGou[0]);


// var arr = [1,2,3,4,5];
// var arr2 = [1, 2, {
//     name:"张三"
// }];
// var arr3 = Array(1,2,3,4,5);
// console.log(typeof(arr2));
// console.log(typeof(arr));

// console.log(Array.isArray(arr));
// console.log(arr2);
// console.log(Array.isArray(arr2));
// console.log(Array.isArray(arr3));

// console.log(typeof(arr2[2]));