// src/components/DroneMap/index.js
import React, {PropTypes, Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import classnames from 'classnames';
import PopUpClick from './PopUpClick';
import PathDrawer from './PathDrawer';
import './style.css';

const centerMap = [36.321444, 138.59667];

export default class DroneMap extends Component {
  constructor(){
    super();
    this.state = {
      cursorPosition: centerMap,
      markerId: 1,
      markerList: []
    };
    this.onClickMap = this.onClickMap.bind(this);
    this.fixPoint = this.fixPoint.bind(this);
    this.removePoint = this.removePoint.bind(this);
    this.removePointWithId = this.removePointWithId.bind(this);
  }

  onClickMap(event){
    let position = [event.latlng.lat, event.latlng.lng];
    this.setState((prevState, props) => ({
      cursorPosition: position
    }));
  }

  fixPoint(){
    this.setState(function(prevState, props) {
      return {
        markerList: [ ...prevState.markerList, { pos: prevState.cursorPosition, id: prevState.markerId++ }],
        markerId: prevState.markerId++
      }});
  }

  removePoint(id){
    this.setState(function(prevState) {
      let removedList = prevState.markerList
      this.removePointWithId(removedList, id)
      return {
        markerList: removedList,
        markerId: removedList.length
      }
     });
  }

  removePointWithId(removedList, id){
    removedList.map(function(marker) {
       if(marker.id === id)
        {
          let index = removedList.indexOf(marker)
          removedList.splice(index, 1)
          let i = (removedList.length - 1)
          while(i >= index) {
            removedList[i].id--
            i--
          }
        }
        return removedList
      });
  }

  render(){
    return (
        <Map center={centerMap} zoom={15} onClick={this.onClickMap}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <PopUpClick position={this.state.cursorPosition} fixNewMarker={this.fixPoint}/>
          { this.state.markerList.map(coord =>
            <div key={coord.id}>
              <PathDrawer step={coord} removeStep={this.removePoint}/>
            </div>
            )
          }
        }
        </Map>
    );
  }
}
