var React = require('react');
var actions = require('../actions');

var SignIn = React.createClass({
  signIn: function(e) {
    // TASK - USER LOGIN
    // Get the field input by running
    // this.refs.name.getDOMNode().value;
    // Run the signIn action from the actions object
    // Dont forget to pass in the input value

    var userName = this.refs.name.getDOMNode().value;

    actions.signIn(userName);
  },

  render: function() {

    // TASK - USER LOGIN
    // In the div, create an input with a property called "ref". In
    // property, send in name
    // Also create some sort of button. add an event listener, onClick and
    // pass in the signIn function as argument

    return (
      <div className="container">
        <div className="col-sm-4 col-sm-offset-4" style={{marginTop: '20%'}}>
          <h2>Hello dear friend, please enter your username</h2>
          <input ref="name" type="text" />
          <div onClick={this.signIn} className="btn btn-primary">Sign in</div>
        </div>
      </div>

    )
  }
});

module.exports = SignIn;
