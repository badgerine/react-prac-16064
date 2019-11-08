import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const inputStyle = {
        backgroundColor: 'yellow'
      }

    return (
        <div className="UserInput">
            Enter Username:<input  style={inputStyle} type="text" onChange={props.captureUsername} value={props.username}/>
        </div>
    )
};

export default userInput;