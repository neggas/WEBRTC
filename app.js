const express = require('express');
const socketIo = require('socket.io');
const http = require('http');



const app = express();
express.static(".");
const server = http.createServer(app);
const io = socketIo(server);


server.get('/', (res, res) => {
    res.end('salut');
})

const port = process.env.PORT || 3000;

server.listen((port) => {
    console.log("le serveur est ouvert sur le port " + port)
})