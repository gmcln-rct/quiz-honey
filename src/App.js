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

  const questionsLibrary = [
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
      question: "What are the primitive data types in JavaScript?",
      answer_a: "String, Number, Boolean, NaN, Object, null, Symbol",
      answer_b: "String, Number, Boolean, undefined, Object, null, Symbol",
      answer_c: "String, Number, Boolean, undefined, null, Symbol",
      answer_d: "String, Number, Boolean, undefined, Object, Symbol",
      correct_answer: "c",
    },

    {
      id: 10,
      question: "What is the difference between Attributes and Property in JavaScript?",
      answer_a: "An Property provides more details about an element like id, type, value etc, whereas the Atribute is the value assigned to the Attrubyte like type='text' or value='name'.",
      answer_b: "An Attribute provides more details about an element like id, type, value etc, whereas the Property is the value assigned to the Attrubyte like type='”'text'”' or value='name'.",
      answer_c: "A Property is any value that belongs to an object, and an Attribute describes it.",
      answer_d: "Unline Attritbutes, in general a standard HTML Property automatically becomes a property of DOM objects.",
      correct_answer: "b",
    },
    {
      id: 11,
      question: "Which of the below are four ways an HTML element can be accessed by JavaScript code?",
      answer_a: "getElementById, getElementsByClassName, queryTagName, querySelector",
      answer_b: "getElementById, getElementsByClassName, getElementsByTagName, querySelector",
      answer_c: "getElementById, getElementByClassName, getElementByTag, querySelector",
      answer_d: "getElementById, getElementByClassName, getElementByTagName, querySelector",
      correct_answer: "b",
    },

    {
      id: 12,
      question: "What is the difference between window & document in JavaScript?",
      answer_a: "While window is a global object which holds variables, functions, history,and location, the document comes under the window and can be considered as the property of the window.",
      answer_b: "Document and window both are global objects but document is called at runtime.",
      answer_c: "While document is a global object which holds variables, functions, history,and location, the window comes under the document and can be considered as the property of the document.",
      answer_d: "The window hold variables and functions whereas the document holds history and location of an object.",
      correct_answer: "a",
    },

    {
      id: 13,
      question: "In JavaScript, what is the difference in how primitive and object types are passed in functions?",
      answer_a: "Primitives are passed by value and objects are passed by reference.",
      answer_b: "There is no difference in how they are passed.",
      answer_c: "Objects are passed by value and primitive data types are passed by reference.",
      answer_d: "Primitives can only be passed by value whereas objects can be passed by value or by reference.",
      correct_answer: "a",
    },

    {
      id: 14,
      question: "Which of the following is not true about 'strict mode' in JavaScript?",
      answer_a: "It can be enabled by adding “use strict” at the beginning of a file, a program, or a function.",
      answer_b: "It enforces strict limits on the number of variables you can use in any given file.",
      answer_c: "It enables better error-checking into JavaScript code.",
      answer_d: "You cannot use implicitly declared variables or add a property to an object that is not extensible.",
      correct_answer: "b",
    },

    {
      id: 15,
      question: "What is the difference between call and apply in JavaScript?",
      answer_a: "Apply creates a copy of the function and sets the this keyword.",
      answer_b: "Call accepts an array of arguments while Apply accepts comma-separated values.",
      answer_c: "Apply accepts accepts an array of arguments instead of comma separated values.",
      answer_d: "Call creates a copy of the function and sets the this keyword.",
      correct_answer: "c",
    },
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let randNum = getRandomInt(15);

  console.log(randNum);
  const createQuestions = () => {
    let questionSet = [];
    let questionsLength = questionsLibrary.length;
    while (questionSet.length < 5) {
      let randNum = getRandomInt(questionsLength);
      
      if(!questionSet.includes(questionsLibrary[randNum])) {
        questionSet.push(questionsLibrary[randNum]);
      }
    }
      return questionSet;
  }

  // let questions = createQuestions();

let questions = questionsLibrary;

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

