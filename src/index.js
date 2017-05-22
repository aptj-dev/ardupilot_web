// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ardupilotWeb from './reducers'
import './index.css';

let store = createStore(ardupilotWeb)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
