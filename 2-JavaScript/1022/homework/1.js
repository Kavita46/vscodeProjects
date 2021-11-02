// 使用二维数组保存学生信息，例如：var students=[["张三","男",24,97],["李四","女",21,80],["王五","男",22,100],["赵六","男",18,9],["抓瞌睡","男",20,1]];
// 1.使用表格的形式输出学生信息
// 2.输入一个学生名称，删除它
// 3.使用冒泡排序按照年龄对学生信息进行排序
// 4.使用sort函数根据成绩降序排列学生信息
// 5.输入一个新的学生信息，根据成绩插入到合适的位置

var students = [
  ["嘉顺然", "女", 17, 97],
  ["向顺晚", "女", 17, 67],
  ["贝顺拉", "女", 19, 55],
  ["乃顺琳", "女", 21, 100],
  ["珈顺乐", "女", 20, 90],
];

var len = students.length;
for (var i = 0; i < len; i++) {
  var newLen = students[i].length;
  for (var j = 0; j < newLen; j++) {
    console.log("students[i][j]" + "---" + students[i][j]);
  }
}

var inputName = prompt("请输入要删除的成员的名字?");

for (var i = 0; i < len; i++) {
  if (students[i][0] === inputName) {
    alert("存在该成员:" + inputName);
    braeak;
    students.splice(1, 0);
  }

  console.log("不存在该成员:" + inputName);
}
