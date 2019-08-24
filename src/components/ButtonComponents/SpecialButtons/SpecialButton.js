import React from 'react';

const SpecialButton = props => {
  const { special, setDisplayState } = props;
  const specialBaseClass = `btn specials-btn`;

  const displaySpecialChar = () => {
    setDisplayState(special);
  };

  return (
    <>
      <button onClick={displaySpecialChar} className={specialBaseClass}>
        {special}
      </button>
    </>
  );
};
export default SpecialButton;
