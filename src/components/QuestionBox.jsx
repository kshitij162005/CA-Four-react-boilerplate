import React, { useState } from "react";
import "../components/QuestionBox.css";
import questions from "../questions";
import Result from "./Result";

export default function QuestionBox() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  let [result, setresult] = useState(false)

  /*  handleOptionClick is checking if the option we have clicked
      on is correct or not if it is then it 
      is incrementing and if not it is decrementing the score. */
  const handleOptionClick = (isCorrect) => {
    console.log(isCorrect)
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < 5 - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } 
    else{
      setresult(!result)
    }
    

  };

  /*  Made 2 functions clicking on Highlight button turnOnHighlight will be called and clicking 
      on Remove Highlight button the turn off highlighht will be called and each of them will set
      the value of Highlighed true or false respectively.*/
  const turnOnHighlight = () => setHighlighted(true);
  const turnOffHighlight = () => setHighlighted(false);

  // making a function so that when we click on Dark mode the background changes to the desired Style.
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    {result===true ?(<Result finalScore={score}/>):(<div className={`outsideContainer ${isDarkMode ? "darkMode" : ""}`}>
        <div className="upperContainer" id="restartR">
          <div className="modeButton">
            <button
              className="switchButton"
              type="button"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? "🌕" : "🌑"}
            </button>
          </div>
        </div>
        <div className="quizContainer">
          <div className="quizBox">
            <div className="quizContainer">
              <div className="quizBox">
                <div className="questionCount">
                  <h3>
                    Question: <span>{currentQuestionIndex + 1}</span> out of
                    {"5"}
                  </h3>
                </div>
                <div className="question">
                  <h1 className={highlighted ? "highlighted" : ""}>
                    <span>{questions[currentQuestionIndex].text}</span>
                  </h1>
                </div>
                <div className="options">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        className="option"
                        onClick={() => handleOptionClick(option.isCorrect)}
                      >
                        {option.text}
                      </button>
                    )
                  )}
                </div>
                <div className="highlightsButtons">
                  <button className="highButton" onClick={turnOnHighlight}>
                    Highlight
                  </button>
                  <button className="highButton" onClick={turnOffHighlight}>
                    Remove Highlight
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      
    </>
  );
}