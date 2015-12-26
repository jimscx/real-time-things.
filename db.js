/**
 * Created by xin on 2015/12/24.
 */
var db,mongoose,dbconfig;
mongoose = require('mongoose');
dbconfig = require('./config/dbconfig');
mongoose.connect(dbconfig.db);

db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
    return console.log('mongoose open success');
});

module.exports = db;