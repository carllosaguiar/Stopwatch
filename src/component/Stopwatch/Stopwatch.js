import React, { Component } from 'react';
import './css/Stopwatch.css';

import Timer         from './Timer';
import Controls      from './Controls';
import SliceTimeList   from './SliceTimeList';

import Config        from './constants/Config';

function getDefaultState() {
  return {
    isRunning : false,
    time      : 0,
    timeList  : []    
  }
}

class Stopwatch extends Component {

  constructor( props ) {
    super(props);
    this.state    = getDefaultState();
    this.timerRef = null;
  }

  updateTimer(extraTime) {
    const { time } = this.state;
    this.setState({ time : time + extraTime });
  }

  start() {
    this.setState({
      isRunning : true 
    }, () => {
      this.timerRef = setInterval(
        () => { this.updateTimer( Config.updateInterval ) }, Config.updateInterval
      )
    });
  }

  stop() {
    this.setState({
      isRunning : false 
    }, () => {
      clearInterval(this.timerRef);
    });
  }

  reset() {
    this.setState(getDefaultState());
  }

  addSliceTime() {
    const { time, timeList } = this.state;

    this.setState({
      timeList : [ ...timeList, time ] 
    });
  }

  render() {

    const { isRunning, time, timeList } = this.state;

    return (
      <div className="Stopwatch">

        <Timer time={ time } />

        <Controls
          isRunning={ isRunning } 
          start={ () => this.start() }
          stop={ () => this.stop() }
          reset={ () => this.reset() }
          addSliceTime={ () => this.addSliceTime() }
        />

        <SliceTimeList timeList={ timeList } />
      </div>
    );
  }
}

export default Stopwatch