import React from 'react';
//
const validation = (props) => {
    let validationMessage = 'Text long enough';

    if(props.inputLength <= 5){
        return validationMessage = 'Text too short';
    }


    return ( //return a conditional jsx
        <div>
            {/* display an if statement of the passed in inputLength property is too short or long with tenary operator */}
                <p> {validationMessage} </p>
        </div>
    )
};

//this component is basically a validation component that checks if an input text is 
// less than / equal 5 then returns text too short else, returns the default validationMsg variable which is text long enuf with a JSX format
//of course always export functionname named validation here... for usage in other files

export default validation;