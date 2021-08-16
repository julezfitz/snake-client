const { setupInput } = require('./input.js');
const { connect } = require('./client');

console.log('Connecting ...');

setupInput(connect());