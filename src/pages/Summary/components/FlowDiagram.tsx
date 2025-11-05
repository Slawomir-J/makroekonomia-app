import './FlowDiagram.css';

export default function FlowDiagram() {
  return (
    <div className="flow-simple">
      <div className="flow-header">
        <h2>Przepływ miar dochodu narodowego</h2>
      </div>

      <div className="simple-card">
        <div className="card-number">1</div>
        <div className="card-content">
          <h3>PKB (ceny rynkowe)</h3>
          <p>Wartość wszystkich dóbr i usług w cenach, które płacisz w sklepie - zawiera VAT, akcyzę, podatki.</p>
          <p><strong>Przykład:</strong> Kupujesz chleb za 5 zł (w tym 1 zł VAT)</p>
        </div>
      </div>

      <div className="arrow-box">
        <div className="arrow-icon">↓</div>
        <div className="operation-tags">
          <span className="op-tag minus">− podatki pośrednie (VAT, akcyza)</span>
          <span className="op-tag plus">+ dotacje państwa dla firm</span>
        </div>
        <div className="formula-box">
          <strong>Wzór:</strong> PKB (ceny czynników) = PKB (rynkowe) − podatki pośrednie + dotacje
        </div>
        <p className="explanation">💡 Usuwamy podatki, bo nie są dochodem producentów. Dodajemy dotacje, bo zwiększają dochody firm.</p>
      </div>

      <div className="simple-card">
        <div className="card-number">2</div>
        <div className="card-content">
          <h3>PKB (ceny czynników produkcji)</h3>
          <p>Ile faktycznie zarobili producenci: płace pracowników + zyski firm + renty + odsetki.</p>
          <p><strong>Przykład:</strong> Z tych 5 zł za chleb: 3 zł płaca piekarza, 1 zł zysk piekarni, 1 zł to był VAT (już odjęty)</p>
        </div>
      </div>

      <div className="arrow-box">
        <div className="arrow-icon">↓</div>
        <div className="operation-tags">
          <span className="op-tag plus">+ dochody Polaków pracujących za granicą</span>
          <span className="op-tag minus">− dochody cudzoziemców pracujących w Polsce</span>
        </div>
        <div className="formula-box">
          <strong>Wzór:</strong> PNB = PKB (czynniki) + dochody Polaków za granicą − dochody cudzoziemców w PL
        </div>
        <p className="explanation">💡 Przechodzimy z "gdzie produkowano" na "kto zarobił". Polak w Niemczech → liczy się do Polski.</p>
      </div>

      <div className="simple-card">
        <div className="card-number">3</div>
        <div className="card-content">
          <h3>PNB (Produkt Narodowy Brutto)</h3>
          <p>Ile zarobili POLACY (niezależnie gdzie pracują) + ile zarobiły polskie firmy (niezależnie gdzie działają).</p>
          <p><strong>Przykład:</strong> Polak zarabia w Berlinie 5000€ → to się liczy do PNB Polski, nie Niemiec!</p>
        </div>
      </div>

      <div className="arrow-box">
        <div className="arrow-icon">↓</div>
        <div className="operation-tags">
          <span className="op-tag minus">− amortyzacja (zużycie maszyn, budynków)</span>
        </div>
        <div className="formula-box">
          <strong>Wzór:</strong> DN = PNB − amortyzacja
        </div>
        <p className="explanation">💡 Fabryka zużywa maszyny warte 100k rocznie → to nie jest czysty zysk, trzeba odliczyć koszt zużycia.</p>
      </div>

      <div className="simple-card highlight">
        <div className="card-number">4</div>
        <div className="card-content">
          <h3>DN (Dochód Narodowy)</h3>
          <p><strong>Końcowy wynik:</strong> Czysty dochód narodowy = ile społeczeństwo faktycznie zarobiło.</p>
          <p>To suma: płace + zyski przedsiębiorstw + renty + odsetki (bez zużycia kapitału)</p>
        </div>
      </div>
    </div>
  );
}
