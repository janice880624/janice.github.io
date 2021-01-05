require('webduino-js');
require('webduino-blockly');

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '1655316342',
    channelSecret: '9842f8930083ae2af34a8b99c6f20a20',
    channelAccessToken: 'eUSwxnBgSFxI3StTBewQgMsmdUCwx+VHzlO+b7vAKozlNlROck8fgZR8GTCnD8Pq2w84H/iZJfXx79qvI98TSms1GhmLGmcYq2RdIk3fXq1tKhIg+Y0IjvCAHxQYFZlOMzj48OD7dDkNKS5DMIptUwdB04t89/1O/w1cDnyilFU='
});

// var bot = linebot({
//    channelId: '1655307748',
//    channelSecret: '105d80212c029cbf6b650c79b0ae62e7',
//    channelAccessToken: 'TTNf2RBpASETEG3ji6VsTRFPOz5NZ0wkZzmiIppB65PMsbJtE0BLbw7GHxB2oBPdfy+0LSJ4wT+Meyo0qXmBobpPTf3aCbjQ5aabegKIMOHPS4A5AFQnHzA7ofbswOBeFTfUigcJUtZrme5H4P2mxAdB04t89/1O/w1cDnyilFU='
// });

//Smart:var myBoardVars={board: 'Smart', device: 'Device ID', transport: 'mqtt'};
//Fly:var myBoardVars={device: 'Device ID'};

var myBoardVars = {board: 'Smart', device: '10dgmWMV', transport: 'mqtt'};

// 腳位定義
var buzzer;
var pin1;
var pin2;
var pin3;
var linebot;
var _E9_9F_B3_E9_9A_8E;

bot.on('message', function(event) {
    var myReply='';
    if (event.message.type === 'text') {
       myReply=processText(event.message.text);
    }
    if (event.message.type === 'sticker') {
       myReply='你太幽默了！';
    console.log('sticker');
    }
    if (event.message.type === 'image') {
       myReply='這照片好帥！';
    }
    event.reply(myReply).then(function(data) {
       // success 
       console.log(myReply);
    }).catch(function(error) {
       // error 
       console.log('error');
    });
});

function processText(myMsg){
    var myResult='';
    if (myMsg==='你好' || myMsg==='早安' || myMsg==='午安' || myMsg==='晚安')
       myResult=myMsg; 

    else if (myMsg==='do' || myMsg==='Do'){
       if (!deviceIsConnected())
          myResult='裝置未連接！';
       else{
          myResult='do~~';
          buzzer.play(buzzer_music([{ notes: 'C4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'C4', tempos: '8' }]).tempos );
        //   return delay(0.5); 
       }
    }

    else if (myMsg==='re' || myMsg==='Re'){
        if (!deviceIsConnected())
           myResult='裝置未連接！';
        else{
           myResult='Re~~';
           buzzer.play(buzzer_music([{ notes: 'D4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'D4', tempos: '8' }]).tempos );
        //    return delay(0.5); 
        }
    }

    else if (myMsg==='mi' || myMsg==='Mi'){
        if (!deviceIsConnected())
           myResult='裝置未連接！';
        else{
           myResult='Mi~~';
           buzzer.play(buzzer_music([{ notes: 'E4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'E4', tempos: '8' }]).tempos );
        //    return delay(0.5); 
        }
    }

    else if (myMsg==='Fa' || myMsg==='fa'){
        if (!deviceIsConnected())
           myResult='裝置未連接！';
        else{
           myResult='Fa~~';
           buzzer.play(buzzer_music([{ notes: 'F4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'F4', tempos: '8' }]).tempos );
        //    return delay(0.5); 
        }
    }

    else if (myMsg==='Sol' || myMsg==='sol'){
        if (!deviceIsConnected())
           myResult='裝置未連接！';
        else{
           myResult='Sol~~';
           buzzer.play(buzzer_music([{ notes: 'G4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'G4', tempos: '8' }]).tempos );
        //    return delay(0.5); 
        }
    }

    else if (myMsg==='La' || myMsg==='la'){
        if (!deviceIsConnected())
           myResult='裝置未連接！';
        else{
           myResult='La~~';
           buzzer.play(buzzer_music([{ notes: 'A4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'A4', tempos: '8' }]).tempos );
        //    return delay(0.5); 
        }
    }

    else if (myMsg==='Si' || myMsg==='si'){
        if (!deviceIsConnected())
           myResult='裝置未連接！';
        else{
           myResult='Si~~';
           buzzer.play(buzzer_music([{ notes: 'B4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'B4', tempos: '8' }]).tempos );
        //    return delay(0.5);
        }
    }

    else if (myMsg==='指定曲'){
         if (!deviceIsConnected())
            myResult='裝置未連接！';
         else{
            myResult='小蜜蜂';
            buzzer.play(buzzer_music([{ notes:['E7','E7','0','E7','0','C7','E7','0','G7','0','0','0','G6','0','0','0','C7','0','0','G6','0','0','E6','0','0','A6','0','B6','0','AS6','A6','0','G6','E7','0','G7','A7','0','F7','G7','0','E7','0','C7','D7','B6','0','0','C7','0','0','G6','0','0','E6','0','0','A6','0','B6','0','AS6','A6','0','G6','E7','0','G7','A7','0','F7','G7','0','E7','0','C7','D7','B6','0','0'] , tempos:['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'] }]).notes ,buzzer_music([{ notes:['E7','E7','0','E7','0','C7','E7','0','G7','0','0','0','G6','0','0','0','C7','0','0','G6','0','0','E6','0','0','A6','0','B6','0','AS6','A6','0','G6','E7','0','G7','A7','0','F7','G7','0','E7','0','C7','D7','B6','0','0','C7','0','0','G6','0','0','E6','0','0','A6','0','B6','0','AS6','A6','0','G6','E7','0','G7','A7','0','F7','G7','0','E7','0','C7','D7','B6','0','0'] , tempos:['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'] }]).tempos );
         //    return delay(0.5);
      }
   }

    else{
       myResult='';
       try{
          myResult='答案是'+math.eval(myMsg.toLowerCase()).toString();
       }catch(err){
          myResult='';
       }
       if (myResult==='')
          myResult='抱歉，我不懂這句話的意思！';
    }
    return myResult;
}


boardReady(myBoardVars, true, async function (board) {
   myBoard=board;
   board.systemReset();
   pin1 = getPin(board, 4);
   pin2 = getPin(board, 14);
   pin3 = getPin(board, 16);
   buzzer = getBuzzer(board, 3);
   pin1.setMode(0);
   pin2.setMode(0);
   pin3.setMode(0);
   board.samplingInterval = 50;
   buzzer = getBuzzer(board, 3);
});

while (!false) {
   _E9_9F_B3_E9_9A_8E = [await pin1.read(),await pin2.read(),await pin3.read()].join('');
   document.getElementById('demo-area-01-show').innerHTML = _E9_9F_B3_E9_9A_8E;
   if (_E9_9F_B3_E9_9A_8E == '100') {
      buzzer.play(buzzer_music([{ notes: 'C4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'C4', tempos: '8' }]).tempos );
   } else if (_E9_9F_B3_E9_9A_8E == '110') {
      buzzer.play(buzzer_music([{ notes: 'D4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'D4', tempos: '8' }]).tempos );
   } else if (_E9_9F_B3_E9_9A_8E == '010') {
      buzzer.play(buzzer_music([{ notes: 'E4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'E4', tempos: '8' }]).tempos );
   } else if (_E9_9F_B3_E9_9A_8E == '011') {
      buzzer.play(buzzer_music([{ notes: 'F4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'F4', tempos: '8' }]).tempos );
   } else if (_E9_9F_B3_E9_9A_8E == '001') {
      buzzer.play(buzzer_music([{ notes: 'G4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'G4', tempos: '8' }]).tempos );
   } else if (_E9_9F_B3_E9_9A_8E == '101') {
      buzzer.play(buzzer_music([{ notes: 'A4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'A4', tempos: '8' }]).tempos );
   } else if (_E9_9F_B3_E9_9A_8E == '111') {
      buzzer.play(buzzer_music([{ notes: 'B4', tempos: '8' }]).notes ,buzzer_music([{ notes: 'B4', tempos: '8' }]).tempos );
   }
   await delay(0.5);
}
 
//以下為檢查webduino是否已連線成功的函式
function deviceIsConnected(){
    if (myBoard===undefined)
       return false;
    else if (myBoard.isConnected===undefined)
       return false;
    else
       return myBoard.isConnected;
}

function buzzer_music(m) {
    var musicNotes = {};
    musicNotes.notes = [];
    musicNotes.tempos = [];
    if (m[0].notes.length > 1) {
      for (var i = 0; i < m.length; i++) {
        if (Array.isArray(m[i].notes)) {
          var cn = musicNotes.notes.concat(m[i].notes);
          musicNotes.notes = cn;
        } else {
          musicNotes.notes.push(m[i].notes);
        }
        if (Array.isArray(m[i].tempos)) {
          var ct = musicNotes.tempos.concat(m[i].tempos);
          musicNotes.tempos = ct;
        } else {
          musicNotes.tempos.push(m[i].tempos);
        }
      }
    } else {
      musicNotes.notes = [m[0].notes];
      musicNotes.tempos = [m[0].tempos];
    }
    return musicNotes;
}
  
 
 
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);
 
 //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});