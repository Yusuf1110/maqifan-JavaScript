var fs=require('fs');
var path=require('path');
const { config } = require('process');
fs.mkdir('./test-mkdir',function(err){
    if(err){
        throw err;
    }else{
        console.log('第一层目录创建好了');
    }
});
var tmp='';
for(var i=1;i<=10;i++){
    tmp=i+'abb';
    tmp=path.join('./test-mkdir',tmp);
    fs.mkdir(tmp,function(err){
        if(err){
            console.log('在创建第二层的时候出错了！')
        }else{
            console.log('第二层创建完成！');
        }
    });
}
/* 这里从运行结果可以看出这个是非阻塞的 */