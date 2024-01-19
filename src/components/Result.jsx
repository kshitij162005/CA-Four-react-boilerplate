import React, { useEffect, useState } from "react";
import '../components/Result.css';

export default function Result({ finalScore }) {
  const totalQuestions = 5;
  const percentage = Math.round((finalScore / totalQuestions) * 100);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div className={`outsideContainerR ${isDarkMode ? "darkMode" : ""}`}>
      <div className="outsideContainerR">
        <div className="upperContainerR">
          <div className="modeButtonR">
            <button
              className="switchButton"
              type="button"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? "☀️" : "🌑"}
            </button>
          </div>
        </div>
        <div className="resultContainerR">
          <div className="resultBoxR">
            <div className="finalResultHeading">
              <h1>Final Result</h1>
            </div>
            <div className="resultCountR">
              <h3>
                <span>{finalScore}</span> out of {totalQuestions} is Correct -{' '}
                <span>({percentage}%)</span>
              </h3>
            </div>
            <div className="restartButtondiv">
              <button className="restartButtonR">Restart Game</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
