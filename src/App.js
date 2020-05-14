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


  const initialState = {
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: '',
  };

  const [state,dispatch] = useReducer(quizReducer, initialState);
  const {currentQuestion, currentAnswer, answers, showResults, error} = state;

  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [currentAnswer, setCurrentAnswer] = useState('');
  // const [showResults, setShowResults] = useState(false);
  // const [answers, setAnswers] = useState([]);
  // const [error, setError] = useState('');

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
  ];

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
          <Question question={question.question}/>
          {renderError()}
          <Answers 
            question={question} 
            currentAnswer={currentAnswer} 
            />

          <button className="btn btn-primary" onClick={next}>
            Confirm and continue
          </button>
    
        </div>
      </QuizContext.Provider>
    );
  }

};

