import React from 'react';
import Messages from './Messages';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there! Here are my messages:</h1>
        <ul>
          <Messages />
        </ul>
      </div>
    );
  }
}
