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

    //渲染数据
    var id = location.search.split("=")[1];
    $.ajax({
        url: "https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllOperas",
        success: function (data) {
            var operas = data.operas.filter(opera => opera.id == id);
            var opera = operas[0];
            $newDiv = $(`
            <div class="screenBox">
                <div class="picture"><img style="margin-left: 5px;" src="${opera.img_src}" alt=""></div>
            </div>
            <!-- 中框文本 -->
            <div class="text">
                <div class="details">
                    <strong>${opera.name}</strong>
                    <p id="where">${opera.address}</p>
                    <p>电话：${opera.phone}</p>
                    <br>
                    <span>影院服务</span>
                </div>
                <div class="service">
                    <div>
                        <p>改签</p>
                        <span>未取票用户放映前3小时可改签</span>
                    </div>
                    <div>
                        <p>3D眼镜</p>
                        <span>免押金</span>
                    </div>
                    <div>
                        <p>儿童优惠</p>
                        <span>一名成人仅可携带一名不足1.3米儿童无座免费观影（巨幕厅、情侣厅除外），...</span>
                    </div>
                    <div>
                        <p>WiFi</p>
                        <span>影院有免费WiFi</span>
                    </div>
                    <div>
                        <p>可停车</p>
                        <span>商场内可停车。（检票口可领取2小时免费停车券）</span>

                    </div>
                </div>
            </div>
            `)
            $("#cinemaText").text(`${opera.name}`)
            $(".map").before($newDiv)
            var map = new BMap.Map("container");
            //定位点：参数1为经度，参数2为维度
            var point = new BMap.Point(116.404, 39.915);
            //地图初始化，同时设置地图展示级别
            map.centerAndZoom(point, 15);
            // 创建地址解析器实例     
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上，并调整地图视野    
            myGeo.getPoint(`"${opera.address}"`, function (point) {
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                }
            });
        }
    })

    //渲染数据
    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies',
        success: function (data) {
            var movies = data.movies
            movies.forEach(movie => {
                $newImg = $(`
              <div class="picBox">
              <p style="display:none;" class="time">${movie.duration}</p>
              <p style="display:none;" class="score">${movie.score}</p>
              <p style="display:none;" class="actor">${movie.actors}</p>
              <span style="display:none;">${movie.title}</span>
              <img style="width:100%;" src="${movie.imgSrc}" alt="">
              </div>
              `)
                $(".slide").prepend($newImg)
            })
        }
    })




    //获取时间
    var curDate = new Date();
    var year = curDate.getFullYear();
    //获取月份
    var month = (curDate.getMonth() + 1) < 10 ? "0" + (curDate.getMonth() + 1) : curDate.getMonth() + 1;
    //获取天数
    var date = (curDate.getDate()) < 10 ? "0" + (curDate.getDate()) : (curDate.getDate());
    //获取小时
    var hours = (curDate.getHours()) < 10 ? "0" + (curDate.getHours()) : (curDate.getHours());
    //获取分钟
    var minutes = (curDate.getMinutes()) < 10 ? "0" + (curDate.getMinutes()) : (curDate.getMinutes());


    $("#monthAnddate").text("今天" + month + "月" + date)
    var nowtime = String(hours) + String(minutes)


    var starttime = $("#pp1 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp1 button").css("color", "black")
        $("#pp1 button").css("background-color", "#ddd")
        $("#pp1 button").text("停止售票")
        $("#pp1 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp1 button").text("购票")
    }



    var starttime = $("#pp2 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp2 button").css("color", "black")
        $("#pp2 button").css("background-color", "#ddd")
        $("#pp2 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp2 button").text("购票")
    }


    var starttime = $("#pp3 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp3 button").css("color", "black")
        $("#pp3 button").css("background-color", "#ddd")
        $("#pp3 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp3 button").text("购票")
    }

    var starttime = $("#pp4 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp4 button").css("color", "black")
        $("#pp4 button").css("background-color", "#ddd")
        $("#pp4 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp4 button").text("购票")
    }


    var starttime = $("#pp5 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp5 button").css("color", "black")
        $("#pp5 button").css("background-color", "#ddd")
        $("#pp5 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp5 button").text("购票")
    }



    var starttime = $("#pp6 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp6 button").css("color", "black")
        $("#pp6 button").css("background-color", "#ddd")
        $("#pp6 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp6 button").text("购票")
    }



    var starttime = $("#pp7 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp7 button").css("color", "black")
        $("#pp7 button").css("background-color", "#ddd")
        $("#pp7 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp7 button").text("购票")
    }


    var starttime = $("#pp8 h4").text()
    var starttime = starttime.split(":")
    var starttime = String(starttime[0]) + String(starttime[1])
    if (nowtime > starttime) {
        $("#pp8 button").css("color", "black")
        $("#pp8 button").css("background-color", "#ddd")
        $("#pp8 button").click(function () {
            alert("电影已经开始放映，请选择其他场次")
        })
    } else {
        $("#pp8 button").text("购票")
    }

    //点击图片切换
    $('body').on("click", ".picBox", function () {
        var movieName = $(this).find("span").text()
        var actor = $(this).find(".actor").text()
        var score = $(this).find(".score").text()
        var time = $(this).find(".time").text()
        $("#text").text(movieName)
        $("#actor").text(actor)
        $("#score").text(score)
        $("#time").text(time)
    })


    //点击选座购票
    $("button[type='submit']").click(function () {
        var time = $(this).parent().parent().children("td:first").children("h4").text()
        var todaytime = `今天${month}月${date}  ${time}`
        var moviename = $("#text").text()
        var cinemaname = $("#cinemaText").text()


        var cinemaMovie = {
            time: todaytime,
            moviename: moviename,
            cinemaname: cinemaname
        }

        var cinemaArr = []
        cinemaArr.push(cinemaMovie)

        var cinemaObj = JSON.stringify(cinemaArr)
        var mm = $(this).text()
        if (mm == "购票") {
            localStorage.setItem("cinemaText", cinemaObj)
            window.location.href = "seats.html"
        }

    })

})