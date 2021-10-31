/*function factory(obj,timeout,style,next){
    var o={};
    o.obj=document.getElementById(obj);
    o.timeout=timeout;
    o.style=style;
    o.next=next;
    return o;
}
var lamp={
 
   red:red=factory('red',10,['red','white','white'],'green'),
   green:green=factory('green',10,['white','white','green'],'yellow'),
   yellow:yellow=factory('yellow',10,['white','yellow','white'],'red')

}
console.log(lamp);*/

var lamp={
    red:{
        obj:document.getElementById('red'),
        timeout:10,
        style:['red','white','white'],
        next:'green'
    },
    green:{
        obj:document.getElementById('green'),
        timeout:10,
        style:['white','white','green'],
        next:'yellow'
    },
    yellow:{
        obj:document.getElementById('yellow'),
        timeout:3,
        style:['white','yellow','white'],
        next:'red'
    },
    changeStyle(style){
        this.red.obj.className=style[0];
        this.green.obj.className=style[2];
        this.yellow.obj.className=style[1];
    }
};
var count={
    obj:document.getElementById('count'),
    change:function(num){
        this.obj.innerHTML=(num<10)?("0"+num):num;
    }
};
/* 下面是初始化 */
var now=lamp.green;
var timeout=now.timeout;
lamp.changeStyle(now.style);
count.change(timeout);

var lightChange=function(){
    if(--timeout<=0){
        now=lamp[now.next];
        timeout=now.timeout;
        lamp.changeStyle(now.style);
    }
    count.change(timeout);
}
setInterval(lightChange,1000);