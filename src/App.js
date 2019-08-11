import "./App.css";
import Nav from "./components/Nav/Nav";
import { withRouter } from "react-router-dom";
import routes from "./routes";
import React, { Component } from "react";
export class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        <div>{location.pathname === "/" ? <></> : <Nav />}</div>

        </header>

        {routes}
      </div>
    );
  }
}

export default withRouter(App);
