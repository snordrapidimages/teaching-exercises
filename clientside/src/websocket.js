var socket = require('socket.io-client')("localhost:8000")
var store = require('./store');

socket.on('connect', function() {
  store.receiveId(socket.id)
  console.log("Connected to server with id: " + socket.id);
});

// TASK - USER LOGIN
// Create an event listener on 'users'. Run store receiveUsers Inside
// the callback


// TASK - USER LOGIN
// Create an event listener on 'user'. Run store receiveUser Inside
// the callback


// TASK - USER LOGOUT
// Create an event listener for 'user-offline'
// run store.setUserOffline and pass in the userId


module.exports = socket;
