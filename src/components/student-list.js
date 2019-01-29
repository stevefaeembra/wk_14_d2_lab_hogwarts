import React, { Component } from 'react';
import Houses from '../data/houses';

class StudentList extends Component {

  render() {
    let students = [];
    //debugger;
    let houseName = Houses.names[this.props.house];
    let studentsArray = this.props.students;
    let studentItems = [];
    studentsArray.forEach((student) => {
      console.log(`Student: ${JSON.stringify(student)}`);
    })
    return(
      <div id="studentlist">
        <div className="studentlist-header">
          <h3>
            Students in {houseName}
          </h3>
          <h4>
            {studentsArray}
          </h4>
        </div>
        {students}
      </div>
    )
  }

}

export default StudentList;
