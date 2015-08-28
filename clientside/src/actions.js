var socket = require('./websocket');
var store = require('./store');

module.exports = {

  selectUser: function(id) {
    store.setSelectedUser(id);
  },

  signIn: function(name) {
    // TASK - USER LOGIN
    // Emit an event called user-name and pass in the name
    socket.emit('user-name', name);
  },

  sendMessage: function(text) {
    var message = {
      text: text,
      timestamp: +new Date(),
      user: store.getMe()
    }

    socket.emit('message', message);
  }
}
