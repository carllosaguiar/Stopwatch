import React, {Component} from 'react';
import TimeZoneTable from './Clock/TimeZoneTable'
import './App.css';


const timeZoneData = [
  {
    timezone: 'Salvador',
    localhour: '',
  },
  {
    timezone: 'Fortleza',
    localhour: '',
  },
  {
    timezone: 'Manaus',
    localhour: '',
  }
]

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimeZoneTable timeZoneData={timeZoneData}/>
          <p>
            Time Zone
          </p>
        </header>
      </div>
    );
  }
}
export default App;
