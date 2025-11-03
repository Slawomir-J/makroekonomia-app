import { Calculator, TrendingUp, DollarSign, Coins, Scale } from 'lucide-react';
import EquilibriumCalculator from '../../components/Exercise/EquilibriumCalculator';
import MultiplierSimulator from '../../components/Exercise/MultiplierSimulator';
import MoneyCreationCalculator from '../../components/Exercise/MoneyCreationCalculator';
import MonetaryPolicySimulator from '../../components/Exercise/MonetaryPolicySimulator';
import ValueAddedCalculator from '../../components/Exercise/ValueAddedCalculator';
import BudgetCalculator from '../../components/Exercise/BudgetCalculator';
import './Tools.css';

export default function Tools() {
  return (
    <div className="tools-page">
      <div className="tools-header">
        <Calculator size={48} />
        <h1>Narzędzia i Kalkulatory</h1>
        <p className="tools-subtitle">
          Wszystkie interaktywne narzędzia do nauki makroekonomii w jednym miejscu
        </p>
      </div>

      {/* Równowaga makroekonomiczna */}
      <section className="tool-section">
        <div className="tool-section-header">
          <Scale size={32} />
          <div>
            <h2>Kalkulator Równowagi Makroekonomicznej</h2>
            <p>Oblicz równowagowy poziom dochodu narodowego (Y) w gospodarce</p>
          </div>
        </div>
        <div className="tool-content">
          <EquilibriumCalculator />
        </div>
      </section>

      {/* Mnożnik keynesowski */}
      <section className="tool-section">
        <div className="tool-section-header">
          <TrendingUp size={32} />
          <div>
            <h2>Symulator Mnożnika Keynesowskiego</h2>
            <p>Zobacz jak działa efekt mnożnikowy w gospodarce krok po kroku</p>
          </div>
        </div>
        <div className="tool-content">
          <MultiplierSimulator />
        </div>
      </section>

      {/* Kreacja pieniądza */}
      <section className="tool-section">
        <div className="tool-section-header">
          <Coins size={32} />
          <div>
            <h2>Kalkulator Kreacji Pieniądza</h2>
            <p>Symuluj proces kreacji pieniądza przez system bankowy</p>
          </div>
        </div>
        <div className="tool-content">
          <MoneyCreationCalculator />
        </div>
      </section>

      {/* Polityka monetarna */}
      <section className="tool-section">
        <div className="tool-section-header">
          <DollarSign size={32} />
          <div>
            <h2>Symulator Polityki Monetarnej</h2>
            <p>Eksperymentuj z narzędziami polityki pieniężnej banku centralnego</p>
          </div>
        </div>
        <div className="tool-content">
          <MonetaryPolicySimulator />
        </div>
      </section>

      {/* Wartość dodana */}
      <section className="tool-section">
        <div className="tool-section-header">
          <Calculator size={32} />
          <div>
            <h2>Kalkulator Wartości Dodanej</h2>
            <p>Oblicz wartość dodaną w procesie produkcji</p>
          </div>
        </div>
        <div className="tool-content">
          <ValueAddedCalculator />
        </div>
      </section>

      {/* Budżet */}
      <section className="tool-section">
        <div className="tool-section-header">
          <Scale size={32} />
          <div>
            <h2>Kalkulator Budżetu Państwa</h2>
            <p>Analizuj wpływ polityki fiskalnej na budżet państwa</p>
          </div>
        </div>
        <div className="tool-content">
          <BudgetCalculator />
        </div>
      </section>
    </div>
  );
}
