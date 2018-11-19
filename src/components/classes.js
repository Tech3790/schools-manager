import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddClass from "./addClass.js";
import RemoveClass from "./removeClass.js";

const axios = require("axios");

export default class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClasses: [],
      currentTeachers: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/classes")
      .then(classes => {
        this.setState({
          currentClasses: [...this.state.currentClasses, ...classes.data]
        });
      })
      .catch(error => {
        console.log(error);
      });
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

        <AddClass currentTeachers={this.state.currentTeachers} />
        <RemoveClass currentClasses={this.state.currentClasses} />
      </div>
    );
  }
}
