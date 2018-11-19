import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddStudent from "./addStudent.js";
import RemoveStudent from "./removeStudent.js";

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddStudent />
        <RemoveStudent />
      </div>
    );
  }
}
