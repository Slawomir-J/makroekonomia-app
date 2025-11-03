import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MonetaryPolicySimulator from '../../../components/Exercise/MonetaryPolicySimulator';
import '../Chapter20/Chapter20.css';

export default function Chapter24Simulator() {
  return (
    <div className="chapter">
      <Link to="/chapter/24" className="back-link">
        <ArrowLeft size={20} />
        Wróć do teorii
      </Link>

      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 24 - Symulator</span>
        <h1>Symulator polityki pieniężnej</h1>
        <p className="chapter-subtitle">
          Zobacz, jak decyzje banku centralnego wpływają na całą gospodarkę
        </p>
      </header>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <h4>📚 Jak korzystać z symulatora:</h4>
        <ul>
          <li><strong>Zmień stopę procentową BC</strong> - przesuń suwak od 0% do 15%</li>
          <li><strong>Obserwuj efekty na gospodarkę</strong> - kredyty, inwestycje, konsumpcję, PKB, inflację</li>
          <li><strong>Zobacz mechanizm transmisji</strong> - jak decyzja BC dociera do gospodarki (6 kroków)</li>
          <li><strong>Przeczytaj analizę scenariusza</strong> - system automatycznie rozpozna typ polityki i pokaże wnioski</li>
          <li><strong>Eksperymentuj!</strong> - sprawdź różne scenariusze (recesja, wysoka inflacja, równowaga)</li>
        </ul>
      </div>

      <MonetaryPolicySimulator />

      <div className="example-box" style={{ marginTop: '2rem' }}>
        <h4>💡 Przykładowe scenariusze do sprawdzenia:</h4>

        <div className="calc-step">
          <strong>Scenariusz 1: Walka z inflacją (2022-2023)</strong>
          <p>Ustaw: Stopa BC = 10%, Początkowa inflacja = 12%</p>
          <p className="calc-result">
            Bardzo restrykcyjna polityka. Kredyty drogie → spadek inwestycji i konsumpcji → PKB spada, ale inflacja się obniża.
          </p>
          <p><strong>Wniosek:</strong> To właśnie robił Fed, EBC, NBP w 2022-2023. Skuteczne, ale bolało (dro drogie kredyty, spowolnienie gospodarki).</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 2: Ratowanie gospodarki w kryzysie (COVID-19, 2020)</strong>
          <p>Ustaw: Stopa BC = 0,5%, Początkowa inflacja = 1%</p>
          <p className="calc-result">
            Bardzo ekspansywna polityka. Tanie kredyty → wzrost wydatków → PKB rośnie, inflacja stabilna (jeszcze!).
          </p>
          <p><strong>Wniosek:</strong> Tak BC ratowały gospodarki w 2020. Zadziałało, ale potem inflacja w 2022.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 3: "Goldilocks" - złoty środek</strong>
          <p>Ustaw: Stopa BC = 5%, Początkowa inflacja = 2,5%</p>
          <p className="calc-result">
            Polityka neutralna. Gospodarka stabilna, inflacja blisko celu, PKB rośnie umiarkowanie.
          </p>
          <p><strong>Wniosek:</strong> To cel każdego BC - stabilność. Trudno utrzymać, bo gospodarka ciągle się zmienia!</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 4: Ujemna realna stopa</strong>
          <p>Ustaw: Stopa BC = 3%, Początkowa inflacja = 8%</p>
          <p className="calc-result">
            Realna stopa = 3% - 8% = -5%. Mimo nominalnie dodatniej stopy, pieniądz traci wartość szybciej niż rosną odsetki!
          </p>
          <p><strong>Wniosek:</strong> Tak było w Polsce/UE w 2022. BC podnosił stopy, ale inflacja była szybsza. Oszczędnościludzie tracili na wartości.</p>
        </div>

        <div className="calc-step">
          <strong>Scenariusz 5: Volcker Shock (USA, 1980-1981)</strong>
          <p>Ustaw: Stopa BC = 15%, Początkowa inflacja = 14%</p>
          <p className="calc-result">
            Ekstremalna polityka restrykcyjna. Paul Volcker (szef Fed) podniósł stopę do rekordowych 20%, żeby złamać inflację.
          </p>
          <p><strong>Efekt:</strong> Inflacja spadła z 14% do 3%, ale gospodarka wpadła w głęboką recesję. Bezrobocie skoczyło do 10%.</p>
          <p><strong>Wniosek:</strong> Czasem potrzebna jest "szokowa terapia", ale koszty są ogromne.</p>
        </div>
      </div>

      <div className="key-points" style={{ marginTop: '2rem' }}>
        <div className="key-point">
          <strong>🎯 Bank centralny ma trudny mandat:</strong> Musi balansować między wzrostem gospodarczym a stabilnością cen.
          Za niska stopa → inflacja wymyka się spod kontroli. Za wysoka → recesja i bezrobocie.
        </div>
        <div className="key-point">
          <strong>⏱️ Opóźnienia są kluczowe:</strong> Efekty polityki pieniężnej pojawiają się po 12-18 miesiącach.
          BC musi działać proaktywnie, przewidując przyszłość, a nie reagując na teraźniejszość.
        </div>
        <div className="key-point">
          <strong>📊 Realna stopa ma znaczenie:</strong> To realna stopa (nominalna - inflacja) wpływa na decyzje
          inwestycyjne i oszczędnościowe. Może być ujemna!
        </div>
        <div className="key-point">
          <strong>🌍 BC nie kontroluje wszystkiego:</strong> W modelu widzimy uproszczenie. W rzeczywistości na gospodarkę wpływa
          też: polityka fiskalna, ceny ropy, kursy walutowe, sytuacja globalna, oczekiwania. BC ma wpływ, ale nie omnipotencję.
        </div>
        <div className="key-point">
          <strong>⚖️ Niezależność BC jest kluczowa:</strong> Politycy chcą niskich stóp przed wyborami (popularne!).
          Niezależny BC może podjąć niepopularną, ale konieczną decyzję (podwyżka stóp przy inflacji).
        </div>
      </div>
    </div>
  );
}
