const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const LISTEN_PORT = 8080;

server.listen(LISTEN_PORT);
console.log("listening on port: ", LISTEN_PORT);

app.use(express.static(__dirname + "/public"));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});