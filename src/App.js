import React from 'react';
import Progress from './components/Progress';
import './App.css';

function App() {
  return (
    <div className="container">
      <Progress total="3" currentQuestion="1"></Progress>
    </div>
  );
}

export default App;
