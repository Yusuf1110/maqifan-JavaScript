function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    if(num2===0){
        alert("除数不能为0！")
        return '错误';
    }
    return num1/num2;
}
function calc(func){
    var result=document.getElementById('result');
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat( document.getElementById('num2').value);
    if(isNaN(num1)||isNaN(num2)){
        alert('请输入数字');
        return false;
    }
    result.value=func(num1,num2);
}
