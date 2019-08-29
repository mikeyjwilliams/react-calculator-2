import React, { useState } from 'react';

import NumberButton from './NumberButton';

import { numbers } from '../../../data';
const Numbers = props => {
  const [numberData, setNumberData] = useState(numbers);
  const { displayText } = props;
  return (
    <div>
      {numberData.map((numButton, i) => {
        return (
          <NumberButton text={numButton} key={i} addNumber={props.addNumber} />
        );
      })}
    </div>
  );
};
export default Numbers;
