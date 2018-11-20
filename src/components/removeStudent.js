import React, { Component } from "react";

export default class RemoveStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Edit or remove student info below:</h3>
        <div>
          <ul className="ulDiv">
            {this.props.students.map((student, i) => (
              <div className="ulDiv" key={i}>
                <li key={i} className="teachersLi">
                  {student.student_name}
                </li>
                <input type="button" value="Edit" className="actionButton" />
                <input
                  className="actionButton"
                  type="button"
                  value="Delete Student"
                  onClick={() =>
                    this.props.deleteStudent(student.student_name, i)
                  }
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
