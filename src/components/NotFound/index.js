// src/components/NotFound/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
