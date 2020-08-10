import React, { Component } from "react";
import "./Trivia.css";
import { randGenerator, questionPicker } from "./QuestionAPI";
import Question from "./Question/Question.jsx";
import axios from "axios";
//import { getPosts } from "./QuestionAPI";

let host = "http://localhost";
let port = "5000";

class Trivia extends Component {
  state = {
    questions: [],
    /*buttons: [
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
    ]*/
    length: null,
    category: "sports",
    play: false,
    gameOver: false,
    error: false,
    isLoading: false,
    questionNumber: 1
  };

  startTrivia = async category => {
    this.setState({
      isLoading: true
    });

    const response = await axios.get(
      `${host}:${port}/posts/questions/${category}`
    );
    try {
      console.log("Success!");
      const questionInfo = response.data;
      this.setState({
        questions: questionInfo,
        length: questionInfo.length,
        isLoading: false
      });
      //this.check();
    } catch (error) {
      console.log(error);
      this.setState({ error, isLoading: false });
    }

    this.setState({
      play: true
    });
  };

  /*check = () => {
    console.log("questions", this.state.questions);
    console.log("length", this.state.length);
    console.log("category", this.state.category);
  }; */

  componentDidMount() {}

  render() {
    /*
    let rightAnswer = "Oakland Raiders";

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
    });  */

    let currQuestion = questionPicker(
      this.state.questions,
      this.state.questionNumber
    );

    return (
      <div>
        <h1 className="genre">Genre: Sports</h1>
        <div className="q-and-a">
          <button onClick={() => this.startTrivia(this.state.category)}>
            Start
          </button>
          {this.state.isLoading ? <p>Loading Questions...</p> : null}
          {/*<h3 className="question">{this.state.questions}</h3> */}
          <div className="all-choices">{}</div>
          {this.state.play ? <Question choices={currQuestion.choices} /> : null}
        </div>
      </div>
    );
  }
}

export default Trivia;

/* 
let shownQuestions =[]

while (questions.length > 0){
    let randomNumber = Math.floor(Math.random() * questions.length);
    shownQuestions.push(deck[randomNumber]);
    deck.splice(randomNumber, 1);
*/

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
