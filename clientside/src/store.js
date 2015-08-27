// Libraries
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

// Socket
var socket = require('./websocket');

// Private variables
var _messages = [];
var _users = {};


var store = _.extend({

  // Create a function with key "receiveMessage" here
  // Inside the function, append the message to
  // the _messages array
  //
  // At the end of the function. trigger a store 'change' event

  receiveMessage: function(message) {
    _messages.append(message);

    store.emit('change');
  },

  // Create a function called receiveUser
  //
  // If the user.id is equal to socket.id. Add a property
  // on the user called .me = true
  //
  // Inside the function, add the user in the dictionary
  // with an key of the users id. This way we will be able
  // to update existing users
  receiveUser: function(user) {
    _users[user.id] = user;

    store.emit('change');
  },

  // Write a function called getUsers to get the users stored in this store.
  //
  // Here we want the users returned as an array instead of an object.
  // There are several ways to do this. using Object.keys, for loop or
  // a utility library such as lodash or underscore
  getUsers: function() {
    return Object.keys(_users).map(function(id) {
      return _users[id];
    })

    store.emit('change')
  }

  // Write a function called getMessages and simply
  // return the messages array


}, EventEmitter.prototype);


module.exports = store;
