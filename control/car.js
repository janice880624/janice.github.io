var loc=location.href;
var n1=loc.length; //地址的總長度
var n2=loc.indexOf("="); //取得=號的位置
var device_id = decodeURI(loc.substr(n2+1, n1-n2));//從=號後面的内容
alert("Device ID:" + device_id); 
// document.write("device_id:"+device_id)
console.log('=> ' + device_id);



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


boardReady({board: 'Smart', device: device_id, transport: 'mqtt'}, function (board) {
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
