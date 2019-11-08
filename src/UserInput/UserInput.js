import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            Enter Username:<input type="text" onChange={props.captureUsername} value={props.username}/>
        </div>
    )
};

export default userInput;