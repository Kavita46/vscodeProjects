$(function () {
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

    //倒计时
    var $minute = $("#m")
    var $second = $("#s")
    var totalsecond = 840
    var p = setInterval(function () {
        if (totalsecond >=0) {
            totalsecond--
            var second = totalsecond % 60
            var minute = parseInt(totalsecond / 60)
            if (second < 10) {
                $("#zero2").show()
            } else {
                $("#zero2").hide()
            }
            if (minute < 10) {
                $("#zero1").show()
            } else {
                $("#zero1").hide()
            }
            $minute.text(minute)
            $second.text(second)
        }
        if (totalsecond < 0) {
            clearInterval(p)
            $(".hourglass img").css("animation", "stop")
            alert("订单已超时，请重新购票")
            localStorage.removeItem("seat")
        }
    }, 1000)


    //渲染电影票信息
    var  cinema=localStorage.getItem("cinemaText")
    var  cinema =JSON.parse(cinema)
    var cinema =cinema[0]
    var  time =cinema.time
   var  cinmeName=cinema.cinemaname

    var seats = localStorage.getItem("seat")
    var seats = JSON.parse(seats)
    var seats = seats[0]

    var movieName = seats.movieName
    var money = seats.money
    var seatAll = seats.seat
    var seatStr = seatAll.join("|")

    $newDiv = (`
          <div class="movie">
                    <div class="item">《${movieName}》</div>
                    <div class="item">${time}</div>
                    <div class="item">${cinmeName}</div>
                    <div class="item">4号厅&nbsp;&nbsp;&nbsp;&nbsp;${seatStr}</div>
                </div>
 `)
    $money = (`
 <span id="money">￥${money}</span>
 `)
    $(".contents").append($newDiv)
    $(".money").append($money)



    //点击支付
    $("#pay").click(function () {
        //拿到电影选座信息
        var seats = localStorage.getItem("seat")
        var seats = JSON.parse(seats)
        var seats = seats[0]

        var movieName = seats.movieName
        var money = seats.money
        var seatAll = seats.seat
        
        var user=localStorage.getItem("loginUsers")
        var user=JSON.parse(user)
        var user=user[0]
        
        user.movieName=movieName
        user.money=money
        user.seat=seatAll
        var userArr2=[]
        userArr2.push(user)
        user=JSON.stringify(userArr2)
        localStorage.setItem("loginUsers", user)
    
    })



})