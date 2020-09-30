import React from 'react';

const Box = props => {

	const {x, y} = props;
	console.log(x, y)

	return (
			<div className="box" style={{'left': x, "top": y}}></div>
		)
}

export default Box;