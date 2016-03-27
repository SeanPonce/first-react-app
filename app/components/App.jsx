import React from 'react';
import {connect} from 'react-redux';
import Messages from './Messages';

@connect((state) => ({
  messages: state
}))
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there! Here are my messages:</h1>
        <ul>
          <Messages messages={this.props.messages} />
        </ul>
      </div>
    );
  }
}
