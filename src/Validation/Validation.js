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

export default validation;