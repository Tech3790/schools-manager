import React, { Component } from "react";

export default class RemoveClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Remove a class here :
        <div>
          <p>List of current classes :</p>
          <ul>
            {this.props.currentClasses.map((element, i) => (
              <li key={i}>
                {element.class_name}
                <input type="button" value="Edit" />
                <input
                  type="button"
                  value="X"
                  onClick={() => this.props.deleteClass(element.class_name, i)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
