import React from 'react';

const SpecialButton = (props) => {
	const { special } = props;
	const specialBaseClass = `btn specials-btn`;
	return (
		<>
			<button className={specialBaseClass}>{special}</button>
		</>
	);
};
export default SpecialButton;
