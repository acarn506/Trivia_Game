import React from "react";
import "./Trivia.css";

const Trivia = props => {
  return (
    <div>
      <h1 className="genre">Genre: Sports</h1>
      <div className="q-and-a">
        <h3 className="question">Who is the best football team of all time?</h3>
        <div className="all-answers">
          <button className="answer">New England Patriots</button>
          <button className="answer">Pittsburgh Steelers</button>
          <button className="answer">Dallas Cowboys</button>
          <button className="answer">Oakland Raiders</button>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
