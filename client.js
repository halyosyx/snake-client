const { S_IFLNK } = require("constants");
const {IP,PORT} = require('./constants')
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('connection sucess!')
    conn.write('Name: CN');
    
  });

  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};


//console.log("Connecting ...");
//connect();
module.exports = connect;