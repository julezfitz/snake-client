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

  // Test to move snake up every 50ms
  // conn.on('connect', () => {
  //   let count = 0;
  //   while (count < 20) {
  //     setTimeout(() => {
  //       conn.write('Move: up');
  //     }, count * 500);
  //     count += 1;
  //   }
  // });

  //Handles messages sent from the server.
  conn.on('data', (data) => {
    console.log('Message from game: ', data);
  });

  return conn;
};


module.exports = {
  connect
};
