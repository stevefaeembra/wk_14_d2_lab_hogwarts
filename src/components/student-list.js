import React, { Component } from 'react';
import Houses from '../data/houses';

class StudentList extends Component {

  render() {
    let students = [];
    //debugger;
    let houseName = Houses.names[this.props.house];
    let studentsArray = this.props.students;
    let studentItems = [];
    let studentEntries = studentsArray.map((student) => {
      return (
        <div key={student.name}>I am {student.name}</div>
      )
    });
    console.dir(studentEntries);
    return(
      <div id="studentlist">
        <div className="studentlist-header">
          Students in {houseName}
        </div>
        <div className="studentlist--list">
          {studentEntries}
        </div>
      </div>
    )
  }

}

export default StudentList;
