import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MoneyCreationCalculator from '../../../components/Exercise/MoneyCreationCalculator';
import '../Chapter20/Chapter20.css';

export default function Chapter23Calculator() {
  return (
    <div className="chapter">
      <Link to="/chapter/23" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 23 - Kalkulator</span>
        <h1>Kalkulator kreacji pieniądza</h1>
        <p className="chapter-subtitle">
          Zobacz, jak banki "tworzą" pieniądz przez proces udzielania kredytów
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Jak korzystać z kalkulatora:</h4>
        <ul>
          <li><strong>Ustaw depozyt początkowy</strong> - kwotę wpłaconą do pierwszego banku</li>
          <li><strong>Ustaw stopę rezerw obowiązkowych</strong> - jaki % depozytów bank musi zatrzymać</li>
          <li><strong>Obserwuj proces krok po kroku</strong> - tabela pokazuje każdą rundę kreacji pieniądza</li>
          <li><strong>Zobacz wykres</strong> - jak suma depozytów zbliża się do końcowej wartości</li>
          <li><strong>Eksperymentuj!</strong> - zmień stopę rezerw i zobacz, jak zmienia się mnożnik</li>
        </ul>
      </div>

      <MoneyCreationCalculator />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Przykładowe scenariusze do sprawdzenia:</h4>

        <div className="calc-step">
          <strong>Scenariusz 1: Typowa stopa rezerw (10%)</strong>
          <p>Ustaw: Depozyt = 1000 zł, r = 10%</p>
          <p className="calc-result">Mnożnik = 10, Podaż pieniądza = 10 000 zł</p>
          <p><strong>Wniosek:</strong> Z 1000 zł powstaje 10x więcej pieniądza w gospodarce!</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 2: Niska stopa rezerw (5%)</strong>
          <p>Ustaw: Depozyt = 1000 zł, r = 5%</p>
          <p className="calc-result">Mnożnik = 20, Podaż pieniądza = 20 000 zł</p>
          <p><strong>Wniosek:</strong> Niższa stopa rezerw → więcej kreacji pieniądza. Tak było w USA/UE podczas pandemii COVID-19.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 3: Wysoka stopa rezerw (20%)</strong>
          <p>Ustaw: Depozyt = 1000 zł, r = 20%</p>
          <p className="calc-result">Mnożnik = 5, Podaż pieniądza = 5 000 zł</p>
          <p><strong>Wniosek:</strong> Wyższa stopa rezerw ogranicza kreację pieniądza. Bank centralny może tak kontrolować inflację.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 4: Bardzo wysoka stopa (40%)</strong>
          <p>Ustaw: Depozyt = 1000 zł, r = 40%</p>
          <p className="calc-result">Mnożnik = 2,5, Podaż pieniądza = 2 500 zł</p>
          <p><strong>Wniosek:</strong> Przy bardzo wysokiej stopie banki mogą pożyczać tylko niewielką część. Kreacja pieniądza jest silnie ograniczona.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 5: Bardzo niska stopa (1%)</strong>
          <p>Ustaw: Depozyt = 1000 zł, r = 1%</p>
          <p className="calc-result">Mnożnik = 100 (!), Podaż pieniądza = 100 000 zł</p>
          <p><strong>Wniosek:</strong> Przy bardzo niskiej stopie efekt mnożnikowy jest ogromny. To zbliżone do sytuacji w strefie euro (r ≈ 1%).</p>
        </div>
      </div>

      <div className="key-points" style={{ marginTop: '2rem' }}>
        <div className="key-point">
          <strong>🏦 Banki tworzą pieniądz:</strong> Gdy bank udziela kredytu, "tworzy" nowy pieniądz.
          To nie jest pożyczka czyichś oszczędności - to kreacja pieniądza ex nihilo (z niczego)!
        </div>
        <div className="key-point">
          <strong>🔢 Mnożnik m = 1/r:</strong> Im niższa stopa rezerw (r), tym wyższy mnożnik,
          tym więcej pieniądza powstaje w gospodarce.
        </div>
        <div className="key-point">
          <strong>📊 M = m × M0:</strong> Całkowita podaż pieniądza (M) to baza monetarna (M0) pomnożona przez mnożnik.
          Bank centralny kontroluje M0, ale ostateczna podaż zależy też od mnożnika.
        </div>
        <div className="key-point">
          <strong>⚖️ Rezerwy obowiązkowe jako narzędzie polityki:</strong> Bank centralny może zmieniać stopę rezerw (r),
          aby kontrolować kreację pieniądza. Wyższa r → mniej pieniądza → walka z inflacją.
        </div>
        <div className="key-point">
          <strong>🌍 W praktyce mnożnik jest mniejszy:</strong> Model zakłada, że wszystko zostaje w systemie bankowym.
          W rzeczywistości ludzie trzymają gotówkę, banki trzymają rezerwy nadwyżkowe. Ale podstawowa logika się nie zmienia!
        </div>
        <div className="key-point">
          <strong>⚠️ Kreacja pieniądza ≠ inflacja (zawsze):</strong> Jeśli gospodarka rośnie i potrzebuje więcej pieniądza,
          kreacja jest OK. Problem pojawia się, gdy pieniądza przybywa szybciej niż dóbr i usług.
        </div>
      </div>
    </div>
  );
}
