const net = require('net');
const { IP, PORT, NAME } = require('./constants');

//Creates a connection and informs the client they were connected.
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(NAME);
  });

  //Handles messages sent from the server.
  conn.on('data', (data) => {
    console.log('Message from game: ', data);
  });

  return conn;
};


module.exports = {
  connect
};
