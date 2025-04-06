import React, { useState } from 'react';
import './QuestionCard.css';

export interface Question {
  id: number;
  type: 'multiple' | 'self';
  text: string;
  choices?: string[];
  correctAnswer?: string;
}

interface QuestionCardProps {
  question: Question;
  onCheck: (isCorrect: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onCheck,
  onPrevious,
  onNext,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const letters = ['A', 'B', 'C', 'D']; // Adjust if more/less than 4 choices

  const handleChoiceChange = (choice: string) => {
    setUserAnswer(choice);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleCheckClick = () => {
    const isCorrect = userAnswer.trim() === question.correctAnswer;
    onCheck(isCorrect);
  };

  return (
    <div className="question-card">
      {/* NAVIGATION BUTTONS */}
      <div className="navigation">
        <button onClick={onPrevious} className="nav-button">↑</button>
        <button onClick={onNext} className="nav-button">↓</button>
      </div>

      {/* QUESTION CONTENT */}
      <div className="question-content">
        <p className="question-text">{question.text}</p>

        {question.type === 'multiple' && question.choices && (
          <div className="choices">
            {question.choices.map((choice, index) => {
              const letter = letters[index];
              return (
                <label key={index} className="choice">
                  {/* Hidden/Off-screen radio for actual selection */}
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={letter}
                    checked={userAnswer === letter}
                    onChange={() => handleChoiceChange(letter)}
                    className="real-radio"
                  />
                  {/* Custom circle + letter */}
                  <span className="choice-letter">{letter}</span>
                  {/* Actual text of the choice */}
                  <span className="choice-text">{choice}</span>
                </label>
              );
            })}
          </div>
        )}

        {question.type === 'self' && (
          <div className="self-answer">
            <input
              type="text"
              placeholder="Enter your answer"
              value={userAnswer}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>

      {/* CHECK BUTTON */}
      <button onClick={handleCheckClick} className="check-button">Check</button>
    </div>
  );
};

export default QuestionCard;
