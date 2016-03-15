"use strict";

const url = require('url');
var count = 0;

let responSe = function(req, res, next){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    var curentPath = url.parse(req.url).pathname;
    switch (curentPath) {
        case "/index.html":
            res.end("hello World");
            count++;
            break;
        case "/count.html":
            res.end("Количество запросов" + ":" + " " + count);
            break;
        default:
            try{
                throw new Error(404 +" " + "Page not Found");
            }catch(e){
                res.end(e.message)
            }
            break;
        }
};
module.exports = responSe;