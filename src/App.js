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
