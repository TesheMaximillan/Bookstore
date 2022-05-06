import React from 'react';
import Button from './Button';

function ProgressDescription() {
  return (
    <div className="progress-description">
      <span className="chapter-name">CURRENT CHAPTER</span>
      <span className="chapter-status">Chapter 17</span>
      <Button type="button">UPDATE PROGRESS</Button>
    </div>
  );
}

export default ProgressDescription;
