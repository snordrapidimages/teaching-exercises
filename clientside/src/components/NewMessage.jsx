var React = require('react');
var actions = require('../actions');

var NewMessage = React.createClass({

  sendMessage: function(e) {
    if(e.keyCode === 13) {
      actions.sendMessage(e.currentTarget.value);

      e.currentTarget.value = ""
    }
  },

  render: function() {
    return (
      <div>
        <h4>Enter message</h4>
        <input onKeyUp={this.sendMessage} />
      </div>
    );
  }

});

module.exports = NewMessage;
