import { useState } from 'react';
import { TrendingUp, Building2, Info, Coins } from 'lucide-react';
import './MoneyCreationCalculator.css';

export default function MoneyCreationCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(1000);
  const [reserveRatio, setReserveRatio] = useState(0.1);
  const [showDetails, setShowDetails] = useState(true);
  const [maxRounds, setMaxRounds] = useState(10);

  // Oblicz mnożnik kreacji pieniądza
  const multiplier = 1 / reserveRatio;

  // Oblicz całkowitą podaż pieniądza
  const totalMoneySupply = initialDeposit * multiplier;

  // Generuj rundę kreacji pieniądza
  const generateRounds = () => {
    const rounds = [];
    let deposit = initialDeposit;
    let cumulativeDeposits = 0;
    let cumulativeLoans = 0;
    let cumulativeReserves = 0;

    for (let i = 0; i <= maxRounds && deposit > 0.01; i++) {
      const reserves = deposit * reserveRatio;
      const loan = deposit * (1 - reserveRatio);

      cumulativeDeposits += deposit;
      cumulativeReserves += reserves;
      cumulativeLoans += loan;

      rounds.push({
        round: i,
        bankName: i === 0 ? 'Bank początkowy' : `Bank ${i}`,
        deposit: deposit,
        reserves: reserves,
        loan: loan,
        cumulativeDeposits: cumulativeDeposits,
        cumulativeLoans: cumulativeLoans,
        cumulativeReserves: cumulativeReserves
      });

      deposit = loan; // Kredyt staje się depozytem w następnym banku
    }

    return rounds;
  };

  const rounds = generateRounds();
  const finalRound = rounds[rounds.length - 1];

  return (
    <div className="money-creation-calculator">
      <div className="calculator-intro">
        <h3>🏦 Kalkulator kreacji pieniądza</h3>
        <p>
          Zobacz, jak banki "tworzą" pieniądz udzielając kredytów. Z początkowego depozytu może powstać
          wielokrotnie więcej pieniądza w całym systemie bankowym!
        </p>
      </div>

      <div className="calculator-grid">
        <div className="input-section">
          <h4>⚙️ Parametry początkowe</h4>

          <div className="input-group">
            <label>
              Depozyt początkowy:
              <input
                type="number"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(parseFloat(e.target.value) || 0)}
                step="100"
                min="0"
              />
              <span className="unit">zł</span>
            </label>
            <p className="hint">Kwota wpłacona do pierwszego banku</p>
          </div>

          <div className="input-group">
            <label>
              Stopa rezerw obowiązkowych (r):
              <input
                type="range"
                value={reserveRatio}
                onChange={(e) => setReserveRatio(parseFloat(e.target.value))}
                min="0.01"
                max="0.5"
                step="0.01"
              />
              <span className="value-badge">{(reserveRatio * 100).toFixed(0)}%</span>
            </label>
            <p className="hint">Jaki procent depozytów bank musi zatrzymać jako rezerwy</p>
          </div>

          <div className="input-group">
            <label>
              Liczba rund do pokazania:
              <input
                type="range"
                value={maxRounds}
                onChange={(e) => setMaxRounds(parseInt(e.target.value))}
                min="5"
                max="20"
                step="1"
              />
              <span className="value-badge">{maxRounds}</span>
            </label>
            <p className="hint">Ile kolejnych banków pokazać w tabeli</p>
          </div>
        </div>

        <div className="input-section">
          <h4>📊 Wyniki</h4>

          <div className="formula-display">
            <strong>Mnożnik kreacji pieniądza:</strong>
            <div className="formula">
              m = 1 / r = 1 / {reserveRatio.toFixed(2)} = {multiplier.toFixed(2)}
            </div>
          </div>

          <div className="formula-display">
            <strong>Całkowita podaż pieniądza:</strong>
            <div className="formula">
              M = m × Depozyt = {multiplier.toFixed(2)} × {initialDeposit} = {totalMoneySupply.toFixed(2)} zł
            </div>
          </div>

          <div className="result-summary">
            <p><strong>Interpretacja:</strong></p>
            <p>
              Z początkowego depozytu <strong>{initialDeposit} zł</strong> powstanie łącznie{' '}
              <strong>{totalMoneySupply.toFixed(2)} zł</strong> pieniądza w gospodarce!
            </p>
            <p>
              To wzrost o <strong>{((totalMoneySupply / initialDeposit - 1) * 100).toFixed(0)}%</strong> 🚀
            </p>
          </div>
        </div>
      </div>

      <div className="results-section">
        <div className="result-card primary">
          <h4><Coins className="inline-icon" /> Całkowita podaż pieniądza</h4>
          <div className="result-value">{totalMoneySupply.toFixed(2)} zł</div>
          <p className="result-note">Suma wszystkich depozytów w systemie bankowym</p>
        </div>

        <div className="result-card">
          <h4>Mnożnik (m)</h4>
          <div className="result-value">{multiplier.toFixed(2)}</div>
          <p className="result-formula">m = 1 / {(reserveRatio * 100).toFixed(0)}% = {multiplier.toFixed(2)}</p>
        </div>

        <div className="result-card">
          <h4>Całkowite kredyty</h4>
          <div className="result-value">{finalRound.cumulativeLoans.toFixed(2)} zł</div>
          <p className="result-note">Suma wszystkich udzielonych kredytów</p>
        </div>

        <div className="result-card">
          <h4>Całkowite rezerwy</h4>
          <div className="result-value">{finalRound.cumulativeReserves.toFixed(2)} zł</div>
          <p className="result-note">Pieniądze zatrzymane w bankach jako rezerwy</p>
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
          <h4>📝 Kreacja pieniądza krok po kroku:</h4>

          <div className="calc-step">
            <strong>Jak to działa?</strong>
            <p>
              1. Klient wpłaca <strong>{initialDeposit} zł</strong> do Banku początkowego<br/>
              2. Bank zatrzymuje <strong>{(reserveRatio * 100).toFixed(0)}%</strong> jako rezerwy = <strong>{(initialDeposit * reserveRatio).toFixed(2)} zł</strong><br/>
              3. Bank pożycza resztę = <strong>{(initialDeposit * (1 - reserveRatio)).toFixed(2)} zł</strong><br/>
              4. Pożyczone pieniądze trafiają do kolejnego banku jako depozyt<br/>
              5. Proces się powtarza → pieniądz się "rozmnaża"!
            </p>
          </div>

          <div className="rounds-table">
            <h4>Tabela kreacji pieniądza w kolejnych rundach:</h4>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Runda</th>
                    <th>Bank</th>
                    <th>Depozyt otrzymany</th>
                    <th>Rezerwy ({(reserveRatio * 100).toFixed(0)}%)</th>
                    <th>Kredyt udzielony</th>
                    <th>Suma depozytów</th>
                  </tr>
                </thead>
                <tbody>
                  {rounds.map((round) => (
                    <tr key={round.round} className={round.round === 0 ? 'first-round' : ''}>
                      <td>{round.round}</td>
                      <td><Building2 size={16} className="inline-icon" /> {round.bankName}</td>
                      <td className="number">{round.deposit.toFixed(2)} zł</td>
                      <td className="number reserves">{round.reserves.toFixed(2)} zł</td>
                      <td className="number loans">{round.loan.toFixed(2)} zł</td>
                      <td className="number cumulative">{round.cumulativeDeposits.toFixed(2)} zł</td>
                    </tr>
                  ))}
                  {finalRound.cumulativeDeposits < totalMoneySupply * 0.99 && (
                    <tr className="continuation-row">
                      <td colSpan={6}>
                        ... (proces trwa dalej, aż kredyty staną się znikomo małe)
                      </td>
                    </tr>
                  )}
                  <tr className="total-row">
                    <td colSpan={2}><strong>SUMA KOŃCOWA:</strong></td>
                    <td></td>
                    <td className="number"><strong>{finalRound.cumulativeReserves.toFixed(2)} zł</strong></td>
                    <td className="number"><strong>{finalRound.cumulativeLoans.toFixed(2)} zł</strong></td>
                    <td className="number"><strong>{totalMoneySupply.toFixed(2)} zł</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="calc-step">
            <strong>Matematyka za tym procesem:</strong>
            <p>To suma ciągu geometrycznego:</p>
            <div className="formula">
              Podaż = {initialDeposit} + {(initialDeposit * (1 - reserveRatio)).toFixed(2)} + {(initialDeposit * Math.pow(1 - reserveRatio, 2)).toFixed(2)} + ...
            </div>
            <div className="formula">
              = {initialDeposit} × [1 + {(1 - reserveRatio).toFixed(2)} + {(Math.pow(1 - reserveRatio, 2)).toFixed(2)} + ...]
            </div>
            <div className="formula">
              = {initialDeposit} × [1 / (1 - {(1 - reserveRatio).toFixed(2)})] = {initialDeposit} × [1 / {reserveRatio.toFixed(2)}]
            </div>
            <p className="calc-result">
              = {initialDeposit} × {multiplier.toFixed(2)} = <strong>{totalMoneySupply.toFixed(2)} zł</strong>
            </p>
          </div>
        </div>
      )}

      <div className="chart-section">
        <h4>📈 Wykres wzrostu podaży pieniądza</h4>
        <p className="chart-description">
          Wykres pokazuje, jak rośnie suma depozytów w kolejnych rundach
        </p>

        <svg viewBox="0 0 600 300" className="money-chart-svg">
          {/* Osie */}
          <line x1="60" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2" />
          <line x1="60" y1="250" x2="60" y2="30" stroke="#333" strokeWidth="2" />

          {/* Etykiety osi */}
          <text x="300" y="280" textAnchor="middle" fill="#666" fontSize="14">Runda kreacji pieniądza</text>
          <text x="30" y="140" textAnchor="middle" fill="#666" fontSize="14" transform="rotate(-90, 30, 140)">
            Suma depozytów (zł)
          </text>

          {/* Linia asymptoty (całkowita podaż) */}
          <line
            x1="60"
            y1={250 - (totalMoneySupply / (totalMoneySupply * 1.1)) * 220}
            x2="550"
            y2={250 - (totalMoneySupply / (totalMoneySupply * 1.1)) * 220}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="560"
            y={250 - (totalMoneySupply / (totalMoneySupply * 1.1)) * 220 + 5}
            fill="#ef4444"
            fontSize="12"
            fontWeight="600"
          >
            {totalMoneySupply.toFixed(0)} zł
          </text>

          {/* Krzywa wzrostu */}
          {rounds.map((round, index) => {
            if (index === 0) return null;

            const prevRound = rounds[index - 1];
            const x1 = 60 + ((prevRound.round / maxRounds) * 490);
            const y1 = 250 - ((prevRound.cumulativeDeposits / (totalMoneySupply * 1.1)) * 220);
            const x2 = 60 + ((round.round / maxRounds) * 490);
            const y2 = 250 - ((round.cumulativeDeposits / (totalMoneySupply * 1.1)) * 220);

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#10b981"
                strokeWidth="3"
              />
            );
          })}

          {/* Punkty */}
          {rounds.map((round, index) => {
            const x = 60 + ((round.round / maxRounds) * 490);
            const y = 250 - ((round.cumulativeDeposits / (totalMoneySupply * 1.1)) * 220);

            return (
              <g key={index}>
                <circle cx={x} cy={y} r="5" fill="#10b981" stroke="#fff" strokeWidth="2" />
                {index % 3 === 0 && (
                  <text x={x} y="270" textAnchor="middle" fill="#666" fontSize="11">
                    {round.round}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        <p style={{marginTop: '1rem', textAlign: 'center', color: '#6b7280'}}>
          Wykres pokazuje, jak suma depozytów asymptotycznie zbliża się do {totalMoneySupply.toFixed(2)} zł
        </p>
      </div>

      <div className="interpretation-box">
        <h4>💡 Interpretacja i wnioski:</h4>
        <ul>
          <li>
            <strong>Kreacja pieniądza to nie "drukowanie":</strong> Bank centralny stworzył tylko początkowe {initialDeposit} zł.
            Resztę pieniądza stworzyły banki komercyjne przez udzielanie kredytów!
          </li>
          <li>
            <strong>Im niższa stopa rezerw, tym więcej pieniądza:</strong> Przy r={(reserveRatio * 100).toFixed(0)}%,
            mnożnik wynosi {multiplier.toFixed(2)}. Gdyby r było niższe, mnożnik byłby wyższy → więcej pieniądza w gospodarce.
          </li>
          <li>
            <strong>Bank centralny kontroluje podaż pieniądza:</strong> Zmieniając stopę rezerw (r), BC może wpływać na to,
            ile pieniądza tworzą banki komercyjne.
          </li>
          <li>
            <strong>W rzeczywistości proces jest bardziej skomplikowany:</strong> Ludzie trzymają część gotówki (nie wszystko wpłacają),
            banki trzymają rezerwy nadwyżkowe (więcej niż wymagane), popyt na kredyty się zmienia. Ale podstawowa mechanika jest taka sama!
          </li>
          <li>
            <strong>Zbyt dużo pieniądza → inflacja:</strong> Jeśli banki tworzą zbyt dużo pieniądza (niskie r, łatwe kredyty),
            może to prowadzić do inflacji. Dlatego bank centralny musi utrzymywać równowagę.
          </li>
        </ul>
      </div>
    </div>
  );
}
