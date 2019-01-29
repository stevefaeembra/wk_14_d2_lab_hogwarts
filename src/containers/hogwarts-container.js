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
    this.handleHouseSelected = this.handleHouseSelected.bind(this);
  };

  render() {
    return (
      <div>
        <Header title="Hogwarts Lab"/>
        <HouseSelector
          handleHouseSelected={this.handleHouseSelected}
          houses={Houses}
        />
      </div>
    );
  };

  handleHouseSelected(event) {
    console.log("Inside handler");
    debugger;
  };

};

export default HogwartsContainer;
