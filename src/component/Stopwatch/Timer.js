import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/Timer.css';

import timeFormat from './timeFormat';

class Timer extends Component {

  static proptTypes = {
    time : PropTypes.number
  };

  static defaultProps = {
    time : 0
  };

  render() {
    const { time } = this.props;

    return (
      <div className="Timer">
        { timeFormat( time ) }
      </div>
    );
  }
}

export default Timer;
