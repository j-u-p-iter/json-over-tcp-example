const jot = require('json-over-tcp');

const config = require('./config');

const server = jot.createServer();

const onConnect = (socket) => {
  console.log('Connect to server');

  socket.on('data', (data) => {
    console.log('Got on server: ', data);

    socket.write('Message From server!');
  });
};

server
  .on('connection', onConnect)
  .listen(config.SERVER_PORT);


module.exports = server;
