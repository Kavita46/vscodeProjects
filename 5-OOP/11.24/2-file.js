
const fs = require('fs');


// 1-读取文件
fs.readFile("5-OOP/11.24/a.txt", 'utf-8', function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        console.log(err);
    }

});


// 2-覆盖写入
fs.writeFile("5-OOP/11.24/b.txt", "Hello File", function (err) {
    if (!err) {
        console.log("Success");
    } else {
        console.log(err);
    }
});

// 3-追加写入
fs.appendFile("5-OOP/11.24/b.txt", " Append newFile", function (err) {
    if (!err) {
        console.log("Success");
    } else {
        console.log(err);
    }
});

// 4-复制文件
fs.copyFile("5-OOP/11.24/b.txt", "5-OOP/11.24/c.txt", function (err) {
    if (!err) {
        console.log("Copy Success");
    } else {
        console.log(err);
    }
});

// 5-删除文件
fs.unlink("5-OOP/11.24/c.txt", function (err) {
    if (!err) {
        console.log("Delete Success");
    } else {
        console.log(err);
    }
}
);

// 6-重命名/移动文件

fs.rename("5-OOP/11.24/b.txt", "5-OOP/11.24/d.txt", function (err) {
    if (!err) {
        console.log("Rename Success");
    } else {
        console.log(err);
    }
}
);


const fs = require('fs');
// 7-读取目录
fs.readdir("5-OOP/11.24", function (err, files) {
    if (!err) {
        console.log(files);
    } else {
        console.log(err);
    }
});

// 8-创建目录
fs.mkdir("5-OOP/11.24/test", function (err) {
    if (!err) {
        console.log("Success");
    } else {
        console.log(err);
    }
}
);

// 9-删除目录
fs.rmdir("5-OOP/11.24/test", function (err) {
    if (!err) {
        console.log("Success");
    } else {
        console.log(err);
    }
}
);

// 10-判断文件是否存在
fs.exists("5-OOP/11.24/d.txt", function (exists) {
    if (exists) {
        console.log("File exists");
    } else {
        console.log("File not exists");
    }
}
);

// 11-判断目录是否存在
fs.exists("5-OOP/11.24/test", function (exists) {
    if (exists) {
        console.log("Directory exists");
    } else {
        console.log("Directory not exists");
    }
}
);











