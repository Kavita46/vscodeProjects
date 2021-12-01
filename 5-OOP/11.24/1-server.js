const http = require('http');

const server = http.createServer((req, res) => {

    res.write("第一条");
    res.end();

});


server.listen(8836, ()=>{
    console.log("8836开服成功");
})
