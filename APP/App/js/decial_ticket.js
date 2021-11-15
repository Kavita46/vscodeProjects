$(function(){
    $('body').on('click', '.back', function () {
        history.back();
    });


    // 获取本地用户
    var order = localStorage.getItem('allUser');
    var loc = localStorage.getItem('loginUser');
    var user = JSON.parse(order);
    var orderuse = user.filter(v => {
        return loc == v.phone;
    })
    console.log(orderuse);
    function ticket(movies, cinema) {
        orderuse[0].orders.forEach(v => {
            var mo = movies.filter(movi => {
                return v.movieid == movi.id;
            })

            var cem = cinema.filter(vl => {
                return v.cinemaid = vl.id;
            })
            var str=v.seats.split('&');
            str.forEach(vla=>{
                $('.seat').append(`
                <li>${vla}</li>
              `)
            })
            $('.img_p img').attr('src',`${mo[0].imgSrc}`);
            $('#mov_name').text(mo[0].title);
            $('#addres_ord').text(cem[0].name);
            $('#tim').text(cem[0].playtime);
        })
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
            ticket(movies, cinema)
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