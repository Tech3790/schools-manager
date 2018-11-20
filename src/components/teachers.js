import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddTeacher from "./addTeacher.js";
import RemoveTeacher from "./removeTeacher.js";

const axios = require("axios");

export default class Teachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      teacher_name: "",
      teacher_address: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTeacher = this.addTeacher.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.deleteTeacher = this.deleteTeacher.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
  }
  componentDidMount() {
    this.renderTeachers();
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }
  renderTeachers() {
    axios
      .get("http://localhost:8080/teachers")
      .then(returnedTeachers => {
        this.setState({
          teachers: returnedTeachers.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onNameChange(e) {
    this.setState({ teacher_name: e.target.value });
  }
  onAddressChange(e) {
    this.setState({ teacher_address: e.target.value });
  }
  addTeacher() {
    axios
      .post("http://localhost:8080/teachers", {
        teacher_name: this.state.teacher_name,
        teacher_address: this.state.teacher_address
      })
      .then(() => this.renderTeachers());
  }
  deleteTeacher(teacher_name, i) {
    axios
      .post("http://localhost:8080/getTeacherIdByName", { teacher_name })
      .then(data =>
        axios
          .delete("http://localhost:8080/teachers", {
            data: { id: data.data[0].id }
          })
          .then(
            this.setState({
              teachers: this.state.teachers.filter((_, index) => index !== i)
            })
          )
      );
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddTeacher
          handleSubmit={this.handleSubmit}
          onNameChange={this.onNameChange}
          onAddressChange={this.onAddressChange}
          addTeacher={this.addTeacher}
        />
        <RemoveTeacher
          teachers={this.state.teachers}
          deleteTeacher={this.deleteTeacher}
        />
      </div>
    );
  }
}
