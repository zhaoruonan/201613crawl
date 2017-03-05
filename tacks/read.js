var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var debug = require('debug')('crawl:read');
exports.movie = function(url,callback){
    request({url,encoding:null},function(err,response,body){
        var movies = [];
        body = iconv.decode(body,'gbk');
        var $ = cheerio.load(body);//把此响应体字符串转成$对象
        $('.keyword .list-title').each(function(){
            var $me = $(this);
            var movie = {
                name:$me.text(),
                url:$me.attr('href')
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
        });
        //console.log(movies);
        callback(err,movies);
    })
};
//exports.movie('http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10',function(){});
