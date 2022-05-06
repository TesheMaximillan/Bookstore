/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function CircularBar({ done }) {
  const [style, setStyle] = useState({});
  const [percentage, setPercentage] = useState(0);
  let initialProgress = 0;

  useEffect(() => {
    const intervalID = setInterval(() => {
      initialProgress += 1;
      const newStyle = { background: `conic-gradient(#307bbe ${initialProgress * 3.6}deg, #fafafa ${initialProgress * 3.6}deg)` };
      if (initialProgress === done) clearInterval(intervalID);
      setStyle(newStyle);
      setPercentage(initialProgress);
    }, 30);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="bar-container">
      <div className="bar-container__graph" style={style} />
      <div className="bar-container__desc">
        <span className="percentage">{`${percentage}%`}</span>
        <span className="status">Completed</span>
      </div>
    </div>
  );
}

export default CircularBar;
