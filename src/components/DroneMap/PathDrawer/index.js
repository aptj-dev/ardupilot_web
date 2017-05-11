// src/components/DroneMap/PathDrawer/index.js
import React, {PropTypes, Component } from 'react';
import { Marker } from 'react-leaflet';

export default class PathDrawer extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <Marker />
    );
  }
}
