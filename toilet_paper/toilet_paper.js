var ultrasonic;

var ul_trig = 14;
var ul_echo = 16;

boardReady({board1: 'Smart', device: '10ywPWNV', transport: 'mqtt'}, function (board1) {
    board1.samplingInterval = 50;
    ultrasonic1 = getUltrasonic(board1, ul_echo, ul_trig);
    ultrasonic1.ping(function (cm) {
        document.getElementById('sensor_1').innerHTML = ultrasonic1.distance;
        if (ultrasonic1.distance > 20) {
            document.getElementById('sensor_1_add').innerHTML = '補充';
            document.getElementById('box1').style.backgroundColor =  "rgb(221, 156, 119)";
        } else{
            document.getElementById('sensor_1_add').innerHTML = ' ';
            document.getElementById('box1').style.backgroundColor =  "rgb(169, 240, 240)";
        }
    }, 500);
});

boardReady({board2: 'Smart', device: '10dLYwYy', transport: 'mqtt'}, function (board2) {
    board2.samplingInterval = 50;
    ultrasonic2 = getUltrasonic(board2, ul_echo, ul_trig);
    ultrasonic2.ping(function (cm) {
        document.getElementById('sensor_2').innerHTML = ultrasonic2.distance;
        if (ultrasonic2.distance > 20) {
            document.getElementById('sensor_2_add').innerHTML = '補充';
            document.getElementById('box2').style.backgroundColor =  "rgb(221, 156, 119)";
        } else{
            document.getElementById('sensor_2_add').innerHTML = ' ';
            document.getElementById('box2').style.backgroundColor =  "rgb(169, 240, 240)";
        }
    }, 500);
});

boardReady({board3: 'Smart', device: '10Vk7gDV', transport: 'mqtt'}, function (board3) {
    board3.samplingInterval = 50;
    ultrasonic3 = getUltrasonic(board3, ul_echo, ul_trig);
    ultrasonic3.ping(function (cm) {
        document.getElementById('sensor_3').innerHTML = ultrasonic3.distance;
        if (ultrasonic3.distance > 20) {
            document.getElementById('sensor_3_add').innerHTML = '補充';
            document.getElementById('box3').style.backgroundColor =  "rgb(221, 156, 119)";
        } else{
            document.getElementById('sensor_3_add').innerHTML = ' ';
            document.getElementById('box3').style.backgroundColor =  "rgb(169, 240, 240)";
        }
    }, 500);
});