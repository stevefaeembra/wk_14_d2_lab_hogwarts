import React, { Component } from 'react';

class Student extends Component {
  render() {
    let s = this.props.student;
    return (
      <div className="student-box">
        <div className="student-name">
          {s.name}
        </div>
        <div className="student-image">
          <img src={s.image} />
        </div>
        <hr />
      </div>
    )
  }
}

export default Student;
