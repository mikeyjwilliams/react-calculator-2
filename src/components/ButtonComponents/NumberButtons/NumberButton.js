import React from 'react';

const NumberButton = (props) => {
	const { number } = props;

	const normalButtonClasses = `btn numbers-btn`;
	return (
		<>
			<button className={normalButtonClasses}>{number}</button>
		</>
	);
};
export default NumberButton;
