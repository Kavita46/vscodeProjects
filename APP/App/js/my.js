$(function () {
    // 判断用户登录
    var islo = false;
    isLogin();
    function isLogin() {
        var user = localStorage.getItem('loginUser');
        if (user == null) {
             
              
            $('#userd').text('未登录,点击头像进行登录');
            // location.href = `select_seat.html?movid=${movid}?cemid=${id}`
            
            islo = false;
        } else {
            $('#userd').text(`${user}`);
            islo = true;
        }
    }
    $('body').on('click','#tolo',function(){
        location.href='mobilelogin.html';
    })
  
    if(islo){
    islo=false;
    $('body').on('click', '#back', function () {
        
        localStorage.removeItem('loginUser');
        location.href = 'index_no.html';
    });
}
    $('body').on('click', '#chag', function () {
        isLogin();
        // alert('您还没有登录账号,请先登录~~');
        location.href = 'changepass.html';
    });

});