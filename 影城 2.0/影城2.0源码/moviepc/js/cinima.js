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

    //渲染所有电影
    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllMovies',
        success: function (data) {
            var movies = data.movies
            movies.forEach(movie => {
                $newMovieDiv = $(`
                <div style="overflow: hidden;" class="list">
                        <a href="" class="pay-link">购票</a>
                        <a href="" class="cinema-link"><img src="${movie.imgSrc}" alt="" class="cinema-p"></a>
                        <a  href="" class="cinema-name-link"><span class="cinema-name">${movie.title}</span></a>
                        <p class="cinema-think">${movie.score}</p>
                    </div> 
                `)
                $(".cinemaAll").append($newMovieDiv)
            })
        }
    })


    //热门排序
    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllMovies',
        success: function (data) {
            var movies = data.movies
            movies = movies.sort(function (a, b) {
                return a.score > b.score ? -1 : 1;
            })
            movies.forEach(movie => {
                $hotMovieDiv = $(`
                <div style="overflow: hidden; display: none;"  class="list p2">
                        <a href="" class="pay-link">购票</a>
                        <a href="" class="cinema-link"><img src="${movie.imgSrc}" alt="" class="cinema-p"></a>
                        <a  href="" class="cinema-name-link"><span class="cinema-name">${movie.title}</span></a>
                        <p class="cinema-think">${movie.score}</p>
                    </div> 
                `)
                $(".cinemaAll").append($hotMovieDiv)
            })
        }
    })

    $("body").on("click", "#hot", function () {
        $(this).prop('checked', true);
        $(this).siblings().prop('checked', false);
        $(".list").hide()
        $(".list.p2").show()
        $(".list.p3").hide()
    })


    //时间排序
    $.ajax({
        url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllMovies',
        success: function (data) {
            var movies = data.movies
            movies = movies.sort(function (a, b) {
                return a.release.substring(0, 10) > b.release.substring(0, 10) ? -1 : 1;
            })
            movies.forEach(movie => {
                $timeMovieDiv = $(`
                <div style="overflow: hidden; display: none;"  class="list p3">
                        <a href="" class="pay-link">购票</a>
                        <a href="" class="cinema-link"><img src="${movie.imgSrc}" alt="" class="cinema-p"></a>
                        <a  href="" class="cinema-name-link"><span class="cinema-name">${movie.title}</span></a>
                        <p class="cinema-think">${movie.score}</p>
                    </div> 
                `)
                $(".cinemaAll").append($timeMovieDiv)
            })
        }
    })

    $("body").on("click", "#time", function () {
        $(this).prop('checked', true);
        $(this).siblings().prop('checked', false);
        $(".list").hide()
        $(".list.p2").hide()
        $(".list.p3").show()
    })

    //完成搜索功能
    $("#searchbtn").on('click', function () {
        //获取文本框中的内容
        var searchVal = $("#searchipt1").val();
        $.ajax({
            url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllMovies',
            success: function (data) {
                var movies = data.movies;
                movies = movies.filter(function (item, index) {
                    return item.title.indexOf(searchVal) != -1;
                });
                movies.forEach(movie => {
                    $ssMovieDiv = $(`
                    <div style="overflow: hidden;"  class="list p4">
                            <a href="" class="pay-link">购票</a>
                            <a href="" class="cinema-link"><img src="${movie.imgSrc}" alt="" class="cinema-p"></a>
                            <a  href="" class="cinema-name-link"><span class="cinema-name">${movie.title}</span></a>
                            <p class="cinema-think">${movie.score}</p>
                        </div> 
                    `)
                    $(".cinemaAll").append($ssMovieDiv)
                })
            }
        });
             $(".list").hide()
             $(".list.p2").hide()
             $(".list.p3").hide()
    });
    
})



