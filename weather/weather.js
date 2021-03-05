var Today=new Date();
var NowDate=new Date();
var h=NowDate.getHours();
var m=NowDate.getMinutes();
var s=NowDate.getSeconds();
document.write("現在是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日 ");
document.write( h+' 時 '+m+' 分 '+s+' 秒 ')

function reP1(){
    document.getElementById('climbing1').style.display = "block";
}  
function reP2(){
    document.getElementById('climbing2').style.display = "block";
}  
function reP3(){
    document.getElementById('climbing3').style.display = "block";
}  
function reP4(){
    document.getElementById('climbing4').style.display = "block";
}  
function reP5(){
    document.getElementById('climbing5').style.display = "block";
}  