$(function () {

    // 手机号格式
    var phoreg = /^1[3-9][0-9]{9}$/;
    // 密码格式
    var reg = /^[A-Z]\w{5,15}$/;
    // 注册
    $('#reg_phone').on('blur', function () {
        var userpho = $('#reg_phone').val();
        var str = localStorage.getItem('allUser');
        if (str == null) {
            var obj = [];
        } else {
            obj = JSON.parse(str);
        }
        var isob = obj.some(val =>{
            return val.phone == userpho;
        });
        if (phoreg.test(userpho) && userpho != '') {
            if (isob) {
                alert('该账号已存在，请直接登录');
            }
            $(this).attr('class', 'riter');
            $('#username-msg').text('');
        } else {
            $(this).attr('class', 'error');
            $('#username-msg').text('请输入正确格式的手机号！');
        }
    });
    // 密码
    $('#regis_pass').on('blur', function () {
        var pass = $('#regis_pass').val();
        if (reg.test(pass) && pass != "") {
            $(this).attr('class', 'riter');
            $('#pass-msg').text("");
        } else {
            $(this).attr('class', 'error');
            $('#pass-msg').text("6~16位，首字符大写，只支持数字和字母").attr('class', 'er_pas');
        }
    });
    // 确认密码
    $('#re_pass').on('blur', function () {
        var userput = $(this).val();
        var preput = $('#regis_pass').val();
        if (userput == preput && userput != '') {
            $(this).attr('class', 'riter');
            $('#affirmpass-msg').text("");
        } else {
            $(this).attr('class', 'error');
            $('#affirmpass-msg').text("输入的密码不一致");
        }
    });
    // 注册按钮
    $('body').on('click', '#regist_btn', function () {
        var str = localStorage.getItem('allUser');
        var obj = JSON.parse(str);
        console.log(obj);
        var user = {};
        if (str == null) {

            var users = [];
        } else {
            users = obj;
        }
        // console.log(users);
        var isuser = users.some(pho => {
            return $('#reg_phone').val() == pho.phone;
        })
        // console.log(isuser);
        if ($('.riter').length == 3 && isuser == false) {
            user.phone = $('#reg_phone').val();
            user.pass = $('#regis_pass').val();
            users.push(user);
            var objs = JSON.stringify(users);
            localStorage.setItem('allUser', objs);
        }
        if(str!=null){
            alert("注册成功！");
        }
    });

})