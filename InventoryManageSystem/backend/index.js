const express = require('express')
const path = require('path')
const routes = require('./routes')

require('./dbconn') 
const bodyParser = require('body-parser')
const cors = require('cors')


let http = require('http');


const user_app = express()
let server = http.Server(user_app);
let socketIO = require('socket.io');
let io = socketIO(server);

const port  = process.env.Port||8000
const baseurl = `http://localhost:${port}`
const mongoose = require('mongoose')


user_app.use(bodyParser.json())
user_app.use(cors({origin:"*"}))

user_app.use('/Allemp',routes)







io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        io.in(data.room).emit('new message', {user: data.user, message: data.message});
    });
});





server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
