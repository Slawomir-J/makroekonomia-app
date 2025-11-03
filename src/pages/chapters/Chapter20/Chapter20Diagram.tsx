import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CircularFlow from '../../../components/Exercise/CircularFlow';
import './Chapter20.css';

export default function Chapter20Diagram() {
  return (
    <div className="chapter">
      <Link to="/chapter/20" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 20 - Diagram</span>
        <h1>Interaktywny Ruch Okrężny</h1>
        <p className="chapter-subtitle">
          Eksploruj przepływy między gospodarstwami domowymi a przedsiębiorstwami
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Jak korzystać z diagramu:</h4>
        <ul>
          <li><strong>Klikaj w elementy</strong> (gospodarstwa domowe, przedsiębiorstwa, strzałki) aby zobaczyć wyjaśnienia</li>
          <li><strong>Animuj przepływy</strong> - zobacz jak krążą pieniądze i dobra</li>
          <li><strong>Włącz państwo</strong> - zobacz jak działają podatki, transfery i wydatki rządowe</li>
          <li><strong>Włącz zagranicę</strong> - dodaj eksport i import do modelu</li>
          <li><strong>Dostosuj wartości</strong> - zmień liczby i zobacz jak bilansują się równania</li>
        </ul>
      </div>

      <CircularFlow />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Kluczowe wnioski:</h4>
        <ul>
          <li><strong>Wszystko się bilansuje:</strong> Wartość produkcji = Dochody = Wydatki</li>
          <li><strong>W gospodarce zamkniętej bez państwa:</strong> Oszczędności = Inwestycje (S = I)</li>
          <li><strong>Z państwem:</strong> S + T = I + G (oszczędności + podatki = inwestycje + wydatki rządowe)</li>
          <li><strong>W gospodarce otwartej:</strong> Eksport netto (X - M) dodaje się do PKB</li>
          <li><strong>Ruch okrężny pokazuje:</strong> Dlaczego PKB można obliczyć trzema metodami (wszystkie dają ten sam wynik!)</li>
        </ul>
      </div>

      <div className="key-points" style={{ marginTop: '2rem' }}>
        <div className="key-point">
          <strong>Wewnętrzny krąg (przepływy rzeczowe):</strong>
          <ul>
            <li>Gospodarstwa domowe → Przedsiębiorstwa: usługi czynników produkcji (praca, kapitał)</li>
            <li>Przedsiębiorstwa → Gospodarstwa domowe: dobra i usługi (konsumpcja)</li>
          </ul>
        </div>
        <div className="key-point">
          <strong>Zewnętrzny krąg (przepływy pieniężne):</strong>
          <ul>
            <li>Przedsiębiorstwa → Gospodarstwa domowe: dochody (płace, zyski, czynsze)</li>
            <li>Gospodarstwa domowe → Przedsiębiorstwa: wydatki na dobra i usługi</li>
          </ul>
        </div>
        <div className="key-point">
          <strong>Dlaczego to działa?</strong> Każdy wydatek jednego podmiotu jest dochodem drugiego.
          Pieniądze krążą w gospodarce - stąd nazwa "ruch okrężny"!
        </div>
      </div>
    </div>
  );
}
