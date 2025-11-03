import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ValueAddedCalculator from '../../../components/Exercise/ValueAddedCalculator';
import './Chapter20.css';

export default function Chapter20Calculator() {
  return (
    <div className="chapter">
      <Link to="/chapter/20" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 20 - Ćwiczenie</span>
        <h1>Kalkulator Wartości Dodanej</h1>
        <p className="chapter-subtitle">
          Interaktywne narzędzie do obliczania PKB metodą wartości dodanej
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Przypomnij sobie:</h4>
        <p>
          <strong>PKB (Produkt Krajowy Brutto)</strong> można obliczyć sumując wartości dodane
          wszystkich przedsiębiorstw w gospodarce. To eliminuje problem podwójnego liczenia dóbr pośrednich.
        </p>
        <div className="formula">
          Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich
        </div>
        <div className="formula">
          PKB = Σ wartości dodanych wszystkich przedsiębiorstw
        </div>
      </div>

      <ValueAddedCalculator />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Wskazówki:</h4>
        <ul>
          <li>Wypróbuj przykład z książki (producent stali, maszyn, opon, samochodów)</li>
          <li>Dodaj własne przedsiębiorstwa klikając "Dodaj przedsiębiorstwo"</li>
          <li>Zwróć uwagę, że suma wartości dodanych zawsze równa się PKB</li>
          <li>Pamiętaj: maszyna to dobro kapitałowe (finalne), nie pośrednie!</li>
        </ul>
      </div>
    </div>
  );
}
