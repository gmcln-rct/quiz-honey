import React from 'react';
import Answer from './Answer';

export default function Answers(props) {
    return (
        <>
            <Answer letter="a" answer={props.question.answer_a} selected={props.currentAnswer === 'a'} />
            <Answer letter="b" answer={props.question.answer_b} selected={props.currentAnswer === 'b'} />
            <Answer letter="c" answer={props.question.answer_c} selected={props.currentAnswer === 'c'} />
            <Answer letter="d" answer={props.question.answer_d} selected={props.currentAnswer === 'd'} />
        </>
    );
}
