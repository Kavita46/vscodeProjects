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

     //渲染数据

     var  cinema=localStorage.getItem("cinemaText")
     var  cinema =JSON.parse(cinema)
     var cinema =cinema[0]
     var  time =cinema.time
    var  cinmeName=cinema.cinemaname


    var loginUsers=localStorage.getItem("loginUsers")
    var loginUsers=JSON.parse(loginUsers)
    var loginUsers=loginUsers[0]
    
    var movieName=loginUsers.movieName
    var seatAll=loginUsers.seat
    var money=loginUsers.money
    var seaStr=seatAll.join("|")

    $.ajax({
        url:'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies',
        success:function(data){
           var movies=data.movies.filter(movie=>movie.title==movieName);
           var movie=movies[0]
           $newddDiv=$(`
           <div class="header1">2021-08-11<span>蜗牛订单号:22538083977</span></div>
           <div class="movie">
            <img src="${movie.imgSrc}" alt="">
            <div class="movietext">
                <p>《${movieName}》</p>
                <p>${cinmeName}</p>
                <p>4号厅&nbsp;&nbsp;&nbsp;${seaStr}</p>
                <p>${time}</p>
            </div>
            <div class="money">￥${money}</div>
            <div class="state">待使用</div>
            <div class="al"><button>取票</button></div>
           </div>
           `)
           $(".contents").append($newddDiv)
        }
    })
})