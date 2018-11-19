import React, { Component } from "react";

export default class AddTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Teacher Name : </p>
        <input type="text" placeholder="Enter teacher name .." />
        <p>Class Name : </p>
        <input type="text" placeholder="Enter class name .." />
        <p>Address : </p>
        <input type="text" placeholder="Enter Address .." />
        <input type="button" value="Add teacher" />
      </div>
    );
  }
}
