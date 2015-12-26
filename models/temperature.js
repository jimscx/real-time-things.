/**
 * Created by xin on 2015/12/24.
 */
var mongoose = require('mongoose');

var temperatureSchema = new mongoose.Schema({
    name: String,
    description : String,
    values : String
});

var temperature = mongoose.model('Temperature', temperatureSchema);

module.exports = temperature;