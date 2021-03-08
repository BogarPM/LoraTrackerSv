const express = require('express');
const app = express();
const sv = require('http').Server(app);
const io = require('socket.io')(sv);


const engine = require('ejs-mate');
const net = require('net');
const path = require('path');


///////////////////Engine
app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'public'));


app.use(express.static(path.join(__dirname,'/public/')));

let clients = [];

const server = net.createServer((c)=>{
    c.setEncoding('utf8');
    console.log('New client connected!');
    clients.push[c];
    c.on('end', ()=>{
        console.log('client disconnected');
        clients = [];
    });
    c.on('data', (msg)=>{
        let dta = msg.toString('utf-8');
        if(dta!="\n"){
            console.log(dta);
            /*
            console.log(dta);
            let dat = dta.split(',');
            console.log(dat);
            let lat = dat[0].split(':');
            console.log(lat[1]/1000000);
            let lng = dat[1].split(':');
            console.log(lng[1]/1000000);
            */
        }
        
    });
});
////////////////////////////////
server.listen(3001,()=>{
    console.log('tcp socket server listenning on port 3001');
});
server.on('error', ()=>{
    console.log('Error');
});
app.listen(3000,()=>{
    console.log('Server listening on port 3000');
});


app.get('/',(req,res)=>{
    res.render('index');
});

