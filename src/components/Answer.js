import React from 'react';

export default function Answer(props) {
    let classes = ['answer'];

    if (props.selected) {
        classes.push('selected');
    }

    return (
        <button value={props.letter} className={classes.join(' ')}>
            <span className="letter">
                {props.letter}. {props.answer}
            </span>

        </button>
    );
}
