import React from 'react';
import Message from './Message';
import {addMessage} from '../Actions.js';

export default class Messages extends React.Component {
  render() {
    const {messages} = this.props;
    return (
      <div className="Messages">
        <input type="text"
          onKeyPress={this.addMsg} />
        <ul>{messages.map((message) =>
            <Message className="Message" key={message.id}
              value={message.message} />
          )}
        </ul>
      </div>
    );
  }

  addMsg = (e) => {
    if ( e.key === 'Enter' ) {
      const {dispatch} = this.props;
      dispatch(addMessage(e.target.value));
      e.target.value = '';
    }
  }
}
