import React from 'react';
import Progress from './components/Progress';
import Question from './components/Question';
import './App.css';

function App() {
  return (
    <div className="container">
      <Progress total="3" current="1" />
      <Question question="What is React?" />
    </div>
  );
}

export default App;
