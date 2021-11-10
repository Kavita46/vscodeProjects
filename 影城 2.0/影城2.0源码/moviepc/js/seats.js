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



    //渲染已售座位
    var seat = localStorage.getItem("seat")
    if (seat != null) {
        var seat = JSON.parse(seat)
        var seat = seat[0]
        var seatText = seat.seat

        for (let item of seatText) {

            var seatNum = item.split("排")
            var row = parseInt(seatNum[0])
            var line = parseInt(seatNum[1])
            var liEle = $(`.row.row${row}>ul>li.kx,.row.row${row}>ul>li.ys`)
            var seatss = liEle[line - 1]
            //    console.log(seatss);
            //  seatss.innerHTML="ys"
            $(seatss).attr("class", "ys")
        }

    }












    //渲染电影
    var id = location.search.split("=")[1]
    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies',
        success: function (data) {
            var movies = data.movies.filter(movie => movie.id == id);
            var movie = movies[0]
            $newMovieDiv = $(`
             <div>
             <img style="width: 119px;height: 162px;" src="${movie.imgSrc}" alt="">
         </div>
         <div>
             <h6 id="moviename">${movie.title}</h6>
             <p><span>类型：</span><span>剧情,青春</span></p>
             <p><span>时长：</span><span>${movie.duration}</span></p>
         </div>
             `)
            $(".movie").append($newMovieDiv)
        }
    })



    //渲染
    var cinematext = localStorage.getItem("cinemaText")
    var cinemaArr = JSON.parse(cinematext)
    var cinema = cinemaArr[0]
    var movieName = cinema.moviename
    var movieTime = cinema.time
    var cinemaName = cinema.cinemaname

    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies',
        success: function (data) {
            var movies = data.movies.filter(movie => movie.title == movieName);
            var movie = movies[0]
            $newMovieDiv = $(`
             <div>
             <img style="width: 119px;height: 162px;" src="${movie.imgSrc}" alt="">
         </div>
         <div>
             <h6 id="moviename">${movieName}</h6>
             <p><span>类型：</span><span>剧情,青春</span></p>
             <p><span>时长：</span><span>${movie.duration}</span></p>
         </div>
             `)
            $newMovieText = $(`
               <p><span>影院：</span><span>${cinemaName}</span></p>
                <p><span>影厅：</span><span>4号厅</span></p>
                <p><span>版本：</span><span>国语2D</span></p>
                <p id="todaytime"><span>场次：</span><span class="movie-time">${movieTime}</span></p>
                <p><span>票价：</span><span>￥26.9/张</span></p>
             `)
            $(".movie").append($newMovieDiv)
            $(".movie-details").append($newMovieText)
        }
    })

    //选座 
    var cont = 0
    $(".seats ul li").click(function () {
        var className = $(this).attr("class");
        if (className == "ys") {
            alert("此座位已被购买，请选择其它座位")
        } else if (className == "kx" && cont < 5) {
            $(this).attr("class", "yx")
            cont++
            //获取行数列数
            var divClassVal = $(this).parent().parent().attr("class")
            var rowNum = divClassVal.split(" ")[1].substring(3)
            var seat = $(`.row${rowNum} .kx,.row${rowNum} .yx,.row${rowNum} .ys`)
            var columNum;
            for (var i = 0; i < seat.length; i++) {
                if (this == seat[i]) {
                    columNum = i
                }
            }
            var zuowei = `${rowNum}排${columNum+1}座`
            var $li = (`
        <li style="float: left; margin-left: 5px; margin-top: 5px;">${zuowei}</li>
         `)
            $(".seats-havesit").show()
            $("#rq").append($li)
            var allPrice = parseInt(cont * 26.9)
            $(".price").text(allPrice)
        } else if (className == "kx" && cont == 5) {
            alert("每人单次最多可购买5张")
            //取消选座
        } else if (className == "yx" && cont <= 5) {
            $(this).attr("class", "kx")
            cont--
            var divClassVal = $(this).parent().parent().attr("class")
            var rowNum = divClassVal.split(" ")[1].substring(3)
            var seat = $(`.row${rowNum} .kx,.row${rowNum} .yx,.row${rowNum} .ys`)
            var columNum;
            for (var i = 0; i < seat.length; i++) {
                if (this == seat[i]) {
                    columNum = i
                }
            }
            var zuowei = `${rowNum}排${columNum+1}座`
            $("#rq li").each(function (index, item) {
                if ($(item).html() == zuowei) {
                    $(item).remove();
                }
            })
            var allPrice = parseInt(cont * 26.9)
            $(".price").text(allPrice)
        }
    })

    //确认选座
    // $("#seatPhone").blur(function () {
    //     var reg = /^\d{11}$/
    //     var phoneVal = $(this).val()
    //     if (reg.test(phoneVal)) {
    //         // $(".gray").css("color", "white")
    //         // $(".gray").css("background-color", "#F99135")
    //         // $(".seats-btn").css("cursor", "pointer")
    //         // $(".gray").css("pointer-events", "all")
    //     }
    // })

    //点击确认选座
    $(".gray").click(function () {
        var seatArr = []
        var money = $(".price").text()
        var movieName = $("#moviename").text()
        var seatEle = $('#rq li')
        for (var item of seatEle) {
            var seatText = $(item).text()
            seatArr.push(seatText)
        }
        var seatObj = {
            movieName: movieName,
            seat: seatArr,
            money: money
        }
        var seat = []
        seat.push(seatObj)
        var seatJson = JSON.stringify(seat)
        localStorage.setItem("seat", seatJson)
        $(location).attr("href", "pay.html")
    })






    $("#code").click(function () {
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ]
        var newArr = [];
        for (var i = 1; i <= 4; i++) {
            var index = parseInt(Math.random() * arr.length);
            newArr.push(arr[index]);
        }
        var newArr = newArr.join("")
        document.querySelector("#code").innerText = newArr;

    })


    $("#yz").blur(function () {
        var yz = $(this).val()
        var yzm = $("#code").text()
        if (yz == "") {
            $(this).css("border-color", "red")
            $("#codeMsg").text("验证码不能为空")
            $("#codeMsg").css("color", "red")
        } else if (yz != yzm) {
            $(this).css("border-color", "red")
            $("#codeMsg").text("验证码错误")
            $("#codeMsg").css("color", "red")
        } else if (yz == yzm) {
            $(this).css("border-color", "green")
            $("#codeMsg").text("验证码正确")
            $("#codeMsg").css("color", "green")
            $(".gray").css("color", "white")
            $(".gray").css("background-color", "#F99135")
            $(".seats-btn").css("cursor", "pointer")
            $(".gray").css("pointer-events", "all")
        }
    })




})