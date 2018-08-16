import React from 'react';
//
const validation = (props) => {
    return ( //return a conditional jsx
        <div>
            {/* display an if statement of the passed in inputLength property is too short or long with tenary operator */}
            {
                props.inputLength > 5 ?
                    <p>Text long Enough </p>  :
                    <p> Text too short! </p>
            }
        </div>
    )
};

export default validation;