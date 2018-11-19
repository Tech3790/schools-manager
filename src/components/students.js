import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddStudent from "./addStudent.js";
import RemoveStudent from "./removeStudent.js";

const axios = require("axios");

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStudents: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/students")
      .then(students => {
        this.setState({
          currentStudents: [...this.state.currentStudents, ...students.data]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddStudent />
        <RemoveStudent currentStudents={this.state.currentStudents} />
      </div>
    );
  }
}
