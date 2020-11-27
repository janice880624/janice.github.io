var loc=location.href;
var n1=loc.length; //地址的總長度
var n2=loc.indexOf("="); //取得=號的位置
var device_id = decodeURI(loc.substr(n2+1, n1-n2));//從=號後面的内容
alert("Device ID:" + device_id); 
// document.write("device_id:"+device_id)
console.log('=> ' + device_id);

var relay;
var light_statue;

boardReady({board: 'Smart', device: device_id, transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  relay = getRelay(board, 5);
  light_statue = false;
  document.getElementById('light').className = 'off';
  relay.off();
  document.getElementById('light').addEventListener('click', function () {
    if (document.getElementById('light').className == 'on') {
       document.getElementById('light').className = 'off';
    } else {
      document.getElementById('light').className = 'on';
    }
    if (light_statue === false) {
      relay.on();
      light_statue = true;
    } else if (light_statue === true) {
      relay.off();
      light_statue = false;
    }
  });
});
