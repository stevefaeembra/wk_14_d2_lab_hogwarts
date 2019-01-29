import React, { Component } from 'react';
import Houses from '../data/houses.js';
import Header from '../components/header.js';
import HouseSelector from "../components/house-selector.js";

class HogwartsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHouse: ""
    };
  };

  render() {
    return (
      <div>
        <Header title="Hogwarts Lab"/>
        <HouseSelector houses={Houses} />
      </div>
    );
  };

};

export default HogwartsContainer;
