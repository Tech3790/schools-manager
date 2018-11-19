import React, { Component } from "react";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Student Name : </p>
        <input type="text" placeholder="Enter student name .." />
        <p>Address : </p>
        <input type="text" placeholder="Enter Address .." />
        <input type="button" value="Add student" />
      </div>
    );
  }
}
