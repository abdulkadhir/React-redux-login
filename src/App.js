import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import Login from './components/Login';
import Employee from './components/Employee';

class App extends Component {
  render(location) {
    return (
      <div className="App">
        <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
          <div className="route">
            <Route exact path='/' component={ Login} location={location}/>
             <Route exact path='/employee' component={ Employee} location={location}/>  
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
