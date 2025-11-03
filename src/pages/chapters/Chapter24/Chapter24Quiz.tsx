import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Quiz from '../../../components/Quiz/Quiz';
import { chapter24Questions } from '../../../data/chapter24-quiz';
import '../Chapter20/Chapter20.css';

export default function Chapter24Quiz() {
  return (
    <div className="chapter">
      <Link to="/chapter/24" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 24 - Quiz</span>
        <h1>Test wiedzy: Bank centralny i polityka pieniężna</h1>
        <p className="chapter-subtitle">
          Sprawdź, jak dobrze zrozumiałeś funkcje BC, narzędzia polityki pieniężnej i mechanizm transmisji
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📋 O quizie:</h4>
        <p>
          Quiz składa się z 12 pytań sprawdzających Twoją wiedzę na temat banku centralnego,
          narzędzi polityki pieniężnej (stopy procentowe, operacje otwartego rynku),
          mechanizmu transmisji oraz realnych przykładów (COVID-19, walka z inflacją 2022-2023).
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Zawiera pytania jednokrotnego i wielokrotnego wyboru oraz obliczenia.</strong> Powodzenia!
        </p>
      </div>

      <Quiz questions={chapter24Questions} />

      <div className="chapter-nav" style={{ marginTop: '2rem' }}>
        <Link to="/chapter/24" className="btn-secondary">
          ← Wróć do teorii
        </Link>
        <Link to="/chapter/24/simulator" className="btn-primary">
          Symulator polityki pieniężnej →
        </Link>
      </div>
    </div>
  );
}
