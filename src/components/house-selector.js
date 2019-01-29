import React from 'react';

const HouseSelector = (props) => {
  let houseItems = props.houses.names.map((name,index) => {
    return (
      <option key={index} value={index}>{name}</option>
    )
  })
  return (
    <div id="selecthouse">
      <h2>Selecto Housenameum</h2>
      <select>
        {houseItems}
      </select>
    </div>
  )
}

export default HouseSelector;
