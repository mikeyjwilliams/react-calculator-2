import React from 'react';

import NumberButton from './NumberButton';

import { numbers } from '../../../data';
const Numbers = () => {
	// STEP 2 - add the imported data to state
	return (
		<div>
			{numbers.map((number, index) => {
				return <NumberButton number={number} key={index} />;
			})}
		</div>
	);
};
export default Numbers;
