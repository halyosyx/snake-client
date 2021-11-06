const { stdin } = require('process');
let connection;

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data', key => {
      handleUserInput(key);
    });
    return stdin;
  };

  let clear;
  
  const handleUserInput = function(key) {
    
    const interval = function (wkey){
      clear = setInterval(() => {
        connection.write(wkey);
      }, 100);
    };

    if (key === '\u0003') {
        process.exit();
      }
    
    if (key === 'w') {
      clearInterval(clear);
      interval("Move: up");   
    }
    if (key === 's') {
      clearInterval(clear);
      interval("Move: down");
    }
    if (key === 'a') {
      clearInterval(clear);
      interval("Move: left");
    }
    if (key === 'd') {
      clearInterval(clear);
      interval("Move: right");
    }

    //messages

    if (key === 'l') {
      connection.write('Say: Greetings friend')
    }
    if (key === 'k') {
      connection.write('Say: Time to Eat!')
    }

};

  //stdin.on('data', handleUserInput);

  module.exports = setupInput;