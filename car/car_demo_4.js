
// 車子控制
var car;

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


boardReady({board: 'Smart', device: 'GKw5K', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  car = getToyCar(board, 14, 16, 2, 5);
  controllerBtnEvent(getElement('#btn-group .up'),['mousedown', 'touchstart'], function () {
    car.goFront();
  });
  controllerBtnEvent(getElement('#btn-group .down'),['mousedown', 'touchstart'], function () {
    car.goBack();
  });
  controllerBtnEvent(getElement('#btn-group .left'),['mousedown', 'touchstart'], function () {
    car.turnLeft();
  });
  controllerBtnEvent(getElement('#btn-group .right'),['mousedown', 'touchstart'], function () {
    car.turnRight();
  });
  controllerBtnEvent(getElement('#btn-group .center'),['mousedown', 'touchstart'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#btn-group .up'),['mouseup', 'touchend'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#btn-group .down'),['mouseup', 'touchend'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#btn-group .left'),['mouseup', 'touchend'], function () {
    car.stop();
  });
  controllerBtnEvent(getElement('#btn-group .right'),['mouseup', 'touchend'], function () {
    car.stop();
  });
});
