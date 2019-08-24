import React from 'react';

const OperatorButton = props => {
  const { operator, setDisplayState } = props;

  const operatorDisplay = () => {
    setDisplayState(operator);
  };

  return (
    <>
      <button onClick={operatorDisplay} className="btn operators-btn">
        {operator}
      </button>
    </>
  );
};

export default OperatorButton;
