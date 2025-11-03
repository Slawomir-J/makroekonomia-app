import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EquilibriumCalculator from '../../../components/Exercise/EquilibriumCalculator';
import '../Chapter20/Chapter20.css';

export default function Chapter21Calculator() {
  return (
    <div className="chapter">
      <Link to="/chapter/21" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 21 - Kalkulator</span>
        <h1>Kalkulator Równowagi Makroekonomicznej</h1>
        <p className="chapter-subtitle">
          Oblicz punkt równowagi między produkcją a popytem globalnym
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Jak korzystać z kalkulatora:</h4>
        <ul>
          <li><strong>Ustaw funkcję konsumpcji</strong> - wprowadź C₀ (konsumpcję autonomiczną) i MPC</li>
          <li><strong>Wprowadź wydatki autonomiczne</strong> - inwestycje (I), wydatki rządowe (G), eksport i import</li>
          <li><strong>Obserwuj wyniki</strong> - kalkulator automatycznie obliczy równowagowe PKB (Y*)</li>
          <li><strong>Analizuj wykres</strong> - zobacz punkt przecięcia linii 45° z linią AD</li>
          <li><strong>Eksperymentuj</strong> - zmień G lub I i zobacz efekt mnożnikowy!</li>
        </ul>
      </div>

      <EquilibriumCalculator />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Przykładowe scenariusze do sprawdzenia:</h4>

        <div className="calc-step">
          <strong>Scenariusz 1: Gospodarka zamknięta bez państwa</strong>
          <p>Ustaw: G = 0, X = 0, M = 0</p>
          <p>Przykład: C₀ = 100, MPC = 0,8, I = 200</p>
          <p className="calc-result">Równowaga: Y* = (100 + 200) / (1 - 0,8) = 1500</p>
          <p><strong>Wniosek:</strong> Prosta gospodarka - tylko konsumpcja i inwestycje</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 2: Efekt polityki fiskalnej ekspansywnej</strong>
          <p>Zwiększ wydatki rządowe G z 150 do 200 (+50)</p>
          <p>Przy MPC = 0,8, mnożnik = 5</p>
          <p className="calc-result">Wzrost PKB = 50 × 5 = 250 jednostek!</p>
          <p><strong>Wniosek:</strong> Wydatki rządowe mają silny efekt mnożnikowy</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 3: Gospodarka otwarta z deficytem handlowym</strong>
          <p>Ustaw: X = 100, M = 150 (deficyt -50)</p>
          <p>Zobacz, jak deficyt handlowy obniża równowagowe PKB</p>
          <p><strong>Wniosek:</strong> Import "wycieka" z gospodarki, zmniejszając mnożnik</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 4: Wysoka skłonność do oszczędności</strong>
          <p>Zmniejsz MPC z 0,8 do 0,5</p>
          <p>Mnożnik spadnie z 5 do 2</p>
          <p><strong>Wniosek:</strong> "Paradoks oszczędności" - gdy wszyscy oszczędzają, PKB spada!</p>
        </div>
      </div>

      <div className="key-points" style={{ marginTop: '2rem' }}>
        <div className="key-point">
          <strong>⚖️ Równowaga makroekonomiczna:</strong> Y = AD to stan, w którym produkcja równa się
          popytowi. Przedsiębiorstwa sprzedają wszystko co wyprodukowały - nie ma nadmiaru ani niedoboru.
        </div>
        <div className="key-point">
          <strong>📈 Wykres 45°:</strong> Linia pod kątem 45° to wszystkie punkty, gdzie Y = AD.
          Punkt przecięcia z linią AD to równowaga.
        </div>
        <div className="key-point">
          <strong>🔧 Polityka fiskalna:</strong> Rząd może sterować równowagą zmieniając G.
          Dzięki mnożnikowi efekt jest większy niż sama zmiana wydatków!
        </div>
        <div className="key-point">
          <strong>⚠️ Ograniczenia modelu:</strong> W rzeczywistości istnieją opóźnienia, niepewność,
          ograniczenia podażowe. Model zakłada też stałe ceny - to model krótkiego okresu.
        </div>
      </div>
    </div>
  );
}
