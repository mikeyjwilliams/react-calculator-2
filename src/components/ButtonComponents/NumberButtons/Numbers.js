import React, { useState } from 'react';

import NumberButton from './NumberButton';

import { numbers } from '../../../data';
const Numbers = props => {
  const [calcNumbers] = useState(numbers);
  const { setDisplayState } = props;
  // STEP 2 - add the imported data to state
  return (
    <div>
      {calcNumbers.map((number, index) => {
        return (
          <NumberButton
            setDisplayState={setDisplayState}
            number={number}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Numbers;
