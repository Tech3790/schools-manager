import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/home">
          School Manager
        </a>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link className="nav-link" to="/classes">
                Classes
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/teachers">
                Teachers
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
