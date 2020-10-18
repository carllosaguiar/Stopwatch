import React from 'react';
import '../../src/App.css'
import Timer from '../../src/component/Timer/Timer';
import Countdown from '../../src/component/Timer/Countdown';
import Footer from '../../src/pages/partials/Footer'

const ReturnTimer = () => (
    <header className="App-header">
        <h2>Timer</h2>
        <Timer />
        <Countdown />
        <div className="Timer-paragraph">
            <p>A Clock Timer with functions of input, reset, start and stop</p>
        </div>
        <Footer />
    </header>
);

export default ReturnTimer;