import React, { Component } from "react";
import Navbar from './navbar.js';
import AddClass from './addClass.js';
import RemoveClass from './removeClass.js';
import GetClasses from "./getClasses.js";
export default class Classes extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
  render(){
      return(
          <div>
              <Navbar />
              <GetClasses />
              <AddClass />
              <RemoveClass />
          </div>
      )
  }
}
