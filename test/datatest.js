/**
 * Created by xin on 2015/12/24.
 */
var db = require('../db');
var mongoose = require('mongoose');
var temperature = require('../models/temperature');
var pre = new temperature({
    name: 'chenxin',
    description : '���Ƽ���ѧ',
    values :4444
})

pre.save(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('success')
    }
});
