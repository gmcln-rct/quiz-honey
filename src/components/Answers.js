import React from 'react';
import Answer from './Answer';

export default function Answers(props) {
    return (
        <>
            <Answer letter="a" answer={props.question.answer_a} />
            <Answer letter="b" answer={props.question.answer_b} />
            <Answer letter="c" answer={props.question.answer_c}/>
            <Answer letter="d" answer={props.question.answer_d} />
        </>
    );
}
