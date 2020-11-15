var relay;
var light_statue;


boardReady({board: 'Smart', device: '10ypKngd', transport: 'mqtt'}, function (board) {
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
