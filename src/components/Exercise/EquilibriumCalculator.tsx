import { useState } from 'react';
import { TrendingUp, Info } from 'lucide-react';
import './EquilibriumCalculator.css';

export default function EquilibriumCalculator() {
  const [autonomousConsumption, setAutonomousConsumption] = useState(100);
  const [mpc, setMpc] = useState(0.8);
  const [investment, setInvestment] = useState(200);
  const [government, setGovernment] = useState(150);
  const [exports, setExports] = useState(100);
  const [imports, setImports] = useState(80);
  const [showDetails, setShowDetails] = useState(true);

  // Oblicz równowagowe Y
  // Y = C + I + G + (X - M)
  // Y = C₀ + c·Y + I + G + (X - M)
  // Y - c·Y = C₀ + I + G + (X - M)
  // Y(1 - c) = C₀ + I + G + (X - M)
  // Y = [C₀ + I + G + (X - M)] / (1 - c)

  const autonomousSpending = autonomousConsumption + investment + government + (exports - imports);
  const multiplier = 1 / (1 - mpc);
  const equilibriumY = autonomousSpending * multiplier;
  const equilibriumC = autonomousConsumption + mpc * equilibriumY;
  const netExports = exports - imports;

  // Reserved for future chart implementation
  /* const generateChartPoints = () => {
    const points = [];
    const maxY = equilibriumY * 1.5;
    const step = maxY / 50;

    for (let y = 0; y <= maxY; y += step) {
      const c = autonomousConsumption + mpc * y;
      const ad = c + investment + government + netExports;
      points.push({
        y: y,
        ad: ad,
        line45: y
      });
    }

    return points;
  };

  const chartPoints = generateChartPoints(); */
  const maxY = equilibriumY * 1.5;

  return (
    <div className="equilibrium-calculator">
      <div className="calculator-intro">
        <h3>📊 Kalkulator równowagi makroekonomicznej</h3>
        <p>
          Ustaw parametry gospodarki i zobacz, jak kształtuje się równowaga między produkcją (Y) a popytem globalnym (AD).
        </p>
      </div>

      <div className="calculator-grid">
        <div className="input-section">
          <h4>⚙️ Parametry funkcji konsumpcji</h4>

          <div className="input-group">
            <label>
              Konsumpcja autonomiczna (C₀):
              <input
                type="number"
                value={autonomousConsumption}
                onChange={(e) => setAutonomousConsumption(parseFloat(e.target.value) || 0)}
                step="10"
              />
              <span className="unit">mld zł</span>
            </label>
            <p className="hint">Konsumpcja niezależna od dochodu (bazowa)</p>
          </div>

          <div className="input-group">
            <label>
              Krańcowa skłonność do konsumpcji (MPC):
              <input
                type="range"
                value={mpc}
                onChange={(e) => setMpc(parseFloat(e.target.value))}
                min="0"
                max="0.95"
                step="0.05"
              />
              <span className="value-badge">{mpc.toFixed(2)}</span>
            </label>
            <p className="hint">Jaka część dodatkowego dochodu idzie na konsumpcję</p>
          </div>

          <div className="formula-display">
            <strong>Funkcja konsumpcji:</strong>
            <div className="formula">C = {autonomousConsumption} + {mpc.toFixed(2)} × Y</div>
          </div>
        </div>

        <div className="input-section">
          <h4>💰 Wydatki autonomiczne</h4>

          <div className="input-group">
            <label>
              Inwestycje (I):
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
                step="10"
              />
              <span className="unit">mld zł</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              Wydatki rządowe (G):
              <input
                type="number"
                value={government}
                onChange={(e) => setGovernment(parseFloat(e.target.value) || 0)}
                step="10"
              />
              <span className="unit">mld zł</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              Eksport (X):
              <input
                type="number"
                value={exports}
                onChange={(e) => setExports(parseFloat(e.target.value) || 0)}
                step="10"
              />
              <span className="unit">mld zł</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              Import (M):
              <input
                type="number"
                value={imports}
                onChange={(e) => setImports(parseFloat(e.target.value) || 0)}
                step="10"
              />
              <span className="unit">mld zł</span>
            </label>
          </div>
        </div>
      </div>

      <div className="results-section">
        <div className="result-card primary">
          <h4><TrendingUp className="inline-icon" /> Równowagowe PKB (Y*)</h4>
          <div className="result-value">{equilibriumY.toFixed(2)} mld zł</div>
          <p className="result-note">Punkt, w którym Y = AD (wszystko co wyprodukowaliśmy, zostaje sprzedane)</p>
        </div>

        <div className="result-card">
          <h4>Mnożnik (k)</h4>
          <div className="result-value">{multiplier.toFixed(2)}</div>
          <p className="result-formula">k = 1 / (1 - {mpc}) = {multiplier.toFixed(2)}</p>
        </div>

        <div className="result-card">
          <h4>Konsumpcja w równowadze</h4>
          <div className="result-value">{equilibriumC.toFixed(2)} mld zł</div>
          <p className="result-formula">C = {autonomousConsumption} + {mpc} × {equilibriumY.toFixed(2)}</p>
        </div>

        <div className="result-card">
          <h4>Eksport netto (NX)</h4>
          <div className="result-value">{netExports.toFixed(2)} mld zł</div>
          <p className="result-formula">NX = {exports} - {imports}</p>
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
            <strong>Krok 1: Oblicz wydatki autonomiczne</strong>
            <p>Autonomiczne = C₀ + I + G + (X - M)</p>
            <p className="calc-result">
              = {autonomousConsumption} + {investment} + {government} + ({exports} - {imports})
              = <strong>{autonomousSpending.toFixed(2)} mld zł</strong>
            </p>
          </div>

          <div className="calc-step">
            <strong>Krok 2: Oblicz mnożnik</strong>
            <p>k = 1 / (1 - MPC)</p>
            <p className="calc-result">
              = 1 / (1 - {mpc}) = 1 / {(1 - mpc).toFixed(2)} = <strong>{multiplier.toFixed(2)}</strong>
            </p>
          </div>

          <div className="calc-step">
            <strong>Krok 3: Oblicz równowagowe Y</strong>
            <p>Y* = Autonomiczne × Mnożnik</p>
            <p className="calc-result">
              = {autonomousSpending.toFixed(2)} × {multiplier.toFixed(2)} = <strong>{equilibriumY.toFixed(2)} mld zł</strong>
            </p>
          </div>

          <div className="calc-step">
            <strong>Sprawdzenie równowagi: Y = AD?</strong>
            <p>AD = C + I + G + (X - M)</p>
            <p>AD = {equilibriumC.toFixed(2)} + {investment} + {government} + {netExports.toFixed(2)}</p>
            <p className="calc-result">
              AD = <strong>{(equilibriumC + investment + government + netExports).toFixed(2)} mld zł</strong>
            </p>
            <p className="success">✓ Y = AD = {equilibriumY.toFixed(2)} mld zł - RÓWNOWAGA!</p>
          </div>
        </div>
      )}

      <div className="chart-section">
        <h4>📈 Wykres równowagi (Y = AD)</h4>
        <p className="chart-description">
          Punkt przecięcia linii 45° (Y) z linią AD to równowaga makroekonomiczna
        </p>

        <svg viewBox="0 0 500 400" className="equilibrium-chart">
          {/* Osie */}
          <line x1="50" y1="350" x2="450" y2="350" stroke="#333" strokeWidth="2" />
          <line x1="50" y1="350" x2="50" y2="50" stroke="#333" strokeWidth="2" />

          {/* Etykiety osi */}
          <text x="250" y="385" textAnchor="middle" fill="#666" fontSize="14">
            Produkcja (Y)
          </text>
          <text x="25" y="200" textAnchor="middle" fill="#666" fontSize="14" transform="rotate(-90, 25, 200)">
            AD, Y
          </text>

          {/* Linia 45° (Y = Y) */}
          <line
            x1="50"
            y1="350"
            x2="450"
            y2="50"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text x="420" y="70" fill="#2563eb" fontSize="12" fontWeight="600">Y = Y (45°)</text>

          {/* Linia AD */}
          <path
            d={`M 50 ${350 - (autonomousSpending / maxY) * 300} L 450 ${350 - ((autonomousSpending + mpc * maxY) / maxY) * 300}`}
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
          />
          <text x="420" y={350 - ((autonomousSpending + mpc * maxY) / maxY) * 300 - 10} fill="#10b981" fontSize="12" fontWeight="600">
            AD
          </text>

          {/* Punkt równowagi */}
          <circle
            cx={50 + (equilibriumY / maxY) * 400}
            cy={350 - (equilibriumY / maxY) * 300}
            r="6"
            fill="#ef4444"
            stroke="#fff"
            strokeWidth="2"
          />

          {/* Linie pomocnicze do punktu równowagi */}
          <line
            x1={50 + (equilibriumY / maxY) * 400}
            y1="350"
            x2={50 + (equilibriumY / maxY) * 400}
            y2={350 - (equilibriumY / maxY) * 300}
            stroke="#ef4444"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <line
            x1="50"
            y1={350 - (equilibriumY / maxY) * 300}
            x2={50 + (equilibriumY / maxY) * 400}
            y2={350 - (equilibriumY / maxY) * 300}
            stroke="#ef4444"
            strokeWidth="1"
            strokeDasharray="3,3"
          />

          {/* Wartość Y* */}
          <text
            x={50 + (equilibriumY / maxY) * 400}
            y="370"
            textAnchor="middle"
            fill="#ef4444"
            fontSize="12"
            fontWeight="700"
          >
            Y* = {equilibriumY.toFixed(0)}
          </text>

          {/* Legenda punktu równowagi */}
          <text
            x={50 + (equilibriumY / maxY) * 400 + 15}
            y={350 - (equilibriumY / maxY) * 300 - 10}
            fill="#ef4444"
            fontSize="13"
            fontWeight="700"
          >
            Równowaga
          </text>
        </svg>
      </div>

      <div className="interpretation-box">
        <h4>💡 Interpretacja:</h4>
        <ul>
          <li>
            <strong>Równowaga przy Y* = {equilibriumY.toFixed(2)} mld zł:</strong> W tym punkcie
            cała produkcja znajduje nabywców. Nie ma nadmiaru ani niedoboru dóbr.
          </li>
          <li>
            <strong>Gdyby Y &lt; {equilibriumY.toFixed(2)}:</strong> Popyt (AD) byłby większy od produkcji.
            Zapasy by malały, przedsiębiorstwa zwiększyłyby produkcję.
          </li>
          <li>
            <strong>Gdyby Y &gt; {equilibriumY.toFixed(2)}:</strong> Produkcja większa od popytu.
            Zapasy by rosły, przedsiębiorstwa zmniejszyłyby produkcję.
          </li>
          <li>
            <strong>Efekt mnożnika = {multiplier.toFixed(2)}:</strong> Wzrost wydatków rządowych (G) o 10 mld zł
            zwiększyłby PKB o {(10 * multiplier).toFixed(2)} mld zł!
          </li>
        </ul>
      </div>
    </div>
  );
}
