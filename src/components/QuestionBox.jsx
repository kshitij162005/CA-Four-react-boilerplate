import React, { useEffect, useState } from "react";
import "../components/QuestionBox.css";
import questions from "../questions";

export default function QuestionBox({ finalScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finalScore(score);
    }
  };

  const turnOnHighlight = () => setHighlighted(true);
  const turnOffHighlight = () => setHighlighted(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`outsideContainer ${isDarkMode ? "darkMode" : ""}`}>
        <div className="upperContainer">
          <div className="modeButton">
            <button
              className="switchButton"
              type="button"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? "☀️" : "🌑"}
            </button>
          </div>
        </div>
        <div className="quizContainer">
          <div className="quizBox">
            <div className="quizContainer">
              <div className="quizBox">
                <div className="questionCount">
                  <h3>
                    Question: <span>{currentQuestionIndex + 1}</span> out of{" "}
                    {questions.length}
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
      </div>
    </>
  );
}
