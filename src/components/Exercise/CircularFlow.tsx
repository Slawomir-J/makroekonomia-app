import { useState } from 'react';
import { Info, Play, Pause, RotateCcw, Eye, EyeOff } from 'lucide-react';
import './CircularFlow.css';

type FlowElement = 'households' | 'firms' | 'goods' | 'factors' | 'income' | 'spending' | 'government' | 'foreign';

interface FlowValues {
  consumption: number;
  investment: number;
  government: number;
  exports: number;
  imports: number;
  wages: number;
  profits: number;
  taxes: number;
  transfers: number;
}

export default function CircularFlow() {
  const [selectedElement, setSelectedElement] = useState<FlowElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGovernment, setShowGovernment] = useState(false);
  const [showForeign, setShowForeign] = useState(false);
  const [values, setValues] = useState<FlowValues>({
    consumption: 600,
    investment: 200,
    government: 150,
    exports: 100,
    imports: 50,
    wages: 500,
    profits: 300,
    taxes: 100,
    transfers: 50,
  });

  const totalGDP = values.consumption + values.investment +
    (showGovernment ? values.government : 0) +
    (showForeign ? (values.exports - values.imports) : 0);

  const totalIncome = values.wages + values.profits;
  const disposableIncome = totalIncome - (showGovernment ? values.taxes : 0) + (showGovernment ? values.transfers : 0);

  const elementInfo: Record<FlowElement, { title: string; description: string; formula?: string }> = {
    households: {
      title: 'Gospodarstwa domowe',
      description: 'Właściciele czynników produkcji (praca, kapitał, ziemia). Otrzymują dochody i wydają je na dobra i usługi.',
      formula: 'Dochód rozporządzalny = Płace + Zyski - Podatki + Transfery'
    },
    firms: {
      title: 'Przedsiębiorstwa',
      description: 'Wynajmują czynniki produkcji od gospodarstw domowych, produkują dobra i usługi, które sprzedają.',
      formula: 'Przychody = C + I + G + (X - M)'
    },
    goods: {
      title: 'Przepływ dóbr i usług',
      description: 'Przedsiębiorstwa dostarczają dobra i usługi gospodarstwom domowym (konsumpcja) oraz innym przedsiębiorstwom (inwestycje).',
      formula: 'Wartość dóbr = C + I'
    },
    factors: {
      title: 'Przepływ czynników produkcji',
      description: 'Gospodarstwa domowe dostarczają pracę, kapitał i ziemię przedsiębiorstwom. To są "usługi czynników produkcji".',
      formula: 'Wartość usług czynników = Płace + Zyski + Czynsze'
    },
    income: {
      title: 'Przepływ dochodów',
      description: 'Przedsiębiorstwa płacą gospodarstwom domowym za wykorzystane czynniki: płace (za pracę), zyski (za kapitał), czynsze (za ziemię).',
      formula: 'Dochody = W (płace) + Π (zyski) = Y'
    },
    spending: {
      title: 'Przepływ wydatków',
      description: 'Gospodarstwa domowe wydają swoje dochody na zakup dóbr i usług od przedsiębiorstw.',
      formula: 'Wydatki = C (konsumpcja) + S (oszczędności)'
    },
    government: {
      title: 'Państwo (rząd)',
      description: 'Pobiera podatki, daje transfery (zasiłki), kupuje dobra i usługi (wydatki rządowe G).',
      formula: 'Budżet = T (podatki) - G (wydatki) - TR (transfery)'
    },
    foreign: {
      title: 'Zagranica',
      description: 'Handel zagraniczny: Eksport (X) - sprzedajemy za granicę, Import (M) - kupujemy z zagranicy.',
      formula: 'Eksport netto = X - M'
    }
  };

  const handleReset = () => {
    setValues({
      consumption: 600,
      investment: 200,
      government: 150,
      exports: 100,
      imports: 50,
      wages: 500,
      profits: 300,
      taxes: 100,
      transfers: 50,
    });
  };

  return (
    <div className="circular-flow">
      <div className="flow-controls">
        <div className="control-group">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`control-btn ${isAnimating ? 'active' : ''}`}
          >
            {isAnimating ? <Pause size={18} /> : <Play size={18} />}
            {isAnimating ? 'Zatrzymaj' : 'Animuj przepływy'}
          </button>
          <button onClick={handleReset} className="control-btn">
            <RotateCcw size={18} />
            Reset
          </button>
        </div>

        <div className="control-group">
          <button
            onClick={() => setShowGovernment(!showGovernment)}
            className={`control-btn ${showGovernment ? 'active' : ''}`}
          >
            {showGovernment ? <EyeOff size={18} /> : <Eye size={18} />}
            {showGovernment ? 'Ukryj państwo' : 'Pokaż państwo'}
          </button>
          <button
            onClick={() => setShowForeign(!showForeign)}
            className={`control-btn ${showForeign ? 'active' : ''}`}
          >
            {showForeign ? <EyeOff size={18} /> : <Eye size={18} />}
            {showForeign ? 'Ukryj zagranicę' : 'Pokaż zagranicę'}
          </button>
        </div>
      </div>

      <div className="flow-diagram-container">
        <svg viewBox="0 0 1000 700" className="flow-diagram">
          {/* Gospodarstwa domowe */}
          <g className="flow-element households" onClick={() => setSelectedElement('households')}>
            <rect x="40" y="270" width="220" height="130" rx="12"
                  className={`element-box ${selectedElement === 'households' ? 'selected' : ''}`} />
            <text x="150" y="320" className="element-label">Gospodarstwa</text>
            <text x="150" y="350" className="element-label">domowe</text>
            <text x="150" y="380" className="element-sublabel">Dochód: {disposableIncome}</text>
          </g>

          {/* Przedsiębiorstwa */}
          <g className="flow-element firms" onClick={() => setSelectedElement('firms')}>
            <rect x="740" y="270" width="220" height="130" rx="12"
                  className={`element-box ${selectedElement === 'firms' ? 'selected' : ''}`} />
            <text x="850" y="320" className="element-label">Przedsiębiorstwa</text>
            <text x="850" y="355" className="element-sublabel">Przychody: {totalGDP}</text>
          </g>

          {/* Państwo (opcjonalne) */}
          {showGovernment && (
            <g className="flow-element government" onClick={() => setSelectedElement('government')}>
              <rect x="425" y="20" width="150" height="90" rx="10"
                    className={`element-box ${selectedElement === 'government' ? 'selected' : ''}`} />
              <text x="500" y="60" className="element-label">Państwo</text>
              <text x="500" y="90" className="element-sublabel">G: {values.government}</text>
            </g>
          )}

          {/* Zagranica (opcjonalne) */}
          {showForeign && (
            <g className="flow-element foreign" onClick={() => setSelectedElement('foreign')}>
              <rect x="425" y="570" width="150" height="90" rx="10"
                    className={`element-box ${selectedElement === 'foreign' ? 'selected' : ''}`} />
              <text x="500" y="605" className="element-label">Zagranica</text>
              <text x="500" y="635" className="element-sublabel">X-M: {values.exports - values.imports}</text>
            </g>
          )}

          {/* Górny przepływ zewnętrzny: wydatki → */}
          <g className="flow-arrow spending" onClick={() => setSelectedElement('spending')}>
            <defs>
              <marker id="arrowhead-spending" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#2563eb" />
              </marker>
            </defs>
            <path d="M 260 280 Q 500 165, 740 280"
                  className={`flow-path spending-flow ${isAnimating ? 'animated' : ''} ${selectedElement === 'spending' ? 'selected' : ''}`}
                  markerEnd="url(#arrowhead-spending)"
                  strokeDasharray="8,6" />
            <text x="500" y="150" className="flow-label spending-label with-shadow">Wydatki ($)</text>
          </g>

          {/* Górny przepływ wewnętrzny: dobra i usługi → */}
          <g className="flow-arrow goods" onClick={() => setSelectedElement('goods')}>
            <defs>
              <marker id="arrowhead-goods" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#6EE7B7" />
              </marker>
            </defs>
            <path d="M 740 290 Q 500 215, 260 290"
                  className={`flow-path goods-flow ${isAnimating ? 'animated' : ''} ${selectedElement === 'goods' ? 'selected' : ''}`}
                  markerEnd="url(#arrowhead-goods)" />
            <text x="500" y="205" className="flow-label goods-label with-shadow">Dobra i usługi</text>
            <text x="500" y="222" className="flow-value with-shadow">C: {values.consumption}</text>
          </g>

          {/* Dolny przepływ wewnętrzny: czynniki produkcji ← */}
          <g className="flow-arrow factors" onClick={() => setSelectedElement('factors')}>
            <defs>
              <marker id="arrowhead-factors" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#60A5FA" />
              </marker>
            </defs>
            <path d="M 260 380 Q 500 455, 740 380"
                  className={`flow-path factors-flow ${isAnimating ? 'animated' : ''} ${selectedElement === 'factors' ? 'selected' : ''}`}
                  markerEnd="url(#arrowhead-factors)" />
            <text x="500" y="470" className="flow-label factors-label with-shadow">Czynniki produkcji</text>
            <text x="500" y="487" className="flow-value with-shadow">(praca, kapitał, ziemia)</text>
          </g>

          {/* Dolny przepływ zewnętrzny: dochody ← */}
          <g className="flow-arrow income" onClick={() => setSelectedElement('income')}>
            <defs>
              <marker id="arrowhead-income" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#A7F3D0" />
              </marker>
            </defs>
            <path d="M 260 395 Q 500 520, 740 395"
                  className={`flow-path income-flow ${isAnimating ? 'animated' : ''} ${selectedElement === 'income' ? 'selected' : ''}`}
                  markerEnd="url(#arrowhead-income)"
                  strokeDasharray="8,6" />
            <text x="500" y="540" className="flow-label income-label with-shadow">Dochody ($)</text>
            <text x="500" y="557" className="flow-value with-shadow">W + Π: {totalIncome}</text>
          </g>

          {/* Przepływy z państwem */}
          {showGovernment && (
            <>
              {/* Podatki - od gospodarstw do państwa (LEWA STRONA) */}
              <g className="flow-arrow tax" onClick={() => setSelectedElement('government')}>
                <defs>
                  <marker id="arrow-tax" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                </defs>
                <path d="M 180 270 Q 280 150, 440 110"
                      className="flow-path-curved tax-flow"
                      markerEnd="url(#arrow-tax)" />
                {/* Kompaktowa karta z tłem - bliżej państwa */}
                <rect x="225" y="125" width="100" height="22" rx="3" fill="rgba(255, 255, 255, 0.98)"
                      stroke="#ef4444" strokeWidth="2" className="label-bg" />
                <text x="275" y="140" className="flow-label-small tax-label">T: {values.taxes}</text>
              </g>

              {/* Transfery - od państwa do gospodarstw (LEWA STRONA) */}
              <g className="flow-arrow transfer" onClick={() => setSelectedElement('government')}>
                <defs>
                  <marker id="arrow-transfer" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                  </marker>
                </defs>
                <path d="M 540 110 Q 360 160, 210 270"
                      className="flow-path-curved transfer-flow"
                      markerEnd="url(#arrow-transfer)" />
                {/* Kompaktowa karta z tłem - bardziej na lewo */}
                <rect x="305" y="120" width="110" height="22" rx="3" fill="rgba(255, 255, 255, 0.98)"
                      stroke="#10b981" strokeWidth="2" className="label-bg" />
                <text x="360" y="135" className="flow-label-small transfer-label">TR: {values.transfers}</text>
              </g>

              {/* Wydatki rządowe - od państwa do przedsiębiorstw (PRAWA STRONA) */}
              <g className="flow-arrow gov-spending" onClick={() => setSelectedElement('government')}>
                <defs>
                  <marker id="arrow-gov" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                  </marker>
                </defs>
                <path d="M 560 110 Q 720 150, 820 270"
                      className="flow-path-curved gov-spending-flow"
                      markerEnd="url(#arrow-gov)" />
                {/* Kompaktowa karta z tłem - bliżej państwa */}
                <rect x="675" y="125" width="90" height="22" rx="3" fill="rgba(255, 255, 255, 0.98)"
                      stroke="#3b82f6" strokeWidth="2" className="label-bg" />
                <text x="720" y="140" className="flow-label-small gov-label">G: {values.government}</text>
              </g>
            </>
          )}

          {/* Przepływy z zagranicą */}
          {showForeign && (
            <>
              {/* Import - od zagranicy do gospodarstw (LEWA STRONA DÓŁ) */}
              <g className="flow-arrow import" onClick={() => setSelectedElement('foreign')}>
                <defs>
                  <marker id="arrow-import" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                </defs>
                <path d="M 455 570 Q 280 510, 180 400"
                      className="flow-path-curved import-flow"
                      markerEnd="url(#arrow-import)" />
                {/* Kompaktowa karta z tłem - bliżej zagranicy */}
                <rect x="225" y="563" width="90" height="22" rx="3" fill="rgba(255, 255, 255, 0.98)"
                      stroke="#ef4444" strokeWidth="2" className="label-bg" />
                <text x="270" y="578" className="flow-label-small import-label">M: {values.imports}</text>
              </g>

              {/* Eksport - od przedsiębiorstw do zagranicy (PRAWA STRONA DÓŁ) */}
              <g className="flow-arrow export" onClick={() => setSelectedElement('foreign')}>
                <defs>
                  <marker id="arrow-export" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                  </marker>
                </defs>
                <path d="M 820 400 Q 720 510, 545 570"
                      className="flow-path-curved export-flow"
                      markerEnd="url(#arrow-export)" />
                {/* Kompaktowa karta z tłem - bliżej zagranicy */}
                <rect x="685" y="563" width="90" height="22" rx="3" fill="rgba(255, 255, 255, 0.98)"
                      stroke="#10b981" strokeWidth="2" className="label-bg" />
                <text x="730" y="578" className="flow-label-small export-label">X: {values.exports}</text>
              </g>
            </>
          )}
        </svg>

        {selectedElement && (
          <div className="element-info-panel">
            <div className="info-header">
              <Info size={20} />
              <h4>{elementInfo[selectedElement].title}</h4>
              <button onClick={() => setSelectedElement(null)} className="close-info">×</button>
            </div>
            <p>{elementInfo[selectedElement].description}</p>
            {elementInfo[selectedElement].formula && (
              <div className="info-formula">
                <strong>Wzór:</strong> {elementInfo[selectedElement].formula}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flow-equations">
        <h4>Kluczowe tożsamości</h4>
        <div className="equations-grid">
          <div className="equation-card">
            <div className="equation-title">Produkcja = Dochód = Wydatki</div>
            <div className="equation-formula">
              Y = {values.wages} + {values.profits} = {totalIncome}
            </div>
            <div className="equation-formula">
              Y = C + I{showGovernment ? ' + G' : ''}{showForeign ? ' + (X - M)' : ''} = {totalGDP}
            </div>
            {totalIncome !== totalGDP && (
              <div className="equation-note warning">
                ⚠️ Niezrównoważone! Dostosuj wartości.
              </div>
            )}
          </div>

          {!showGovernment && !showForeign && (
            <div className="equation-card">
              <div className="equation-title">Gospodarka zamknięta bez państwa</div>
              <div className="equation-formula">Y = C + I</div>
              <div className="equation-formula">Y = C + S (oszczędności)</div>
              <div className="equation-formula">∴ S = I (oszczędności = inwestycje)</div>
            </div>
          )}

          {showGovernment && !showForeign && (
            <div className="equation-card">
              <div className="equation-title">Z państwem (gospodarka zamknięta)</div>
              <div className="equation-formula">Y = C + I + G</div>
              <div className="equation-formula">Y = C + S + T (po opodatkowaniu)</div>
              <div className="equation-formula">∴ S + T = I + G</div>
            </div>
          )}

          {showForeign && (
            <div className="equation-card">
              <div className="equation-title">Gospodarka otwarta</div>
              <div className="equation-formula">
                Y = C + I{showGovernment ? ' + G' : ''} + (X - M)
              </div>
              <div className="equation-formula">
                Eksport netto = {values.exports} - {values.imports} = {values.exports - values.imports}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flow-values-panel">
        <h4>Dostosuj wartości</h4>
        <div className="values-grid">
          <div className="value-input">
            <label>Konsumpcja (C)</label>
            <input
              type="number"
              value={values.consumption}
              onChange={(e) => setValues({ ...values, consumption: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <div className="value-input">
            <label>Inwestycje (I)</label>
            <input
              type="number"
              value={values.investment}
              onChange={(e) => setValues({ ...values, investment: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <div className="value-input">
            <label>Płace (W)</label>
            <input
              type="number"
              value={values.wages}
              onChange={(e) => setValues({ ...values, wages: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <div className="value-input">
            <label>Zyski (Π)</label>
            <input
              type="number"
              value={values.profits}
              onChange={(e) => setValues({ ...values, profits: parseFloat(e.target.value) || 0 })}
            />
          </div>
          {showGovernment && (
            <>
              <div className="value-input">
                <label>Wydatki rządowe (G)</label>
                <input
                  type="number"
                  value={values.government}
                  onChange={(e) => setValues({ ...values, government: parseFloat(e.target.value) || 0 })}
                />
              </div>
              <div className="value-input">
                <label>Podatki (T)</label>
                <input
                  type="number"
                  value={values.taxes}
                  onChange={(e) => setValues({ ...values, taxes: parseFloat(e.target.value) || 0 })}
                />
              </div>
              <div className="value-input">
                <label>Transfery (TR)</label>
                <input
                  type="number"
                  value={values.transfers}
                  onChange={(e) => setValues({ ...values, transfers: parseFloat(e.target.value) || 0 })}
                />
              </div>
            </>
          )}
          {showForeign && (
            <>
              <div className="value-input">
                <label>Eksport (X)</label>
                <input
                  type="number"
                  value={values.exports}
                  onChange={(e) => setValues({ ...values, exports: parseFloat(e.target.value) || 0 })}
                />
              </div>
              <div className="value-input">
                <label>Import (M)</label>
                <input
                  type="number"
                  value={values.imports}
                  onChange={(e) => setValues({ ...values, imports: parseFloat(e.target.value) || 0 })}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
