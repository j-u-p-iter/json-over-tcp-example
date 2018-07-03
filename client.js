const jot = require('json-over-tcp');

const config = require('./config');
const server = require('./server');

const createConnection = () => {
  console.log('Start listening server.');

  const socket = jot.connect(config.SERVER_PORT);

  socket.write('Hi!');

  socket.on('data', (data) => {
    console.log('Got on client: ', data);
  });
};

server.on('listening', createConnection);
