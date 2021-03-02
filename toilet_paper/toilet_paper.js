var ultrasonic1;
var ultrasonic2;
var ultrasonic3;

var ul_trig = 14;
var ul_echo = 16;

var who = 0;
var send = false;

boardReady({board1: 'Smart', device: '10ywPWNV', transport: 'mqtt'}, function (board1) {
    board1.samplingInterval = 50;
    ultrasonic1 = getUltrasonic(board1, ul_echo, ul_trig);
    ultrasonic1.ping(function (cm) {
        document.getElementById('sensor_1').innerHTML = ultrasonic1.distance;
        if (ultrasonic1.distance > 20) {
            document.getElementById('sensor_1_add').innerHTML = '補充';
            document.getElementById('box1').style.backgroundColor =  "rgb(221, 156, 119)";
            who = 1;
        } else{;
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
            who = 2;
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
            who = 3;
        } else{
            document.getElementById('sensor_3_add').innerHTML = ' ';
            document.getElementById('box3').style.backgroundColor =  "rgb(169, 240, 240)";
        }
    }, 500);
});

// boardReady({board3: 'Smart', device: '10Vk7gDV', transport: 'mqtt'}, function (board3) {
//     board3.samplingInterval = 50;
//     ultrasonic3 = getUltrasonic(board3, ul_echo, ul_trig);
//     ultrasonic3.ping(function (cm) {
//         document.getElementById('sensor_3').innerHTML = ultrasonic3.distance;
//         if (ultrasonic3.distance > 40) {
//             document.getElementById('box3').style.backgroundColor =  "#f02409";
//         } else if (ultrasonic3.distance > 35)  {
//             document.getElementById('box3').style.backgroundColor =  "#f09409";
//         } else if (ultrasonic3.distance > 30) {
//             document.getElementById('box3').style.backgroundColor =  "#f0d909";
//         } else if (ultrasonic3.distance > 25) {
//             document.getElementById('box3').style.backgroundColor =  "#5ef009";
//         }  else if (ultrasonic3.distance > 20) {
//             document.getElementById('box3').style.backgroundColor =  "#3e8dd6";
//         }  else if (ultrasonic3.distance > 15) {
//             document.getElementById('box3').style.backgroundColor =  "#6d09f0";
//         }  else if (ultrasonic3.distance > 10) {
//             document.getElementById('box3').style.backgroundColor =  "#e42ae4";
//         } else {
//             document.getElementById('box3').style.backgroundColor =  "#ffffff";
//         }
//     }, 500);
// });



// XEyxMI5MOWSQRqZLUBg73R5MLHJXxkMOY3nMOFahDBy

var firebaseConfig = {
    apiKey: "AIzaSyCb9AvUhJCgO8BFZSBFXNQ4f70n9NGpYRE",
    authDomain: "toilet-paper-df2dd.firebaseapp.com",
    projectId: "toilet-paper-df2dd",
    storageBucket: "toilet-paper-df2dd.appspot.com",
    messagingSenderId: "726766110879",
    appId: "1:726766110879:web:b3ebbf4de7a736ab523aaa",
    measurementId: "G-Q6TX418G79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
var ref = db.collection('fruit').doc('apple');

ref.set({
  total: 500,
  good: 480,
  sale: 330
}).then(() => {
  console.log('set data successful');
});