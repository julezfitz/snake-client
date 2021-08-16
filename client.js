const net = require('net');

const connect = function (message) {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: Jul');
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
