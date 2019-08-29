import React, { useState } from 'react';

//import any components needed
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file
import { operators } from '../../../data';
const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorButton, setOperatorButton] = useState(operators);
  return (
    <div>
      {operatorButton.map((operations, i) => {
        return <OperatorButton operations={operations} key={i} />;
      })}
    </div>
  );
};
export default Operators;
