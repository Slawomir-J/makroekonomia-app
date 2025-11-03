import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BudgetCalculator from '../../../components/Exercise/BudgetCalculator';
import '../Chapter20/Chapter20.css';

export default function Chapter22Calculator() {
  return (
    <div className="chapter">
      <Link to="/chapter/22" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 22 - Kalkulator</span>
        <h1>Kalkulator deficytu i długu publicznego</h1>
        <p className="chapter-subtitle">
          Oblicz saldo budżetu i zobacz, jak dług publiczny zmienia się w czasie
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Jak korzystać z kalkulatora:</h4>
        <ul>
          <li><strong>Ustaw wydatki rządu</strong> - wprowadź G (wydatki na dobra i usługi) oraz TR (transfery)</li>
          <li><strong>Ustaw dochody</strong> - wprowadź T (wpływy z podatków)</li>
          <li><strong>Obserwuj saldo budżetu</strong> - czy powstaje deficyt, nadwyżka, czy budżet jest zrównoważony?</li>
          <li><strong>Symuluj dług publiczny</strong> - zobacz, jak obecny deficyt wpłynie na dług w kolejnych latach</li>
          <li><strong>Sprawdź progi unijne</strong> - czy deficyt i dług mieszczą się w kryteriach z Maastricht?</li>
        </ul>
      </div>

      <BudgetCalculator />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Przykładowe scenariusze do sprawdzenia:</h4>

        <div className="calc-step">
          <strong>Scenariusz 1: Budżet zrównoważony</strong>
          <p>Ustaw: G = 700, TR = 300, T = 1000</p>
          <p className="calc-result">Wydatki = Dochody → Saldo = 0 (budżet zrównoważony)</p>
          <p><strong>Wniosek:</strong> Dług publiczny się nie zmienia. Idealna sytuacja, ale trudna do osiągnięcia!</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 2: Mały deficyt w czasie recesji</strong>
          <p>Ustaw: G = 850, TR = 450, T = 1200</p>
          <p className="calc-result">Deficyt = 100 mld zł (2,86% PKB)</p>
          <p><strong>Wniosek:</strong> Deficyt poniżej progu 3% z Maastricht. Rząd stymuluje gospodarkę, ale nie narusza reguł fiskalnych.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 3: Duży deficyt pandemiczny</strong>
          <p>Ustaw: G = 950, TR = 600, T = 1100</p>
          <p className="calc-result">Deficyt = 450 mld zł (12,86% PKB)</p>
          <p><strong>Wniosek:</strong> Masywny deficyt jak podczas COVID-19. Zobacz w symulacji, jak szybko rośnie dług!</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 4: Nadwyżka budżetowa</strong>
          <p>Ustaw: G = 650, TR = 300, T = 1100</p>
          <p className="calc-result">Nadwyżka = 150 mld zł</p>
          <p><strong>Wniosek:</strong> Rzadka sytuacja! Rząd może spłacać dług. Zobacz, jak dług maleje w symulacji.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 5: Wysokie transfery socjalne</strong>
          <p>Ustaw: G = 700, TR = 600, T = 1000</p>
          <p className="calc-result">Deficyt = 300 mld zł</p>
          <p><strong>Wniosek:</strong> Duże wydatki na emerytury i zasiłki prowadzą do znacznego deficytu. Typowe dla starzejących się społeczeństw.</p>
        </div>
      </div>

      <div className="key-points" style={{ marginTop: '2rem' }}>
        <div className="key-point">
          <strong>📊 Deficyt = G + TR - T:</strong> Gdy wydatki (G + TR) {'>'} dochody (T), powstaje deficyt.
          Rząd musi pożyczyć pieniądze emitując obligacje skarbowe.
        </div>
        <div className="key-point">
          <strong>💰 Dług = suma deficytów:</strong> Każdy rok z deficytem zwiększa dług publiczny.
          Dług to skumulowane zadłużenie z przeszłości.
        </div>
        <div className="key-point">
          <strong>⚖️ Kryteria z Maastricht:</strong> UE wymaga: deficyt {"<"} 3% PKB, dług {"<"} 60% PKB.
          To "hamulce fiskalne" mające zapobiegać nadmiernemu zadłużaniu się krajów.
        </div>
        <div className="key-point">
          <strong>🔄 Spirala zadłużenia:</strong> Wysoki dług → wysokie odsetki → jeszcze wyższy deficyt → jeszcze wyższy dług.
          Dlatego ważne jest utrzymanie długu na rozsądnym poziomie.
        </div>
        <div className="key-point">
          <strong>⚠️ Czy dług jest zły?</strong> Nie zawsze! Umiarkowany dług pozwala finansować inwestycje (drogi, edukację)
          i stabilizować gospodarkę w kryzysie. Problem powstaje, gdy dług rośnie zbyt szybko.
        </div>
      </div>
    </div>
  );
}
