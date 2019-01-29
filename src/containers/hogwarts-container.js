import React, { Component } from 'react';
import Houses from '../data/houses.js';
import Header from '../components/header.js';
import HouseSelector from "../components/house-selector.js";
import StudentList from "../components/student-list";

class HogwartsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHouse: 0,
      studentData : []
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
          students={this.state.studentData}
        />
      </div>
    );
  };

  fetchStudentsForSelectedHouse() {
    const houseName = Houses.names[this.state.selectedHouse];
    const url = `http://hp-api.herokuapp.com/api/characters/house/${houseName}`;
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonData = request.responseText;
        this.setState({studentData: jsonData});
        console.dir(jsonData);
      }
    });
    request.send(null);
  }

  handleHouseSelected(event) {
    console.log("Inside handler");
    const selectedHouseNumber = parseInt(event.target.value, 10);
    this.setState({"selectedHouse": selectedHouseNumber});
    this.fetchStudentsForSelectedHouse();
  };

  componentDidMount() {
    this.fetchStudentsForSelectedHouse();
  }

};

export default HogwartsContainer;
