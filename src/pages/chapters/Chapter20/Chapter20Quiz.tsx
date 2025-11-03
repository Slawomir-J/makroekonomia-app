import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Quiz from '../../../components/Quiz/Quiz';
import { chapter20Quiz } from '../../../data/chapter20-quiz';
import './Chapter20.css';

export default function Chapter20Quiz() {
  return (
    <div className="chapter">
      <Link to="/chapter/20" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 20 - Quiz</span>
        <h1>Sprawdź swoją wiedzę</h1>
        <p className="chapter-subtitle">
          Test z wprowadzenia do makroekonomii i rachunku dochodu narodowego
        </p>
      </header>

      <Quiz questions={chapter20Quiz} title="Quiz: Rozdział 20" />
    </div>
  );
}
