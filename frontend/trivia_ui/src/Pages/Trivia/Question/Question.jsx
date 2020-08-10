import React from "react";
import "./Question.css";

const wrongColor = {
  background: "red"
};
const rightColor = {
  background: "green"
};

const normalColor = {
  background: "yellow"
};

const Question = props => {
  const correctChoice = index => {
    let buttonIndex = this.state.buttons.findIndex(button => {
      return index === button.key;
    });
    let copyButtons = [...this.state.buttons];
    copyButtons[buttonIndex].buttonColor = rightColor;
    this.setState({
      buttons: copyButtons
    });
  };

  const incorrectChoice = index => {
    let buttonIndex = this.state.buttons.findIndex(button => {
      return index === button.key;
    });
    let copyButtons = [...this.state.buttons];
    copyButtons[buttonIndex].buttonColor = wrongColor;
    this.setState({
      buttons: copyButtons
    });
  };

  let buttons = props.choices.map((choice, index) => {
    return (
      <React.Fragment>
        <button
          key={index}
          style={normalColor}
          onClick={() => ""}
          className="choice"
        >
          {choice}
        </button>
      </React.Fragment>
    );
  });

  return <div>{buttons}</div>;
};

export default Question;
