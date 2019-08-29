import React, { useState } from 'react';

import NumberButton from './NumberButton';

import { numbers } from '../../../data';
const Numbers = () => {
	const [numberData, setNumberData] = useState(numbers);
	return (
		<div>
			{numberData.map((numButton) => {
				return <NumberButton text={numButton} />;
			})}
		</div>
	);
};
export default Numbers;
