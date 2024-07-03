import React from "react";
import '../App.css';
interface ControlButtonsProps {
  active: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  active,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset,
}) => {
  return (
    <div className="control-buttons">
      {!active ? (
        <button onClick={handleStart} className="start_btn">Start</button>
      ) : (
        <button onClick={handlePauseResume} className="pause_btn">{isPaused ? "Resume" : "Pause"}</button>
      )}
      <button onClick={handleReset} className="reset_btn">Reset</button>
    </div>
  );
};

export default ControlButtons;
