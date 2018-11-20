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
      currentTeachers: [],
      class_name: "",
      class_size: 20,
      teacher_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addClass = this.addClass.bind(this);
    this.deleteClass = this.deleteClass.bind(this);
    this.onTeacherSelect = this.onTeacherSelect.bind(this);
    this.classNameChanged = this.classNameChanged.bind(this);
    this.classSizeChanged = this.classSizeChanged.bind(this);
  }
  classNameChanged(e) {
    this.setState({ class_name: e.target.value });
  }
  classSizeChanged(e) {
    this.setState({ class_size: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }
  renderClasses() {
    axios
      .get("http://localhost:8080/classes")
      .then(classes => {
        this.setState({
          currentClasses: classes.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:8080/teachers")
      .then(teachers => {
        this.setState({
          currentTeachers: teachers.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.renderClasses();
  }
  onTeacherSelect(e) {
    axios
      .post("http://localhost:8080/getTeacherIdByName", {
        teacher_name: e.target.value
      })
      .then(data => {
        this.setState({ teacher_id: data.data[0].id });
      });
  }
  addClass() {
    axios
      .post("http://localhost:8080/classes", {
        class_name: this.state.class_name,
        class_size: this.state.class_size,
        teacher_id: this.state.teacher_id
      })
      .then(() => this.renderClasses());
  }
  deleteClass(class_name, i) {
    axios
      .post("http://localhost:8080/getClassIdByName", { class_name })
      .then(data =>
        axios
          .delete("http://localhost:8080/classes", {
            data: { id: data.data[0].id }
          })
          .then(
            this.setState({
              currentClasses: this.state.currentClasses.filter(
                (_, index) => index !== i
              )
            })
          )
      );
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddClass
          handleSubmit={this.handleSubmit}
          addClass={this.addClass}
          onTeacherSelect={this.onTeacherSelect}
          classSizeChanged={this.classSizeChanged}
          classNameChanged={this.classNameChanged}
          currentTeachers={this.state.currentTeachers}
        />
        <RemoveClass
          currentClasses={this.state.currentClasses}
          deleteClass={this.deleteClass}
        />
      </div>
    );
  }
}
