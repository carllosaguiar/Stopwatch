import React from 'react';
import '../../src/App.css'
import Stopwatch from '../../src/component/Stopwatch/Stopwatch';
import Footer from '../../src/pages/partials/Footer'

const ReturnStopwatch = () => (
    <header className="App-header">
        <h4>Stopwatch</h4>
        <Stopwatch />
        <p>This is stopwatch with some functions</p>
        <Footer />
    </header>
);

export default ReturnStopwatch;