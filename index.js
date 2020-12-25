const express = require('express');
const app = express();
const net = require('net');

const server = net.createServer((c)=>{
    c.setEncoding('utf8');
    console.log('New client connected!');
    c.on('end', ()=>{
        console.log('client disconnected');
    });
    c.on('data', (msg)=>{
        console.log(msg);
    });
});
server.on('error', ()=>{
    console.log('Error');
});
server.listen(3001,()=>{
    console.log('tcp socket server listenning on port 3001');
});

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
});


app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

