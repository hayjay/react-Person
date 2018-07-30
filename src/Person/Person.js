import React from 'react';
import './Person.css';
// import './App.css';
const person = (props) => {
	return (
			<div className="Person">
				<p onClick={props.whenClicked}> Im a {props.name}! and i am {props.age} years old. </p>
				<p> {props.children} </p>
				<input type="text" onChange={props.whenChanged} value={props.name} />
			</div>
		)
};