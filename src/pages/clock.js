import React from 'react';
import timeZoneData from '../../src/component/Clock/Schema'
import TimeZoneTable from '../../src/component/Clock/TimeZoneTable'
import Footer from '../../src/pages/partials/Footer'
import '../../src/App.css'

const Clock = () => (
    <header className="App-header">
        <h2>Clock</h2>
        <TimeZoneTable timeZoneData={timeZoneData} />
        <p className="App-text-center">
          <smal>Local Time Zone and more cities</smal>  
        </p>
        <Footer />
    </header>
);


export default Clock;