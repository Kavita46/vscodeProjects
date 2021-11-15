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
    if(strnum==null){
        alert('未选座位');
    }else{

        var arry = strnum.split('&');
    }
    
    function render(movies, cenima, vious) {
        var movi = movies.filter(moi => {
            return moi.id == movid;
        })
        var order = movi[0];
        $('.order_pay').html(`
    
        <div class="img_p">
            <img src="${order.imgSrc}" alt="">
        </div>
        <div class="orders">
            <p>订单号：<span id="order_id">${+new Date()}</span></p>
            <h3 id="mov_name">${order.title}</h3>
            <div id="addres_ord">${cinma(cenima)}•${order.language} 2D</div>
        </div>
        `)
        arry.forEach(val => {
            $('.seat').append(`<li>${val}</li>`)
        })
        $('.setum').text(`${arry.length}`);
       
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