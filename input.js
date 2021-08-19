const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, EXIT_KEY, MESSAGES } = require('./constants');

let connection;

const handleUserInput = (key) => {
  if (key === EXIT_KEY) {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

/*When this function is run in play.js with the parameter connect(), it passes the details of the current connection
into the let connection variable above, allowing it to be used for the user input .write commands. */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};
