import React, { Component } from "react";

export default class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Add classes here :</p>
        <p>Class name : </p>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="enter class name .."
            onChange={this.props.classNameChanged}
          />
          <p>Teacher : </p>
          <select onChange={this.props.onTeacherSelect}>
            {this.props.currentTeachers.map((teacher, i) => (
              <option value={teacher.teacher_name} key={i}>
                {teacher.teacher_name}
              </option>
            ))}
          </select>
          <p>Max number of students :</p>
          <input
            type="text"
            placeholder="numeric value .."
            onChange={this.props.classSizeChanged}
          />
          <input
            type="submit"
            value="Add class"
            onClick={this.props.addClass}
          />
        </form>
      </div>
    );
  }
}
