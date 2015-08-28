var React = require('react');
var User = require('./User.jsx');

var Users = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Users <span className="badge">{this.props.users.length}</span></h2>

        {this.props.users.map(function(user) {
          return <User user={user} />
        })}

      </div>
    )
  }
})

module.exports = Users
