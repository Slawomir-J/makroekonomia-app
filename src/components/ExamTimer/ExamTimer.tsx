import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import './ExamTimer.css';

interface ExamTimerProps {
  timeLimitMinutes: number; // 0 = bez limitu
  onTimeUp?: () => void;
  isPaused?: boolean;
}

export default function ExamTimer({
  timeLimitMinutes,
  onTimeUp,
  isPaused = false
}: ExamTimerProps) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSecondsElapsed(prev => {
        const newSeconds = prev + 1;

        // Sprawdź, czy czas się skończył (tylko jeśli jest limit)
        if (timeLimitMinutes > 0 && newSeconds >= timeLimitMinutes * 60) {
          clearInterval(interval);
          onTimeUp?.();
          return timeLimitMinutes * 60;
        }

        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLimitMinutes, onTimeUp, isPaused]);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  const getTimeRemaining = (): number => {
    if (timeLimitMinutes === 0) return Infinity;
    return Math.max(0, timeLimitMinutes * 60 - secondsElapsed);
  };

  const getPercentageRemaining = (): number => {
    if (timeLimitMinutes === 0) return 100;
    return Math.max(0, (getTimeRemaining() / (timeLimitMinutes * 60)) * 100);
  };

  const isWarning = (): boolean => {
    if (timeLimitMinutes === 0) return false;
    const percentRemaining = getPercentageRemaining();
    return percentRemaining <= 25 && percentRemaining > 10;
  };

  const isCritical = (): boolean => {
    if (timeLimitMinutes === 0) return false;
    return getPercentageRemaining() <= 10;
  };

  // Bez limitu czasu
  if (timeLimitMinutes === 0) {
    return (
      <div className="exam-timer no-limit">
        <Clock size={20} />
        <span className="timer-text">
          Czas: {formatTime(secondsElapsed)}
        </span>
      </div>
    );
  }

  // Z limitem czasu
  const timeRemaining = getTimeRemaining();
  const className = `exam-timer ${isWarning() ? 'warning' : ''} ${isCritical() ? 'critical' : ''}`;

  return (
    <div className={className}>
      <div className="timer-icon">
        {isCritical() ? <AlertTriangle size={20} /> : <Clock size={20} />}
      </div>
      <div className="timer-content">
        <div className="timer-label">Pozostały czas:</div>
        <div className="timer-text">{formatTime(timeRemaining)}</div>
      </div>
      <div className="timer-progress">
        <div
          className="timer-progress-bar"
          style={{ width: `${getPercentageRemaining()}%` }}
        />
      </div>
    </div>
  );
}

// Hook do eksportowania czasu
export function useExamTime() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return {
    secondsElapsed,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
    reset: () => setSecondsElapsed(0)
  };
}
