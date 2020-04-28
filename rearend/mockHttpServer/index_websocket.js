const Koa = require('koa');
const app = new Koa();

// websocket 将已挂载中间件的 app 打入 server
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

server.listen(3000, () => {
    console.log(`app run at : http://127.0.0.1:3000`);
})

// websocket 
io.on('connection', socket => {
    socket.on('send', data => {
         console.log('客户端发送的内容：', data);
         socket.emit('getMsg', '返回消息: 我接收到了' + data);
    });
    console.log('websocket初始化成功');
    socket.emit('getMsg', 'websocket初始化成功...');
});