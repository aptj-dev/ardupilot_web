// src/components/DroneMap/index.js
import React, {PropTypes, Component } from 'react';
import { Map, TileLayer, Marker, Popup, CircleMarker, Tooltip } from 'react-leaflet';
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
      cursorMarker: centerMap,
      markerId: 1,
      markerList: []
    };
    this.onClickMap = this.onClickMap.bind(this);
    this.fixPoint = this.fixPoint.bind(this);
  }

  onClickMap(event){
    let position = [event.latlng.lat, event.latlng.lng];
    this.setState((prevState, props) => ({
      cursorMarker: position
    }));
  }

  fixPoint(){
    this.setState((prevState, props) => ({
      markerList: [ ...prevState.markerList, { pos: prevState.cursorMarker, id: prevState.markerId++ }],
      markerId: prevState.markerId++
    })
  );
}

  render(){
    return (
        <Map center={centerMap} zoom={15} onClick={this.onClickMap}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.state.cursorMarker}>
            <Popup>
              <div className="commad-popup">
                <p>Move to here?</p>
                <button onClick={this.fixPoint} id="fix-button">固定する</button>
              </div>
            </Popup>
          </Marker>
          { this.state.markerList.map(coord =>
            <div key={coord.id}>
              <CircleMarker center={coord.pos} radius={5} title='toto' alt='tata'>
                <Popup>
                  <span>{coord.id}</span>
                </Popup>
              </CircleMarker>
            </div>
            )
          }

          }

        </Map>
    );
  }
}
