import React from 'react';
import './Button.css';

const CalculateButton = (props) => {
    return (
        <button className = {props.buttonStyle}>
            <span> {props.value} </span>
        </button>
    );
}

export default CalculateButton;