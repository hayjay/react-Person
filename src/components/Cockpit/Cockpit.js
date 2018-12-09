import React from 'react';
import Cockpit from './Cockpit.css';
import classes from './App.css'; //becus weve manipulated the config vars ..
import Validation from '../components/Validation/Validation';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    btnClass = classes.Red;
    
    if(props.showPersons){
        btnClass = classes.Red;
    }

	if(props.persons.length <= 2){
		assignedClasses.push( classes.red ); //classes  = ['red'];
	}

	if( props.persons.length <= 1){ //we refused to use elseif becus we want the two conditions to work
		assignedClasses.push( classes.bold ); //classes = ['red', 'bold'];
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1> Hi, Im something </h1>
            <p className={assignedClasses.join(' ')}> This is really working! </p>
            {/* creating an input field with a change listerner below */}
            <hr/>
            <input type="text" name="" onChange={this.changeInput} value={this.state.userInput}/>

            <p> {this.state.userInput} </p>

            {/* the below validation component recieves the text length as a prop */}
            <Validation inputLength={this.state.userInput.length}/>
            {eachString}

            <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Person</button>
        </div>
    );
}

export default cockpit;