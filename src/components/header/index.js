import React, { useState } from 'react';
import './header.scss';

const Header = props => {
	const [speed, setSpeed] = useState("");

	const handleChange = e =>  {
		const { value } = e.target;
		setSpeed(value);
		props.onChange(value);
	}

	return (
			<header>
        <input 
        	name="speed" 
        	placeholder="Input animate speed ms (Exam: 2000)" 
        	autoComplete="off" 
        	value={speed}
        	type="number"
        	onChange={handleChange}
        />
      </header>
		)
}

export default Header;