import React from 'react';

const OperatorButton = props => {
  const { operations } = props;
  const operatorChar = operations.char;
  const operatorValue = operations.value;
  return (
    <>
      <button>{operatorChar}</button>
    </>
  );
};
export default OperatorButton;
