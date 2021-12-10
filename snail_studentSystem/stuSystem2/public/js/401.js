   // 全局注册ajax
   $.ajaxSetup({

    // 设置请求头
    headers: {
      "Authorization": localStorage.token
    },
    error(res) {
      console.log(res);

    //   处理401
      if (res.status == 401) {
        alert("status报错401, 请先登录用户");
        top.location.href = "/html/index.html";
      }
    },
  });