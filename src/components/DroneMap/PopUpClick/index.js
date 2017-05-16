// src/components/PopUpClick/index.js
import React, {PropTypes, Component } from 'react';
import { Popup, Marker } from 'react-leaflet';
import classnames from 'classnames';

import './style.css';

export default class PopUpClick extends Component {
  constructor(){
      super();
    }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render(props){
    return (
      <Marker position={this.props.position}>
        <Popup>
          <div className="commad-popup">
            <p>Move to here?</p>
            <button onClick={this.props.fixNewMarker} id="fix-button">固定する</button>
          </div>
        </Popup>
      </Marker>
    );
  }
}
