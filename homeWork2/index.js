"use strict";
const http = require("http"),
    hendler = require('./module');

let server = http.createServer(hendler);
server.listen(4000);