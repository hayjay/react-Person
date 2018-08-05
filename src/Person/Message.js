import React from 'react';

const messages = (msg_properties) => {
    return (
        <div className="">
            <h3>
                Message : {msg_properties.name}
            </h3>
            <small> 
                Status : {msg_properties.completed}
            </small>
        </div>
    );
};
