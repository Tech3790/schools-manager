import React, { Component } from "react";
import Navbar from "./navbar.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <h3>
          {" "}
          Welcome to Schools Manager, to get started choose an action form up
          above .
        </h3>
      </div>
    );
  }
}
