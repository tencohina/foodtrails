import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import Mapbox from './components/Mapbox';
class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar/>
        <Mapbox/>
      </div>
    );
  }
}

export default App;