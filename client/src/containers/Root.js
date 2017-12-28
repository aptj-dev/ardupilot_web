import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from '../routes'
import { Router, browserHistory } from 'react-router'
import configureStore from '../configStore'
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
const action = type => store.dispatch({type})

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
    render() {
	return (
		<Provider store={store}>
		<Router history={history}>
		<Routes />
		</Router>
		</Provider>
	)
    }
}
