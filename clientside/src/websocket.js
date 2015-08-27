var socket = require('socket.io-client')("localhost:8000")

socket.on('connect', function() {
  console.log("Connected to server with id: " + socket.id)
})

socket.on('hello-world', function() {
  console.log('hello')
})

socket.on('message', function(text) {
  var el = document.createElement('div');
  el.textContent = text;
  document.body.appendChild(el)
})

/**
 * Example
 * socket.on({event-emitted-from-server}, function({arguments emitted}) {
 *
 * });
 */

module.exports = socket;
