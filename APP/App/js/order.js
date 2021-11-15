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
    // 获取座位

    var strnum = localStorage.getItem('seats');
    console.log(strnum)

    if (strnum==null||strnum=="") {
        alert('您还没有选座位!');
        history.back();
    } else {
        var arry = strnum.split('&');
    }
    function render(movies, cenima, vious) {
        var movi = movies.filter(moi => {
            return moi.id == movid;
        })
        var order = movi[0];
        $('#molist').html(`
        <li>
        <div class="images">
        <img src="${order.imgSrc}" alt="">
        </div>
        <ul >
        <li><p>订单号： ${+new Date()}</p></li>
        <li><h3>${order.title}</h3></li>
        <li>${cinma(cenima)}•${order.language}2D</li>
        </ul>
        </li>
        `)
        arry.forEach(val => {
            $('#stret').append(`<div>${val}</div>`)
        })
        $('#sumst').text(`${arry.length}`);
        $('#prices').html(`<td>￥${arry.length * order.price}.00</td>
        <td>￥3.00</td>`);
        $('.subPrc').text(`￥${arry.length * order.price + 3}.00`)
    }
    $('body').on('click', '#btn', function () {
        $('#pay').css('display','block');

    });
    $('body').on('click','#preve',function(){
        $('#pay').css('display','none');

    })

   





    // 订单数据
    function pay(movies, cinem) {
        var movi = movies.filter(moi => {
            return moi.id == movid;
        })
        // 影院id
        var order = movi[0];

        var current = cinem.filter(ceim => {
            return ceid == ceim.id;
        })
        var ord = localStorage.getItem('allUser');
        var use=localStorage.getItem('loginUser');
        var str=JSON.parse(ord);
        var curUse= str.filter(v=>{
            return v.phone==use;
        })
        var order = {};
        order.orderid = +new Date();
        // order.userPhone = localStorage.getItem('loginUser');
        order.movieid = movi[0].id;
        order.cinemaid = current[0].id;
        order.seats = localStorage.getItem('seats');
        order.buytime = new Date();
        order.playtime = '2021-09-01';
        order.status = '待评价';
        // console.log(order);
        var orderst= curUse[0].orders ;

        // var obj = JSON.parse(ord);
        if (orderst == null){
           var  ordmy=[];
        //    curUse[0].orders;
           
        } else {
            ordmy = orderst;
        }
        ordmy.push(order);
        curUse[0].orders=ordmy;
        var orld = JSON.stringify(str);
        localStorage.setItem('allUser', orld);
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
            $('body').on('click','.button',function(){
                pay(movies, cinema)
                location.href = `pay_success.html?movid=${movid}&cemid=${ceid}`
            });
            // var ols = document.querySelectorAll(".selected ol");
            // $('.sumoy b').text(ols.length*cur.price);
            console.log(data1[0].movies);
            console.log(data2[0].types);
            console.log(data3[0].operas);
        }, function () {
            //失败回调，任意一个请求失败时返回 
            console.log('error');
        })
    }
})