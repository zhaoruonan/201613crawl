var read = require('./read').movie;
var write = require('./write').movie;
var async = require('async');
var debug = require('debug')('crawl:main');
var url = 'http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10';
var Movie = require('../model').Movie;
async.waterfall([
    //在保存之前全部清空数据后，再写入数据
    function(callback){
        Movie.remove({},callback);
    },
    function(data,callback){
        read(url,callback);
    },
    function(data,callback){
        write(data,callback)
    }
],function(err,result){
    debug('全部任务执行完成')
});

