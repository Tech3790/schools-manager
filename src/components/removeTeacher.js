import React, { Component } from "react";

export default class RemoveTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Edit or remove teacher info below :</h3>
        <div>
          <ul className="teachersUl">
            {this.props.teachers.map((teacher, i) => (
              <div key={i} className="ulDiv">
                <li key={i} className="teachersLi">
                  {teacher.teacher_name}
                </li>
                <input
                  type="button"
                  value="Edit Teacher Info"
                  className="actionButton"
                />
                <input
                  className="actionButton"
                  type="button"
                  value="Delete Teacher"
                  onClick={() =>
                    this.props.deleteTeacher(teacher.teacher_name, i)
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
