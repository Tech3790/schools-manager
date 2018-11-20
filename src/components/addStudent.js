import React, { Component } from "react";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>To add a student enter student's info below:</h3>
        <p>Student Name : </p>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input
            className="inputTextBox"
            type="text"
            placeholder="Enter student name .."
            onChange={this.props.onNameChange}
          />
          <p>Address : </p>
          <input
            className="inputTextBox"
            type="text"
            placeholder="Enter Address .."
            onChange={this.props.onAddressChange}
          />
          <input
            className="actionButton"
            type="submit"
            value="Add student"
            onClick={this.props.addStudent}
          />
        </form>
      </div>
    );
  }
}
