import React, { Component } from "react";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Student Name : </p>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Enter student name .."
            onChange={this.props.onNameChange}
          />
          <p>Address : </p>
          <input
            type="text"
            placeholder="Enter Address .."
            onChange={this.props.onAddressChange}
          />
          <input
            type="submit"
            value="Add student"
            onClick={this.props.addStudent}
          />
        </form>
      </div>
    );
  }
}
