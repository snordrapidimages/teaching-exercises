var socket = require('./websocket.js');

document.getElementById('hej').addEventListener('click', function() {
  socket.emit('message', document.getElementById('text').value, "tjena")

});
