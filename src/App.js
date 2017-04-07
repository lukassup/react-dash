import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dashboard name="Dev" interval={5}></Dashboard>
      <Dashboard name="UAT" interval={5}></Dashboard>
      <Dashboard name="Prod" interval={5}></Dashboard>
      <Dashboard name="DR" interval={5}></Dashboard>
      </div>
    );
  }
}

export default App;
