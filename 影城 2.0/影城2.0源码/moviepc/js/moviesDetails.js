$(function () {
    //页面加载时判断当前是否登录
    var user = localStorage.getItem("loginUsers")
    if (user == null) {
        $("#showRegisterDiv").show()
        $("#showLoginDiv").show()
    } else {
        var user = localStorage.getItem("loginUsers")
        user = JSON.parse(user)
        var user = user[0]
        var phone = user.lphone
        var name = user.lname
        var text = user.userPinglun
        var score = user.star
        var time = user.time
        $("#showRegisterDiv").hide()
        $("#showLoginDiv").hide()
        $("#name").show().text("欢迎您" + phone)
        $("#esc").show()
        var userPinglunDiv = document.createElement('div')
        userPinglunDiv.className = "ping1"
        userPinglunDiv.innerHTML = `
        
                                                 <div class="left">
                                                     <img src="./images/tx1.jpg" alt="">
                                                 </div>
                                                 <div class="right">
                                                     <div class="shang">
                                                         <div class="nicheng">
                                                             <h2>${name}</h2>
                                                             <p>${time}<img src="./images/star${score}.png" alt=""></p>
                                                         </div>
                                                         <div id="goods">
                                                            
                                                             <i class="fa fa-thumbs-up">158</i>
                                                         </div>
                                                     </div>
                                                     <div class="xia">
                                                         <p>${text}
                                                         </p>
                                                     </div>
     
                                                 </div>
                                        
        `
        var fatherEle = document.querySelector(".pinglun")
        if (text != undefined) {
            fatherEle.appendChild(userPinglunDiv)
        }

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


    //渲染数据
    var id = location.search.split("=")[1]
    $.ajax({
        type: 'GET',
        url: "https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies",
        success: function (data) {
            var movies = data.movies.filter(movie => movie.id == id);
            var movie = movies[0]
            movie.actors = movie.actors.split("/");
            $newMovieDiv = $(`
           <div class="mains">
                    <div class="left">
                        <img style="width: 240px; height: 330px;" src="${movie.imgSrc}" alt="">
                    </div>
                    <div class="right">
                        <h3>${movie.title}</h3>
                        <h5></h5>
                        <h6 id="type">&nbsp;</h6>
                        <p>${movie.region} / ${movie.duration}</p>
                        <p>${movie.release}</p>
                        <div class="koubei">
                            <div class="btn">
                                <button id="change"><i class="fa fa-heart"></i><a id="want" href="">想看</a></button>
                                <button><i class="fa fa-star"></i><a href="">评分</a></button>
                                <button><a id="chooseSeats" href="seats.html?id=${movie.id}">特惠购票</a></button>
                            </div>
                            <div class="word">
                                <p>蜗牛口碑</p>
                                <div class="xingji">
                                    <div class="pingfen">
                                        <h2>${movie.score}</h2>
                                    </div>
                                    <div class="renshu">

                                    </div>
                                    <span><img src="./images/xingji .jpg" alt=""><br>13.3万人评分</span>
                                </div>
                                <p>累计票房</p>
                                <h3>2.38<span>亿</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
           `)
            $newTitle = $(`
           <li class="breadcrumb-item active" aria-current="page">${movie.title}</li>
           `)
            $newSynopsis = $(`
           <p>${movie.desc}</p>
           `)
            $newDc = $(`
                                            <li><img src="./images/yz1.jpg" alt="">
                                                <p>${movie.actors[0]}</p>
                                            </li>
                                            <li><img src="./images/yz2.jpg" alt="">
                                                <p>${movie.actors[1]}</p><span>饰：陈辰</span>
                                            </li>
                                            <li><img src="./images/yz3.jpg" alt="">
                                                <p>${movie.actors[2]}</p><span>饰：郑宇星</span>
                                            </li>
                                            <li><img src="./images/yz4.jpg" alt="">
                                                <p>${movie.actors[1]}</p><span>饰：陈辰妈妈</span>
                                            </li>
                                            <li><img src="./images/yz5.jpg" alt="">
                                                <p>${movie.actors[2]}</p><span>饰：王叔叔</span>
                                            </li>
           `)
            $newPinlun = $(`
           <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx1.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Hp</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[0]}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx2.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Tenten</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[1]}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx3.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Ming</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                        
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[2]}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx4.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Hp</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[3]}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx5.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Tenten</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[4]}</p>
                                                </div>

                                            </div>
                                        </div>
           `)
            var movieTypes = movie.movieType
            // console.log(movieTypes);
            $.ajax({
                url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllTypes',
                success: function (data) {
                    var types = data.types
                    // console.log(types);
                    var newMovieTypes = [];
                    for (var movieType of movieTypes) {
                        var mt = types.filter(function (item) {
                            return item.id == movieType;
                        })
                        newMovieTypes.push(mt[0]);
                    }
                    var movieTypeName = [];
                    for (var newMovieTypeItem of newMovieTypes) {
                        movieTypeName.push(newMovieTypeItem.name);
                    }
                    var movieTypesNameStr = movieTypeName.join(" ");
                    $("#type").text(movieTypesNameStr)
                }
            })
            $(".banner").append($newMovieDiv)
            $(".breadcrumb").append($newTitle)
            $(".juqing").append($newSynopsis)
            $("#actors").append($newDc)
            $(".pinglun").append($newPinlun)
        }
    })
    $.ajax({
        type: 'GET',
        url: "https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getUpCommingMovies",
        success: function (data) {
            var movies = data.movies.filter(movie => movie.id == id);
            var movie = movies[0]
            movie.actors = movie.actors.split("/");
            $newMovieDiv = $(`
           <div class="mains">
                    <div class="left">
                        <img style="width: 240px; height: 330px;" src="${movie.imgSrc}" alt="">
                    </div>
                    <div class="right">
                        <h3>${movie.title}</h3>
                        <h5></h5>
                        <h6 id="type">&nbsp;</h6>
                        <p>${movie.region} / ${movie.duration}</p>
                        <p>${movie.release}</p>
                        <div class="koubei">
                            <div class="btn">
                                <button id="change"><i class="fa fa-heart"></i><a id="want" href="">想看</a></button>
                                <button><i class="fa fa-star"></i><a href="">评分</a></button>
                                <button><a href="">特惠购票</a></button>
                            </div>
                            <div class="word">
                                <p>蜗牛口碑</p>
                                <div class="xingji">
                                    <div class="pingfen">
                                        <h2>${movie.score}</h2>
                                    </div>
                                    <div class="renshu">

                                    </div>
                                    <span><img src="./images/xingji .jpg" alt=""><br>13.3万人评分</span>
                                </div>
                                <p>累计票房</p>
                                <h3>2.38<span>亿</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
           `)
            $newTitle = $(`
           <li class="breadcrumb-item active" aria-current="page">${movie.title}</li>
           `)
            $newSynopsis = $(`
           <p>${movie.desc}</p>
           `)
            $newDc = $(`
                                            <li><img src="./images/yz1.jpg" alt="">
                                                <p>${movie.actors[0]}</p>
                                            </li>
                                            <li><img src="./images/yz2.jpg" alt="">
                                                <p>${movie.actors[1]}</p><span>饰：陈辰</span>
                                            </li>
                                            <li><img src="./images/yz3.jpg" alt="">
                                                <p>${movie.actors[2]}</p><span>饰：郑宇星</span>
                                            </li>
                                            <li><img src="./images/yz4.jpg" alt="">
                                                <p>${movie.actors[1]}</p><span>饰：陈辰妈妈</span>
                                            </li>
                                            <li><img src="./images/yz5.jpg" alt="">
                                                <p>${movie.actors[2]}</p><span>饰：王叔叔</span>
                                            </li>
           `)
            $newPinlun = $(`
           <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx1.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Hp</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[0]}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx2.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Tenten</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[1]}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx3.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Ming</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                        
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[2]}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx4.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Hp</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[3]}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ping1">
                                            <div class="left">
                                                <img src="./images/tx5.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>Tenten</h2>
                                                        <p>23小时前<img src="./images/pinfen_06.jpg" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${movie.comments[4]}</p>
                                                </div>

                                            </div>
                                        </div>
           `)
            var movieTypes = movie.movieType
            // console.log(movieTypes);
            $.ajax({
                url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllTypes',
                success: function (data) {
                    var types = data.types
                    // console.log(types);
                    var newMovieTypes = [];
                    for (var movieType of movieTypes) {
                        var mt = types.filter(function (item) {
                            return item.id == movieType;
                        })
                        newMovieTypes.push(mt[0]);
                    }
                    var movieTypeName = [];
                    for (var newMovieTypeItem of newMovieTypes) {
                        movieTypeName.push(newMovieTypeItem.name);
                    }
                    var movieTypesNameStr = movieTypeName.join(" ");
                    $("#type").text(movieTypesNameStr)
                }
            })
            $(".banner").append($newMovieDiv)
            $(".breadcrumb").append($newTitle)
            $(".juqing").append($newSynopsis)
            $("#actors").append($newDc)
            $(".pinglun").append($newPinlun)
        }
    })
    //点击显示发布评论框
    $("#comment").click(function () {
        var user = localStorage.getItem("loginUsers")
        if (user == null) {
            alert("当前无用户登录，请先登录")
        } else {
            $(".comment").show()
        }
    })
    $(".close").click(function () {
        $(".comment").hide()
    })

    //想看
    var changeON = true;
    $("body").on("click", "#change", function () {
        if (user == null) {
            alert("当前无用户登录，请先登录")
        } else {
            if (changeON == true) {
                $(".fa.fa-heart").css("color", "red")
                $('#want').css("color", "red")
                changeON=false;
            }else if(changeON==false){
                $(".fa.fa-heart").css("color", "")
                $('#want').css("color", "")
                changeON=true;
            }
        }
    })

    //tab切换
    $("#profile-tab").click(function(){
        $("#profile").show()
        $("#home").hide()
    })
    $("#home-tab").click(function(){
        $("#profile").hide()
        $("#home").show()
    })

     //点击选座判断
      
     $("body").on("click","#chooseSeats",function(event){
         if(user==null){
             alert("当前无用户登录，请先登录")
           event.preventDefault()
         }
     })

})

var flag = true;

function clickStar(num) {
    if (flag == true) {
        document.querySelector("#star").className = "item-" + num + " item active";
        document.querySelector("#score").innerText = num
        flag = false;
    } else if (flag == false) {
        if (document.querySelector("#star").className == "item-" + num + " item active") {
            document.querySelector("#star").className = "item-" + 0 + " item active"
            document.querySelector("#score").innerText = ""
            flag = true
        } else {
            document.querySelector("#star").className = "item-" + num + " item active"
            document.querySelector("#score").innerText = num
        }
    }
}

//点击发布
function clickRelease() {
    var user = localStorage.getItem("loginUsers")
    var user = JSON.parse(user)
    var user = user[0]
    var name = user.lname

    //获取文本框内容
    var text = document.querySelector("textarea").value
    //获取分数
    var score = document.querySelector("#score").innerText
    //获取时间
    var curDate = new Date();
    var year = curDate.getFullYear();
    //获取月份
    var month = (curDate.getMonth() + 1) < 10 ? "0" + (curDate.getMonth() + 1) : curDate.getMonth() + 1;
    //获取天数
    var date = (curDate.getDate()) < 10 ? "0" + (curDate.getDate()) : (curDate.getDate());
    //获取小时
    var hours = (curDate.getHours()) < 10 ? "0" + (curDate.getHours()) : (curDate.getHours());
    //获取分钟
    var minutes = (curDate.getMinutes()) < 10 ? "0" + (curDate.getMinutes()) : (curDate.getMinutes());
    //获取秒数
    var seconds = (curDate.getSeconds()) < 10 ? "0" + (curDate.getSeconds()) : (curDate.getSeconds());

    var dateInfo = ` ${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

    //创建标签
    var userPinglunDiv = document.createElement('div')
    userPinglunDiv.className = "ping1"
    userPinglunDiv.innerHTML = `
   
                                            <div class="left">
                                                <img src="./images/tx1.jpg" alt="">
                                            </div>
                                            <div class="right">
                                                <div class="shang">
                                                    <div class="nicheng">
                                                        <h2>${name}</h2>
                                                        <p>${dateInfo}<img src="./images/star${score}.png" alt=""></p>
                                                    </div>
                                                    <div id="goods">
                                                       
                                                        <i class="fa fa-thumbs-up">158</i>
                                                    </div>
                                                </div>
                                                <div class="xia">
                                                    <p>${text}
                                                    </p>
                                                </div>
                                            </div>
                                       
   `
    var fatherEle = document.querySelector(".pinglun")
    fatherEle.appendChild(userPinglunDiv)
    document.querySelector(".comment").style.display = "none"

    user.userPinglun = text
    user.star = score
    user.time = dateInfo
    var userArr = []
    userArr.push(user)
    user = JSON.stringify(userArr)
    localStorage.setItem("loginUsers", user)


    
}