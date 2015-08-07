var socket = require('socket.io-client')("localhost:8000")

socket.on('connect', function() {
  alert("Connected to server with id: " + socket.id)
})

/**
 * Example
 * socket.on({event-emitted-from-server}, function({arguments emitted}) {
 *
 * });
 */

module.exports = socket;
