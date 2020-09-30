import React, { useEffect, useState } from 'react';
import './box.scss';

const Box = props => {
	const {x , y, speed} = props;

	const [animationName, setAnimationName] = useState('');

	useEffect(() => {
		const styleSheet = document.styleSheets[0];

		const animationName = `animation${Math.round(Math.random() * 100)}`;

		const keyframes =
	    `@-webkit-keyframes ${animationName} {
	        10% {-webkit-transform:translate(${Math.random() * 100}px, ${Math.random() * 300}px)} 
	        90% {-webkit-transform:translate(${Math.random() * 100}px, ${Math.random() * 300}px)}
	        100% {-webkit-transform:translate(${x}px, ${y - 60}px)}
	    }`;
	    
	 	styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

	 	setAnimationName(animationName);
	}, [x, y])
	

	const boxStyle = {
		animationName: animationName,
		animationTimingFunction: "ease-in-out",
		animationDuration: speed + 'ms',
		animationDelay: "0.0s",
		animationIterationCount: 1,
		animationDirection: 'normal',
    animationFillMode: 'forwards'
	}

	return (
			<div 
				className="box" 
				style={boxStyle}>
			</div>
		)
}

export default Box;