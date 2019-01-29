import React, { Component } from 'react';
import './App.css';

import HogwartsContainer from './components/house-selector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HogwartsContainer />
      </div>
    );
  }
}

export default App;
