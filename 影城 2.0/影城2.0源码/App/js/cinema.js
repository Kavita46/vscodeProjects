$(function(){

    function render(cinema){
        cinema.forEach(element => {
            $('.cinema_lis').append(`
            <li>
            <div class="img_cm">
                <img src="${element.img_src}" alt="">
            </div>
            <div class="cinema_dec">
                <h3 id="locat">${element.name}</h3>
                <div class="posi">
                    <b></b><span>1.0km</span>
                </div>
            </div>
        </li>
            `);

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
                render(cinema);
                console.log(data1[0].movies);
                console.log(data2[0].types);
                console.log(data3[0].operas);
            }, function () {
                //失败回调，任意一个请求失败时返回 
                console.log('error');
            })
        }
})