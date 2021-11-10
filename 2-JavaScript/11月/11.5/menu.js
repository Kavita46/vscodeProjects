const menu = document.querySelector(".menu");
window.oncontextmenu = function (e) {
  // 取消默认右键菜单

  console.log(e.clientX, e.clientY);
  e.preventDefault();
  // 设置坐标
  menu.style.visibility = "visible";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY  +  "px";
};

$("#cancelMenu").click(function () {
  menu.style.visibility = "hidden";

  console.log("取消");
});

