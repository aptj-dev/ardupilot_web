// src/components/DroneMap/PathDrawer/index.js
import React, {PropTypes, Component } from 'react';
import { CircleMarker, Popup, Tooltip } from 'react-leaflet';

export default class PathDrawer extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <CircleMarker center={this.props.step.pos} radius={5}>
        <div className="step-detail">
          <Popup>
            <div className="step-popup">
              <p> Remove this step?</p>
              <button onClick={e => this.props.removeStep(this.props.step.id)}>削除</button>
            </div>
          </Popup>
          <Tooltip permanent={true} direction="bottom">
            <p>{this.props.step.id}</p>
          </Tooltip>
        </div>
      </CircleMarker>
    );
  }
}
