import React, { Component } from 'react';

class HouseSelector extends Component {
  render() {
    const options = this.props.houses.names.map((name, index) => {
    return (
      <option key={index} value={index}>{name}</option>
      )
    });
    return (
      <div className="houses">
        <select>
          {options}
        </select>
      </div>
    )
  }
}

export default HouseSelector;
