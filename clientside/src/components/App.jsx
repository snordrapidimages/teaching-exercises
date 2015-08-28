var React = require('react');
var SignIn = require('./SignIn.jsx');
var Users = require('./Users.jsx');
var store = require('../store');
var NewMessage = require('./NewMessage.jsx');
var Messages = require('./Messages.jsx');

var App = React.createClass({

  getStateFromStore: function() {
    return {
      messages: store.getMessages(),
      users: store.getUsers(),
      me: store.getMe(),
      selectedUser: store.getSelectedUser()
    }
  },

  componentDidMount: function() {
    store.on('change', function() {
      this.setState(this.getStateFromStore());
    }.bind(this))
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  render: function() {

    // TASK - USER LOGIN
    // if this.state.me.name === undefined
    // return the SignIn component
    if(this.state.me.name === undefined) {
      return (
        <SignIn />
      )
    }

    // TASK - USER LOGIN
    // Remove the HTML above (Hello World) and return
    // A div with the Users component in it
    // Dont forget to pass the users from
    // your state as parameter
    return (
      <div className="container">
        <div className="col-sm-9">
          <NewMessage />
          <Messages messages={this.state.messages} />
        </div>
        <div className="col-sm-3">
          <Users users={this.state.users} />
        </div>
      </div>
    )


  }

});

module.exports = App;
