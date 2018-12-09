import React from 'react';
import Person from './Person/Person'; 
const persons = (props) => (
    props.persons.map((eachPerson, current_index) => { //eachPerson is an anonymous function to the map function
        return 
                    <Person 
                        whenClicked = {() => props.clicked(current_index)}
                        name={eachPerson.name}
                        age={eachPerson.age}
                        key={eachPerson.id} //to make sure and track the current index of each element we can manipulate with this
                        whenChanged={(event) => props.changed(event, eachPerson.id)}
                    />
    })
);

export default persons;
