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
        <h5>I am {student.name}</h5>
      )
    });
    console.dir(studentEntries);
    //debugger;
    // studentsArray.forEach((student) => {
    //   console.log(`Student: ${JSON.stringify(student)}`);
    //   let thisStudent = <div>
    //     Name: {student.name}
    //   </div>
    //   studentItems.push(thisStudent);
    // })
    return(
      <div id="studentlist">
        <div className="studentlist-header">
          <h3>
            Students in {houseName}
          </h3>
          <h4>
            {studentEntries}
          </h4>
        </div>
        {students}
      </div>
    )
  }

}

export default StudentList;
