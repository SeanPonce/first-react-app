import React from 'react';
import Message from './Message';

export default class Messages extends React.Component {
  render() {
    const {messages} = this.props;
    console.log("Messages: " + messages);
    return (
      <ul className="Messages">{messages.map((message) =>
        <Message className="Message" id={message.get('id')}
          value={message.get('message')} />
        )}
      </ul>
    );
  }
}
