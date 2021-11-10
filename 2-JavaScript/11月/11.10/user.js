// 定义注册接口

Mock.mock("register", "post", function (data) {
    let paraString = data.body;

    let account = paraString.split("&")[0].split("=")[1];
    let password = paraString.split("&")[1].split("=")[1];

    let user = {
        "account": account,
        "password": password
    }

    // 先定义一个空变量
    let users;

    if (localStorage.getItem("users") == null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }


    let index = -1;

    // v是遍历的用户对象
    let isRepeat = users.some(function (v) {
        return v.account == account;
    })

    if (!isRepeat) {

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return {
            "code": 200,
            "msg": "注册成功"
        }
    } else {

        return {
            "code": 400,
            "msg": "账号已存在"
        }
    }
})