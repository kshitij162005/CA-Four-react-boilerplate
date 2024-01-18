import React from "react";
import "../components/Result.css";

export default function Result() {
  return (
    <>
      <div className="outsideContainerR">
        <div className="upperContainerR">
          <div className="modeButtonR">
            <button className="switchButtonR" type="button">
              Dark
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
                <span>1</span> out of 5 is Correct - <span> (20%) </span>
              </h3>
            </div>
            <div className="restartButtondiv">
              <button className="restartButtonR">Restart Game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
