$(function () {
    var id = location.search.substring(1);
    function types(movies, vious) {
        var movis = movies.filter(val => {
            return val.id == id;
        });
        var strtype = "";
        movis[0].movieType.forEach(mu => {
            var typa = vious.filter(val => {
                return mu == val.id;
            })
            strtype += typa[0].name + ' '
        })
        return strtype;
    }
    function render(movies, vious) {
        var mo = movies.filter(movie => {
            return movie.id == id;
        })
        $('#molist').html(`
        <li>
        <div class="images">
        <img src="${mo[0].imgSrc}" alt="">
        </div>
        <ul >
        <li><h3>${mo[0].title}</h3></li>
        <li>类型:<span>${types(movies, vious)}</span></li>
        <li>片长:<span>${mo[0].duration}</span></li>
        <li>评分:<span>${mo[0].score}</span></li>
        </ul>
        </li>
        `)
        $('#page').css({
            'background-image': `url(${mo[0].imgSrc})`
        })
        $('.item1 p').text(mo[0].desc);
    }
    // tab切换
    $('.title').on('click', 'p', function () {
        $(this).attr('id', 'p2').siblings().attr('id', 'p1');
        var index = $(this).index();
        if (index == 0) {
            index = 1;
        } else if (index == 1) {
            index = 0;
        }
        $('#item div').eq(index).css('display', 'block').siblings().css('display', 'none');
    })

    // 影院 
    function moceiy(movies, cinema) {
        var moadr = cinema.filter(val => {
            return val.movies.some(v => {
                return v == id;
            })
        })
        if (moadr.length != 0) {
            var mo = movies.filter(movie => {
                return movie.id == id;
            })
            var movi = mo[0];
            moadr.forEach(va => {
                $('.item2').append(` 
            <div class="text">
                <h4 class='cname'>${va.name}</h4>
                <p> <img src="images/movcemi.png" alt="">
                54.0km •${va.address}</p>
                <h5>${movi.language} 2D • ￥${movi.price}</h5>
            <ul>
                <li class="li-3">
                    12:00
                </li>
                <li class="li-1">
                    13:00
                </li>
                <li class="li-2">
                    10:00
                </li>
                <li class="li-2">
                    21:00
                </li>
                <li class="li-2">
                    17:00
                </li>
                <li class="li-2">
                    23:00
                </li>
                <li class="li-2">
                    12:00
                </li>
            </ul>
        </div>`)
            })
        } else {
            $('.item2').text('暂无影院放映！');
            $('.item2').css({
                'font-size': '0.28rem',
                'text-align': 'center',
                'margin-top': '0.24rem',
                'color': 'red'

            });
        }
    }
    $('body').on('click', '#preoff', function () {
        history.back();
    });


    var isSel=false;
    function cinmaSelt() {
        var legth = document.querySelectorAll('.cname');
        $('body').on('click', '.cname', function () {
            legth.forEach(val=>{
                val.setAttribute('class','cname');
            })
            $(this).attr('class', 'cname selt');
            isSel=true;
        })
    }
    // 判断用户登录
    var isLog = false;
    function isLogin() {
        var user = localStorage.getItem('loginUser');
        if (user == null) {
            alert('您还没有登录账号,请先登录~~');
            location.href='mobilelogin.html';
            // location.href = `select_seat.html?movid=${movid}?cemid=${id}`
            // console.log(curentmovi)
            isLog = false;
        } else {
            isLog = true;
        }
    }
    function selSeat(cinema){

    
    $('body').on('click', '#toseat', function () {
        isLogin();
        if (isLog) {
            isLog = false;
           var yiname= $('.selt').text();
          var selid= cinema.filter(v=>{
               return v.name==yiname;
           })
           if(isSel){
               isSel=false;
               location.href = `choose.html?movid=${id}&cemid=${selid[0].id}`
           }else {
               alert('请选择相应的电影院,再进行选座');
           }
           console.log(yiname);
        }
    });
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
            render(movies, viou);
            // 电影类型
            types(movies, viou);
            // 影院
            moceiy(movies, cinema)
            cinmaSelt() ;
            // 选座跳转
            selSeat(cinema)
            // console.log(types(movies,viou))
            console.log(data1[0].movies);
            console.log(data2[0].types);
            console.log(data3[0].operas);
        }, function () {
            //失败回调，任意一个请求失败时返回 
            console.log('error');
        })
    }

})