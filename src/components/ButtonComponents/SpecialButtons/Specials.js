import React from 'react';

import SpecialButton from './SpecialButton';

import { specials } from '../../../data';
const Specials = props => {
  // STEP 2 - add the imported data to state
  const { setDisplayState } = props;
  return (
    <div>
      {specials.map((special, index) => {
        return (
          <SpecialButton
            special={special}
            key={index}
            setDisplayState={setDisplayState}
          />
        );
      })}
    </div>
  );
};

export default Specials;
