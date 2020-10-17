import React, { Component } from 'react';
import '../../../src/App.css'

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

class Chronometer extends Component {

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

        <h1>Simple Chronometer App</h1>

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

export default Chronometer;