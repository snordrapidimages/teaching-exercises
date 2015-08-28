var React = require('react');
var Message = require('./Message.jsx');

var Messages = React.createClass({

  render: function() {
    return (
      <div>
        <h2>
          Messages
        </h2>

        {this.props.messages.map(function(message) {
          return <Message message={message} />
        })}
      </div>
    );
  }

});

module.exports = Messages;
