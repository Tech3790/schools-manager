import React, { Component } from "react";

export default class RemoveClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Edit or remove a class info below: </h3>
        <div>
          <ul className="teahcersUl">
            {this.props.currentClasses.map((element, i) => (
              <div className="ulDiv">
                <li key={i} className="teachersLi">
                  {element.class_name}
                </li>
                <input
                  type="button"
                  value="Edit Class Info"
                  className="actionButton"
                />
                <input
                  className="actionButton"
                  type="button"
                  value="Delete Class"
                  onClick={() => this.props.deleteClass(element.class_name, i)}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
