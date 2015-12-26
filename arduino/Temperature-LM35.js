/**
 * Created by xin on 2015/12/25.
 */
var http = require('http');
var io = require('socket.io')(http);
var path = require('path');
var five = require("johnny-five");
var fs = require('fs');
io.on('connection', function(socket){
    socket.on('message',function(msg){
        console.log(msg);
    });
    socket.on('disconnect',function(){
        console.log('disconnected')
    })
});
var temperature = function(){
    five.Board().on("ready", function() {
        var temperature = new five.Thermometer({
            controller: "LM35",
            pin: "A0"
        });
        var _data = [];
        setInterval(function(){
            console.log(111111);
            temperature.on("data", function(data) {
                //var sendData = JSON.stringify(data);
                _data.push(data);
                fs.writeFile('./my_file.txt',JSON.stringify(_data),function(err){
                    if(err){
                        console.log(err)
                    }
                });
                console.log(data);
                io.emit('message',data);
            });
        },5000)
    });
};
module.exports = temperature;