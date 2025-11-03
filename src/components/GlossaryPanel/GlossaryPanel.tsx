import { BookMarked } from 'lucide-react';
import './GlossaryPanel.css';

export default function GlossaryPanel() {
  const glossaryItems = [
    { symbol: 'Y', meaning: 'Dochód narodowy / Produkt' },
    { symbol: 'C', meaning: 'Konsumpcja' },
    { symbol: 'I', meaning: 'Inwestycje' },
    { symbol: 'G', meaning: 'Wydatki rządowe' },
    { symbol: 'X', meaning: 'Eksport' },
    { symbol: 'M', meaning: 'Import' },
    { symbol: 'NX', meaning: 'Eksport netto (X - M)' },
    { symbol: 'AD', meaning: 'Popyt globalny (Aggregate Demand)' },
    { symbol: 'AS', meaning: 'Podaż globalna (Aggregate Supply)' },
    { symbol: 'MPC', meaning: 'Krańcowa skłonność do konsumpcji' },
    { symbol: 'MPS', meaning: 'Krańcowa skłonność do oszczędzania' },
    { symbol: 'GDP', meaning: 'Produkt Krajowy Brutto' },
    { symbol: 'GNP', meaning: 'Produkt Narodowy Brutto' },
    { symbol: 'CPI', meaning: 'Wskaźnik cen konsumpcyjnych' },
    { symbol: 'CPI_t', meaning: 'CPI w okresie bieżącym (t)' },
    { symbol: 'CPI_(t-1)', meaning: 'CPI w okresie poprzednim (t-1)' },
    { symbol: 'r', meaning: 'Stopa procentowa' },
    { symbol: 'P', meaning: 'Poziom cen' },
    { symbol: 'L', meaning: 'Praca (Labor)' },
    { symbol: 'K', meaning: 'Kapitał' },
    { symbol: 'π', meaning: 'Stopa inflacji' },
    { symbol: 'u', meaning: 'Stopa bezrobocia' },
    { symbol: 'T', meaning: 'Podatki' },
    { symbol: 'TR', meaning: 'Transfery socjalne' },
  ];

  return (
    <aside className="glossary-panel">
      <div className="glossary-header">
        <BookMarked size={20} />
        <h3>Legenda skrótów</h3>
      </div>

      <div className="glossary-content">
        {glossaryItems.map((item, index) => (
          <div key={index} className="glossary-item">
            <code className="glossary-symbol">{item.symbol}</code>
            <span className="glossary-meaning">{item.meaning}</span>
          </div>
        ))}
      </div>

      <div className="glossary-footer">
        <p>💡 Te oznaczenia pojawiają się we wzorach i obliczeniach</p>
      </div>
    </aside>
  );
}
