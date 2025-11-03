import { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle, Info } from 'lucide-react';
import './BudgetCalculator.css';

export default function BudgetCalculator() {
  const [governmentSpending, setGovernmentSpending] = useState(800);
  const [transfers, setTransfers] = useState(400);
  const [taxes, setTaxes] = useState(1000);
  const [initialDebt, setInitialDebt] = useState(2000);
  const [yearsToSimulate, setYearsToSimulate] = useState(5);
  const [showDetails, setShowDetails] = useState(true);

  // Oblicz saldo budżetu
  const deficit = governmentSpending + transfers - taxes;
  const isDeficit = deficit > 0;
  const isSurplus = deficit < 0;
  const isBalanced = deficit === 0;

  // Symulacja długu na wiele lat
  const simulateDebt = () => {
    const years = [];
    let currentDebt = initialDebt;

    for (let year = 0; year <= yearsToSimulate; year++) {
      years.push({
        year,
        debt: currentDebt,
        deficit: year === 0 ? 0 : deficit,
        debtToGDP: ((currentDebt / 3500) * 100) // Zakładając PKB = 3500
      });

      if (year < yearsToSimulate) {
        currentDebt += deficit;
      }
    }

    return years;
  };

  const debtSimulation = simulateDebt();
  const finalDebt = debtSimulation[debtSimulation.length - 1].debt;
  const debtChange = finalDebt - initialDebt;

  return (
    <div className="budget-calculator">
      <div className="calculator-intro">
        <h3>📊 Kalkulator deficytu i długu publicznego</h3>
        <p>
          Ustaw parametry budżetu państwa i zobacz, jak kształtuje się deficyt/nadwyżka oraz jak dług publiczny rośnie lub maleje w czasie.
        </p>
      </div>

      <div className="calculator-grid">
        <div className="input-section">
          <h4>💰 Wydatki rządu</h4>

          <div className="input-group">
            <label>
              Wydatki rządowe (G):
              <input
                type="number"
                value={governmentSpending}
                onChange={(e) => setGovernmentSpending(parseFloat(e.target.value) || 0)}
                step="50"
              />
              <span className="unit">mld zł</span>
            </label>
            <p className="hint">Zakupy dóbr i usług przez państwo (drogi, szkoły, wojsko)</p>
          </div>

          <div className="input-group">
            <label>
              Transfery (TR):
              <input
                type="number"
                value={transfers}
                onChange={(e) => setTransfers(parseFloat(e.target.value) || 0)}
                step="50"
              />
              <span className="unit">mld zł</span>
            </label>
            <p className="hint">Emerytury, zasiłki, dotacje - pieniądze przekazane obywatelom</p>
          </div>

          <div className="total-spending">
            <strong>Całkowite wydatki:</strong>
            <span className="value-badge">{(governmentSpending + transfers).toFixed(0)} mld zł</span>
          </div>
        </div>

        <div className="input-section">
          <h4>📥 Dochody rządu</h4>

          <div className="input-group">
            <label>
              Podatki (T):
              <input
                type="number"
                value={taxes}
                onChange={(e) => setTaxes(parseFloat(e.target.value) || 0)}
                step="50"
              />
              <span className="unit">mld zł</span>
            </label>
            <p className="hint">PIT, CIT, VAT, akcyza - wszystkie wpływy podatkowe</p>
          </div>

          <div className="formula-display">
            <strong>Saldo budżetu:</strong>
            <div className="formula">
              Saldo = T - (G + TR)
            </div>
            <div className="formula">
              = {taxes} - ({governmentSpending} + {transfers})
            </div>
            <div className="formula">
              = {taxes} - {governmentSpending + transfers}
            </div>
          </div>
        </div>
      </div>

      <div className="results-section">
        <div className={`result-card primary ${isDeficit ? 'deficit' : isSurplus ? 'surplus' : 'balanced'}`}>
          <h4>
            {isDeficit && <TrendingDown className="inline-icon" />}
            {isSurplus && <TrendingUp className="inline-icon" />}
            {isBalanced && <DollarSign className="inline-icon" />}
            Saldo budżetu
          </h4>
          <div className="result-value">
            {deficit > 0 ? '-' : '+'}{Math.abs(deficit).toFixed(0)} mld zł
          </div>
          <p className="result-note">
            {isDeficit && <strong>DEFICYT:</strong>}
            {isSurplus && <strong>NADWYŻKA:</strong>}
            {isBalanced && <strong>BUDŻET ZRÓWNOWAŻONY:</strong>}
            {' '}
            {isDeficit && 'Wydatki > Dochody (Rząd musi zaciągnąć kredyt)'}
            {isSurplus && 'Dochody > Wydatki (Rząd może spłacać dług)'}
            {isBalanced && 'Wydatki = Dochody (Idealna równowaga)'}
          </p>
        </div>

        <div className="result-card">
          <h4><AlertTriangle className="inline-icon" /> Deficyt jako % PKB</h4>
          <div className="result-value">{((Math.abs(deficit) / 3500) * 100).toFixed(2)}%</div>
          <p className="result-note">
            {((Math.abs(deficit) / 3500) * 100) > 3
              ? '⚠️ Powyżej progu z Maastricht (3%)!'
              : '✓ Poniżej progu z Maastricht (3%)'}
          </p>
        </div>

        <div className="result-card">
          <h4>Struktura wydatków</h4>
          <div className="result-value">{((governmentSpending / (governmentSpending + transfers)) * 100).toFixed(0)}%</div>
          <p className="result-note">
            Wydatki na dobra: {governmentSpending} mld zł<br />
            Transfery: {transfers} mld zł
          </p>
        </div>
      </div>

      <button
        className="toggle-details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        <Info size={16} />
        {showDetails ? 'Ukryj szczegóły obliczeń' : 'Pokaż szczegóły obliczeń'}
      </button>

      {showDetails && (
        <div className="calculation-details">
          <h4>📝 Szczegółowe obliczenia:</h4>

          <div className="calc-step">
            <strong>Krok 1: Zsumuj wszystkie wydatki</strong>
            <p>Całkowite wydatki = G + TR</p>
            <p className="calc-result">
              = {governmentSpending} + {transfers} = <strong>{(governmentSpending + transfers).toFixed(0)} mld zł</strong>
            </p>
          </div>

          <div className="calc-step">
            <strong>Krok 2: Odejmij wpływy podatkowe</strong>
            <p>Saldo = T - (G + TR)</p>
            <p className="calc-result">
              = {taxes} - {(governmentSpending + transfers).toFixed(0)} = <strong>{(-deficit).toFixed(0)} mld zł</strong>
            </p>
          </div>

          <div className="calc-step">
            <strong>Krok 3: Interpretacja</strong>
            {isDeficit && (
              <>
                <p>Saldo ujemne → <strong>DEFICYT = {deficit.toFixed(0)} mld zł</strong></p>
                <p className="calc-result">
                  Rząd musi pożyczyć {deficit.toFixed(0)} mld zł, emitując obligacje skarbowe.
                  To zwiększa dług publiczny!
                </p>
              </>
            )}
            {isSurplus && (
              <>
                <p>Saldo dodatnie → <strong>NADWYŻKA = {Math.abs(deficit).toFixed(0)} mld zł</strong></p>
                <p className="calc-result">
                  Rząd może przeznaczyć {Math.abs(deficit).toFixed(0)} mld zł na spłatę długu publicznego.
                  Dług maleje!
                </p>
              </>
            )}
            {isBalanced && (
              <p className="success">
                ✓ Budżet zrównoważony - wydatki równe dochodom. Dług się nie zmienia.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="debt-simulation-section">
        <h4>📈 Symulacja długu publicznego</h4>
        <p className="section-description">
          Zobacz, jak obecny deficyt wpłynie na dług publiczny w kolejnych latach
        </p>

        <div className="simulation-controls">
          <div className="input-group">
            <label>
              Początkowy dług publiczny:
              <input
                type="number"
                value={initialDebt}
                onChange={(e) => setInitialDebt(parseFloat(e.target.value) || 0)}
                step="100"
              />
              <span className="unit">mld zł</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              Liczba lat do symulacji:
              <input
                type="range"
                value={yearsToSimulate}
                onChange={(e) => setYearsToSimulate(parseInt(e.target.value))}
                min="1"
                max="10"
                step="1"
              />
              <span className="value-badge">{yearsToSimulate} lat</span>
            </label>
          </div>
        </div>

        <div className="debt-chart">
          <svg viewBox="0 0 600 300" className="debt-chart-svg">
            {/* Osie */}
            <line x1="60" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2" />
            <line x1="60" y1="250" x2="60" y2="30" stroke="#333" strokeWidth="2" />

            {/* Etykiety osi */}
            <text x="300" y="280" textAnchor="middle" fill="#666" fontSize="14">Lata</text>
            <text x="30" y="140" textAnchor="middle" fill="#666" fontSize="14" transform="rotate(-90, 30, 140)">
              Dług (mld zł)
            </text>

            {/* Linia długu */}
            {debtSimulation.map((point, index) => {
              if (index === 0) return null;

              const prevPoint = debtSimulation[index - 1];
              const x1 = 60 + ((prevPoint.year / yearsToSimulate) * 490);
              const y1 = 250 - ((prevPoint.debt / (finalDebt * 1.2)) * 220);
              const x2 = 60 + ((point.year / yearsToSimulate) * 490);
              const y2 = 250 - ((point.debt / (finalDebt * 1.2)) * 220);

              return (
                <line
                  key={index}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isDeficit ? '#ef4444' : '#10b981'}
                  strokeWidth="3"
                />
              );
            })}

            {/* Punkty */}
            {debtSimulation.map((point, index) => {
              const x = 60 + ((point.year / yearsToSimulate) * 490);
              const y = 250 - ((point.debt / (finalDebt * 1.2)) * 220);

              return (
                <g key={index}>
                  <circle cx={x} cy={y} r="5" fill={isDeficit ? '#ef4444' : '#10b981'} stroke="#fff" strokeWidth="2" />
                  {index % 2 === 0 && (
                    <text x={x} y="270" textAnchor="middle" fill="#666" fontSize="12">
                      Rok {point.year}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="debt-table">
          <table>
            <thead>
              <tr>
                <th>Rok</th>
                <th>Dług (mld zł)</th>
                <th>Deficyt w roku</th>
                <th>Dług / PKB</th>
              </tr>
            </thead>
            <tbody>
              {debtSimulation.map((point) => (
                <tr key={point.year}>
                  <td>Rok {point.year}</td>
                  <td className={point.debt > initialDebt ? 'negative' : 'positive'}>
                    {point.debt.toFixed(0)} mld zł
                  </td>
                  <td>{point.year === 0 ? '-' : `${deficit > 0 ? '+' : ''}${deficit.toFixed(0)} mld zł`}</td>
                  <td className={point.debtToGDP > 60 ? 'warning' : ''}>
                    {point.debtToGDP.toFixed(1)}%
                    {point.debtToGDP > 60 && ' ⚠️'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="simulation-summary">
          <h4>📊 Podsumowanie symulacji:</h4>
          <ul>
            <li>
              <strong>Początkowy dług:</strong> {initialDebt.toFixed(0)} mld zł
              ({((initialDebt / 3500) * 100).toFixed(1)}% PKB)
            </li>
            <li>
              <strong>Końcowy dług (po {yearsToSimulate} latach):</strong> {finalDebt.toFixed(0)} mld zł
              ({((finalDebt / 3500) * 100).toFixed(1)}% PKB)
            </li>
            <li>
              <strong>Zmiana długu:</strong> {debtChange > 0 ? '+' : ''}{debtChange.toFixed(0)} mld zł
              ({debtChange > 0 ? 'wzrost' : 'spadek'} o {Math.abs((debtChange / initialDebt) * 100).toFixed(1)}%)
            </li>
            <li>
              {((finalDebt / 3500) * 100) > 60 && (
                <span className="warning-text">
                  ⚠️ <strong>Uwaga:</strong> Dług przekroczył próg 60% PKB z kryteriów z Maastricht!
                </span>
              )}
              {((finalDebt / 3500) * 100) <= 60 && (
                <span className="success-text">
                  ✓ Dług poniżej progu 60% PKB - poziom bezpieczny według kryteriów z Maastricht
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="interpretation-box">
        <h4>💡 Interpretacja:</h4>
        <ul>
          <li>
            <strong>Deficyt budżetowy to "flow":</strong> Pokazuje, ile rząd wydał więcej niż zarobił w danym roku.
            To roczny wynik finansowy budżetu.
          </li>
          <li>
            <strong>Dług publiczny to "stock":</strong> Suma wszystkich deficytów z przeszłości. To ile państwo
            łącznie jest winne swoim wierzycielom (posiadaczom obligacji).
          </li>
          <li>
            <strong>Dlaczego deficyt nie zawsze jest zły?</strong> W czasie recesji deficyt pomaga stymulować gospodarkę.
            Ale ciągłe deficyty prowadzą do wzrostu długu, który trzeba obsługiwać (płacić odsetki).
          </li>
          <li>
            <strong>Kryteria z Maastricht:</strong> Unia Europejska wymaga, by deficyt nie przekraczał 3% PKB,
            a dług 60% PKB. Wiele krajów łamie te zasady!
          </li>
        </ul>
      </div>
    </div>
  );
}
