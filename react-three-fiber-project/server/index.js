const { WebSocketServer } = require('ws');
const http = require('http');
const uuid = require('uuid');

// Spinning the http server and the WebSocket server.
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;

const clients = {};
let wSocket = {};
const timeout = 60000;

wsServer.on('connection', function connection(ws) {
    wSocket = ws;
    console.log(`Recieved a new connection.`);
    const userId = uuid.v4();
    clients[userId] = ws;
    console.log(`${userId} connected.`);

    ws.on('error', console.error);
  
    ws.on('message', function message(data) {
        console.log('received: %s', data);
        if (data == 'ready') {
            console.log('client ready');
            generator(ws);
        }
    });
  
    ws.send('connected');
});

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});

const generator = (ws) => {
    setInterval(() => {
        ws.send(JSON.stringify({ wind: genRand(0, 60), light: genRand(0, 100) }));
    }, timeout);
}
// const generator = (ws)=> setInterval(() => {
//     ws.send({ wind: genRand(0, 60), light: genRand(0, 100) });
// }, 30000);

function genRand(min, max) {
    return Math.round(( Math.random() * (max - min) + min)*100)/100;
}