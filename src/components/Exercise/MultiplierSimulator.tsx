import { useState } from 'react';
import { Play, RotateCcw, TrendingUp } from 'lucide-react';
import './MultiplierSimulator.css';

export default function MultiplierSimulator() {
  const [initialSpending, setInitialSpending] = useState(100);
  const [mpc, setMpc] = useState(0.8);
  const [rounds, setRounds] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const multiplier = 1 / (1 - mpc);
  const totalIncrease = initialSpending * multiplier;

  const calculateRounds = () => {
    const roundsData = [];
    let spending = initialSpending;
    let cumulative = 0;

    for (let i = 0; i <= 10 && spending > 0.01; i++) {
      cumulative += spending;
      roundsData.push({
        round: i,
        spending: spending,
        cumulative: cumulative
      });
      spending = spending * mpc;
    }

    return roundsData;
  };

  const roundsData = calculateRounds();

  const startAnimation = () => {
    setRounds(0);
    setIsAnimating(true);

    const interval = setInterval(() => {
      setRounds(prev => {
        if (prev >= roundsData.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  const reset = () => {
    setRounds(0);
    setIsAnimating(false);
  };

  const visibleRounds = isAnimating || rounds > 0 ? roundsData.slice(0, rounds + 1) : [];

  return (
    <div className="multiplier-simulator">
      <div className="simulator-controls">
        <div className="control-group">
          <label>
            Początkowe wydatki (np. wydatki rządowe):
            <input
              type="number"
              value={initialSpending}
              onChange={(e) => setInitialSpending(parseFloat(e.target.value) || 0)}
              min="0"
              step="10"
              disabled={isAnimating}
            />
            <span className="unit">mln zł</span>
          </label>
        </div>

        <div className="control-group">
          <label>
            Krańcowa skłonność do konsumpcji (MPC):
            <input
              type="range"
              value={mpc}
              onChange={(e) => setMpc(parseFloat(e.target.value))}
              min="0"
              max="0.95"
              step="0.05"
              disabled={isAnimating}
            />
            <span className="value-display">{mpc.toFixed(2)}</span>
          </label>
          <p className="help-text">
            Z każdej dodatkowej złotówki {(mpc * 100).toFixed(0)}% idzie na konsumpcję,
            {' '}{((1 - mpc) * 100).toFixed(0)}% na oszczędności
          </p>
        </div>

        <div className="control-buttons">
          <button
            onClick={startAnimation}
            className="btn-primary"
            disabled={isAnimating}
          >
            <Play size={18} />
            {isAnimating ? 'Symulacja w toku...' : 'Uruchom symulację'}
          </button>
          <button onClick={reset} className="btn-secondary">
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>

      <div className="results-panel">
        <div className="result-card">
          <h4><TrendingUp className="inline-icon" size={20} /> Mnożnik</h4>
          <div className="result-value">{multiplier.toFixed(2)}</div>
          <p className="result-formula">k = 1 / (1 - {mpc}) = {multiplier.toFixed(2)}</p>
        </div>

        <div className="result-card">
          <h4>Całkowity wzrost PKB</h4>
          <div className="result-value">{totalIncrease.toFixed(2)} mln zł</div>
          <p className="result-formula">
            {initialSpending} × {multiplier.toFixed(2)} = {totalIncrease.toFixed(2)}
          </p>
        </div>

        <div className="result-card">
          <h4>MPS (Oszczędności)</h4>
          <div className="result-value">{(1 - mpc).toFixed(2)}</div>
          <p className="result-formula">MPS = 1 - MPC = {(1 - mpc).toFixed(2)}</p>
        </div>
      </div>

      {visibleRounds.length > 0 && (
        <div className="rounds-visualization">
          <h3>Rundy mnożnika - krok po kroku</h3>
          <p className="description">
            Zobacz, jak początkowe wydatki "rozprzestrzeniają się" w gospodarce:
          </p>

          <div className="rounds-table">
            <div className="table-header">
              <div className="col">Runda</div>
              <div className="col">Opis</div>
              <div className="col">Wydatki w tej rundzie</div>
              <div className="col">Suma skumulowana</div>
            </div>

            {visibleRounds.map((round, index) => (
              <div
                key={round.round}
                className={`table-row ${index === rounds ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="col round-number">{round.round}</div>
                <div className="col round-description">
                  {round.round === 0 && 'Początkowe wydatki rządowe'}
                  {round.round === 1 && `Robotnicy wydają ${(mpc * 100).toFixed(0)}% swojej płacy`}
                  {round.round === 2 && 'Sprzedawcy wydają otrzymane pieniądze'}
                  {round.round > 2 && `Kolejni odbiorcy wydają ${(mpc * 100).toFixed(0)}%`}
                </div>
                <div className="col spending-value">
                  {round.spending.toFixed(2)} mln zł
                </div>
                <div className="col cumulative-value">
                  {round.cumulative.toFixed(2)} mln zł
                </div>
              </div>
            ))}
          </div>

          <div className="convergence-info">
            <p>
              <strong>💡 Suma geometryczna:</strong> {initialSpending} + {(initialSpending * mpc).toFixed(2)} + {(initialSpending * mpc * mpc).toFixed(2)} + ... = <strong>{totalIncrease.toFixed(2)} mln zł</strong>
            </p>
            <p>
              Im wyższe MPC, tym silniejszy efekt mnożnikowy!
              {mpc >= 0.8 && ' (Silny mnożnik 💪)'}
              {mpc < 0.5 && ' (Słaby mnożnik)'}
            </p>
          </div>
        </div>
      )}

      <div className="explanation-box">
        <h4>🎯 Kluczowe wnioski:</h4>
        <ul>
          <li>
            <strong>Każda złotówka wydana przez rząd</strong> generuje więcej niż 1 zł wzrostu PKB
          </li>
          <li>
            <strong>Wysokie MPC (ludzie dużo wydają)</strong> = silny mnożnik = większy wzrost PKB
          </li>
          <li>
            <strong>Niskie MPC (ludzie dużo oszczędzają)</strong> = słaby mnożnik = mniejszy wzrost PKB
          </li>
          <li>
            <strong>Mnożnik działa w obie strony:</strong> Cięcia wydatków rządowych też mają efekt mnożnikowy (na minus!)
          </li>
          <li>
            <strong>W rzeczywistości</strong> mnożnik jest słabszy (import, podatki, opóźnienia czasowe)
          </li>
        </ul>
      </div>
    </div>
  );
}
