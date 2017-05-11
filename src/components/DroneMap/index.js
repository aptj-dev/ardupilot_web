// src/components/DroneMap/index.js
import React, {PropTypes, Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import classnames from 'classnames';
import PopUpClick from './PopUpClick';
import PathMarker from './PathDrawer';
import './style.css';

const centerMap = [36.321444, 138.59667];

export default class DroneMap extends Component {
  constructor(){
    super();
    this.state = {
      showPopUp: false,
      posPopUp: centerMap
    };
    this.onClickMap = this.onClickMap.bind(this);
  }

  onClickMap(event){
    let pos = [event.latlng.lat, event.latlng.lng];
    this.setState((prevState, props) => ({
      posPopUp: pos
    }));
  }

  render(){
    return (
        <Map center={centerMap} zoom={15} onClick={this.onClickMap}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <PopUpClick position={this.state.posPopUp} />
        </Map>
    );
  }
}
