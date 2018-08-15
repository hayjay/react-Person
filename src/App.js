import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //importing component name from the folder name Person


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
		otherState : 'some other value',
		showPersons : false
	}

	nameChangedHandler = (event, person_id) => {
		//assigning the default persons array to a variable (persons) and looping through to find if the array of the persons matches the id passed in from the textbox
		const personIndex = this.state.persons.findIndex((person) => { //find index helps find the index of an array and execute the find on each element of the array
			return person.id === person_id; //returns true if the currently iterated findIndex person.id = the id passed in from the function
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

	

	//the render method always gets called when the page loads initially
  render() {

  	const style = {
  		backgroundColor : 'white',
  		font : 'inherit',
  		border : '1px solid blue',
  		padding : '8px',
  		cursor : 'pointer'
	  };
	  
	let persons = null;

	if( this.state.showPersons ){ //checks if showPersons object is true
		persons = ( //asign jsX html code to persons
			<div> 
				{/* loop through the persons array using map method with a function (callback) inside the map menthod as the map syntax */}

				{
					this.state.persons.map((eachPerson, current_index) => { //eachPerson is an anonymous function to the map function
						return <Person 
									whenClicked = {() => this.deletePersonHandler(current_index)}
									name={eachPerson.name}
									age={eachPerson.age}
									key={eachPerson.id} //to make sure and track the current index of each element we can manipulate with this
									whenChanged={(event) => this.nameChangedHandler(event, eachPerson.id)}
								/>
					})
				}
				
			</div>
		);
	}

    return (
      <div className="App">
        <h1> Hi, Im a react app </h1>
        <p> This is really working! </p>
		{/* creating an input field with a change listerner below */}
		<input type="text" name=""/>
        <button style={style} onClick={this.togglePersonsHandler}> Toggle Person</button>


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
