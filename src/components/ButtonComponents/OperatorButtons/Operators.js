import React, { useState } from 'react';

import OperatorButton from './OperatorButton';
import { operators } from '../../../data';
const Operators = props => {
  const [operationState, setOperstationState] = useState(operators);
  const { setDisplayState } = props;
  return (
    <div>
      {operationState.map((operator, index) => {
        return (
          <OperatorButton
            setDisplayState={setDisplayState}
            operator={operator.char}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Operators;
