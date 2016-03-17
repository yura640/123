"use strict";

let fs = require("fs");
let data = require(__dirname + "/data.json");

module.exports = {
    getUser: function (request, response, next) {
        return data;
    },
    setUser: function (incomData) {
        var json = JSON.parse(incomData);
        if(json.nick!= null&&json.name!=null) {
            try {
                fs.writeFile(__dirname + "/data.json", JSON.stringify(json), (err) => {
                    if (err) throw err;
                    console.log(json);
                });
            } catch (e) {
                console.log(e);
            }
        }
    }
};




