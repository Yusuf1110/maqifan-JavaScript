var endDate = new Date('2021-11-10 00:00:00 '); sumSec = endDate.getTime();
var timer = setInterval(seckill, 1000);//1000毫秒间隔，调一次
var day = hour = min = sec = 0;
function seckill() {
    var nowDate = new Date(), nowSec = nowDate.getTime();
    var tmpSec = (sumSec - nowSec) / 1000;
    if (tmpSec > 0) {
        day = parseInt(tmpSec / 86400);
        hour = parseInt((tmpSec / 3600) % 24);
        min = parseInt((tmpSec / 60) % 60);
        sec = parseInt(tmpSec % 60);
        //下面是“00”显示
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
    } else {
        clearInterval(timer);
        day = hour = min = sec = '00';
        window.location.assign('changePage.html');
    }
    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}
console.log(screen.height);