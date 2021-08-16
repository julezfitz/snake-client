const net = require('net');
const { IP, PORT, NAME } = require('./constants');

const connect = function (message) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
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

  conn.on('data', (data) => {
    console.log('Message from game: ', data);
  });

  return conn;
};

module.exports = {
  connect
};
