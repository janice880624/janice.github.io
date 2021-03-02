var ultrasonic1;
var ultrasonic2;
var ultrasonic3;

var ul_trig = 14;
var ul_echo = 16;

var who = 0;
var send = false;

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
var ref_1 = db.collection('sensor_1').doc(); 
var ref_2 = db.collection('sensor_2').doc(); 
var ref_3 = db.collection('sensor_3').doc(); 

var ref_1a = db.collection('sensor_1');
var ref_2a = db.collection('sensor_2');
var ref_3a = db.collection('sensor_3');

ref_1.set({
    time:"start",
    dis:"start"
}).then(() => {
    console.log('set data1 successful');
});

ref_2.set({
    time:"start",
    dis:"start"
}).then(() => {
    console.log('set data2 successful');
});

ref_3.set({
    time:"start",
    dis:"start"
}).then(() => {
    console.log('set data3 successful');
});

// ref_1.delete().then(() => {
//     console.log('delete data1 successful');
// });

// ref_2.delete().then(() => {
//     console.log('delete data1 successful');
// });

// ref_3.delete().then(() => {
//     console.log('delete data1 successful');
// });

function get_time(t) {
    var varTime = new Date(),
        varHours = varTime.getHours(),
        varMinutes = varTime.getMinutes(),
        varSeconds = varTime.getSeconds();
    var varNow;
    if (t == "hms") {
        varNow = varHours + ":" + varMinutes + ":" + varSeconds;
    } else if (t == "h") {
        varNow = varHours;
    } else if (t == "m") {
        varNow = varMinutes;
    } else if (t == "s") {
        varNow = varSeconds;
    }
    return varNow;
}

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
        ref_1a.add({
            time:get_time("hms"),
            dis:ultrasonic1.distance
        }).then(() => {
            console.log('set data1 successful');
        });
    }, 5000);
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
        ref_2.add({
            time:get_time("hms"),
            dis:ultrasonic2.distance
        }).then(() => {
            console.log('set data2 successful');
        });
    }, 5000);
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
        ref_3a.add({
            time:get_time("hms"),
            dis:ultrasonic3.distance
        }).then(() => {
            console.log('set data3 successful');
        });
    }, 5000);
});

