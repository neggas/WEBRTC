const express = require('express');
const socketIo = require('socket.io');
const http = require('http');



const app = express();

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static("."));

//echange entre client et serer

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("a user is disconect")
    })

    socket.on('signal', (data) => {
        socket.emit('signalPeer', data);
    })
})



const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("le serveur est ouvert sur le port " + PORT)
})