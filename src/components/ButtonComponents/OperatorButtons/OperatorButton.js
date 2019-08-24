import React from 'react';

const OperatorButton = (props) => {
	const { operator } = props;
	return (
		<>
			<button className="btn operators-btn">{operator}</button>
		</>
	);
};

export default OperatorButton;
