import React from 'react';

const NumberButton = (props) => {
	const { number } = props;

	const normalButtonClasses = `btn numbers-btn`;
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className={normalButtonClasses}>{number}</button>
		</>
	);
};
export default NumberButton;
