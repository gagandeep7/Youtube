import React from 'react';

const SeasonDisplay = (props) => {
    return (
        <div>
            <h1> {props.text + " : "}    {props.content}  </h1>
        </div>
        )
};

export default SeasonDisplay;