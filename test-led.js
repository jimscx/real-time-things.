/**
 * Created by xin on 2015/12/23.
 */
var five = require("johnny-five");
five.Board().on("ready", function() {
    var temperature = new five.Thermometer({
        controller: "LM35",
        pin: "A0"
    });

    temperature.on("data", function(data) {
        console.log(data);
        var celsius = this.celsius;
        var fahrenheit = this.fahrenheit;
        console.log(celsius + "°C",fahrenheit + "°F");
    });
});