import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/SliceTime.css';

import timeFormat from './timeFormat';

class SliceTime extends Component {

  static proptTypes = {
    slice  : PropTypes.number,
    time : PropTypes.number
  };

  static defaultProps = {
    slice  : 0,
    time : 0
  };

  render() {

    const { slice, time } = this.props;

    return (
      <div className="SliceTime">
        <span className="SliceTime__Slice" >{ slice }</span>
        <span className="SliceTime__Time" >{ timeFormat( time ) }</span>
      </div>
    );
  }
}

export default SliceTime;