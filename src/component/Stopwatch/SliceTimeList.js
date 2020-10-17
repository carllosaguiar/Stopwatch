import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/SliceTimeList.css';

import SliceTime from './SliceTime';

class SliceTimeList extends Component {

  static proptTypes = {
    timeList : PropTypes.array
  };

  static defaultProps = {
    timeList : []
  };

  render() {

    const { timeList } = this.props;

    return (
      <div className="SliceTimeList">
        <div className="SliceTimeList__listwrap">

          <div className="SliceTimeList__headers">
            <span> Slice </span> <span> Time </span>
          </div>

          <ul className="SliceTimeList__list" > 
            {
              timeList.map( (time, index) => {
                return (
                  <li key={ index }>
                    <SliceTime slice={ index + 1 } time={ time }  />
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>
    );
  }
}

export default SliceTimeList;
