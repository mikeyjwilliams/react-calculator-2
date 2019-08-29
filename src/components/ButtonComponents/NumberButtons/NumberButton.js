import React from 'react';

const NumberButton = props => {
  const { text, addNumber } = props;
  return (
    <>
      <button
        onClick={() => {
          addNumber(text);
        }}
      >
        {text}
      </button>
    </>
  );
};
export default NumberButton;
