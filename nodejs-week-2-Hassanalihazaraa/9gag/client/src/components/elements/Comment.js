import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const {text, username} = this.props;
    return (
      <div className="comment">
        <p className="text">{text}</p>
        <p className="subtitle">{username}</p>
      </div>
    );
  }
}

export default Comment;
