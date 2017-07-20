// src/client.js

import React from 'react';
import ReactDOM from 'react-dom'
import { renderApp }  from './app'


const reactRoot = window.getElementById('root')
console.log('TATA');
renderApp().then(appComponent => {
    ReactDOM.render(appComponent, reactRoot);
})
