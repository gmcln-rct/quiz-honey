import React from 'react';

export default function Answer(props) {
    let classes = ['answer'];

    const handleClick = e => {
        props.dispatch({ 
            type: SET_CURRENT_ANSWER, 
            currentAnswer: e.target.value 
        });
        props.dispatch({ type: SET_ERROR, error: '' });
    };

    if (props.selected) {
        classes.push('selected');
    }

    return (
        <button 
        value={props.letter} 
        className={classes.join(' ')} 
        onClick={handleClick}>
            <span className="letter">
                {props.letter}. {props.answer}
            </span>
        </button>
    );
}
