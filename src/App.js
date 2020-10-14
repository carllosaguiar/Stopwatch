import React, {Component} from 'react';
//import TimeZoneTable from './component/Clock/TimeZoneTable'
//import timeZoneData from './component/Clock/Schema'
import 'primereact/resources/themes/nova-accent/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';

class App extends Component{

  render() {
 
    const menuItems = [
      {
         label:'Clock',
         icon:'pi pi-fw pi-clock',
         command:() => this.props.history.push('/')
      },
      {
         label:'Stopwatch',
         icon:'pi pi-fw pi-user',
         command:() => this.props.history.push('/Stopwatch')
      },
      {
         label:'Timer',
         icon:'pi pi-fw pi-comment',
         command:() => this.props.history.push('/Timer')
      }
   ];
  
    return (
      <div className="App">
         <Menubar model={menuItems}/>
         <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);