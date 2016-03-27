import React from 'react';
import {connect, bindActionCreators} from 'react-redux';
import Messages from './Messages';

@connect((state) => ({
  messages: state.messages
}))
export default class App extends React.Component {
  render() {
    let {messages, dispatch} = this.props;
    return (
      <div>
        <h1>Hello there! Here are my messages:</h1>
        <ul>
          <Messages messages={messages} dispatch={dispatch} />
        </ul>
      </div>
    );
  }
}
