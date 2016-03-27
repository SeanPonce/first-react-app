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
      <div className="App">
        <h1>Fake Console</h1>
        <ul>
          <Messages messages={messages} dispatch={dispatch} />
        </ul>
      </div>
    );
  }
}
