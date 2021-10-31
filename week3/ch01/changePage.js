/* var timer=setInterval(countdown,1000), T=3;;
function countdown(){
    document.getElementById('change').innerHTML=T;
    T--;
    if(T<0){
        clearInterval(timer);
        window.location.assign('feedback.html');
    }
} */
function timing(sec,url){
    var seconds=document.getElementById('change');
    seconds.innerHTML=--sec;
    if(sec>0){
        setTimeout('timing('+sec+',\''+url+'\')',1000);//为什么要这样写    
        }else{
            location.href='feedback.html';
        }
    }
    timing(3,'feedback.html');