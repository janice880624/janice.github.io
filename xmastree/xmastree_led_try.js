var led;
var light;

boardReady({board: 'Smart', device: '10QjYMKV', transport: 'mqtt'}, function (board) {
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