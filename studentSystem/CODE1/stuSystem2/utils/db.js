const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/test";
mongoose.connect(url);

// 监听

mongoose.connection.on("connected", function () {
    console.log("连接数据库成功");
});










