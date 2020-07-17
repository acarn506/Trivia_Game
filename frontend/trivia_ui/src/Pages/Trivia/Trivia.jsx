import React, { Component } from "react";
import "./Trivia.css";
import axios from "axios";

let host = "http://localhost";
let port = "4000";

const wrongColor = {
  background: "red"
};
const rightColor = {
  background: "green"
};

const normalColor = {
  background: "yellow"
};

class Trivia extends Component {
  state = {
    buttons: [
      {
        name: "New England Patriots",
        buttonColor: normalColor,
        key: 0
      },
      {
        name: "Pittsburgh Steelers",
        buttonColor: normalColor,
        key: 1
      },
      {
        name: "Dallas Cowboys",
        buttonColor: normalColor,
        key: 2
      },
      {
        name: "Oakland Raiders",
        buttonColor: normalColor,
        key: 3
      }
    ],
    answer: ""
  };

  correctChoice = index => {
    let buttonIndex = this.state.buttons.findIndex(button => {
      return index === button.key;
    });
    let copyButtons = [...this.state.buttons];
    copyButtons[buttonIndex].buttonColor = rightColor;
    this.setState({
      buttons: copyButtons
    });
  };

  incorrectChoice = index => {
    let buttonIndex = this.state.buttons.findIndex(button => {
      return index === button.key;
    });
    let copyButtons = [...this.state.buttons];
    copyButtons[buttonIndex].buttonColor = wrongColor;
    this.setState({
      buttons: copyButtons
    });
  };

  // API Requests
  // post to /question
  async getPosts() {
    const response = await axios.get(`${host}:${port}/posts/question/`);
    try {
      const questionInfo = response.data;
      this.setState({
        question: questionInfo.question,
        buttons: questionInfo.choices,
        answer: questionInfo.answer,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    let rightAnswer = "Oakland Raiders"; // this.state.answer

    let finishedButtons = this.state.buttons.map((button, index) => {
      return (
        <React.Fragment>
          {button.name === rightAnswer ? (
            <button
              key={button.key}
              style={button.buttonColor}
              onClick={() => this.correctChoice(index)}
              className="choice"
            >
              {button.name}
            </button>
          ) : (
            <button
              key={button.key}
              style={button.buttonColor}
              onClick={() => this.incorrectChoice(index)}
              className="choice"
            >
              {button.name}
            </button>
          )}
        </React.Fragment>
      );
    });

    return (
      <div>
        <h1 className="genre">Genre: Sports</h1>
        <div className="q-and-a">
          <h3 className="question">
            Which of these teams appeared in a Super Bowl first?
          </h3>
          <div className="all-choices">{finishedButtons}</div>
        </div>
      </div>
    );
  }
}

export default Trivia;

/* Question: Before the Golden State Warriors, who was the last team to appear in five straight NBA finals?
A. Boston Celtics
B. Chicago Bulls
C. Los Angeles Lakers
D. San Antonio Spurs

Answer: Boston Celtics

Question: Who won the very first MLS Cup?
A. Chicago Fire
B. D.C. United
C. Houston Dynamo
D. LA Galaxy

Answer: D.C. United

Question: After the New York Yankees, who has won the most World Series?
A. St. Louis Cardinals
B. Boston Red Sox
C. New York/San Francisco Giants
D. Brooklyn/Los Angeles Dodgers

Answer: St. Louis Cardinals

*/
