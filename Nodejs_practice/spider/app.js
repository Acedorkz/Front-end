var express = require('express');
var app = express();
var request = require('request');
var cheerio=require('cheerio');


app.get('/', function(req, res){
  request('http://www.jikexueyuan.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
       $=cheerio.load(body);//当前的$是拿到了整个body选择器
      res.json({
        'Classnum':1
      });
    }
  });

});

app.listen(3000);
