const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(8000,console.log('app is running on 8000'));