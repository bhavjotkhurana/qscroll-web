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
  onCheck: (isCorrect: boolean) => void; // We'll pass back whether user is correct
  onPrevious: () => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onCheck,
  onPrevious,
  onNext,
}) => {
  // Store user's answer locally
  const [userAnswer, setUserAnswer] = useState('');

  // For multiple choice, update userAnswer when a radio button is selected
  const handleChoiceChange = (choice: string) => {
    setUserAnswer(choice);
  };

  // For self-entered, update as they type
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  // Check correctness locally, then notify parent
  const handleCheckClick = () => {
    // Compare userAnswer with question.correctAnswer (if provided)
    const isCorrect = userAnswer.trim() === question.correctAnswer;
    onCheck(isCorrect);
  };

  return (
    <div className="question-card">
      <div className="navigation">
        <button onClick={onPrevious} className="nav-button">↑</button>
        <button onClick={onNext} className="nav-button">↓</button>
      </div>
      <div className="question-content">
        <p className="question-text">{question.text}</p>

        {question.type === 'multiple' && question.choices && (
          <div className="choices">
            {question.choices.map((choice, index) => (
              <label key={index} className="choice">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={choice}
                  checked={userAnswer === choice}
                  onChange={() => handleChoiceChange(choice)}
                />
                {choice}
              </label>
            ))}
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

      <button onClick={handleCheckClick} className="check-button">Check</button>
    </div>
  );
};

export default QuestionCard;
