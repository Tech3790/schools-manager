import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "./components/landingPage.js";
import Home from "./components/home.js";
import NotFound from "./components/notFound.js";
import Classes from "./components/classes.js";
import Teachers from "./components/teachers.js";
import Students from "./components/students.js";

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/classes" component={Classes} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/students" component={Students} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
