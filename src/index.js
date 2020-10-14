import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clock from '../src/pages/clock'
import Stopwatch from '../src/pages/stopwatch'
import Timer from '../src/pages/timer'


ReactDOM.render(
  (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Clock}/>
                <Route path="/stopwatch" component={Stopwatch}/>
                <Route path="/timer" component={Timer}/>
            </Switch>
        </App>
    </Router>
),
  document.getElementById('root')
);

