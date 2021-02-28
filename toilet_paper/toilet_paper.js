var ultrasonic;

var ul_trig = 14;
var ul_echo = 16;

boardReady({board1: 'Smart', device: '10ywPWNV', transport: 'mqtt'}, function (board1) {
    board1.samplingInterval = 50;
    ultrasonic = getUltrasonic(board1, ul_echo, ul_trig);
    ultrasonic.ping(function (cm) {
        document.getElementById('sensor_1').innerHTML = ultrasonic.distance;
    }, 500);
});

boardReady({board2: 'Smart', device: '10dLYwYy', transport: 'mqtt'}, function (board2) {
    board2.samplingInterval = 50;
    ultrasonic = getUltrasonic(board2, ul_echo, ul_trig);
    ultrasonic.ping(function (cm) {
        document.getElementById('sensor_2').innerHTML = ultrasonic.distance;
    }, 500);
});

boardReady({board3: 'Smart', device: '10Vk7gDV', transport: 'mqtt'}, function (board3) {
    board3.samplingInterval = 50;
    ultrasonic = getUltrasonic(board3, ul_echo, ul_trig);
    ultrasonic.ping(function (cm) {
        document.getElementById('sensor_3').innerHTML = ultrasonic.distance;
    }, 500);
});