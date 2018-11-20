import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomeNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          School Manager
        </a>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
