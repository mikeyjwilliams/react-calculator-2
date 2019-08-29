import React from 'react';

const OperatorButton = props => {
  const { operations, addNumber } = props;
  const operatorChar = operations.char;
  const operatorValue = operations.value;
  return (
    <>
      <button
        onClick={() => {
          addNumber(operatorValue);
        }}
      >
        {operatorChar}
      </button>
    </>
  );
};
export default OperatorButton;
