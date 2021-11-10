$(function () {

    //加载页面判断是否有用户登录
    var user = localStorage.getItem("loginUsers")
    if (user == null) {
        $("#showRegisterDiv").show()
        $("#showLoginDiv").show()
        alert("您还没有登录")
        window.location.href = "index.html"
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


    //tab切换
    $(".nav>li:eq(0)").css("background-color", "#F99135")
    $(".nav>li:eq(0)").css("color", "white")
    $(".nav>li:eq(0)").click(function () {
        $(this).css("background-color", "#F99135")
        $(this).css("color", "white")
        $(this).siblings().css("background-color", "")
        $(this).siblings().css("color", "black")
        $("#myorder").show()
        $("#message").hide()
        $("#changepass").hide()
    })
    $(".nav>li:eq(1)").click(function () {
        $(this).css("background-color", "#F99135")
        $(this).css("color", "white")
        $(this).siblings().css("background-color", "")
        $(this).siblings().css("color", "black")
        $("#message").show()
        $("#myorder").hide()
        $("#changepass").hide()
    })
    $(".nav>li:eq(2)").click(function () {
        $(this).css("background-color", "#F99135")
        $(this).css("color", "white")
        $(this).siblings().css("background-color", "")
        $(this).siblings().css("color", "black")
        $("#message").hide()
        $("#myorder").hide()
        $("#changepass").show()
    })

    //渲染数据
    var loginUsers = localStorage.getItem("loginUsers")
    var loginUsers = JSON.parse(loginUsers)
    var loginUsers = loginUsers[0]

    var movieName = loginUsers.movieName
    var seatAll = loginUsers.seat
    var money = loginUsers.money
    var seaStr = seatAll.join("|")

    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies',
        success: function (data) {
            var movies = data.movies.filter(movie => movie.title == movieName);
            var movie = movies[0]
            $newddDiv = $(`
           <div class="box1">
                    <div class="top">
                        <p class="p1">2021-08-11</p>
                        <p class="p2">蜗牛订单号:22538083977</p>
                        <img style="cursor: pointer;"  id="del" src="images/con01.png" alt="">
                    </div>
                    <div class="bottom">
                        <div class="img">
                            <img style="width: 70px;height: 95px;" src="${movie.imgSrc}" alt="">
                        </div>
                        <div class="text">
                            <p class="one">《${movieName}》</p>
                            <p class="two">太平洋影城（北欧知识城店）</p>
                            <p class="three">4号厅&nbsp;&nbsp;&nbsp;${seaStr}</p>
                            <p class="four">今天 8月11日 19:30</p>
                        </div>
                        <div class="money">￥${money}</div>
                        <div style="width:55px;" class="wait">已支付</div>
                        <div class="btn">
                            <button class="btn-pay">取票</button>
                            <div> <a href="">查看详情</a>
                            </div>
                        </div>
                    </div>
                </div>
           `)
            console.log(movieName);
            $("#myorder").append($newddDiv)
        }
    })


    //删除订单
    $("body").on("click", "#del", function () {
        $(".box1").remove()
    })


    //修改昵称
    $("#save-1").click(function () {
        var newName = $("#username").val()
        var loginUser = localStorage.getItem("loginUsers")
        var loginUserArr = JSON.parse(loginUser)
        var loginUser0 = loginUserArr[0]
        loginUser0.lname = newName
        loginUserArr = JSON.stringify(loginUserArr)
        localStorage.setItem("loginUsers", loginUserArr)
        alert("修改成功")
    })



    //修改密码
    $("#oldpass").blur(function () {
        var users = localStorage.getItem("users")
        var users = JSON.parse(users)
        var user = users[0]
        var oldpass = user.rpass
        var inputpass = $(this).val()
        if (inputpass == "") {
            $(this).css("border-color", "red")
            $("#oldpassMsg").text("旧密码不能为空")
            $("#oldpassMsg").css("color", "red")
        } else if (oldpass != inputpass) {
            $(this).css("border-color", "red")
            $("#oldpassMsg").text("旧密码不正确")
            $("#oldpassMsg").css("color", "red")
        } else {
            $(this).css("border-color", "green")
            $("#oldpassMsg").text("旧密码正确")
            $("#oldpassMsg").css("color", "green")
        }
        var ip1=  $("#oldpass").css("border-color")
        var ip2=  $("#newPass").css("border-color")
        var ip3=  $("#rnewPass").css("border-color")
         if(ip1=="rgb(0, 128, 0)" && ip2=="rgb(0, 128, 0)" && ip3=="rgb(0, 128, 0)"){
             $("#save-2").show()
         }else{
          $("#save-2").hide()
         }
    })

    $("#newPass").blur(function () {
        var newpass = $(this).val()
        if (newpass == "") {
            $(this).css("border-color", "red")
            $("#newpassMsg").text("新密码不能为空")
            $("#newpassMsg").css("color", "red")
        } else {
            $(this).css("border-color", "green")
            $("#newpassMsg").text("新密码格式正确")
            $("#newpassMsg").css("color", "green")
        }
        var ip1=  $("#oldpass").css("border-color")
        var ip2=  $("#newPass").css("border-color")
        var ip3=  $("#rnewPass").css("border-color")
         if(ip1=="rgb(0, 128, 0)" && ip2=="rgb(0, 128, 0)" && ip3=="rgb(0, 128, 0)"){
             $("#save-2").show()
         }else{
          $("#save-2").hide()
         }
    })

    $("#rnewPass").blur(function(){
        var rnewpass=$(this).val()
        var  newpass= $("#newPass").val()
        if(rnewpass==""){
            $(this).css("border-color",'red')
            $("#rnewpassMsg").text("重复密码不能为空")
            $("#rnewpassMsg").css("color","red")
        }else if(rnewpass!=newpass){
            $(this).css("border-color",'red')
            $("#rnewpassMsg").text("两次输入密码不相同")
            $("#rnewpassMsg").css("color","red")
        }else{
            $(this).css("border-color",'green')
            $("#rnewpassMsg").text("密码二次验证成功")
            $("#rnewpassMsg").css("color","green")
        }

      var ip1=  $("#oldpass").css("border-color")
      var ip2=  $("#newPass").css("border-color")
      var ip3=  $("#rnewPass").css("border-color")
       if(ip1=="rgb(0, 128, 0)" && ip2=="rgb(0, 128, 0)" && ip3=="rgb(0, 128, 0)"){
           $("#save-2").show()
       }else{
        $("#save-2").hide()
       }
    })
    
  

    //点击修改
    $("#save-2").click(function(){
      var newpass= $("#newPass").val()
 
       var User = localStorage.getItem("users")
        var loginUserArr = JSON.parse(User)
        var loginUser0 = loginUserArr[0]
        loginUser0.rpass = newpass
        loginUserArr = JSON.stringify(loginUserArr)
        localStorage.setItem("users", loginUserArr)
        localStorage.removeItem("loginUsers")
        alert("修改成功，请重新登录")
        window.location.href="index.html"
    })
})