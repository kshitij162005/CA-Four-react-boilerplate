import React from "react";
import "../components/QuestionBox.css";

export default function QuestionBox() {
  return (
    <>
      <div className="outsideContainer">
        <div className="upperContainer">
          <div className="modeButton">
            <button className="switchButton" type="button" data-theme="dark">
              Dark
            </button>
          </div>
        </div>
        <div className="quizContainer">
          <div className="quizBox">
            <div className="questionCount">
              <h3>
                Question: <span>1</span> out of 5
              </h3>
            </div>
            <div className="question">
              <h1>
                <span>What is ReactJs?</span>
              </h1>
            </div>
            <div className="options">
              <button className="option">1</button>
              <button className="option">1</button>
              <button className="option">1</button>
              <button className="option">1</button>
            </div>
            <div className="highlightsButtons">
              <button className="highButton" id="highButton1">
                Highlight
              </button>
              <button className="highButton" id="highButton2">
                Remove Highlight
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
