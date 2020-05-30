import React, { useContext } from 'react';
import Answer from './Answer';
import QuizContext from '../context/QuizContext';

export default function Answers() {
    const { state, dispatch } = useContext(QuizContext);
    const { currentAnswer, currentQuestion, questions } = state;
    const question = questions[currentQuestion];
    
    return (
      <>
        <Answer
          className="letter"
          letter="a"
          answer={question.answer_a}
          dispatch={dispatch}
          selected={currentAnswer === "a"}
        />
        <Answer
          className="letter"
          letter="b"
          answer={question.answer_b}
          dispatch={dispatch}
          selected={currentAnswer === "b"}
        />
        <Answer
          className="letter"
          letter="c"
          answer={question.answer_c}
          dispatch={dispatch}
          selected={currentAnswer === "c"}
        />
        <Answer
          className="letter"
          letter="d"
          answer={question.answer_d}
          dispatch={dispatch}
          selected={currentAnswer === "d"}
        />
      </>
    );
}
