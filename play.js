const { stdin } = require('process');
const client = require('./client.js');

const handUserInput = function() {
    
}

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  };

  stdin.on('data', handUserInput);

client();