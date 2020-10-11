import React, {Component} from 'react';
import TimeZoneTable from './Clock/TimeZoneTable'
import timeZoneData from './Clock/Schema'
import './App.css';


class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimeZoneTable timeZoneData={timeZoneData} />
          <p className="App-text-center">
            <smal>Fuso horário em suas respectivas localidades</smal>
          </p>
         <footer className="App-footer">
           <div className="App-box-footer">
                <span id="copyright">© 2020 Carlos Aguiar</span>
           </div>
          </footer>
        </header>
      </div>
    );
  }
}
export default App;
