import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Quiz from '../../../components/Quiz/Quiz';
import { chapter22Questions } from '../../../data/chapter22-quiz';
import '../Chapter20/Chapter20.css';

export default function Chapter22Quiz() {
  return (
    <div className="chapter">
      <Link to="/chapter/22" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 22 - Quiz</span>
        <h1>Test wiedzy: Polityka fiskalna i handel zagraniczny</h1>
        <p className="chapter-subtitle">
          Sprawdź, jak dobrze zrozumiałeś politykę fiskalną, deficyt, dług i handel międzynarodowy
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📋 O quizie:</h4>
        <p>
          Quiz składa się z 12 pytań sprawdzających Twoją wiedzę na temat polityki fiskalnej
          (ekspansywnej i restrykcyjnej), deficytu budżetowego, długu publicznego oraz handlu zagranicznego.
          Znajdziesz tu zarówno pytania teoretyczne, jak i praktyczne przykłady z lat 2020-2024.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Zawiera pytania jednokrotnego i wielokrotnego wyboru.</strong> Powodzenia!
        </p>
      </div>

      <Quiz questions={chapter22Questions} />

      <div className="chapter-nav" style={{ marginTop: '2rem' }}>
        <Link to="/chapter/22" className="btn-secondary">
          ← Wróć do teorii
        </Link>
        <Link to="/chapter/22/calculator" className="btn-primary">
          Kalkulator deficytu →
        </Link>
      </div>
    </div>
  );
}
