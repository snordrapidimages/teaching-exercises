var React = require('react');
var actions = require('../actions');

var User = React.createClass({
  selectUser: function(e) {
    actions.selectUser(this.props.user.id)
  },
  render: function() {
    return (
      <div onClick={this.selectUser}>
        {this.props.user.name}
      </div>
    )
  }
})

module.exports = User;
