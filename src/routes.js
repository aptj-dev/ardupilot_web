// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import DroneMap from './components/DroneMap';
import NotFound from './components/NotFound';


const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/drone-map" component={DroneMap}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
);

export default Routes;
