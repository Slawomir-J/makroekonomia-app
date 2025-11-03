import { CheckCircle, XCircle, AlertCircle, RotateCcw, Home } from 'lucide-react';
import type { ExamResult } from '../../types';
import './ExamResults.css';

interface ExamResultsProps {
  result: ExamResult;
  onRetake: () => void;
  onGoHome: () => void;
}

export default function ExamResults({ result, onRetake, onGoHome }: ExamResultsProps) {
  const { score, totalQuestions, percentage, timeTaken } = result;

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  const getGrade = (percentage: number): string => {
    if (percentage >= 90) return '5.0 (celujący)';
    if (percentage >= 80) return '4.5 (bardzo dobry+)';
    if (percentage >= 70) return '4.0 (bardzo dobry)';
    if (percentage >= 60) return '3.5 (dobry+)';
    if (percentage >= 50) return '3.0 (dobry)';
    if (percentage >= 40) return '2.5 (dostateczny+)';
    if (percentage >= 30) return '2.0 (dostateczny)';
    return '1.0 (niedostateczny)';
  };

  const getResultClass = (): string => {
    if (percentage >= 70) return 'excellent';
    if (percentage >= 50) return 'good';
    if (percentage >= 30) return 'fair';
    return 'poor';
  };

  const getMessage = (): { icon: React.ReactNode; text: string; subtext: string } => {
    if (percentage >= 90) {
      return {
        icon: <CheckCircle size={64} />,
        text: 'Wspaniały wynik!',
        subtext: 'Doskonale opanowałeś materiał z makroekonomii!'
      };
    }
    if (percentage >= 70) {
      return {
        icon: <CheckCircle size={64} />,
        text: 'Bardzo dobry wynik!',
        subtext: 'Świetnie sobie poradziłeś, jesteś dobrze przygotowany!'
      };
    }
    if (percentage >= 50) {
      return {
        icon: <AlertCircle size={64} />,
        text: 'Niezły wynik!',
        subtext: 'Masz solidne podstawy, ale warto jeszcze poćwiczyć!'
      };
    }
    if (percentage >= 30) {
      return {
        icon: <AlertCircle size={64} />,
        text: 'Wymagana poprawa',
        subtext: 'Musisz jeszcze popracować nad niektórymi zagadnieniami.'
      };
    }
    return {
      icon: <XCircle size={64} />,
      text: 'Potrzebujesz więcej nauki',
      subtext: 'Wróć do materiału i spróbuj ponownie po powtórce.'
    };
  };

  const message = getMessage();
  const resultClass = getResultClass();

  return (
    <div className="exam-results-container">
      <div className={`exam-results-card ${resultClass}`}>
        {/* Nagłówek */}
        <div className="results-header">
          <h1>Wyniki egzaminu</h1>
        </div>

        {/* Główny wynik */}
        <div className={`score-circle ${resultClass}`}>
          <div className="score-percentage">{percentage}%</div>
          <div className="score-fraction">
            {score} / {totalQuestions}
          </div>
          <div className="score-grade">{getGrade(percentage)}</div>
        </div>

        {/* Komunikat */}
        <div className={`result-message ${resultClass}`}>
          <div className="message-icon">{message.icon}</div>
          <h2>{message.text}</h2>
          <p>{message.subtext}</p>
        </div>

        {/* Statystyki */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <CheckCircle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-label">Poprawne</div>
              <div className="stat-value">{score}</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <XCircle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-label">Błędne</div>
              <div className="stat-value">{totalQuestions - score}</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Czas</div>
              <div className="stat-value">{formatTime(timeTaken)}</div>
            </div>
          </div>
        </div>

        {/* Przyciski akcji */}
        <div className="results-actions">
          <button onClick={onRetake} className="btn-primary retry-btn">
            <RotateCcw size={20} />
            Spróbuj ponownie
          </button>
          <button onClick={onGoHome} className="btn-secondary home-btn">
            <Home size={20} />
            Strona główna
          </button>
        </div>
      </div>
    </div>
  );
}
