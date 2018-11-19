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
        <input type="text" placeholder="enter class name .." />
        <p>Teacher : </p>
        <select>
          {this.props.currentTeachers.map((teacher, i) => (
            <option key={i}>{teacher.teacher_name}</option>
          ))}
        </select>
        <p>Max number of students :</p>
        <input type="text" placeholder="numeric value .." />
        <input type="button" value="Add class" />
      </div>
    );
  }
}
