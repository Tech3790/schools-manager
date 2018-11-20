import React, { Component } from "react";

export default class AddTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Teacher Name : </p>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Enter teacher name .."
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
            value="Add teacher"
            onClick={this.props.addTeacher}
          />
        </form>
      </div>
    );
  }
}
