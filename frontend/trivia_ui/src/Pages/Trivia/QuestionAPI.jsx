// A few functions to fetch questions from backend
import React from "react";

const wrongColor = {
  background: "red"
};
const rightColor = {
  background: "green"
};

const normalColor = {
  background: "yellow"
};

// Random function
export const shuffleQuestions = questions => {
  return questions.sort(() => Math.random() - 0.5);
};

// Function to add choices to buttons
export const createButtons = choices => {
  choices.map((choice, index) => {
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
        )}
      </React.Fragment>
    );
  });
};

export const questionPicker = (questions, questionNumber) => {
  let result = questions.find((question, index) => {
    return index === questionNumber;
  });
  return result;
};
