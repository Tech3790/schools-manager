import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddTeacher from "./addTeacher.js";
import RemoveTeacher from "./removeTeacher.js";

const axios = require("axios");

export default class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTeachers: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/teachers")
      .then(teachers => {
        this.setState({
          currentTeachers: [...this.state.currentTeachers, ...teachers.data]
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
        <AddTeacher />
        <RemoveTeacher currentTeachers={this.state.currentTeachers} />
      </div>
    );
  }
}
