$(function () {
    $('body').on('click', '#preoff', function () {
        history.back();
    });

    var id = location.search.split('&');
    // 电影id
    var movid = id[0].match(/\d+/);
    // 影院id
    var ceid = id[1].match(/\d+/);


    // 获取影院
    function cinma(cinem) {
        var current = cinem.filter(ceim => {
            return ceid == ceim.id;
        })
        return current[0].name;
    }
    // 接收 本电影数据 价格
    var cur;
    function render(movies, cenima, vious) {
        var movi = movies.filter(moi => {
            return moi.id == movid;
        })
        // console.log(movi)
        cur = movi[0];
        $('.content').html(`
        <h3>${cur.title}</h3>
        <p>${cinma(cenima)} <br> ${getTime("YYYY/MM/DD hh:mm " + '星期E')} </p>
        `)
    }

    // 座位
    // 获取本地用户
    var order = localStorage.getItem('allUser');
    var loc = localStorage.getItem('loginUser');
    var user = JSON.parse(order);
    var orderuse = user.filter(v => {
        return loc == v.phone;
    })
    console.log(orderuse);
    function ticket(movies, cinema) {
        if (orderuse[0].orders !== undefined) {
            orderuse[0].orders.forEach(v => {
                var mo = movies.filter(movi => {
                    return v.movieid == movi.id;
                })

                var cem = cinema.filter(vl => {
                    return v.cinemaid = vl.id;
                })
                var str = v.seats.split('&');
                str.forEach(vla => {
                    var row = vla.match(/[A-Z]/);
                    var col = vla.match(/\d/);
                    $(`.row${row} dd`).eq(col - 1).find('div').attr('class', 'ys');
                })
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
            cinma(cinema);
            render(movies, cinema, viou);
            ticket(movies, cinema)

            console.log(data1[0].movies);
            console.log(data2[0].types);
            console.log(data3[0].operas);
        }, function () {
            //失败回调，任意一个请求失败时返回 
            console.log('error');
        })
    }




    function getTime(format) {
        var now = new Date();
        //将YYYY转为当前的年份
        format = format.replace(/YYYY/g, now.getFullYear());
        //将MM转为当前的月份，本身api获取的0~11，所以要加1
        format = format.replace(/MM/g, now.getMonth() + 1);
        // 将DD转为当前日期
        format = format.replace(/DD/g, now.getDate());
        // 将hh转为当前小时数
        format = format.replace(/hh/g, now.getHours());
        //将mm转为当前分钟数
        format = format.replace(/mm/g, now.getMinutes());
        //将ss转为当前秒数
        format = format.replace(/ss/g, now.getSeconds());
        //将 E转为星期几,api得到的是0~6,0表示星期天
        var weekday = now.getDay();
        if (weekday == 0) {
            weekday = "天";
        } else if (weekday == 1) {
            weekday = '一';
        } else if (weekday == 2) {
            weekday = '二';

        } else if (weekday == 3) {
            weekday = '三';

        } else if (weekday == 4) {
            weekday = '四';

        } else if (weekday == 5) {
            weekday = '五';

        } else if (weekday == 6) {
            weekday = '六';
        }
        format = format.replace(/E/g, weekday);
        return format;
    };
    // var str = getTime("YYYY/MM/DD hh:mm:ss "+'星期E' );
    // console.log(str);


    //选座
    $('body').on('click', '.seat .kx,.seat .yx', function () {

        var clasNam = $(this).attr('class')
        var isShow = true;
        if (clasNam == 'kx') {
            $(this).attr('class', 'yx');
            isShow = true;
        } else if (clasNam == 'yx') {
            $(this).attr('class', 'kx');
            isShow = false;
        }
        // $('.selected')
        var clas = $(this).parents('.row').attr('class');
        var line = clas.match(/[A-Z]/);

        //    console.log(line);
        var col = $(this).parents('dd').index() + 1;
        var posi = `${line}${col}`;

        var ols = document.querySelectorAll(".selected ol");
        if (isShow && $(this).attr('class') == 'yx') {
            $('.selected').append(`<ol>${line}${col}</ol>`);
        } else {
            for (var i = 0; i < ols.length; i++) {
                if (ols[i].innerText == `${line}${col}`) {
                    //删除
                    ols[i].parentElement.removeChild(ols[i]);
                    break;
                }
            }
        }
        ols = document.querySelectorAll(".selected ol");
        $('.allprice p').text(`￥${(ols.length) * cur.price}`);
    });

    $('body').on('click', '.buy', function () {
        var $ols = $('.selected ol');
        var arrs = [];
        $ols.each(function (index, value) {
            arrs.push($(value).text());
        });
        localStorage.setItem('seats', arrs.join('&'));
        location.href = `order.html?movid=${movid}&cemid=${ceid}`
    });

})