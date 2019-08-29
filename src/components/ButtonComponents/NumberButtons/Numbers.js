import React, { useState } from 'react';

//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import { numbers } from '../../../data';
const Numbers = () => {
	const [numberData, setNumberData] = useState(numbers);
	return (
		<div>
			{numberData.map((numButton) => {
				return <NumberButton numButton={numButton} />;
			})}
		</div>
	);
};
