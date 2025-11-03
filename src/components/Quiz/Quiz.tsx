import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, RotateCcw } from 'lucide-react';
import type { QuizQuestion } from '../../types';
import './Quiz.css';

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
}

export default function Quiz({ questions, title = "Quiz" }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const question = questions[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return; // Nie pozwól zmieniać odpowiedzi

    if (question.type === 'single' || question.type === 'truefalse') {
      setSelectedAnswers([index]);
    } else {
      // multiple choice
      if (selectedAnswers.includes(index)) {
        setSelectedAnswers(selectedAnswers.filter(i => i !== index));
      } else {
        setSelectedAnswers([...selectedAnswers, index]);
      }
    }
  };

  const checkAnswer = () => {
    const isCorrect =
      selectedAnswers.length === question.correctAnswers.length &&
      selectedAnswers.every(ans => question.correctAnswers.includes(ans));

    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  const isCorrect = () => {
    return (
      selectedAnswers.length === question.correctAnswers.length &&
      selectedAnswers.every(ans => question.correctAnswers.includes(ans))
    );
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h2>Wynik quizu</h2>
          <div className={`score-display ${percentage >= 70 ? 'pass' : 'fail'}`}>
            <div className="score-number">{percentage}%</div>
            <div className="score-fraction">{score} / {questions.length}</div>
          </div>
          {percentage >= 70 ? (
            <div className="result-message success">
              <CheckCircle size={48} />
              <p>Świetna robota! Opanowałeś materiał!</p>
            </div>
          ) : percentage >= 50 ? (
            <div className="result-message warning">
              <AlertCircle size={48} />
              <p>Nieźle, ale warto jeszcze poćwiczyć!</p>
            </div>
          ) : (
            <div className="result-message error">
              <XCircle size={48} />
              <p>Trzeba jeszcze popracować nad materiałem.</p>
            </div>
          )}
          <button onClick={restartQuiz} className="btn-primary restart-btn">
            <RotateCcw size={20} />
            Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{title}</h2>
        <div className="quiz-progress">
          Pytanie {currentQuestion + 1} z {questions.length}
        </div>
      </div>

      <div className="question-card">
        <h3 className="question-text">{question.question}</h3>

        <div className="options-list">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswers.includes(index);
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
                    {question.type === 'multiple' ? (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        disabled={isAnswered}
                      />
                    ) : (
                      <input
                        type="radio"
                        checked={isSelected}
                        onChange={() => {}}
                        disabled={isAnswered}
                      />
                    )}
                  </div>
                  <div className="option-text">{option}</div>
                  {showCorrect && (
                    <CheckCircle className="result-icon" size={20} />
                  )}
                  {showWrong && (
                    <XCircle className="result-icon" size={20} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {isAnswered && question.explanation && (
          <div className={`explanation ${isCorrect() ? 'correct' : 'incorrect'}`}>
            <div className="explanation-header">
              {isCorrect() ? (
                <>
                  <CheckCircle size={20} />
                  <strong>Prawidłowa odpowiedź!</strong>
                </>
              ) : (
                <>
                  <XCircle size={20} />
                  <strong>Nieprawidłowa odpowiedź</strong>
                </>
              )}
            </div>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!isAnswered ? (
            <button
              onClick={checkAnswer}
              disabled={selectedAnswers.length === 0}
              className="btn-primary"
            >
              Sprawdź odpowiedź
            </button>
          ) : (
            <button onClick={nextQuestion} className="btn-primary">
              {currentQuestion < questions.length - 1 ? 'Następne pytanie' : 'Zobacz wynik'}
            </button>
          )}
        </div>
      </div>

      <div className="quiz-score-tracker">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`score-dot ${
              index === currentQuestion ? 'current' : ''
            } ${
              answeredQuestions[index] ? 'answered' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
