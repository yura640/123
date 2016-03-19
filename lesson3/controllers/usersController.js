"use strict";
var userModule = require('./../userModule');

module.exports = {

    getUsers: function(request, response, next) {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        try {
            var users = userModule.getUser();
            response.end(JSON.stringify(users, null, 4));
            next();
        } catch (e) {
            next(e);
        }
    },

    setUser: function (request, response, next){
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        var incomData = "";
        request.on('data', function(chunk) {
            incomData+=chunk
        });

        request.on('end', function () {
            try{
                userModule.setUser(incomData);
                response.statusCode = 201;
                response.end();

            }catch(e){
                response.statusCode = 400;
                response.end('Bad request');
                console.log('Bad request')
            }

        });
    }

};


