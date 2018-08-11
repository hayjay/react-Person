import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //importing component name from the folder name Person


class App extends Component {
	state = {
		persons: [
			{
				name : 'Ajayi',
				age: 24
			},
			{
				name : 'Nurudeen',
				age : 22,
			},
			{
				name : 'Olawales',
				age : 20
			}
		],
		otherState : 'some other value',
		showPersons : false
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons : [
				{
					name : 'Ajayi',
					age: 24
				},
				{
					name : event.target.value,
					age : 22,
				},
				{
					name : 'Olawales',
					age : 20
				}
			],
			otherState : 'some other value'
			
			//set the person state to false by default not to show the person div

		})
	}

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
