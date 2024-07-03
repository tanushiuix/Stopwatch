import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <h1>Digital Clock</h1>
      <div className="time">
        <span>{currentTime}</span>
      </div>
    </div>
  );
};

export default Clock;
