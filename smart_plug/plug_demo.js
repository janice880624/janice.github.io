var relay;
var status;


boardReady({board: 'Smart', device: '10ypKngd', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  relay = getRelay(board, 5);
  status = false;
  document.getElementById('light').className = 'off';
  relay.off();
  document.getElementById('light').addEventListener('click', function () {
    if (document.getElementById('light').className == 'on') {
       document.getElementById('light').className = 'off';
    } else {
      document.getElementById('light').className = 'on';
    }
    if (status === false) {
      relay.on();
      status = true;
    } else if (status === true) {
      relay.off();
      status = false;
    }
  });
});
