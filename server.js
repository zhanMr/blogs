'use strict'

let net = require('net');
let server  = net.createServer(socket => {
    console.log('client connected');
    socket.on('data', data => {
        console.log('数据来自客服端：', data.toString());
    });
    socket.on('end', data => {
        console.log('断开连接');
    });
    socket.write('我是服务器TANK');
});

server.listen(8080, () => {
    console.log('server bound');
})