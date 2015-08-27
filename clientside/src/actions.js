var socket = require('./websocket');

module.exports = {
  sendMessage: function(text) {

    var message = {

    }

    socket.emit('message', text);
  }


}
