var loc=location.href;
var n1=loc.length; //地址的總長度
var n2=loc.indexOf("="); //取得=號的位置
var device_id = decodeURI(loc.substr(n2+1, n1-n2));//從=號後面的内容
alert("Device ID:" + device_id); 
// document.write("device_id:"+device_id)
console.log('=> ' + device_id);

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


boardReady({board: 'Smart', device: device_id, transport: 'mqtt'}, function (board) {
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
