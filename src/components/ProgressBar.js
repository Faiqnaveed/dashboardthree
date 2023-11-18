import React from 'react';

const ProgressBar = ({ value, color }) => {
  const progressBarClasses = `progress-bar bg-${color}`;
  
  return (
    <div className="progress" style={{ height: '10px' }}>
    <div className={progressBarClasses} role="progressbar" style={{ width: `${value}%` }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>
  );
};

export default ProgressBar;
