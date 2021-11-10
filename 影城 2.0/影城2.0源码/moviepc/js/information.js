$(function(){
    //加载页面判断是否有用户登录
    var user = localStorage.getItem("loginUsers")
    if (user == null) {
        $("#showRegisterDiv").show()
        $("#showLoginDiv").show()
    } else {
        user = JSON.parse(user)
        var user = user[0]
        var phone = user.lphone
        $("#showRegisterDiv").hide()
        $("#showLoginDiv").hide()
        $("#name").show().text("欢迎您" + phone)
        $("#esc").show()
    }

    //注销
    $("#esc").click(function () {
        //退出登录 并清楚本地数据
        localStorage.removeItem('loginUsers')
        $(this).hide()
        $("#showRegisterDiv").show()
        $("#name").hide()
        $("#showLoginDiv").show()
    });

})