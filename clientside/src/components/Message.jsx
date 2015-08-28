var React = require('react');
var moment = require('moment');

var Message = React.createClass({

  render: function() {
    return (
      <div>
        <span className="badge">{moment(this.props.message.timestamp).fromNow()}</span>
        <p><strong>{this.props.message.user.name}</strong>: {this.props.message.text}</p>
      </div>
    );
  }

});

module.exports = Message;
