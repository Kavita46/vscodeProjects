$(function () {
    // tab切换
    $('body').on('click', '.order_btn div', function () {
        var index = $(this).index();
        console.log(index)
        $(this).attr('class', 'nowuse').siblings().removeAttr('class')
        $('main .uty').eq(index).css('display', 'block').siblings('.uty').css('display', 'none');
    })


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
    // 获取本地用户
    // console.log(orderuse);
    function ticket(movies, cinema) {
        var order = localStorage.getItem('allUser');
        var loc = localStorage.getItem('loginUser');
    
        var user = JSON.parse(order);
        var orderuse = user.filter(v => {
            return loc == v.phone;
        })
           if(orderuse[0].orders!==undefined){

         
            orderuse[0].orders.forEach(v => {
                var mo = movies.filter(movi => {
                    return v.movieid == movi.id;
                })

                var cem = cinema.filter(vl => {
                    return v.cinemaid = vl.id;
                })
                $('.used_list').append(`
            <li>
            <div class="img_us">
                <img src="${mo[0].imgSrc}" alt="">
            </div>
            <div class="decil">
                <div class="des">
                <h3 >${mo[0].title}</h3>
                <p >${cem[0].name}</p>
                <p >${v.playtime}</p>
            </div>
            <h5  >交易成功</h5>  
            </div>
        </li>
    `)
                $('.ord_lis').append(`
    <li>
    <div class="toper">
        <div class="wraper">
            <h4>${mo[0].title}</h4>
            <div class="adre_tic">
                <span id="addr">${cem[0].name} •</span> <span>${v.playtime}</span>
            </div>
        </div>
        <div class="code">
            <img src="./images/ert.png" alt="">
        </div>
    </div>
    <div class="botid">
        <h4>515334</h4>
        <a href="decial_ticket.html" class="many">查看详情 &nbsp;&nbsp;&gt;</a>

    </div>
</li>`)
            })
        }else {
            $('main').html('<div class="node">您还没有任何订单</div>');
            $('.node').css({
                'font-size': '0.58rem',
                'text-align': 'center',
                'margin-top': '0.24rem',
                'color': 'red'

            });
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
            }else {
                $('main').html('<div class="node">您还未登录</div>');
                $('.node').css({
                    'font-size': '0.58rem',
                    'text-align': 'center',
                    'margin-top': '0.24rem',
                    'color': 'red'
    
                });
            }
            // render(movies);
            console.log(data1[0].movies);
            console.log(data2[0].types);
            console.log(data3[0].operas);
        }, function () {
            //失败回调，任意一个请求失败时返回 
            console.log('error');
        })
    }

})