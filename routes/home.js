/**
 * Created by xin on 2015/12/24.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
    res.render('index.html');
});
module.exports = router;