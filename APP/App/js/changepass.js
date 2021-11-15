$(function () {
    $('body').on('click', '#preoff', function () {
        history.back();
    });
     // 修改密码
     var usr = localStorage.getItem('allUser')
     var logi = localStorage.getItem('loginUser');
     if (logi == null) {
         isLogin();
     } else {
         var users = JSON.parse(usr);
         var mine = users.filter(v => {
             return v.phone == logi;
         })
        //  console.log(mine[0].pass);
         $('#used').on('blur', function () {
             var str = $('#used').val();
             if (str == mine[0].pass) {
                 $(this).attr('class', 'riter');
                 $('#oldpass-msg').text("");
             } else {
                 $(this).attr('class', 'error');
                 $('#oldpass-msg').text("旧密码不匹配，请重新输入");
                 
             }
         })
         var reg = /^[A-Z]\w{5,15}$/;
         $('#newpas').on('blur', function () {
             var pass = $('#newpas').val();
             if (reg.test(pass) && pass != "") {
                 $(this).attr('class', 'riter');
                 $('#newpass-msg').text("");
             } else {
                 $(this).attr('class', 'error');
                 $('#newpass-msg').text("6~16位，首字符大写，只支持数字和字母");
             }
         });
         // 确认密码
         $('#repas').on('blur', function (){
             var userput = $(this).val();
             var preput = $('#newpas').val();
             if (userput == preput && userput != '') {
                 $(this).attr('class', 'riter');
                 $('#affirmpass-msg').text("");
             } else {
                 $(this).attr('class', 'error');
                 $('#affirmpass-msg').text("输入的密码不一致");
             }
         });
         $('body').on('click', '.loginbtn', function () {
             if ($('.riter').length == 3) {
                 var usrs = JSON.parse(usr);
                 var str = usrs.filter(val => {
                     return val.phone == logi;
                 });
                 str[0].pass = $('#repas').val();
                 var strs = JSON.stringify(usrs);
                 localStorage.setItem('allUser', strs);
                 alert('修改成功！请重新登录');
                 location.href='mobilelogin.html';
                 localStorage.removeItem('loginUser');
             } else {
                 alert('输入有误，请确认后保存!');
             }
         });
 
     }



})