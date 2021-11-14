/* var http=require('http');
http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url==='/'||req.url==='/index'){
        console.log('这里是首页！');
        res.write('<h>首页</h>');
        res.end();
    }else if(req.url==='/abb'){
        console.log('这里是abb');
        res.write('<h>abb</h>');
        res.end();
    }else if(req.url==='/baa'){
        console.log('这里是baa');
        res.write('<h>baa</h>');
        res.end();
    }else{
        console.log('404!');
        res.write('<h>404</h>');
        res.end();
    }
}).listen(9000,function(){
    console.log('http://localhost:9000');
}); */

var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer();
server.on('request', function (req, res) {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname , 'htmls' , 'index.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
     
    } else if (req.url === '/register') {
        fs.readFile(path.join(__dirname , 'htmls' , 'register.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    } else if (req.url === '/login') {
        fs.readFile(path.join(__dirname , 'htmls' , 'login.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    } else if (req.url === '/list') {
        fs.readFile(path.join(__dirname , 'htmls' , 'list.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname , 'htmls' , '404.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
});
server.listen(9000, function () {
    console.log('http://localhost:9000');
});