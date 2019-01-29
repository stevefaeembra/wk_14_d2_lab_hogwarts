import React, { Component } from 'react';
import Houses from '../data/houses';

class StudentList extends Component {

  render() {
    let students = [];
    let houseName = Houses.names[this.props.house];

    return(
      <div id="studentlist">
        <div className="studentlist-header">
          <h3>
            Students in {houseName}
          </h3>
        </div>
        {students}
      </div>
    )
  }

}

export default StudentList;
