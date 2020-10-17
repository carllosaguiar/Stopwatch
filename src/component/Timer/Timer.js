import React, { Component } from 'react'
import '../../../src/App.css'
import '../../../src/component/Timer/css/Timer.css'

class Timer extends Component {
    constructor() {
    super();
    this.state = { 
    time: {}, 
    breakRemainingSeconds: 300,
    };
    
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

    createTime(secs){
      let hours = Math.floor(secs / (60 * 60));
      let divisorMinutes = secs % (60 * 60);
      let minutes = Math.floor(divisorMinutes / 60);
      let divisorSeconds = divisorMinutes % 60;
      let seconds = Math.ceil(divisorSeconds);

    let timeObject = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return timeObject;
  }

  componentDidMount() {
    let timeLeft = this.createTime(this.state.breakRemainingSeconds);
    this.setState({ time: timeLeft });
  }

// Check the current state and potentially (if != 0) start our main function 
  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.breakRemainingSeconds - 1;
    this.setState({
      time: this.createTime(seconds),
      breakRemainingSeconds: seconds
    });
    
    // Check if we're at zero, and if so, clear the Interval
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <div>
        <button className="timerBtn" onClick={this.startTimer}>Go</button>
        m: {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  } 
}


export default Timer;