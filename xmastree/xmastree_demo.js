var dfplayer;

function getElement(dom) {
  var element = document.querySelector(dom);
  return element;
}

function controllerBtnEvent(c, e, callback) {
  if (e !== 'click') {
    var _u = navigator.userAgent;
    if (_u.indexOf('Android') > -1 || _u.indexOf('iPhone') > -1 || _u.indexOf('iPad') > -1) {
      c.addEventListener(e[1], function () {
        callback();
      });
    } else {
      c.addEventListener(e[0], function () {
        callback();
      });
    }
  } else {
    c.addEventListener('click', function () {
      callback();
    });
  }
}

boardReady({board: 'Smart', device: 'Y8JRm', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  dfplayer = getDFPlayer(board,13,12);
  controllerBtnEvent(getElement('#btn-group .play'),'click', function () {
    dfplayer.start();
  });
  controllerBtnEvent(getElement('#btn-group .stop'),'click', function () {
    dfplayer.stop();
  });
  controllerBtnEvent(getElement('#btn-group .pause'),'click', function () {
    dfplayer.pause();
  });
  controllerBtnEvent(getElement('#btn-group .next'),'click', function () {
    dfplayer.next();
  });
  controllerBtnEvent(getElement('#btn-group .pre'),'click', function () {
    dfplayer.previous();
  });
});
