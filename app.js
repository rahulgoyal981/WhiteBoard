const express = require('express');
const app = express();
//  nodejs module
const httpServer = require('http').createServer(app);
//  socket enbaled server
const io = require('socket.io')(httpServer);

io.on("connection", function (socket) {
    console.log("New Client Connected");
    // console.log(scoket.id);
    socket.on("color", function (color) {
        console.log(color);
        socket.broadcast.emit("colorchange", color);
    });
    socket.on("md", function (point) {
        socket.broadcast.emit("onmd", point);
    })
    socket.on("mm", function (point) {
        socket.broadcast.emit("onmm", point);
    })
});
let port = process.env.PORT || 3000;
httpServer.listen(port, function () {
    console.log("sever started at port 3000");
});