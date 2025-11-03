import { useState } from 'react';
import { Check, X, Calculator, Eye } from 'lucide-react';
import type { CalculationQuestion as CalculationQuestionType } from '../../types';
import './CalculationQuestion.css';

interface CalculationQuestionProps {
  question: CalculationQuestionType;
  onAnswer: (isCorrect: boolean, userAnswer: number[]) => void;
  showSolutionByDefault?: boolean;
  isAnswered?: boolean;
}

export default function CalculationQuestion({
  question,
  onAnswer,
  showSolutionByDefault = true,
  isAnswered: externalIsAnswered = false
}: CalculationQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const isAnswered = externalIsAnswered;

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = question.correctAnswers.includes(selectedAnswer);
    onAnswer(isCorrect, [selectedAnswer]);

    // Auto-pokaż rozwiązanie jeśli showSolutionByDefault
    if (showSolutionByDefault) {
      setShowSolution(true);
    }
  };

  const isCorrect = () => {
    return selectedAnswer !== null && question.correctAnswers.includes(selectedAnswer);
  };

  return (
    <div className="calculation-question">
      {/* Dane wejściowe */}
      <div className="givens-section">
        <div className="givens-header">
          <Calculator size={18} />
          <strong>Dane:</strong>
        </div>
        <ul className="givens-list">
          {Object.entries(question.givens).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      {/* Pytanie */}
      <div className="calculation-task">
        <p><strong>Zadanie:</strong> {question.question}</p>
      </div>

      {/* Opcje odpowiedzi */}
      <div className="options-list">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = question.correctAnswers.includes(index);
          const showCorrect = isAnswered && isCorrectAnswer;
          const showWrong = isAnswered && isSelected && !isCorrectAnswer;

          let className = 'option-item';
          if (isSelected) className += ' selected';
          if (showCorrect) className += ' correct';
          if (showWrong) className += ' wrong';
          if (isAnswered) className += ' disabled';

          return (
            <div
              key={index}
              className={className}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="option-content">
                <div className="option-indicator">
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => {}}
                    disabled={isAnswered}
                  />
                </div>
                <div className="option-text">{option}</div>
                {showCorrect && (
                  <Check className="result-icon" size={20} />
                )}
                {showWrong && (
                  <X className="result-icon" size={20} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Przycisk sprawdzania (dla zadań obliczeniowych) */}
      {!isAnswered && (
        <button
          onClick={handleCheckAnswer}
          disabled={selectedAnswer === null}
          className="btn-primary check-answer-btn"
        >
          Sprawdź odpowiedź
        </button>
      )}

      {/* Przycisk pokazywania rozwiązania */}
      {isAnswered && !showSolution && !showSolutionByDefault && (
        <button
          onClick={() => setShowSolution(true)}
          className="btn-secondary show-solution-btn"
        >
          <Eye size={20} />
          Pokaż rozwiązanie krok po kroku
        </button>
      )}

      {/* Rozwiązanie krok po kroku */}
      {isAnswered && (showSolution || showSolutionByDefault) && (
        <div className={`solution-section ${isCorrect() ? 'correct' : 'incorrect'}`}>
          <div className="solution-header">
            {isCorrect() ? (
              <>
                <Check size={20} />
                <strong>Prawidłowa odpowiedź! Rozwiązanie:</strong>
              </>
            ) : (
              <>
                <X size={20} />
                <strong>Nieprawidłowa odpowiedź. Poprawne rozwiązanie:</strong>
              </>
            )}
          </div>

          <div className="solution-steps">
            {question.steps.map((step, index) => (
              <div key={index} className="solution-step">
                <div className="step-number">Krok {index + 1}</div>
                <div className="step-content">
                  <div className="step-description">{step.description}</div>
                  {step.formula && (
                    <div className="step-formula">
                      <code>{step.formula}</code>
                    </div>
                  )}
                  {step.calculation && (
                    <div className="step-calculation">
                      {step.calculation}
                    </div>
                  )}
                  {step.result && (
                    <div className="step-result">
                      <strong>= {step.result}</strong>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="final-answer">
            <strong>Odpowiedź końcowa:</strong> {question.finalAnswer}
            {question.unit && ` ${question.unit}`}
          </div>

          {question.explanation && (
            <div className="explanation-text">
              <p>{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
