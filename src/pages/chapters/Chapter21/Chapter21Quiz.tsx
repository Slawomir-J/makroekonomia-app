import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Quiz from '../../../components/Quiz/Quiz';
import { chapter21Quiz } from '../../../data/chapter21-quiz';
import '../Chapter20/Chapter20.css';

export default function Chapter21Quiz() {
  return (
    <div className="chapter">
      <Link to="/chapter/21" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 21 - Quiz</span>
        <h1>Sprawdź swoją wiedzę</h1>
        <p className="chapter-subtitle">
          Test z popytu globalnego, mnożnika wydatków i równowagi makroekonomicznej
        </p>
      </header>

      <Quiz questions={chapter21Quiz} title="Rozdział 21: Popyt globalny" />
    </div>
  );
}
