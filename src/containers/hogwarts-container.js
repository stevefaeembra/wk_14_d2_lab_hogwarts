import React, { Component } from 'react';
import Houses from '../data/houses.js';
import Header from '../components/header.js';

class HogwartsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHouse: ""
    };
  };

  render() {
    const foo = "Hello there";
    return (
      <div>
        <Header title={foo}/>
      </div>
    );
  };

};

export default HogwartsContainer;
