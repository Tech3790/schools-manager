import React, { Component } from "react";

export default class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>To add a class enter class's info below:</h3>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input
            className="inputTextBox"
            type="text"
            placeholder="enter class name .."
            onChange={this.props.classNameChanged}
          />
          <p>Teacher : </p>
          <select
            className="teacherSelect"
            onChange={this.props.onTeacherSelect}
          >
            {this.props.currentTeachers.map((teacher, i) => (
              <option value={teacher.teacher_name} key={i}>
                {teacher.teacher_name}
              </option>
            ))}
          </select>
          <p>Max number of students :</p>
          <input
            className="inputTextBox"
            type="text"
            placeholder="numeric value .."
            onChange={this.props.classSizeChanged}
          />
          <input
            className="actionButton"
            type="submit"
            value="Add class"
            onClick={this.props.addClass}
          />
        </form>
      </div>
    );
  }
}
