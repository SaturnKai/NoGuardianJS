const ProxyServer = require('transparent-proxy');
require('dotenv/config');

const server = new ProxyServer();

const address = process.env.ADDRESS || '127.0.0.1';
const port = process.env.PORT || 3000;

server.listen(address, port, () => console.log('Server started:', server.address()));
