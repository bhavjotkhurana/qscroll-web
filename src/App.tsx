import React, { useState } from 'react';
import QuestionCard, { Question } from './QuestionCard';
import './App.css';

const staticQuestions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    text: 'What is the value of f(3) if f(x) = 2x - 3?',
    choices: ['3', '5', '7', '9'],
    correctAnswer: '3', // The correct numeric result is 3
  },
  {
    id: 2,
    type: 'self',
    text: 'Solve for x: 2x + 5 = 15',
    correctAnswer: '5', // The correct answer is 5
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCheck = (isCorrect: boolean) => {
    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Incorrect, try again!');
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < staticQuestions.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="App">
      <QuestionCard
        question={staticQuestions[currentIndex]}
        onCheck={handleCheck}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

export default App;
