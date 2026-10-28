const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);


io.on('connection',(socket)=>{
    console.log("A user is connected");


    socket.on('message', (data) => {
        console.log(data);
        io.emit('new-message', data);
    });

    socket.on('disconnect',()=>{
        console.log('A user disconnected');
    })
})





server.listen(3000, ()=>{
    console.log("Listening...")
})