import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomeNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul className="navbarUl">
          <li className="navbarLi">
            <Link className="navbarLiAB" to="/home">
              School Manager
            </Link>
          </li>
          <li className="navbarLi">
            <Link className="navbarLiA" to="/home">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
