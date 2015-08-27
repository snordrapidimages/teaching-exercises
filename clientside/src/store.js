// Libraries
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

// Socket
var socket = require('./websocket');

// Private variables
var _messages = [];
var _users = {};
var _me = {};
var _id;

var store = _.extend({

  receiveId: function(id) {
    _id = id;
  },

  // TASK - USER LOGIN
  receiveUsers: function(users) {
    // In this function, replace the private users with the new users
    // Emit change when done
    _users = users;

    store.emit('change');
  },

  // TASK - USER LOGIN
  receiveUser: function(user) {
    // Inside the function, add the user in the dictionary
    // with an key of the users id. This way we will be able
    // to update existing users

    _users[user.id] = user;

    // If the user.id is equal to _id. Add a property
    // on the user called .me = true and save it to the _me variable
    //
    // emit change when done
    if(user.id === _id) {
      user.me = true;
      _me = user;
    }

    store.emit('change');
  },

  getMe: function() {
    return _me;
  },

  // TASK - USER LOGOUT
  setUserOffline: function(userId) {
    _users[userId].offline = true;

    store.emit('change');
  },

  // TASK - USER LOGIN
  getUsers: function() {
    // Here we want the users returned as an array instead of an object.
    // There are several ways to do this. using Object.keys, for loop or
    // a utility library such as lodash or underscore
    //
    // Also remove all users that has an offline status or users
    // missing a name parameter. filter is a good method for this

    return Object.keys(_users).map(function(id) {
      return _users[id];
    }).filter(function(user) {
      return !user.offline && user.name
    });

    return [];
  }

}, EventEmitter.prototype);


module.exports = window.store = store;
