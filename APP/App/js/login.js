$(function(){

    $('body').on('click', '#preoff', function () {
        history.back();
    });
     // 手机号格式
     var phoreg = /^1[3-9][0-9]{9}$/;
     // 密码格式
     var reg = /^[A-Z]\w{5,15}$/;
     // 登录格式验证
     $('body').on('blur', 'input', function () {
         var inputphone = $('#user').val();
         var inputpass = $('#pass').val();
         var tab = $(this).attr('id');
         switch (tab){
             case 'user':
                 if (phoreg.test(inputphone) && inputphone != '') {
                     $(this).attr('class', 'riter');
                     $('#username-msg').text('');
                 } else {
                     $(this).attr('class', 'error');
                     $('#username-msg').text('请输入正确格式的手机号！');
                 }
                 break;
             case 'pass':
                 if (reg.test(inputpass) && inputpass != "") {
                     $(this).attr('class', 'riter');
                     $('#pass-msg').text("");
                 } else {
                     $(this).attr('class', 'error');
                     $('#pass-msg').text("6~16位，首字符大写，只支持数字和字母").attr('class', 'er_pas');
                 }
                 break;
         }
     })
     // 登录验证
 
     $('body').on('click', '.loginbtn', function () {
         var inputphone = $('#user').val();
         var inputpass = $('#pass').val();
        
         var str = localStorage.getItem('allUser');
         var obj = JSON.parse(str);
         // console.log(obj);
         var islogin = obj.filter(ele => {
             return ele.phone == inputphone && ele.pass == inputpass;
         });
 
         if (islogin.length == 1 && inputphone != "") {
             $('#username-msg').text("");
             alert('登录成功！');
            //  $('#userLogin').html(`<div class='user_use'>你好：${islogin[0].phone}用户</div>
            //  <span>|</span>
            //  <div class="user_use" id="logbak">注销</div>
            //  `)
             localStorage.setItem('loginUser', islogin[0].phone);
             location.href = 'index_no.html';
         } else {
             $('#pass-msg').text('账号或密码错误');  
         }
     });



})