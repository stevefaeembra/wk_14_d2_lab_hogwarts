import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js';
import Houses from './data/houses.js'
import HouseSelector from './components/house-selector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HouseSelector houses={Houses} />
      </div>
    );
  }
}

export default App;
