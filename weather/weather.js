var Today=new Date();
var NowDate=new Date();
var h=NowDate.getHours();
var m=NowDate.getMinutes();
var s=NowDate.getSeconds();
document.write("現在是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日 ");
document.write( h+' 時 '+m+' 分 '+s+' 秒 ')

function reP(){
    document.getElementById('climbing').style.display = "block";
}  