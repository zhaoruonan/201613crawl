var async = require('async');
var Movie = require('../model').Movie;
var debug = require('debug')('crawl:write');
exports.movie = function(movies,callback){
    async.forEach(movies,function(item,cb){
        debug(`写到电影：${item.name}`);
        Movie.create(item,cb);
    },callback);
};