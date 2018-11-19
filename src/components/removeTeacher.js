import React, { Component } from "react";

export default class RemoveTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Remove a Teacher here :
        <div>
          <p>List of current Teachers :</p>
          <ul>
            {this.props.currentTeachers.map((teacher, i) => (
              <li key={i}>
                {teacher.teacher_name}
                <input type="button" value="Edit" />
                <input type="button" value="X" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
