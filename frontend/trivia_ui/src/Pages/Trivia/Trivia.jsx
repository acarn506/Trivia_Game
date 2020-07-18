import React, { Component }  from "react";
import "./Trivia.css";

const wrongColor = {
  background : "red"
}
const rightColor = {
  background : "green"
}

const normalColor = {
  background : "yellow"
}

class Trivia extends Component {
    state = {

      questions: 'Which of these teams appeared in a Super Bowl first?',

      buttons : [ 
        {
          name : 'New England Patriots',
          buttonColor : normalColor,
          key : 0
        },
        {
          name : 'Pittsburgh Steelers',
          buttonColor : normalColor,
          key : 1
        },
        {
          name : 'Dallas Cowboys',
          buttonColor : normalColor,
          key : 2
        },
        {
          name : 'Oakland Raiders',
          buttonColor : normalColor,
          key : 3
        }
      ]
    }

    correctChoice = (index) => {
      let buttonIndex = this.state.buttons.findIndex((button)=>{
        return index === button.key
      })
      let copyButtons = [...this.state.buttons] 
      copyButtons[buttonIndex].buttonColor = rightColor
      this.setState({
        buttons:copyButtons
      })
    }
    
    incorrectChoice = (index) => {
      let buttonIndex = this.state.buttons.findIndex((button)=>{
        return index === button.key
      })
      let copyButtons = [...this.state.buttons] 
      copyButtons[buttonIndex].buttonColor = wrongColor
      this.setState({
        buttons:copyButtons
      })
    }
    
    render() {

  let rightAnswer = 'Oakland Raiders'

let finishedButtons = this.state.buttons.map((button, index)=>{
  return ( 
    <React.Fragment>
      { button.name === rightAnswer 
        ?
        <button key= {button.key} style={button.buttonColor} onClick= {() =>  this.correctChoice(index)} className="choice">{button.name}</button>
        :         
        <button key= {button.key} style={button.buttonColor} onClick= {() =>  this.incorrectChoice(index)} className="choice">{button.name}</button>
      }
    </React.Fragment>
  )
})   

  return (
    <div>
      <h1 className="genre">Genre: Sports</h1>
      <div className="q-and-a">
        <h3 className="question">{this.state.questions}</h3>
          <div className="all-choices">
          {finishedButtons}
          </div>
        </div>
      </div>
  );
};
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