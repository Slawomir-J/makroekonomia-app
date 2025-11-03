import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Quiz from '../../../components/Quiz/Quiz';
import { chapter23Questions } from '../../../data/chapter23-quiz';
import '../Chapter20/Chapter20.css';

export default function Chapter23Quiz() {
  return (
    <div className="chapter">
      <Link to="/chapter/23" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 23 - Quiz</span>
        <h1>Test wiedzy: Pieniądz i system bankowy</h1>
        <p className="chapter-subtitle">
          Sprawdź, jak dobrze zrozumiałeś funkcje pieniądza, agregaty pieniężne i kreację pieniądza
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📋 O quizie:</h4>
        <p>
          Quiz składa się z 12 pytań sprawdzających Twoją wiedzę na temat funkcji pieniądza,
          agregatów pieniężnych (M0, M1, M2, M3), kreacji pieniądza przez banki oraz mnożnika kreacji pieniądza.
          Znajdziesz tu zarówno pytania teoretyczne, jak i obliczeniowe.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Zawiera pytania jednokrotnego i wielokrotnego wyboru.</strong> Powodzenia!
        </p>
      </div>

      <Quiz questions={chapter23Questions} />

      <div className="chapter-nav" style={{ marginTop: '2rem' }}>
        <Link to="/chapter/23" className="btn-secondary">
          ← Wróć do teorii
        </Link>
        <Link to="/chapter/23/calculator" className="btn-primary">
          Kalkulator kreacji pieniądza →
        </Link>
      </div>
    </div>
  );
}
