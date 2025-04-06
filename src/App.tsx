import React, { useState } from 'react';
import QuestionCard, { Question } from './QuestionCard';
import './App.css';

const staticQuestions: Question[] = [
  {
    id: 1,
    type: 'multiple',
    text: 'What is the value of f(3) if f(x) = 2x - 3?',
    choices: ['3', '5', '7', '9'],
    correctAnswer: 'A', // Updated: "A" means the first option is correct
  },
  {
    id: 2,
    type: 'self',
    text: 'Solve for x: 2x + 5 = 15',
    correctAnswer: '5', // For self-entered, we keep the actual answer
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCheck = (isCorrect: boolean) => {
    // Instead of alerting, you could log or update state to show inline feedback.
    console.log(isCorrect ? 'Correct!' : 'Incorrect, try again!');
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
