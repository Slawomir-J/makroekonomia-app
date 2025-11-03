import { useState } from 'react';
import { Plus, Trash2, Calculator as CalcIcon, CheckCircle } from 'lucide-react';
import './ValueAddedCalculator.css';

interface Company {
  id: string;
  name: string;
  outputValue: number;
  intermediateInputs: number;
}

export default function ValueAddedCalculator() {
  const [companies, setCompanies] = useState<Company[]>([
    { id: '1', name: 'Producent stali', outputValue: 4000, intermediateInputs: 0 },
    { id: '2', name: 'Producent maszyn', outputValue: 2000, intermediateInputs: 1000 },
    { id: '3', name: 'Producent opon', outputValue: 500, intermediateInputs: 0 },
    { id: '4', name: 'Producent samochodów', outputValue: 5000, intermediateInputs: 3500 },
  ]);

  const addCompany = () => {
    const newId = (Math.max(...companies.map(c => parseInt(c.id))) + 1).toString();
    setCompanies([
      ...companies,
      { id: newId, name: `Przedsiębiorstwo ${newId}`, outputValue: 0, intermediateInputs: 0 },
    ]);
  };

  const removeCompany = (id: string) => {
    if (companies.length > 1) {
      setCompanies(companies.filter(c => c.id !== id));
    }
  };

  const updateCompany = (id: string, field: keyof Company, value: string | number) => {
    setCompanies(
      companies.map(c => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const calculateValueAdded = (company: Company) => {
    return company.outputValue - company.intermediateInputs;
  };

  const totalValueAdded = companies.reduce(
    (sum, company) => sum + calculateValueAdded(company),
    0
  );

  const totalOutputValue = companies.reduce((sum, c) => sum + c.outputValue, 0);
  const totalIntermediateInputs = companies.reduce((sum, c) => sum + c.intermediateInputs, 0);

  return (
    <div className="value-added-calculator">
      <div className="calculator-header">
        <CalcIcon className="header-icon" />
        <div>
          <h3>Kalkulator Wartości Dodanej</h3>
          <p className="calculator-description">
            Wprowadź wartości dla każdego przedsiębiorstwa i zobacz, jak oblicza się PKB
          </p>
        </div>
      </div>

      <div className="formula-reminder">
        <strong>Wzór:</strong> Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich
      </div>

      <div className="companies-list">
        {companies.map((company, index) => {
          const valueAdded = calculateValueAdded(company);
          return (
            <div key={company.id} className="company-card">
              <div className="company-header">
                <span className="company-number">{index + 1}</span>
                <input
                  type="text"
                  value={company.name}
                  onChange={e => updateCompany(company.id, 'name', e.target.value)}
                  className="company-name-input"
                  placeholder="Nazwa przedsiębiorstwa"
                />
                {companies.length > 1 && (
                  <button
                    onClick={() => removeCompany(company.id)}
                    className="remove-btn"
                    title="Usuń przedsiębiorstwo"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>

              <div className="company-inputs">
                <div className="input-group">
                  <label>Wartość produkcji (£)</label>
                  <input
                    type="number"
                    value={company.outputValue || ''}
                    onChange={e =>
                      updateCompany(company.id, 'outputValue', parseFloat(e.target.value) || 0)
                    }
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className="input-group">
                  <label>Koszty dóbr pośrednich (£)</label>
                  <input
                    type="number"
                    value={company.intermediateInputs || ''}
                    onChange={e =>
                      updateCompany(
                        company.id,
                        'intermediateInputs',
                        parseFloat(e.target.value) || 0
                      )
                    }
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className="value-added-result">
                  <label>Wartość dodana</label>
                  <div className={`result-value ${valueAdded < 0 ? 'negative' : 'positive'}`}>
                    {valueAdded.toLocaleString('pl-PL')} £
                  </div>
                </div>
              </div>

              {valueAdded < 0 && (
                <div className="warning-message">
                  ⚠️ Wartość dodana nie może być ujemna! Sprawdź dane.
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={addCompany} className="add-company-btn">
        <Plus size={20} />
        Dodaj przedsiębiorstwo
      </button>

      <div className="summary-section">
        <h4>Podsumowanie</h4>

        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">Łączna wartość transakcji:</span>
            <span className="summary-value">{totalOutputValue.toLocaleString('pl-PL')} £</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">Łączne koszty pośrednie:</span>
            <span className="summary-value">{totalIntermediateInputs.toLocaleString('pl-PL')} £</span>
          </div>

          <div className="summary-item highlight">
            <span className="summary-label">
              <CheckCircle size={20} />
              PKB (suma wartości dodanych):
            </span>
            <span className="summary-value total">{totalValueAdded.toLocaleString('pl-PL')} £</span>
          </div>
        </div>

        <div className="explanation-box">
          <h5>💡 Dlaczego suma wartości dodanych = PKB?</h5>
          <p>
            Gdybyśmy zsumowali wszystkie transakcje ({totalOutputValue.toLocaleString('pl-PL')} £),
            policzylibyśmy dobra pośrednie wielokrotnie. Wartość dodana eliminuje to podwójne liczenie,
            pokazując tylko <strong>rzeczywisty przyrost wartości</strong> na każdym etapie produkcji.
          </p>
          <p className="formula-final">
            PKB = Σ wartości dodanych = {companies.length > 0 && companies.map((c, i) => (
              <span key={c.id}>
                {i > 0 && ' + '}
                {calculateValueAdded(c).toLocaleString('pl-PL')}
              </span>
            ))} = {totalValueAdded.toLocaleString('pl-PL')} £
          </p>
        </div>
      </div>
    </div>
  );
}
