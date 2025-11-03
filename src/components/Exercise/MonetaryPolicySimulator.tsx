import { useState } from 'react';
import { TrendingUp, TrendingDown, Target, AlertCircle, Info } from 'lucide-react';
import './MonetaryPolicySimulator.css';

export default function MonetaryPolicySimulator() {
  const [interestRate, setInterestRate] = useState(5); // Stopa BC w %
  const [inflation, setInflation] = useState(3); // Początkowa inflacja
  const [showDetails, setShowDetails] = useState(true);

  // Parametry bazowe gospodarki
  const baseGDP = 1000;
  const baseConsumption = 600;
  const baseInvestment = 200;
  const governmentSpending = 150;
  const netExports = 50;

  // Marża banków komercyjnych (dodawana do stopy BC)
  const bankMargin = 2;
  const loanRate = interestRate + bankMargin;

  // Wpływ stopy procentowej na inwestycje i konsumpcję
  // Im wyższa stopa, tym niższe I i C
  // Używamy prostego modelu liniowego dla celów edukacyjnych
  const investmentSensitivity = 8; // Ile inwestycje spadają przy wzroście stopy o 1 p.p.
  const consumptionSensitivity = 5; // Ile konsumpcja spada przy wzroście stopy o 1 p.p.

  const referenceRate = 5; // Stopa referencyjna (neutralna)
  const rateDeviation = interestRate - referenceRate;

  const investment = Math.max(0, baseInvestment - investmentSensitivity * rateDeviation);
  const consumption = Math.max(0, baseConsumption - consumptionSensitivity * rateDeviation);

  // AD i PKB
  const aggregateDemand = consumption + investment + governmentSpending + netExports;
  const gdp = aggregateDemand; // Uproszczenie: Y = AD w równowadze
  const gdpChange = ((gdp - baseGDP) / baseGDP) * 100;

  // Wpływ na inflację (uproszczony)
  // Wysoka stopa → niższy AD → niższa inflacja
  const inflationEffect = -rateDeviation * 0.5; // Zmiana inflacji w p.p.
  const resultingInflation = Math.max(0, inflation + inflationEffect);

  // Określ typ polityki
  let policyType = 'Neutralna';
  let policyColor = '#6b7280';
  if (interestRate < 3) {
    policyType = 'Bardzo ekspansywna';
    policyColor = '#10b981';
  } else if (interestRate < referenceRate) {
    policyType = 'Ekspansywna (łagodna)';
    policyColor = '#34d399';
  } else if (interestRate > 8) {
    policyType = 'Bardzo restrykcyjna';
    policyColor = '#ef4444';
  } else if (interestRate > referenceRate) {
    policyType = 'Restrykcyjna (zacieśniająca)';
    policyColor = '#f87171';
  }

  // Realna stopa procentowa
  const realInterestRate = interestRate - resultingInflation;

  return (
    <div className="monetary-policy-simulator">
      <div className="simulator-intro">
        <h3>📊 Symulator polityki pieniężnej</h3>
        <p>
          Zmień stopę procentową banku centralnego i zobacz, jak wpływa to na gospodarkę.
          Obserwuj efekty na kredyty, inwestycje, konsumpcję, PKB i inflację.
        </p>
      </div>

      <div className="simulator-controls">
        <div className="main-control">
          <h4>🏦 Stopa referencyjna banku centralnego:</h4>
          <div className="rate-control">
            <input
              type="range"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              min="0"
              max="15"
              step="0.5"
              className="rate-slider"
            />
            <div className="rate-display" style={{ backgroundColor: policyColor }}>
              {interestRate.toFixed(1)}%
            </div>
          </div>
          <div className="policy-type" style={{ color: policyColor }}>
            <strong>{policyType}</strong>
          </div>
        </div>

        <div className="secondary-control">
          <h4>📈 Początkowa inflacja w gospodarce:</h4>
          <input
            type="range"
            value={inflation}
            onChange={(e) => setInflation(parseFloat(e.target.value))}
            min="0"
            max="15"
            step="0.5"
            className="rate-slider"
          />
          <span className="value-badge">{inflation.toFixed(1)}%</span>
        </div>
      </div>

      <div className="results-grid">
        <div className="result-card primary">
          <h4>💳 Oprocentowanie kredytów</h4>
          <div className="result-value">{loanRate.toFixed(1)}%</div>
          <p className="result-note">Stopa BC + marża banków ({bankMargin}%)</p>
        </div>

        <div className="result-card">
          <h4>🏭 Inwestycje (I)</h4>
          <div className="result-value">{investment.toFixed(0)} mld zł</div>
          <p className="result-note">
            {investment < baseInvestment ? '↓' : investment > baseInvestment ? '↑' : '→'}
            {' '}Zmiana: {(investment - baseInvestment).toFixed(0)} mld zł
          </p>
        </div>

        <div className="result-card">
          <h4>🛒 Konsumpcja (C)</h4>
          <div className="result-value">{consumption.toFixed(0)} mld zł</div>
          <p className="result-note">
            {consumption < baseConsumption ? '↓' : consumption > baseConsumption ? '↑' : '→'}
            {' '}Zmiana: {(consumption - baseConsumption).toFixed(0)} mld zł
          </p>
        </div>

        <div className="result-card">
          <h4>📊 Popyt globalny (AD)</h4>
          <div className="result-value">{aggregateDemand.toFixed(0)} mld zł</div>
          <p className="result-note">C + I + G + NX</p>
        </div>

        <div className="result-card primary">
          <h4>💰 PKB</h4>
          <div className="result-value">{gdp.toFixed(0)} mld zł</div>
          <p className="result-note">
            {gdpChange > 0 ? '↑' : gdpChange < 0 ? '↓' : '→'}
            {' '}Zmiana: {gdpChange > 0 ? '+' : ''}{gdpChange.toFixed(1)}%
          </p>
        </div>

        <div className="result-card">
          <h4>📈 Inflacja</h4>
          <div className="result-value">{resultingInflation.toFixed(1)}%</div>
          <p className="result-note">
            {resultingInflation < inflation ? '↓ Spada' : resultingInflation > inflation ? '↑ Rośnie' : '→ Stabilna'}
          </p>
        </div>

        <div className="result-card">
          <h4>🎯 Realna stopa procentowa</h4>
          <div className="result-value">{realInterestRate.toFixed(1)}%</div>
          <p className="result-formula">r = i - π = {interestRate.toFixed(1)}% - {resultingInflation.toFixed(1)}%</p>
        </div>
      </div>

      <button
        className="toggle-details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        <Info size={16} />
        {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły transmisji'}
      </button>

      {showDetails && (
        <div className="transmission-details">
          <h4>🔗 Mechanizm transmisji polityki pieniężnej:</h4>

          <div className="transmission-chain">
            <div className="transmission-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <strong>Bank centralny ustala stopę:</strong>
                <p>Stopa referencyjna = <span className="highlight">{interestRate.toFixed(1)}%</span></p>
                <p>To stopa, po której BC pożycza bankom komercyjnym</p>
              </div>
            </div>

            <div className="transmission-arrow">↓</div>

            <div className="transmission-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <strong>Banki komercyjne ustalają oprocentowanie:</strong>
                <p>Kredyty dla klientów: <span className="highlight">{loanRate.toFixed(1)}%</span> (stopa BC + marża {bankMargin}%)</p>
                <p>
                  {loanRate > 7
                    ? '⚠️ Wysokie oprocentowanie - kredyty drogie'
                    : loanRate < 4
                    ? '✓ Niskie oprocentowanie - kredyty tanie'
                    : 'Umiarkowane oprocentowanie'}
                </p>
              </div>
            </div>

            <div className="transmission-arrow">↓</div>

            <div className="transmission-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <strong>Przedsiębiorstwa zmieniają inwestycje:</strong>
                <p>
                  {investment < baseInvestment
                    ? `❌ Drogie kredyty → mniej opłacalnych projektów → I spadają do ${investment.toFixed(0)} mld zł`
                    : investment > baseInvestment
                    ? `✓ Tanie kredyty → więcej opłacalnych projektów → I rosną do ${investment.toFixed(0)} mld zł`
                    : `Inwestycje stabilne na poziomie ${investment.toFixed(0)} mld zł`}
                </p>
              </div>
            </div>

            <div className="transmission-arrow">↓</div>

            <div className="transmission-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <strong>Gospodarstwa domowe zmieniają konsumpcję:</strong>
                <p>
                  {consumption < baseConsumption
                    ? `❌ Drogie kredyty hipoteczne/konsumpcyjne + wysokie raty → mniej wydają → C spada do ${consumption.toFixed(0)} mld zł`
                    : consumption > baseConsumption
                    ? `✓ Tanie kredyty + niskie raty → więcej wydają → C rośnie do ${consumption.toFixed(0)} mld zł`
                    : `Konsumpcja stabilna na poziomie ${consumption.toFixed(0)} mld zł`}
                </p>
              </div>
            </div>

            <div className="transmission-arrow">↓</div>

            <div className="transmission-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <strong>Zmienia się popyt globalny:</strong>
                <p>AD = C + I + G + NX = {aggregateDemand.toFixed(0)} mld zł</p>
                <p>
                  {aggregateDemand < baseGDP
                    ? '↓ AD spada - mniejszy popyt na dobra i usługi'
                    : aggregateDemand > baseGDP
                    ? '↑ AD rośnie - większy popyt na dobra i usługi'
                    : 'AD stabilny'}
                </p>
              </div>
            </div>

            <div className="transmission-arrow">↓</div>

            <div className="transmission-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <strong>Efekt końcowy na PKB i inflację:</strong>
                <p>PKB = {gdp.toFixed(0)} mld zł ({gdpChange > 0 ? '+' : ''}{gdpChange.toFixed(1)}%)</p>
                <p>Inflacja = {resultingInflation.toFixed(1)}% (była {inflation.toFixed(1)}%)</p>
                <p>
                  {gdp < baseGDP && resultingInflation < inflation
                    ? '✓ Polityka restrykcyjna działa: PKB spada, inflacja się obniża'
                    : gdp > baseGDP && resultingInflation > inflation
                    ? '✓ Polityka ekspansywna działa: PKB rośnie, ale inflacja też'
                    : 'Polityka neutralna - niewielkie zmiany'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="scenario-analysis">
        <h4>📋 Analiza scenariusza:</h4>

        {interestRate < 2 && (
          <div className="scenario-box expansionary">
            <h5><TrendingUp className="inline-icon" /> Bardzo ekspansywna polityka ({interestRate.toFixed(1)}%)</h5>
            <p><strong>Sytuacja:</strong> Stopy bliskie zeru - "tanie pieniądze"</p>
            <p><strong>Kiedy stosować:</strong> Głęboka recesja, kryzys (jak COVID-19 w 2020)</p>
            <p><strong>Efekty:</strong></p>
            <ul>
              <li>✓ Bardzo tanie kredyty → boom inwestycyjny i konsumpcyjny</li>
              <li>✓ PKB może szybko rosnąć</li>
              <li>⚠️ Ryzyko: Nadmierna inflacja, bańki spekulacyjne (nieruchomości, akcje)</li>
              <li>⚠️ BC ma mało miejsca do dalszego luzowania (już przy zero!)</li>
            </ul>
            <p className="recommendation">
              Uwaga: To "narkotyk" dla gospodarki - działa krótkoterminowo, ale może prowadzić do przegrzania!
            </p>
          </div>
        )}

        {interestRate >= 2 && interestRate < referenceRate && (
          <div className="scenario-box expansionary">
            <h5><TrendingUp className="inline-icon" /> Polityka ekspansywna ({interestRate.toFixed(1)}%)</h5>
            <p><strong>Sytuacja:</strong> Stopy poniżej neutralnych - stymulacja gospodarki</p>
            <p><strong>Kiedy stosować:</strong> Spowolnienie gospodarcze, rosnące bezrobocie, niska inflacja</p>
            <p><strong>Efekty:</strong></p>
            <ul>
              <li>✓ Tanie kredyty → więcej inwestycji i konsumpcji</li>
              <li>✓ PKB rośnie, bezrobocie spada</li>
              <li>⚠️ Inflacja może zacząć rosnąć (jeśli gospodarka się rozpędzi)</li>
            </ul>
            <p className="recommendation">
              Dobra polityka w czasie spowolnienia, ale trzeba monitorować inflację.
            </p>
          </div>
        )}

        {interestRate === referenceRate && (
          <div className="scenario-box neutral">
            <h5>⚖️ Polityka neutralna ({interestRate.toFixed(1)}%)</h5>
            <p><strong>Sytuacja:</strong> Stopa na poziomie naturalnym - gospodarka w równowadze</p>
            <p><strong>Kiedy stosować:</strong> Stabilna inflacja blisko celu, umiarkowany wzrost PKB</p>
            <p><strong>Efekty:</strong></p>
            <ul>
              <li>PKB rośnie stabilnie</li>
              <li>Inflacja pod kontrolą</li>
              <li>BC nie pobudza, ale też nie hamuje gospodarki</li>
            </ul>
            <p className="recommendation">
              Idealna sytuacja - BC może spokojnie obserwować gospodarkę.
            </p>
          </div>
        )}

        {interestRate > referenceRate && interestRate <= 8 && (
          <div className="scenario-box restrictive">
            <h5><TrendingDown className="inline-icon" /> Polityka restrykcyjna ({interestRate.toFixed(1)}%)</h5>
            <p><strong>Sytuacja:</strong> Stopy powyżej neutralnych - hamowanie gospodarki</p>
            <p><strong>Kiedy stosować:</strong> Rosnąca inflacja, przegrzana gospodarka</p>
            <p><strong>Efekty:</strong></p>
            <ul>
              <li>✓ Drogie kredyty → mniej inwestycji i konsumpcji</li>
              <li>✓ Inflacja spada (cel osiągnięty!)</li>
              <li>⚠️ PKB rośnie wolniej lub spada</li>
              <li>⚠️ Bezrobocie może rosnąć</li>
            </ul>
            <p className="recommendation">
              Konieczna przy wysokiej inflacji, ale BC musi uważać, żeby nie spowodować recesji.
            </p>
          </div>
        )}

        {interestRate > 8 && (
          <div className="scenario-box restrictive">
            <h5><TrendingDown className="inline-icon" /> Bardzo restrykcyjna polityka ({interestRate.toFixed(1)}%)</h5>
            <p><strong>Sytuacja:</strong> Bardzo wysokie stopy - "emergency brakes"</p>
            <p><strong>Kiedy stosować:</strong> Inflacja wymknęła się spod kontroli ({'>'}10%), hiperinflacja</p>
            <p><strong>Efekty:</strong></p>
            <ul>
              <li>✓ Drastyczne ograniczenie kredytów → gwałtowny spadek AD</li>
              <li>✓ Inflacja może gwałtownie spaść</li>
              <li>⚠️ Wysokie ryzyko recesji!</li>
              <li>⚠️ Firmy bankrutują (drogie kredyty), bezrobocie rośnie</li>
            </ul>
            <p className="recommendation">
              Ostateczność! Stosowane tylko gdy inflacja zagraża stabilności gospodarki.
              Przykład: Volcker w USA (1980-1981) - stopa do 20% aby złamać inflację 14%.
            </p>
          </div>
        )}
      </div>

      <div className="interpretation-box">
        <h4>💡 Kluczowe wnioski:</h4>
        <ul>
          <li>
            <strong>BC ma trudny wybór:</strong> Niska stopa → wzrost PKB, ale ryzyko inflacji.
            Wysoka stopa → niska inflacja, ale ryzyko recesji. Trzeba balansować!
          </li>
          <li>
            <strong>Opóźnienia są ważne:</strong> W rzeczywistości efekty polityki pieniężnej pojawiają się
            dopiero po 12-18 miesiącach. BC musi działać proaktywnie, przewidując przyszłość.
          </li>
          <li>
            <strong>Realna stopa ma znaczenie:</strong> Gdy inflacja jest wysoka ({inflation}%),
            nawet wysoka stopa nominalna ({interestRate}%) może dać ujemną stopę realną!
            Wtedy polityka tak naprawdę nie jest restrykcyjna.
          </li>
          <li>
            <strong>W modelu są uproszczenia:</strong> W rzeczywistości na gospodarkę wpływa też:
            kurs walutowy, oczekiwania inflacyjne, ceny surowców, sytuacja globalna.
            Ale podstawowy mechanizm (stopa → kredyty → wydatki → PKB/inflacja) działa tak samo!
          </li>
        </ul>
      </div>
    </div>
  );
}
