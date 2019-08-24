import React from 'react';

import SpecialButton from './SpecialButton';

import { specials } from '../../../data';
const Specials = () => {
	// STEP 2 - add the imported data to state

	return (
		<div>
			{specials.map((special, index) => {
				return <SpecialButton special={special} key={index} />;
			})}
		</div>
	);
};

export default Specials;
