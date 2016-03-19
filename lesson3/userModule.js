"use strict";

let validator = require('validator');
let data = require(__dirname + "/data.json");
var userArray = [];

function UserObject() {
    this.name = undefined;
    this.nick = undefined;
    this.age = undefined;
    this.description = undefined;
    this.email = undefined
}
function checkNick(userNick){
    for (var i=0; i < userArray.length; i++) {
        if (userArray[i].nick == userNick) {
             userArray.splice(i,1);
        }
    }
}
module.exports = {

    getUser: function (request, response, next) {
        return userArray
    },

    setUser: function (incomData) {
        var curentUser = new UserObject();
        try {
            JSON.parse(incomData, function (key, value) {

                if (key.toLowerCase() == "name" && validator.isLength(value, {min: 1, max: 10})) {
                    curentUser.name = value;

                    } else if(key.toLowerCase() == undefined){
                        throw err}

                if (key.toLowerCase() == "nick" && validator.isLength(value, {min: 1, max: 10})) {
                    curentUser.nick = value;
                    checkNick(value);

                    } else if(key.toLowerCase() == undefined){
                        throw err}

                if (key.toLowerCase() == "age" && validator.isInt(value.toString(), {min: 1, max: 10})) {
                    curentUser.age = value;

                }
                if (key.toLowerCase() == "description") {
                    curentUser.description = value;

                }
                if (key.toLowerCase() == "e-mail" && validator.isEmail(value)) {
                    curentUser.email = value;
                }
            });
        }catch (e){
            response.statusCode = 400;
        }
        userArray.push(curentUser);

     }

};








