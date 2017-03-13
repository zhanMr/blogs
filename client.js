'use strict'
let net = require('net');

let client = net.connect({port: 8080}, () => {
    console.log('连接到服务器');
    client.write('你好服务器。我是用户JACK');
});


client.on('data', data => {
    console.log('收到服务器的回应：', data.toString());
    client.end();
});


client.on('end', () => {
    console.log('断开链接');
})