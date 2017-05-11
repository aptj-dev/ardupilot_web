// src/components/PopUpClick/index.js
import React, {PropTypes, Component } from 'react';
import { Popup, Marker } from 'react-leaflet';
import classnames from 'classnames';

import './style.css';

export default class PopUpClick extends Component {
  constructor(){
      super();
      this.fixPoint = this.fixPoint.bind(this);
    }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  fixPoint(){
  }

  render(props){
    return (
      <Marker position={this.props.position} draggable={true}>
        <Popup>
          <div className="commad-popup">
            <p>Move to here?</p>
            <button onClick={this.fixPoint} id="fix-button">固定する</button>
          </div>
        </Popup>
      </Marker>
    );
  }
}
