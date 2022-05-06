import React from 'react';
import CircularBar from './CircularBar';
import ProgressDescription from './ProgressDescription';

function Progress() {
  const done = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  return (
    <div className="progress">
      <CircularBar done={done} />
      <ProgressDescription />
    </div>
  );
}

export default Progress;
