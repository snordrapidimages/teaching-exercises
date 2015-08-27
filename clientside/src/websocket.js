var socket = require('socket.io-client')("localhost:8000")
var store = require('./store');

socket.on('connect', function() {
  console.log("Connected to server with id: " + socket.id)
})

socket.on('hello-world', function() {
  console.log('hello')
})

socket.on('message', function(text) {
  store.addMessage(text);
})

/**
 * Example
 * socket.on({event-emitted-from-server}, function({arguments emitted}) {
 *
 * });
 */

module.exports = socket;
