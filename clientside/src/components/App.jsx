var React = require('react');
var SignIn = require('./SignIn.jsx');
var Users = require('./Users.jsx');
var store = require('../store');

var App = React.createClass({

  getStateFromStore: function() {
    return {
      users: store.getUsers(),
      me: store.getMe()
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

    return (
      <h1>Hello World</h1>
    )

    // TASK - USER LOGIN
    // Remove the HTML above (Hello World) and return
    // A div with the Users component in it
    // Dont forget to pass the users from
    // your state as parameter
    return (
      <div>
          <Users users={this.state.users} />
      </div>
    )


  }

});

module.exports = App;
