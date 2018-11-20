import React, { Component } from "react";
import Navbar from "./navbar.js";
import AddStudent from "./addStudent.js";
import RemoveStudent from "./removeStudent.js";

const axios = require("axios");

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      student_name: "",
      student_address: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
  }
  componentDidMount() {
    this.renderStudents();
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }
  renderStudents() {
    axios
      .get("http://localhost:8080/students")
      .then(students => {
        this.setState({
          students: students.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onNameChange(e) {
    this.setState({ student_name: e.target.value });
  }
  onAddressChange(e) {
    this.setState({ student_address: e.target.value });
  }
  addStudent() {
    axios
      .post("http://localhost:8080/students", {
        student_name: this.state.student_name,
        student_address: this.state.student_address
      })
      .then(() => this.renderStudents());
  }
  deleteStudent(student_name, i) {
    axios
      .post("http://localhost:8080/getStudentIdByName", { student_name })
      .then(data =>
        axios
          .delete("http://localhost:8080/students", {
            data: { id: data.data[0].id }
          })
          .then(
            this.setState({
              students: this.state.students.filter((_, index) => index !== i)
            })
          )
      );
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddStudent
          handleSubmit={this.handleSubmit}
          onNameChange={this.onNameChange}
          onAddressChange={this.onAddressChange}
          addStudent={this.addStudent}
        />
        <RemoveStudent
          deleteStudent={this.deleteStudent}
          students={this.state.students}
        />
      </div>
    );
  }
}
