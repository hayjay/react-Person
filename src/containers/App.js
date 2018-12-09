import React, { Component } from 'react';
import classes from './App.css'; //becus weve manipulated the config vars ..
//such as webpack.config.js which would allow us use any of the css classes in an object..
//  format like classes.classname declared in the css files basically, css loader allows us to do this.
import Persons from '../components/Persons/Persons'; //importing component name from the folder name Person
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

//NOTE THAT A CONTAINER MANAGES THE STATE AND FUNCTION OF AN APPLICATION
class App extends Component {
	state = {
		persons: [
			{
				id: 'ahhsjs23',
				name : 'Ajayi',
				age: 24
			},
			{
				id: '9jsdksdsdsd',
				name : 'Nurudeen',
				age : 22,
			},
			{
				id: 'jksdwwd922',
				name : 'Olawales',
				age : 20
			}
		],
		//
		userInput : '', //empty variable declared for the purpose of changehandler user input
		otherState : 'some other value',
		showPersons : false
	}

	changeInput = (event) => {//of course it will accept an event from the text input so y not passing event parameter
		this.setState({
			userInput : event.target.value
		});
	}

	nameChangedHandler = (event, person_id) => {
		//assigning the default persons array to a variable (persons) and looping through to find if the array of the persons matches the id passed in from the textbox
		const personIndex = this.state.persons.findIndex((person) => { //find index helps find the index of an array and execute the find on each element of the array
			return person.userId === person_id; //returns true if the currently iterated findIndex person.id = the id passed in from the function
		});

		//process of updating state again
		// 1. create a copy of the main array first
		// 2. mutate maybe by splicing
		// 3. then setTheState with setState

		const person = {
			//copying this without mutating the state
			...this.state.persons[personIndex] //using the spread operator to copy objects to person variable just like instantiating the new obkect
		};
		//or using 
		// const person = Object.assign({}, this.state.persons[personIndex]);
		person.name = event.target.value;
		const persons = [...this.state.persons]; //copy of the old array
		persons[personIndex] = person;//defining the index on the go with a person value assigned

		//update the person state
		this.setState({
			persons : persons
		});
	}

	//process of updating state
		// 1. create a copy of the main array first
		// 2. mutate maybe by splicing
		// 3. then setTheState with setState
	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();  // pull the array of persons then copy it and save into persons 
		const persons = [...this.state.persons]; //using the spread operator helps copy the  declared persons array and paste into the persons variable
		persons.splice(personIndex, 1); //just like array.splice ..the second parameter of array splice determines how
		// ..the second parameter of array splice determines how many elements u want to delete
		// ..the first parameter helps detemins which index to start the deletion from
		this.setState(({ //update the initially created persons array with set state after splicing the current person index
			persons : persons
		}))
	}

	//help check if wewant to display this div inside it or not
	togglePersonsHandler = () => {
		const doesShow = this.showPersons;
		this.setState({ //setState updates a class variable or function
			//basically, this is where the toggle lies
			showPersons : !doesShow //returns true because the default state is false
		})
	}

	deleteCharacterByIndex = ( index ) => {
		// to delete each letter follow the below step :
			//split the userInput value in the text box
			//remove one of the letter at the index position just one character each to be removed splice(index, 1)
			//create a variable called updatedText to join the remaining user input values after it must have been modified by removing one element using splice
			//join the splitted elements back to an array 
		
		const text = this.state.userInput.split(''); //splict the user input so we can perform a splice function on each of the letter
		text.splice(index,1); //removes the passed in clicked letter from the array...we track each letter with its index
		const updatedText = text.join('');
		this.setState({ //then finally, update the userInput field
			userInput : updatedText
		});
	}

	//the render method always gets called when the page loads initially
  render() {
	  let person = null;
	  let btnClass = '';
	  //maps string letter in the user input field we can map each of them becuse javascript strings are arrays.
		//to split the letters, we need to first split what ever the user input below
		//then after spliting, we need map each of the letters   
	  let charList = this.state.userInput.split('');
	 	const eachString = charList.map((each_letter, index) => { //keep in mind : map doesnt touch the original array, it only work on the array and save into the charList new const variable
		return <Char character={each_letter} key={index} clicked={() => this.deleteCharacterByIndex(index)} />
	});
  	const style = {
			backgroundColor : 'green',
			color : 'white',
			font : 'inherit',
			border : '1px solid blue',
			padding : '8px',
			cursor : 'pointer',
			// ':hover' : {
			// 	backgroundColor : 'lightgreen',
			// 	color : 'black'
			// }
	  };
	  
	let persons = null;

	if( this.state.showPersons ){ //checks if showPersons object is true
		persons = 
					// /* loop through the persons array using map method with a function (callback) inside the map menthod as the map syntax */}
					<Persons 
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler} />;
						// btnClass = classes.Red;
		//update toggle person button when clickcked
		// ///using radium feature ability to assign a property on css sudo selector
		// style[':hover'] = {
		// 	backgroundColor : 'lightred',
		// 	color : 'black'
		// }
	}

	//results in a class like red bold so we can use as two classes
	//which basically returns an array

	// ADDING CLASS TO REACT JS DYNAMICALLY WITH AN IF STATEMENT 
	
    return (
      <div className={classes.App}>
		<Cockpit 
			showPersons={this.state.showPersons}
			persons={this.state.persons}/>
		{/* component Person is a nested child component under the root/the parent component named "app"  */}
		{/* each child or parent component needs to return / render some JSX CODE*/}
		{/* JSX is just a js syntactic sugar that allows u to write htmlish code instead of nested React.createElement calls */}
		{persons}
      </div>
	  // React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
    );

  }
}

export default App;
