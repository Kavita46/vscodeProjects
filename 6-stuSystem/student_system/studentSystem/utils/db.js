const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/StuDB";

mongoose.connect(url);

mongoose.connection.on("connected", () => {
    console.log("数据库开服成功");
});

    