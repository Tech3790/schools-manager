import React, { Component } from "react";
import HomeNavbar from "./homeNavbar.js";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HomeNavbar />
        Hello This is the landing page
      </div>
    );
  }
}
