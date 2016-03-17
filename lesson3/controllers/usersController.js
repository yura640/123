"use strict";

var userModule = require('./../userModule');
module.exports = {
    getUsers: function(request, response, next) {
        try {
            var users = userModule.getUser();
            response.write(JSON.stringify(users, null, 2));
            next();
        } catch (e) {
            next(e);
        }
    },

    setUsers: function (request, response, next){
        request.on('data', function(chunk) {
            userModule.setUser(chunk);
        })
    }

};


