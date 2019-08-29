import React from 'react';

const NumberButton = (props) => {
	const { text } = props;
	return (
		<>
			<button>{text}</button>
		</>
	);
};
export default NumberButton;
