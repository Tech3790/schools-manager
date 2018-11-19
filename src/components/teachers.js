import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddTeacher from "./addTeacher.js";
import RemoveTeacher from "./removeTeacher.js";
import GetTeachers from "./getTeachers.js";

export default class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <GetTeachers />
        <AddTeacher />
        <RemoveTeacher />
      </div>
    );
  }
}
