$(function(){
    //加载页面判断是否有用户登录
    var user = localStorage.getItem("loginUsers")
    if (user == null) {
        $("#showRegisterDiv").show()
        $("#showLoginDiv").show()
    } else {
        user = JSON.parse(user)
        var user = user[0]
        var phone = user.lphone
        $("#showRegisterDiv").hide()
        $("#showLoginDiv").hide()
        $("#name").show().text("欢迎您" + phone)
        $("#esc").show()
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


    //渲染影院列表
    $.ajax({
        url:'https://www.fastmock.site/mock/ebddf6e6fcc535ef1168d48c38471696/woniuMovie/getAllOperas',
        success:function(data){
            var cinemas=data.operas
            cinemas.forEach(cinema=>{
                $newCinemaDiv=$(`
                <div class="listDetails">
                <div class="detailsL">
                    <P>${cinema.name}</P>
                    <span>地址：${cinema.address}</span>
                    <br>
                    <span class="ticketChange">改签</span>
                    <span class="discount">折扣卡</span>
                </div>
                <div class="detailsR">
                    <div class="price">
                        <p><span>￥23</span>起</p>
                        <p>24km</p>
                    </div>
                    <div class="btn">
                        <a href="movie_list.html?id=${cinema.id}"><button type="submit">选座购票</button></a>
                    </div>
                </div>
            </div> 
                `)
                $(".pageNumber").before($newCinemaDiv)
            })
        }
    })

    
})