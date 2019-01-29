import React, { Component } from 'react';
import Houses from '../data/houses.js';
import Header from '../components/header.js';
import HouseSelector from "../components/house-selector.js";
import StudentList from "../components/student-list";

class HogwartsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHouse: 0
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
        <StudentList
          house={this.state.selectedHouse}
        />
      </div>
    );
  };

  handleHouseSelected(event) {
    console.log("Inside handler");
    const selectedHouseNumber = parseInt(event.target.value, 10);
    this.setState({"selectedHouse": selectedHouseNumber});
  };

};

export default HogwartsContainer;
