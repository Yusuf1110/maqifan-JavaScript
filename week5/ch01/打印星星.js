// process 对象是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。
// 作为一个对象，它对于 Node.js 应用程序始终是可用的，故无需使用 require()。

for (var i = 0; i < 10; i++) {    
    for(var k=0;k<9-i;k++){
        process.stdout.write(' ');
    }
    for (var j = 0; j <= 2*i; j++) {
      // 注意：console.log()输出完毕后是带换行的，所以这样做不可以
      // console.log('*');
      process.stdout.write('*');
    }
    process.stdout.write('\n');
  }
