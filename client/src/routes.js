// src/routes.js

import React from 'react'
import { Switch, Route } from 'react-router'
import App from './components/App'
import About from './components/About'
import VisibleDroneMap from './containers/VisibleDroneMap'
import NotFound from './components/NotFound'
import LoginContainer from './containers/LoginContainer'
import SignUpContainer from './containers/SignUpContainer'
import DroneIndexContainer from './containers/DroneIndexContainer'
import DroneCreateContainer from './containers/DroneCreateContainer'

const Routes = () => (
	<Switch>
	<Route exact path="/" component={App}/>
	<Route path="/login"  component={LoginContainer}/>
	<Route path="/sign_up"  component={SignUpContainer}/>
        <Route path="/about" component={About}/>
        <Route path="/drone-map" component={VisibleDroneMap}/>
	<Route path="/drones" component={DroneIndexContainer} />
	<Route path="/drone_new" component={DroneCreateContainer} />
        <Route path="*" component={NotFound}/>
	</Switch>
);

function requireAuth(nextState, replace) {  
    console.log('Token: ' + sessionStorage.jwt)
    if (!sessionStorage.jwt) {
      replace({
	pathname: '/login',
	state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default Routes;
