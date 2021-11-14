var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.write('响应正常！');
    res.end();
});
server.listen(8080, function () {
    console.log('请访问http://localhost:8080');
});
