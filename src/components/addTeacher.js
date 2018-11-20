import React, { Component } from "react";

export default class AddTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>To add a teacher enter teacher's info below:</h3>
        <p>Teacher Name : </p>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input
            className="inputTextBox"
            type="text"
            placeholder="Enter teacher name .."
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
            value="Add teacher"
            onClick={this.props.addTeacher}
          />
        </form>
      </div>
    );
  }
}
