var socket = require('socket.io-client')("localhost:8000")
var store = require('./store');

socket.on('connect', function() {
  store.receiveId(socket.id)
  console.log("Connected to server with id: " + socket.id);
});

// TASK - USER LOGIN
// Create an event listener on 'users'. Run store receiveUsers Inside
// the callback
socket.on('users', function(users) {
  store.receiveUsers(users);
})

// TASK - USER LOGIN
// Create an event listener on 'user'. Run store receiveUser Inside
// the callback
socket.on('user', function(user) {
  store.receiveUser(user)
})

// TASK - USER LOGOUT
socket.on('user-offline', function(userId) {
  store.setUserOffline(userId);
});

socket.on('message', function(message) {
  store.receiveMessage(message);
});


module.exports = socket;
