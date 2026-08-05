import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div
        className="progress"
        style={{ width: `${progress}%` }}
      ></div>

      <p>{progress}% Completed</p>
    </div>
  );
};

export default ProgressBar;