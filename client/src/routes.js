// src/routes.js

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'
import About from './components/About'
import VisibleDroneMap from './containers/VisibleDroneMap'
import NotFound from './components/NotFound'
import Login from './components/Login'

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
	<Route path="/login"  component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/drone-map" component={VisibleDroneMap}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
);

export default Routes;
