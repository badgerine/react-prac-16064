import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>Your new email account: {props.username}@kalyda.com</p>
        </div>
    )
};

export default userOutput;