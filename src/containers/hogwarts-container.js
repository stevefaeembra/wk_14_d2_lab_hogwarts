import React from 'react';
import Houses from './data/houses.js'
import HouseSelector from './components/house-selector.js';
import Header from './components/header.js';

class HogwartsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHouse: ""
    };
  };

  render() {
    let foo = {names:["Slytherin","Hufflepuff"]};
    //debugger;
    return (
      <div>
        <Header />
        <HouseSelector houses={foo}/>
      </div>
    )
  };

};
