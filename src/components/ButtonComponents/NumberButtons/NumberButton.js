import React from 'react';

const NumberButton = props => {
  const { text, displayText } = props;
  return (
    <>
      <button
        onClick={() => {
          displayText(text);
        }}
      >
        {text}
      </button>
    </>
  );
};
export default NumberButton;
