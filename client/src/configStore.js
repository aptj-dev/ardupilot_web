// src/configStore.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import ardupilotWeb from './reducers'

export default function configureStore(preloadedState) {
    return createStore(
	ardupilotWeb,
	preloadedState,
	applyMiddleware(
	    thunkMiddleware
	)
    )}
