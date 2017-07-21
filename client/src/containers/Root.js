import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from '../routes'
import configureStore from '../configStore'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
