import React, { Component } from "react";

export default class RemoveStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Remove a student here :
        <div>
          <p>List of current students :</p>
          <ul>
            {this.props.students.map((student, i) => (
              <li key={i}>
                {student.student_name}
                <input type="button" value="Edit" />
                <input
                  type="button"
                  value="X"
                  onClick={() =>
                    this.props.deleteStudent(student.student_name, i)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
