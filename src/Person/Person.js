import React from 'react';
import './Person.css';
// import './App.css';
const person = (props) => { //props allows you to be able to interact with the component properties when used in APp.js
	// but when using classed based components, to asses props property, we need use this.props instead
	return (
			<div className="Person">
				<p onClick={props.whenClicked}> Im a {props.name}! and i am {props.age} years old. </p>
				{/* children refers to the core text between the html tag/element */}
				<p> {props.children} </p> 

				<input type="text" onChange={props.whenChanged} value={props.name} />
			</div>
		)
};