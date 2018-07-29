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
		]
	}

	switchNameHandler = (newName) => {
		this.setState({ //compares the already declared person object to the below persons object
			persons: [
				{
					name : newName,
					age: 24
				},
				{
					name : 'Nurudeen',
					age : 22,
				},
				{
					name : 'Olawales',
					age : 90
				}
			]
		})
		// console.log('Clicked!');
	}
  render() {
    return (
      <div className="App">
        <h1> Hi, Im a react app </h1>
        <p> This is really working! </p>
        <button onClick={ () => this.switchNameHandler('Maximillian') }> Switch Nme</button>

	    <Person 
	    	name={this.state.persons[0].name} 
	    	age={this.state.persons[0].age}/> 
	    <Person 
	    	name={this.state.persons[1].name} 
	    	age={this.state.persons[1].age}
	    	whenClicked={this.switchNameHandler.bind(this, 'Nurudeen')}> My Hoppies : Writing Code 
	    </Person> 
	    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 

      </div>
	  // React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
    );

  }
}

export default App;
