import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MultiplierSimulator from '../../../components/Exercise/MultiplierSimulator';
import '../Chapter20/Chapter20.css';

export default function Chapter21Multiplier() {
  return (
    <div className="chapter">
      <Link to="/chapter/21" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 21 - Symulator</span>
        <h1>Symulator Mnożnika Wydatków</h1>
        <p className="chapter-subtitle">
          Zobacz jak działa efekt mnożnikowy w gospodarce
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Jak korzystać z symulatora:</h4>
        <ul>
          <li><strong>Ustaw początkowe wydatki</strong> - np. 100 mln zł wydatków rządowych</li>
          <li><strong>Wybierz MPC</strong> - krańcową skłonność do konsumpcji (0-0.95)</li>
          <li><strong>Uruchom symulację</strong> - zobacz krok po kroku, jak pieniądze "krążą" w gospodarce</li>
          <li><strong>Obserwuj wyniki</strong> - zwróć uwagę na mnożnik i całkowity wzrost PKB</li>
        </ul>
      </div>

      <MultiplierSimulator />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Przykłady z życia:</h4>
        <ul>
          <li>
            <strong>COVID-19 (USA):</strong> Czeki stymulacyjne po 1400 USD dla obywateli.
            Przy MPC ≈ 0,7-0,8, każdy dolar wydany przez rząd wygenerował 3-5 dolarów wzrostu PKB.
          </li>
          <li>
            <strong>Wielki Kryzys (lata 30.):</strong> New Deal Roosevelta - masowe inwestycje publiczne
            (drogi, mosty, zapory). Dzięki mnożnikowi gospodarka wyszła z recesji.
          </li>
          <li>
            <strong>Polska tarcza antykryzysowa (2020):</strong> 212 mld PLN na pomoc przedsiębiorstwom
            i pracownikom. Efekt mnożnikowy pomógł uniknąć głębokiej recesji.
          </li>
        </ul>
      </div>

      <div className="key-points" style={{ marginTop: '2rem' }}>
        <div className="key-point">
          <strong>Dlaczego mnożnik działa?</strong> Każdy wydatek jednej osoby staje się dochodem drugiej.
          Pieniądze "krążą" w gospodarce, generując więcej aktywności ekonomicznej.
        </div>
        <div className="key-point">
          <strong>Ograniczenia:</strong> W rzeczywistości mnożnik jest słabszy niż w teorii.
          Część pieniędzy "wycieka" przez import, wyższe podatki, lub ludzie oszczędzają więcej niż zwykle.
        </div>
        <div className="key-point">
          <strong>Polityka fiskalna:</strong> Rządy używają efektu mnożnikowego do stymulowania gospodarki
          w czasie recesji (zwiększają G) i chłodzenia jej w czasie przegrzania (zmniejszają G).
        </div>
      </div>
    </div>
  );
}
