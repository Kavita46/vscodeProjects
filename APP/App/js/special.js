$(function(){
// 电影类型

    function render(movies,vious) {
            movies.forEach(movie => {
                var typ = [];
                var type = movie.movieType;
                type.forEach(ind => {
                    var ty = vious.filter(type => {
                        return ind == type.id;
                    })
                    typ.push(ty[0].name); 
                })
            $('#list').append(`
         <li>
        <div class="images">
        <a href="introduction.html?${movie.id}"><img src="${movie.imgSrc}" alt=""></a>
        </div>
        <ul>
        <li>${movie.title}</li>
        <li>类型:<span>${typ.join(' ')}</span></li>
        <li>片长:<span>${movie.duration}</span></li>
        <li>评分:<span>${movie.score}</span></li>
        <li><button>立即购买</button></li>
        </ul>
        </li>
             `);
        });
    }
        // 获取数据
        getData();
        function getData() {
            var fun1 = $.ajax({ url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies" }),
                fun2 = $.ajax({ url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllTypes" }),
            fun3 = $.ajax({ url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas" });
            // fun3 = $.ajax({ url: "/something" });
            $.when(fun1, fun2, fun3).then(function (data1, data2, data3) {
                //成功回调，所有请求正确返回时调用 
                var movies = data1[0].movies;
                var viou = data2[0].types;
                // var cinema = data3[0].operas;
                
                // types(movies, viou);
                render(movies,viou);
                console.log(data1[0].movies);
                console.log(data2[0].types);
                console.log(data3[0].operas);
            }, function () {
                //失败回调，任意一个请求失败时返回 
                console.log('error');
            })
        }
});