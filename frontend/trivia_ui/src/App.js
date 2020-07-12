import React, { Component } from "react";
import Home from "./Pages/Home/Home";
import Summary from "./Pages/Summary/Summary";
import Trivia from "./Pages/Trivia/Trivia";
import "./App.css";

//enum to avoid hard coded strings
const show = {
  HOME: "home",
  TRIVIA: "trivia",
  SUMMARY: "summary"
};

class App extends Component {
  state = {
    show: show.TRIVIA
  };

  //Change display state
  displayHandler(choice) {
    this.setState({
      show: choice
    });
  }

  render() {
    let display = null;
    // render display based on show state
    switch (this.state.show) {
      case show.HOME:
        display = <Home />;
        break;
      case show.TRIVIA:
        display = <Trivia />;
        break;
      case show.SUMMARY:
        display = <Summary />;
        break;
      default:
        display = <h1>ERROR! Some type of problem.</h1>;
    }

    // basic nav
    let nav = (
      <nav>
        <div className="nav-links">
          <div className="nav-home">
            <a onClick={() => this.displayHandler(show.HOME)}>Home</a>
          </div>
          <div className="nav-links-right">
            <div className="nav-trivia">
              <a onClick={() => this.displayHandler(show.TRIVIA)}>
                Trivia
              </a>
            </div>
            <div className="nav-summary">
              <a onClick={() => this.displayHandler(show.SUMMARY)}>
                Summary
              </a>
            </div>
          </div>
        </div>
      </nav>
    );

    return (
      <div className="App">
        {nav}
        {display}
      </div>
    );
  }
}

export default App;
