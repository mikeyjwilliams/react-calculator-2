import React from 'react';

import OperatorButton from './OperatorButton';
import { operators } from '../../../data';
const Operators = () => {
	// STEP 2 - add the imported data to state
	return (
		<div>
			{operators.map((operator, index) => {
				return <OperatorButton operator={operator.char} key={index} />;
			})}
		</div>
	);
};

export default Operators;
