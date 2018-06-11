import React from 'react';

import './Messages.css';

class Messages extends React.Component {
  render() {
    if (!this.props.messages.length) return null;

    return (
      <div className="Messages">
        <h2>Messages</h2>
        <ul className="Messages-list">
          {this.props.messages.map((message, idx) => (
            <li className="Messages-message" key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Messages;