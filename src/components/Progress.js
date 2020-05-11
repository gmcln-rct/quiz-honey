import React from 'react'

export default function Progress(props) {
    return (
        <h2 className="progress-header">Question {props.current} of {props.total}</h2>

    );
}


