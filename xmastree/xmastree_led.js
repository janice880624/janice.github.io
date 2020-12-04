var loc=location.href;
var n1=loc.length; //地址的總長度
var n2=loc.indexOf("="); //取得=號的位置
var device_id = decodeURI(loc.substr(n2+1, n1-n2));//從=號後面的内容
alert("Device ID:" + device_id); 
// document.write("device_id:"+device_id)
console.log('=> ' + device_id);

var led;
var light;

boardReady({board: 'Smart', device: device_id, transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  led = getLed(board, 5);
  document.getElementById('btn1').addEventListener('click',function () {
    led.on();
  });
  document.getElementById('btn2').addEventListener('click',function () {
    led.off();
  });
  document.getElementById('btn3').addEventListener('click',function () {
    led.blink(500);
  });
});