$(function () {
    var user=localStorage.getItem("loginUsers")
    if(user==null){
        $("#showRegisterDiv").show()
        $("#showLoginDiv").show()
    }else{
        var user=localStorage.getItem("loginUsers")
        user=JSON.parse(user)
        var phone=user[0].lphone
        $("#showRegisterDiv").hide()
        $("#showLoginDiv").hide()
        $("#name").show().text("欢迎您"+phone)
        $("#esc").show()
    }
    //注销
    $("#esc").click(function(){
        //退出登录 并清楚本地数据
        localStorage.removeItem('loginUsers') 
        $(this).hide()
        $("#showRegisterDiv").show()
        $("#name").hide()
        $("#showLoginDiv").show()
    });
    VC()
    LVC()
    //点击显示登录框
    $("#showLoginDiv").click(function () {
        $("#login").show()
        $("#bg").show()
        $("#register").hide()
    })
    //点击显示注册框
    $("#showRegisterDiv").click(function () {
        $("#bg").show()
        $("#register").show()
        $("#login").hide()
    })
    //点击X关闭
    $("#close").click(function () {
        $("#bg").hide()
        $("#register").hide()
        $("#login").hide()
    })
    $("#close1").click(function () {
        $("#register").hide()
        $("#login").hide()
        $("#bg").hide()
    })
    $(".cutLogin").click(function () {
        $("#login").show()
        $("#bg").show()
        $("#register").hide()
    })
    $(".cutRegister").click(function () {
        $("#login").hide()
        $("#bg").show()
        $("#register").show()
    })
    //点击刷新验证码
    $("#codeBox").click(function () {
        click()
    })
    $("#loginCodeBox").click(function () {
        Lclick()
    })
    //注册验证
    //验证手机号
    $("#rphone").blur(function () {
        var reg = /^\d{11}$/
        var num = $(this).val()
        if (num == "") {
            $(this).css("border-color", "red")
            $("#rphoneMsg").text("手机号不能为空")
            $("#rphoneMsg").css("color", "red")

        } else if (!reg.test(num)) {
            $(this).css("border-color", "red")
            $("#rphoneMsg").text("手机号格式错误")
            $("#rphoneMsg").css("color", "red")
        } else {
            $(this).css("border-color", "green")
            $("#rphoneMsg").text("手机号格式正确")
            $("#rphoneMsg").css("color", "green")

        }
        if (vaildatePhone()) {
            $("#rphone").css("border-color", "red")
            $("#rphoneMsg").text("手机号已被注册")
            $("#rphoneMsg").css("color", "red")
            alert("该手机已被注册")
        }
        vaildateAll()
    })

    //验证密码

    $("#rpass").blur(function () {
        var reg = /^[A-Za-z]\d{5,11}$/
        var passWord = $(this).val()
        if (passWord == "") {
            $(this).css("border-color", "red")
            $("#rpassMsg").text("密码不能为空")
            $("#rpassMsg").css("color", "red")
        } else if (!reg.test(passWord)) {
            $(this).css("border-color", "red")
            $("#rpassMsg").text("密码格式不正确")
            $("#rpassMsg").css("color", "red")
        } else {
            $(this).css("border-color", "green")
            $("#rpassMsg").text("密码格式正确")
            $("#rpassMsg").css("color", "green")
        }
        vaildateAll()
    })

    //验证重复密码

    $("#rrpass").blur(function () {
        var rrpass = $("#rrpass").val()
        var rpass = $("#rpass").val()
        if (rrpass == "") {
            $("#rrpassMsg").text("确认密码不能为空")
            $("#rrpassMsg").css("color", "red")
            $(this).css("border-color", "red")
        } else if (rrpass != rpass) {
            $("#rrpassMsg").text("两次输入密码不相同")
            $("#rrpassMsg").css("color", "red")
            $(this).css("border-color", "red")
        } else {
            $("#rrpassMsg").text("密码确认成功")
            $("#rrpassMsg").css("color", "green")
            $(this).css("border-color", "green")
        }
        vaildateAll()
    })
    //验证验证码
    $("#code").blur(function () {
        vaildateVC()
        vaildateAll()
    })

    //验证登录手机
    $("#lphone").blur(function () {
        
        var reg = /\d{11}/
        var num = $(this).val()
        if (num == "") {
            $(this).css("border-color", "red")
            $("#loginphoneMsg").css("color", "red")
            $("#loginphoneMsg").text("手机号不能为空")
        } else if (!reg.test(num)) {
            $(this).css("border-color", "red")
            $("#loginphoneMsg").css("color", "red")
            $("#loginphoneMsg").text("手机号格式不正确")
        } else if (reg.test(num) && vaildateLoginPhone()) {
            $(this).css("border-color", "green")
            $("#loginphoneMsg").css("color", "green")
            $("#loginphoneMsg").text("手机号格式正确")
        } else if (!vaildateLoginPhone()) {
            $(this).css("border-color", "red")
            $("#loginphoneMsg").css("color", "red")
            $("#loginphoneMsg").text("手机号未注册")
            alert("当前手机号未注册")
        }
        vaildateloginAll()
    })

    //验证密码
    $("#lpass").blur(function () {
        var reg = /^[A-Za-z]\d{5,11}$/
        var password = $(this).val()
        if (password == "") {
            $(this).css("border-color", "red")
            $("#loginpassMsg").css("color", "red")
            $("#loginpassMsg").text("密码不能为空")
        } else if (!reg.test(password)) {
            $(this).css("border-color", "red")
            $("#loginpassMsg").css("color", "red")
            $("#loginpassMsg").text("密码格式错误")
        } else {
            $(this).css("border-color", "green")
            $("#loginpassMsg").css("color", "green")
            $("#loginpassMsg").text("密码格式正确")
        }
        if (lphoneAndPass()) {
            $(this).css("border-color", "red")
            $("#loginpassMsg").css("color", "red")
            $("#loginpassMsg").text("密码或手机号错误,请重试")
            alert("手机号或密码错误，请重试")
        }
        vaildateloginAll()
    })

    //验证登录验证码
    $("#loginCode").blur(function () {
        vaildateLVC()
        vaildateloginAll()
    })
    //渲染数据
    //正在热映
    $.ajax({
        type: 'GET',
        url: "https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getHotMovies",
        success: function (data) {
            var movies = data.movies
            movies.forEach(movie => {
                $newMovieDiv = $(`
                <div>
                <div>
                     <a href="./moviesDetails.html?id=${movie.id}"><img src="${movie.imgSrc}" alt=""></a>
                    <div class="buy"><a href="">立即购票</a></div>
                </div>
                <div>
                    <span>${movie.title}</span>
                    <span>${movie.score}</span>
                </div>
            </div>
                `)
                $newOption =$(`
                <option value="${movie.title}">
                `)
                $(".content-reying").append($newMovieDiv)
                $("#searchipt").append($newOption)
            });
        }
    })

    //即将上映
    $.ajax({
        type: 'GET',
        url: "https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getUpCommingMovies",
        success: function (data) {
            var movies = data.movies
            movies.forEach(movie => {
                $newMovieDiv = $(`
              <div>
                        <div>
                        <a href="./moviesDetails.html?id=${movie.id}"><img src="${movie.imgSrc}" alt=""></a>
                            <div class="buy"><span><a href="">预告片</a></span><span><a href="">预售</a></span></div>
                        </div>
                        <div>
                            <span>${movie.title}</span>
                        </div>
                        <span>八月6日上映</span>
                    </div>
              `)
                $(".content-shangying").append($newMovieDiv)
            })
        }
    })
    
    //二级联动下拉框
    $.ajax({
        url:'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllOperas',
        success:function(data){
            var cinemas=data.operas
            cinemas.forEach(cinema=>{
                $newCinema=$(`
                <option value="${cinema.id}">${cinema.name}</option>
                `)
                $("#cinemas").append($newCinema)
            })
        }
    }) 

 //影片搜索功能
    $('#searchbtn').click(function () {
        var text = $('#searchipt1').val()
        $.ajax({
            url: 'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllMovies',
            success: function (data) {
                var movies = data.movies
                movies.forEach(movie => {
                    if (text == movie.title) {
                        location.href = `./moviesDetails.html?id=${movie.id}`
                    }
                })
            }
        })
    })


 //二级联动
 var moviesID1
  $("#cinemas").change(function(){
     var cinemaId= $("#cinemas option:selected").val()
     $("#chosseCinemas option").remove()
     $.ajax({
         url:"https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllOperas",
         success:function(data){
             var cinemas= data.operas.filter(opera=>opera.id==cinemaId)
             var cinema=cinemas[0]
             moviesID1=cinema.movies
            $.ajax({
                url:'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllMovies',
                success:function(data2){
                    for(var item of moviesID1){
                         var movies=data2.movies.filter(movie=>movie.id==item)
                        var movieName=movies[0]
                        $newOption=(`
                        <option value="">${movieName.title}</option>
                        `)
                        $("#chosseCinemas").append($newOption)
                    }
     
                }
            })
         }
     })
  })
    　


})






//密码显示
var flag = true

function show() {
    var get1 = document.querySelector("#rpass")
    var get2 = document.querySelector("#a1")
    if (flag == true) {
        get1.type = "password"
        get2.innerHTML = "<i class='fa fa-eye-slash'></i>"
        flag = false
    } else if (flag == false) {
        get1.type = "text"
        get2.innerHTML = "<i class='fa fa-eye'></i>"
        flag = true
    }
}
var flag1 = true

function show1() {
    var get1 = document.querySelector("#rrpass")
    var get2 = document.querySelector("#a2")
    if (flag1 == true) {
        get1.type = "password"
        get2.innerHTML = "<i class='fa fa-eye-slash'></i>"
        flag1 = false
    } else if (flag1 == false) {
        get1.type = "text"
        get2.innerHTML = "<i class='fa fa-eye'></i>"
        flag1 = true
    }
}

var flag3 = true

function show3() {
    var get1 = document.querySelector("#lpass")
    var get2 = document.querySelector("#a3")
    if (flag3 == true) {
        get1.type = "password"
        get2.innerHTML = "<i class='fa fa-eye-slash'></i>"
        flag3 = false
    } else if (flag3 == false) {
        get1.type = "text"
        get2.innerHTML = "<i class='fa fa-eye'></i>"
        flag3 = true
    }
}
//注册验证码
//生成验证码
function VC() {

    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    var newArr = [];
    for (var i = 1; i <= 4; i++) {
        var index = parseInt(Math.random() * arr.length);
        newArr.push(arr[index]);
    }
    var newArr = newArr.join("")
    document.querySelector("#codeBox").innerHTML = newArr;

}

//点击刷新验证码
function click() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    var newArr = [];
    for (var i = 1; i <= 4; i++) {
        var index = parseInt(Math.random() * arr.length);
        newArr.push(arr[index]);
    }
    var newArr = newArr.join("");
    document.querySelector("#codeBox").innerHTML = newArr;
}

//验证验证码
function vaildateVC() {
    var vcVal = document.querySelector("#code").value;
    var boxVal = document.querySelector("#codeBox").innerHTML;
    if (vcVal == "") {
        document.querySelector("#codeMsg").innerHTML = "验证码不能为空";
        document.querySelector("#codeMsg").style.color = "red"
        document.querySelector("#code").style.borderColor = "red"
    } else if (vcVal != boxVal) {
        document.querySelector("#codeMsg").innerHTML = "验证码错误";
        document.querySelector("#codeMsg").style.color = "red"
        document.querySelector("#code").style.borderColor = "red"
    } else if (vcVal == boxVal) {
        document.querySelector("#codeMsg").innerHTML = "验证码正确";
        document.querySelector("#codeMsg").style.color = "green"
        document.querySelector("#code").style.borderColor = "green"
    }
}

//验证全部
function vaildateAll() {
    var phoneColor = $("#rphone").css("border-color");
    var passColor = $("#rpass").css("border-color");
    var rrpassColor = $("#rrpass").css("border-color");
    var codeColor = $("#code").css("border-color")
    if (phoneColor == "rgb(0, 128, 0)" && passColor == "rgb(0, 128, 0)" && rrpassColor == "rgb(0, 128, 0)" && codeColor == "rgb(0, 128, 0)") {
        $("#rbtn").css("background-color", "#f99135")
        $("#rbtn").css("cursor", "auto")
        $("#ra").css("pointer-events", "auto")
    } else {
        $("#rbtn").css("background-color", "#d3d3d3")
        $("#rbtn").css("cursor", "not-allowed")
        $("#ra").css("pointer-events", "none")
    }
}

//点击注册
function register() {
    var rphoneVal = document.querySelector("#rphone").value
    var rpassVal = document.querySelector("#rpass").value

    var userObj = {
        rphone: rphoneVal,
        rpass: rpassVal
    }
    var users = localStorage.getItem("users")
    if (users == null) {
        users = []
        users.push(userObj)
        var usersJson = JSON.stringify(users)
        localStorage.setItem("users", usersJson)
        alert("注册成功")
    } else {
        users = JSON.parse(users)
        users.push(userObj)
        users = JSON.stringify(users)
        localStorage.setItem("users", users)
        alert("注册成功")
    }

}

//失去焦点时验证注册的手机号是否存在
function vaildatePhone() {
    var vaildatePhone = false;
    var rphoneVal = document.querySelector("#rphone").value
    //从localStorage中获取用户信息
    var usersJson = localStorage.getItem('users');
    //将json对象转成js对象
    var users = JSON.parse(usersJson);
    if(users==null){
        vaildatePhone = false
    }else{
      for (var i = 0; i < users.length; i++) {
        //获取当前用户对象
        if (users[i].rphone == rphoneVal) {
            vaildatePhone = true;
        }
    }  
    }
    
    return vaildatePhone;

}

//失去焦点时验证登录手机号是否存在
function vaildateLoginPhone() {
    var vaildateLoginPhone = false;
    var lphoneVal = document.querySelector("#lphone").value
    //从localStorage中获取用户信息
    var usersJson = localStorage.getItem('users');
    //将json对象转成js对象
    var users = JSON.parse(usersJson);
    if (users == null) {
        vaildateLoginPhone = false;
    } else {
        for (var i = 0; i < users.length; i++) {
            if (users[i].rphone == lphoneVal) {
                vaildateLoginPhone = true;
            }
        }
    }
    return vaildateLoginPhone;
}

//登录验证码
function LVC() {

    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    var newArr = [];
    for (var i = 1; i <= 4; i++) {
        var index = parseInt(Math.random() * arr.length);
        newArr.push(arr[index]);
    }
    var newArr = newArr.join("")
    document.querySelector("#loginCodeBox").innerHTML = newArr;

}

function Lclick() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    var newArr = [];
    for (var i = 1; i <= 4; i++) {
        var index = parseInt(Math.random() * arr.length);
        newArr.push(arr[index]);
    }
    var newArr = newArr.join("");
    document.querySelector("#loginCodeBox").innerHTML = newArr;
}

//验证登录验证码
function vaildateLVC() {
    var vcVal = document.querySelector("#loginCode").value;
    var boxVal = document.querySelector("#loginCodeBox").innerHTML;
    if (vcVal == "") {
        document.querySelector("#loginCodeMsg").innerHTML = "验证码不能为空";
        document.querySelector("#loginCodeMsg").style.color = "red"
        document.querySelector("#loginCode").style.borderColor = "red"
    } else if (vcVal != boxVal) {
        document.querySelector("#loginCodeMsg").innerHTML = "验证码错误";
        document.querySelector("#loginCodeMsg").style.color = "red"
        document.querySelector("#loginCode").style.borderColor = "red"
    } else if (vcVal == boxVal) {
        document.querySelector("#loginCodeMsg").innerHTML = "验证码正确";
        document.querySelector("#loginCodeMsg").style.color = "green"
        document.querySelector("#loginCode").style.borderColor = "green"
    }
}
//验证登录全部
function vaildateloginAll() {
    var phoneColor = $("#lphone").css("border-color");
    var passColor = $("#lpass").css("border-color");
    var codeColor = $("#loginCode").css("border-color")
    if (phoneColor == "rgb(0, 128, 0)" && passColor == "rgb(0, 128, 0)" && codeColor == "rgb(0, 128, 0)") {
        $("#lbtn").css("background-color", "#f99135")
        $("#lbtn").css("cursor", "auto")
        $("#la").css("pointer-events", "auto")
    } else {
        $("#lbtn").css("background-color", "#d3d3d3")
        $("#lbtn").css("cursor", "not-allowed")
        $("#la").css("pointer-events", "none")
    }
}

//验证登录密码手机号
function lphoneAndPass() {
    var lphoneAndPass = false;
    var lphoneVal = document.querySelector("#lphone").value
    var lpassVal = document.querySelector("#lpass").value

    var userJson = localStorage.getItem("users");
    var users = JSON.parse(userJson)
    if(users==null){
      lphoneAndPass= true;
    }else{
       for (var i = 0; i < users.length; i++) {
        var phone = users[i].rphone
        var password = users[i].rpass
        if (phone == lphoneVal && password == lpassVal) {
            lphoneAndPass = false;
        } else {
            lphoneAndPass= true;
        }
    } 
    }
    return lphoneAndPass;
}



//***************************点击登录*************************** */
function login(){
    var lphoneVal=document.querySelector("#lphone").value
    var lpassVal=document.querySelector("#lpass").value
    var lnameVal="Unknown name"
    var userObj={
        lphone:lphoneVal,
        lpass:lpassVal,
        lname:lnameVal
    }
    var loginUsers=localStorage.getItem("loginUsers")
    if(loginUsers==null){
        loginUsers=[]
        loginUsers.push(userObj)
        var userJson=JSON.stringify(loginUsers)
        localStorage.setItem("loginUsers",userJson)
    }
    alert("登录成功")
        $("#login").hide()
        $("#showLoginDiv").hide()
        $("#bg").hide()
        $("#showRegisterDiv").hide()
        $("#esc").show()
        $("#name").show()
        $("#name").text("欢迎您"+lphoneVal)
}
 


