import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import Reducers from './Reducers';

const store = Reducers();
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app'));
