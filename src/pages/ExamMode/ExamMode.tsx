import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Calculator, CheckSquare, Play, Check, X } from 'lucide-react';
import CalculationQuestion from '../../components/CalculationQuestion/CalculationQuestion';
import ExamTimer from '../../components/ExamTimer/ExamTimer';
import ExamResults from '../../components/ExamResults/ExamResults';
import { getRandomExamQuestions, analyzeWeakAreas } from '../../data/exam-questions';
import type { QuizQuestion, CalculationQuestion as CalcQuestionType, ExamResult, ExamSettings } from '../../types';
import './ExamMode.css';

type ExamPhase = 'setup' | 'exam' | 'results';

export default function ExamMode() {
  const navigate = useNavigate();

  // Faza egzaminu
  const [phase, setPhase] = useState<ExamPhase>('setup');

  // Ustawienia
  const [settings, setSettings] = useState<ExamSettings>({
    questionCount: 15,
    timeLimit: 45,
    includeTheory: true,
    includeCalculations: true
  });

  // Stan egzaminu
  const [questions, setQuestions] = useState<(QuizQuestion | CalcQuestionType)[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { userAnswer: number[]; correct: boolean } }>({});
  const [startTime, setStartTime] = useState<number>(0);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Stan aktualnego pytania
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCurrentAnswered, setIsCurrentAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Rozpocznij egzamin
  const startExam = () => {
    const selectedQuestions = getRandomExamQuestions(
      settings.questionCount,
      settings.includeTheory,
      settings.includeCalculations
    );

    if (selectedQuestions.length === 0) {
      alert('Musisz wybrać przynajmniej jeden typ pytań!');
      return;
    }

    setQuestions(selectedQuestions);
    setStartTime(Date.now());
    setPhase('exam');
  };

  // Obsługa wyboru odpowiedzi (dla pytań teoretycznych)
  const handleAnswerSelect = (index: number) => {
    if (isCurrentAnswered) return; // Nie pozwól zmieniać po sprawdzeniu

    if (currentQuestion.type === 'single' || currentQuestion.type === 'truefalse') {
      setSelectedAnswers([index]);
    } else if (currentQuestion.type === 'multiple') {
      if (selectedAnswers.includes(index)) {
        setSelectedAnswers(selectedAnswers.filter(i => i !== index));
      } else {
        setSelectedAnswers([...selectedAnswers, index]);
      }
    }
  };

  // Sprawdź odpowiedź
  const checkAnswer = () => {
    const isCorrect =
      selectedAnswers.length === currentQuestion.correctAnswers.length &&
      selectedAnswers.every(ans => currentQuestion.correctAnswers.includes(ans));

    setAnswers({
      ...answers,
      [currentQuestion.id]: {
        userAnswer: selectedAnswers,
        correct: isCorrect
      }
    });

    setIsCurrentAnswered(true);
  };

  // Obsługa odpowiedzi dla zadań obliczeniowych
  const handleCalculationAnswer = (isCorrect: boolean, userAnswer: number[]) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: {
        userAnswer: userAnswer,
        correct: isCorrect
      }
    });
    setIsCurrentAnswered(true);
  };

  // Przejdź do następnego pytania
  const nextQuestion = () => {
    if (isLastQuestion) {
      finishExam();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setIsCurrentAnswered(false);
    }
  };

  // Zakończ egzamin
  const finishExam = () => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const score = Object.values(answers).filter(a => a.correct).length;
    const percentage = Math.round((score / questions.length) * 100);

    const answeredQuestions = questions.map(q => ({
      questionId: q.id,
      correct: answers[q.id]?.correct || false,
      userAnswer: answers[q.id]?.userAnswer || [],
      correctAnswer: q.correctAnswers
    }));

    const weakAreas = analyzeWeakAreas(answeredQuestions);

    const result: ExamResult = {
      score,
      totalQuestions: questions.length,
      percentage,
      timeTaken,
      answeredQuestions,
      weakAreas
    };

    setExamResult(result);
    setPhase('results');
  };

  // Czas się skończył
  const handleTimeUp = () => {
    finishExam();
  };

  // Restart egzaminu
  const retakeExam = () => {
    setPhase('setup');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setExamResult(null);
    setQuestions([]);
  };

  // ===== EKRAN SETUP =====
  if (phase === 'setup') {
    return (
      <div className="exam-mode-container">
        <div className="exam-setup">
          <div className="setup-header">
            <BookOpen size={48} />
            <h1>Tryb Egzamin</h1>
            <p>Sprawdź swoją wiedzę z makroekonomii</p>
          </div>

          <div className="setup-form">
            {/* Liczba pytań */}
            <div className="setting-group">
              <label htmlFor="questionCount">
                <CheckSquare size={20} />
                Liczba pytań
              </label>
              <select
                id="questionCount"
                value={settings.questionCount}
                onChange={(e) => setSettings({ ...settings, questionCount: parseInt(e.target.value) })}
              >
                <option value={10}>10 pytań (szybki test)</option>
                <option value={15}>15 pytań (standardowy)</option>
                <option value={20}>20 pytań (rozszerzony)</option>
                <option value={30}>30 pytań (pełny egzamin)</option>
              </select>
            </div>

            {/* Limit czasu */}
            <div className="setting-group">
              <label htmlFor="timeLimit">
                <Clock size={20} />
                Limit czasu
              </label>
              <select
                id="timeLimit"
                value={settings.timeLimit}
                onChange={(e) => setSettings({ ...settings, timeLimit: parseInt(e.target.value) })}
              >
                <option value={0}>Bez limitu</option>
                <option value={30}>30 minut</option>
                <option value={45}>45 minut</option>
                <option value={60}>60 minut</option>
                <option value={90}>90 minut</option>
              </select>
            </div>

            {/* Typy pytań */}
            <div className="setting-group">
              <label>Typy pytań</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.includeTheory}
                    onChange={(e) => setSettings({ ...settings, includeTheory: e.target.checked })}
                  />
                  <BookOpen size={18} />
                  Pytania teoretyczne
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.includeCalculations}
                    onChange={(e) => setSettings({ ...settings, includeCalculations: e.target.checked })}
                  />
                  <Calculator size={18} />
                  Zadania obliczeniowe
                </label>
              </div>
            </div>

            {/* Informacja */}
            <div className="exam-info">
              <h3>Co cię czeka:</h3>
              <ul>
                <li>
                  {settings.questionCount} pytań
                  {settings.includeTheory && settings.includeCalculations && ' (teoria + obliczenia)'}
                  {settings.includeTheory && !settings.includeCalculations && ' (tylko teoria)'}
                  {!settings.includeTheory && settings.includeCalculations && ' (tylko obliczenia)'}
                </li>
                <li>
                  {settings.timeLimit > 0 ? `${settings.timeLimit} minut na rozwiązanie` : 'Bez limitu czasu'}
                </li>
                <li>Pytania losowe z wszystkich rozdziałów (20-24)</li>
                <li>Szczegółowa analiza wyników i słabych punktów</li>
              </ul>
            </div>

            {/* Przycisk start */}
            <button onClick={startExam} className="btn-primary start-exam-btn">
              <Play size={24} />
              Rozpocznij egzamin
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== EKRAN EGZAMINU =====
  if (phase === 'exam' && currentQuestion) {
    const isCalculation = currentQuestion.type === 'calculation';
    const isCorrectAnswer = () => {
      return (
        selectedAnswers.length === currentQuestion.correctAnswers.length &&
        selectedAnswers.every(ans => currentQuestion.correctAnswers.includes(ans))
      );
    };

    return (
      <div className="exam-mode-container">
        <div className="exam-in-progress">
          {/* Timer */}
          <ExamTimer
            timeLimitMinutes={settings.timeLimit}
            onTimeUp={handleTimeUp}
          />

          {/* Postęp */}
          <div className="exam-progress-bar">
            <div className="progress-info">
              <span>Pytanie {currentQuestionIndex + 1} z {questions.length}</span>
              <span>{Math.round(((currentQuestionIndex) / questions.length) * 100)}% ukończone</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Pytanie */}
          <div className="question-container">
            {isCalculation ? (
              <CalculationQuestion
                question={currentQuestion as CalcQuestionType}
                onAnswer={handleCalculationAnswer}
                showSolutionByDefault={false}
                isAnswered={isCurrentAnswered}
              />
            ) : (
              <>
                <h3 className="theory-question-title">{currentQuestion.question}</h3>

                <div className="options-list">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswers.includes(index);
                    const isCorrectOption = currentQuestion.correctAnswers.includes(index);
                    const showCorrect = isCurrentAnswered && isCorrectOption;
                    const showWrong = isCurrentAnswered && isSelected && !isCorrectOption;

                    let className = 'option-item';
                    if (isSelected) className += ' selected';
                    if (showCorrect) className += ' correct';
                    if (showWrong) className += ' wrong';
                    if (isCurrentAnswered) className += ' disabled';

                    return (
                      <div
                        key={index}
                        className={className}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <div className="option-content">
                          <div className="option-indicator">
                            {currentQuestion.type === 'multiple' ? (
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => {}}
                                disabled={isCurrentAnswered}
                              />
                            ) : (
                              <input
                                type="radio"
                                checked={isSelected}
                                onChange={() => {}}
                                disabled={isCurrentAnswered}
                              />
                            )}
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

                {/* Wyjaśnienie po sprawdzeniu */}
                {isCurrentAnswered && currentQuestion.explanation && (
                  <div className={`explanation ${isCorrectAnswer() ? 'correct' : 'incorrect'}`}>
                    <div className="explanation-header">
                      {isCorrectAnswer() ? (
                        <>
                          <Check size={20} />
                          <strong>Prawidłowa odpowiedź!</strong>
                        </>
                      ) : (
                        <>
                          <X size={20} />
                          <strong>Nieprawidłowa odpowiedź</strong>
                        </>
                      )}
                    </div>
                    <p>{currentQuestion.explanation}</p>
                  </div>
                )}
              </>
            )}

            {/* Przyciski akcji */}
            <div className="exam-actions">
              {!isCalculation && !isCurrentAnswered && (
                <button
                  onClick={checkAnswer}
                  disabled={selectedAnswers.length === 0}
                  className="btn-primary check-answer-btn"
                >
                  Sprawdź odpowiedź
                </button>
              )}

              {isCurrentAnswered && (
                <button onClick={nextQuestion} className="btn-primary next-btn">
                  {isLastQuestion ? 'Zakończ egzamin' : 'Następne pytanie →'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== EKRAN WYNIKÓW =====
  if (phase === 'results' && examResult) {
    return (
      <ExamResults
        result={examResult}
        onRetake={retakeExam}
        onGoHome={() => navigate('/')}
      />
    );
  }

  return null;
}
