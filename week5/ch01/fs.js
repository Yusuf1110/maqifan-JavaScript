var fs=require('fs');
var msg='你好呀！';
fs.writeFile('./fs/data.txt',msg,'utf-8',function(err){
    if(err){
        console.log('错误！'+err);
    }else{
        console.log('ok!');
    }
});
//如果不用‘uft-8’则会输出buffer类型的data；
fs.readFile('./fs/data.txt','utf-8',function(err,data){
    if(err){
        console.log('读取错误！');
    }else{
        console.log(data);
    }
});