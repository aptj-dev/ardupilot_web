// src/app.js

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './configStore'
import {AuthGlobals} from "redux-auth/default-theme";

const store = configureStore()

class Root extends Component {
    static propTypes = {
      children: PropTypes.node,
  };
    render() {
      return (
      <div>
        <AuthGlobals />
      </div>
    );
  }
}

export function renderApp({cookies, isServer, currentLocation} = {}) {
  // configure redux-auth BEFORE rendering the page
    store.dispatch(configure(
      // use the FULL PATH to your API
	{apiUrl: "http://localhost:3000"},
	{isServer, cookies, currentLocation}
    )).then(({redirectPath, blank} = {}) => {
	if (blank) {
	    // if `blank` is true, this is an OAuth redirect and should not
	    // be rendered
      return <noscript />;
	} else {
	    return (
        <Provider store={store} key="provider">
		    <Root />
		    <Routes />
		    </Provider>
	    );
	}
    });
}
