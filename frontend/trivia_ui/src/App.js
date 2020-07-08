import React, { Component } from "react";
import Home from "./Pages/Home/Home";
import Summary from "./Pages/Summary/Summary";
import Trivia from "./Pages/Trivia/Trivia";
import "./App.css";

class App extends Component {
  state = {
    show: "home"
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
        <ul>
          <li>
            <button onClick={() => this.displayHandler("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => this.displayHandler("trivia")}>
              Trivia
            </button>
          </li>
          <li>
            <button onClick={() => this.displayHandler("summary")}>
              Summary
            </button>
          </li>
        </ul>
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
