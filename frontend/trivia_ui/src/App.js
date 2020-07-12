import React, { Component } from "react";
import Home from "./Pages/Home/Home";
import Summary from "./Pages/Summary/Summary";
import Trivia from "./Pages/Trivia/Trivia";
import "./App.css";

class App extends Component {
  state = {
    show: "trivia"
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
      case "home":
        display = <Home />;
        break;
      case "trivia":
        display = <Trivia />;
        break;
      case "summary":
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
            <a onClick={() => this.displayHandler("home")}>Home</a>
          </div>
          <div className="nav-links-right">
            <div className="nav-trivia">
              <a onClick={() => this.displayHandler("trivia")}>
                Trivia
              </a>
            </div>
            <div className="nav-summary">
              <a onClick={() => this.displayHandler("summary")}>
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
