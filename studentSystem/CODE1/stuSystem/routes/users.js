var express = require('express');
var router = express.Router();

/* GET users listing. */

let users = [{
  _id: 1, username: "aaa", password: "123",img :"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F12842186014%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640952463&t=a6176435b74f57c25248ab4fe81e9e98"
}
  ,
{
  _id: 2, username: "bbb", password: "123",img:"https://mengxiaochong.oss-cn-shanghai.aliyuncs.com/uploads/jingyan/2020/12/buQ3qu.png"
}
  ,
{
  _id: 3, username: "ccc", password: "123",img:"https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.ywcy.net%2Fuploads%2Fallimg%2F200613%2F1-200613111408.jpg&imgrefurl=http%3A%2F%2Fwww.ywcy.net%2Fcjwt%2F1145.html&tbnid=HQ9B8zwUcF4RtM&vet=12ahUKEwiOvqWexsL0AhUKQPUHHVxqBvIQMygXegUIARDhAQ..i&docid=bmYMvE9AcpleAM&w=600&h=521&itg=1&q=%E8%90%A8%E6%91%A9%E8%80%B6&client=firefox-b-d&ved=2ahUKEwiOvqWexsL0AhUKQPUHHVxqBvIQMygXegUIARDhAQ"
}
];

// 登录用get
router.get('/login', function (req, res, next) {
  // res.send('成功进入登录');

  setTimeout(function () {
    const { username, password } = req.query;
    let arr = users.filter(item => item.username == username && item.password == password);

    if (arr.length > 0) {
      res.send({
        code: 200,
        user: arr[0]
      })
    } else {
      res.send({
        code: 202,
        msg: "账号或者密码错误"
      })
    }
    // console.log(req.query);
    console.log( "用户名是" + username + "密码是" + password );

  }, 2000);


});

// 注册用post
router.post('/register', function (req, res, next) {

  const { username, password } = req.body;
  console.log(req.body);
  console.log("用户名是" + username + "密码是" + password);
  res.send('成功进入注册');
});

module.exports = router;
