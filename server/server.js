import express from 'express';
const app = express();

import http from 'http';

const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

app.get('/server', (req, res) => {
    res.send('Server Is Running...');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

});

server.listen(5173, () => {
  console.log('listening on *:5173');
});