var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var five = require("johnny-five");
var fs = require('fs');

//链接数据库
var db = require('./db');

var routes = require('./routes/');

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// 定义路由
app.use('/', routes.home);

io.on('connection', function(socket){
  socket.on('message',function(msg){
    console.log(msg);
  });
  socket.on('disconnect',function(){
    console.log('disconnected')
  })
});

five.Board().on("ready", function() {
  var temperature = new five.Thermometer({
    controller: "LM35",
    pin: "A0"
  });
  var _data = {};

    temperature.on("data", function(data) {
      setInterval(function(){
        console.log(2222);
        _data.push(data);
        fs.writeFile('./my_file.txt',JSON.stringify(_data),function(err){
          if(err){
            console.log(err)
          }
        });
        io.emit('message',data);
      },3000)
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
