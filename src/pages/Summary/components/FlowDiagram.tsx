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
          <p>Wartość wszystkich dóbr i usług w cenach rynkowych - z VAT, akcyzą, podatkami</p>
        </div>
      </div>

      <div className="arrow-box">
        <div className="arrow-icon">↓</div>
        <div className="operation-tags">
          <span className="op-tag minus">− podatki pośrednie</span>
          <span className="op-tag plus">+ dotacje</span>
        </div>
        <div className="formula-box">
          <strong>Wzór:</strong> PKB (c. czynn.) = PKB (c. rynk.) − Tp + S
        </div>
      </div>

      <div className="simple-card">
        <div className="card-number">2</div>
        <div className="card-content">
          <h3>PKB (ceny czynników produkcji)</h3>
          <p>Po usunięciu podatków pośrednich i dodaniu dotacji - czyste dochody czynników produkcji (płace, zyski, renty, odsetki)</p>
        </div>
      </div>

      <div className="arrow-box">
        <div className="arrow-icon">↓</div>
        <div className="operation-tags">
          <span className="op-tag plus">+ dochody z pracy i własności Polaków za granicą</span>
          <span className="op-tag minus">− dochody z pracy i własności cudzoziemców w PL</span>
        </div>
        <div className="formula-box">
          <strong>Wzór:</strong> PNB = PKB (c. czynn.) + DZ_kraj − DZ_zagranica
        </div>
      </div>

      <div className="simple-card">
        <div className="card-number">3</div>
        <div className="card-content">
          <h3>PNB (Produkt Narodowy Brutto)</h3>
          <p>Zmiana perspektywy z terytorialnej na narodową - liczymy dochody należące Polakom z tytułu pracy i własności, niezależnie od miejsca świadczenia</p>
        </div>
      </div>

      <div className="arrow-box">
        <div className="arrow-icon">↓</div>
        <div className="operation-tags">
          <span className="op-tag minus">− amortyzacja</span>
        </div>
        <div className="formula-box">
          <strong>Wzór:</strong> DN = PNB − A
        </div>
      </div>

      <div className="simple-card highlight">
        <div className="card-number">4</div>
        <div className="card-content">
          <h3>DN (Dochód Narodowy)</h3>
          <p>Końcowy wynik: czysty dochód narodowy = płace + zyski + renty + odsetki</p>
        </div>
      </div>
    </div>
  );
}
