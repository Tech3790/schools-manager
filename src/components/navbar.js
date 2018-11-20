import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <div>
          <ul className="navbarUl">
            <li className="navbarLi">
              <Link className="navbarLiAB" to="/home">
                School Manager
              </Link>
            </li>
            <li className="navbarLi">
              <Link className="navbarLiA" to="/classes">
                Classes
              </Link>
            </li>
            <li className="navbarLi">
              <Link className="navbarLiA" to="/teachers">
                Teachers
              </Link>
            </li>
            <li className="navbarLi">
              <Link className="navbarLiA" to="/students">
                Students
              </Link>
            </li>
            <li className="navbarLi">
              <Link className="navbarLiA" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
