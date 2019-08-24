import React from 'react';

const Display = props => {
  const { displayState } = props;
  return (
    <div className="display-container">
      <div className="display">{displayState}</div>
    </div>
  );
};

export default Display;
