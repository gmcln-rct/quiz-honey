import React, {useReducer} from 'react';

import Header from './components/Header';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import QuizContext from './context/QuizContext';

import './reset.css';
import './App.css';

import { SET_ANSWERS, 
        SET_CURRENT_QUESTION,
        SET_CURRENT_ANSWER, 
        SET_ERROR, 
        SET_SHOW_RESULTS, 
        RESET_QUIZ } 
  from './reducers/types';

import quizReducer from './reducers/QuizReducer';

export default function App() {

  const questions = [
    {
      id: 1,
      question: 'Which statement about Hooks is not true?',
      answer_a:
        'Hooks are 100% backwards-compatible and can be used side by side with classes',
      answer_b: 'Hooks are still in beta and not available yet',
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: 'All of the above',
      correct_answer: 'b',
    },
    {
      id: 2,
      question: 'Which one is not a Hook?',
      answer_a: 'useState()',
      answer_b: 'useConst()',
      answer_c: 'useReducer()',
      answer_d: 'All of the above',
      correct_answer: 'b',
    },
    {
      id: 3,
      question: 'What Hook should be used for data fetching?',
      answer_a: 'useDataFetching()',
      answer_b: 'useApi()',
      answer_c: 'useEffect()',
      answer_d: 'useRequest()',
      correct_answer: 'c',
    },
    {
    id: 4,
    question: "What does bind do in JavaScript?",
    answer_a: "Bind is a method for connecting two strings",
    answer_b: "Bind is similar to the call method but accepts an array of arguments instead of comma separated values.",
    answer_c: "The bind method sets the this inside the function and immediately executes that function.",
    answer_d: "The bind method creates a new function and sets the this keyword to the specified object.",
    correct_answer: 'd',
    },
    {
      id: 5,
      question: "When running a JavaScript function, what is the difference between scope and context?",
      answer_a: "Scope is the object that `this` refers to. Context is the environment that the function is written in.",
      answer_b: "Scope refers to the availability of variables while running. The object within which the function runs is the context. ",
      answer_c: "Scope refers to the receiver of a function. Context refers to the variables that are available in that scope.",
      answer_d: "Scope refers to the ability of a function to modify elements outside of its definition. The context is the JavaScript engine that runs the code.",
      correct_answer: "b",
    },
    {
      id: 6,
      question: "In React, every time the render method in a react component is called, ________.",
      answer_a: "every DOM element on the entire page will be re-painted",
      answer_b: "every DOM element referenced by the React component will be re-painted.",
      answer_c: "only DOM elements with updated content will be re-painted",
      answer_d: "DOM elements with updated content and any DOM elements refernced by the React component will be re-painted.",
      correct_answer: "c",
    },

    {
      id: 7,
      question: "Which is true for the React lifecycle methold componentDidUpdate?",
      answer_a: "It can prevent a component from mounting.",
      answer_b: "It is called immediately after updating occurs, but is not called on the initial render.",
      answer_c: "It is called immediately after updating occurs, including the initial render.",
      answer_d: "It can be used to prevent a component from mounting.",
      correct_answer: "b",
    },
    {
      id: 8,
      question: "What is a Closure in JavaScript?",
      answer_a: "A collection of all the variables in scope at the time of creation of the function.",
      answer_b: "A collection of all the variables in the context at the time of creation of the function.",
      answer_c: "Any function within another function.",
      answer_d: "A different way of describing a callback.",
      correct_answer: "a",
    },

    {
      id: 9,
      question: "What are the data types in JavaScript?",
      answer_a: "String, Number, Boolean, NaN, Object, null, Symbol",
      answer_b: "String, Number, Boolean, undefined, Object, null, Symbol, NaN",
      answer_c: "String, Number, Boolean, undefined, Object, null, Symbol",
      answer_d: "String, Number, Boolean, undefined, Object, Symbol",
      correct_answer: "c",
    },

  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: '',
  };

  const [state,dispatch] = useReducer(quizReducer, initialState);
  const {currentQuestion, currentAnswer, answers, showResults, error} = state;

  // eslint-disable-next-line
  const question = questions[currentQuestion];

  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error"> </div>;
  }

  const renderResultMark = (question,answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Guessed Correctly</span>
    } 
    return <span className="failed">Utter Failure</span> 
  }

  const renderResultsData = () => {
    return answers.map( answer => {
      const question = questions.find(
        question => question.id === answer.questionId
        );

        return (
          <div key={question.id}>
            {question.question} | {renderResultMark(question,answer)}
          </div>
        )
        });

  };

  const restart = () => {
    dispatch({type: RESET_QUIZ});
  }

  const next = () => {
    const answer = {questionId: question.id, answer: currentAnswer};

    if (!currentAnswer) {
      dispatch({type: SET_ERROR, error: 'Select an option, dagnabbit!'})
      return;
    }
    
    answers.push(answer);

    dispatch({ type: SET_ANSWERS, answers});
    dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION, 
        currentQuestion: currentQuestion + 1
      });
      return;
    }
    dispatch({type: SET_SHOW_RESULTS, showResults: true});

  };

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>
          {renderResultsData()}
        </ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
          </button>
      </div>
    )
  } else {

    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Header />
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers />

          <button className="btn btn-primary" onClick={next}>
            Confirm and continue
          </button>
    
        </div>
      </QuizContext.Provider>
    );
  }

};

