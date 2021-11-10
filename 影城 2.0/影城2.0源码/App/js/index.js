$(function () {
    // 渲染影片
    function render(movies) {
        movies.forEach(movie => {
            $('.list').append(` <li>
            <div class="movies_img">
            <a href="introduction.html?${movie.id}"><img src="${movie.imgSrc}" alt=""></a>
            </div>
            <div class="movi_name">
                <h3>${movie.title}</h3>
            </div>
        </li>`);
        });
    }
    // 登录用户

    var isLo = false;
    isLogin();
    function isLogin() {
        var user = localStorage.getItem('loginUser');
        if (user == null) {
            // alert('您还没有登录账号,请先登录~~');
            //    location.href='mobilelogin.html';
            $('#have').css('display', 'none');
            $('.wrap').html('未登录');
            isLo = false;
        } else {
            isLo = true;
            $('.wrap').html(`<h3>你好,</h3>
             <p id="user">${user}用户</p>`);
            $('#have').css('display', 'block');
        }
    }

    function ticket(movies, cinema) {
        var order = localStorage.getItem('allUser');
        var loc = localStorage.getItem('loginUser');
        var user = JSON.parse(order);
        var orderuse = user.filter(v => {
            return loc == v.phone;
        })

        var ordes = orderuse[0];
        console.log(ordes);
        if ('orders' in ordes) {


            // console.log(orderuse)
            ordes.orders.forEach(v => {
                var mo = movies.filter(movi => {
                    return v.movieid == movi.id;
                })

                var cem = cinema.filter(vl => {
                    return v.cinemaid = vl.id;
                })
                $('.menu_lis').append(`
            <li>
            <div class="top">
                <h4>${mo[0].title}</h4>
                <div class="adre">
                    <span >${cem[0].name} •</span> <span >${v.playtime}</span>
                </div>
            </div>
            <div class="botdes">
                <h4>515334</h4>
                <a href="decial_ticket.html" class='more'>查看详情 &nbsp;&nbsp;&gt;</a>

            </div>
        </li>
    `)
            })
        }

    }


    // 获取数据
    getData();
    function getData() {
        var fun1 = $.ajax({ url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies" }),
            fun2 = $.ajax({ url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllTypes" })
        fun3 = $.ajax({ url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas" });
        // fun3 = $.ajax({ url: "/something" });
        $.when(fun1, fun2, fun3).then(function (data1, data2, data3) {
            //成功回调，所有请求正确返回时调用 
            var movies = data1[0].movies;
            var viou = data2[0].types;
            var cinema = data3[0].operas;
            //   types(movies, viou);
            if(isLo){
                isLo=false;
                ticket(movies, cinema)
            }
            render(movies);
            // console.log(data1[0].movies);
            // console.log(data2[0].types);
            // console.log(data3[0].operas);
        }, function () {
            //失败回调，任意一个请求失败时返回 
            console.log('error');
        })
    }




})