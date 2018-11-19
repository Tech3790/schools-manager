import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddTeacher from "./addTeacher.js";
import RemoveTeacher from "./removeTeacher.js";

export default class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddTeacher />
        <RemoveTeacher />
      </div>
    );
  }
}
