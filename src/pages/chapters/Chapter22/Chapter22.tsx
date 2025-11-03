import { TrendingUp, TrendingDown, DollarSign, AlertTriangle, Users, Globe, ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Chapter20/Chapter20.css';

export default function Chapter22() {
  return (
    <div className="chapter">
      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 22</span>
        <h1>Polityka fiskalna i handel zagraniczny</h1>
      </header>

      <section className="chapter-section">
        <h2><DollarSign className="section-icon" /> Polityka fiskalna</h2>

        <div className="concept-card">
          <h3>Czym jest polityka fiskalna?</h3>
          <p className="definition">
            <strong>Polityka fiskalna</strong> to działania rządu polegające na zmianie wydatków rządowych (G)
            i podatków (T) w celu wpływania na poziom produkcji, zatrudnienia i inflacji w gospodarce.
          </p>

          <div className="key-points">
            <div className="key-point">
              <strong>Narzędzia polityki fiskalnej:</strong>
              <ul>
                <li><strong>Wydatki rządowe (G):</strong> zakupy dóbr i usług przez państwo</li>
                <li><strong>Podatki (T):</strong> bezpośrednie (PIT, CIT) i pośrednie (VAT, akcyza)</li>
                <li><strong>Transfery (TR):</strong> emerytury, zasiłki, dotacje</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h3><TrendingUp className="inline-icon" /> Polityka fiskalna ekspansywna</h3>
          <p className="definition">
            Stosowana w czasie <strong>recesji</strong>, gdy gospodarka ma zbyt niski popyt i wysokie bezrobocie.
          </p>

          <div className="formula-box">
            <h4>Działania:</h4>
            <ul className="formula-explanation">
              <li><strong>Zwiększenie wydatków rządowych (G ↑)</strong> - budowa dróg, szpitali, programy publiczne</li>
              <li><strong>Obniżenie podatków (T ↓)</strong> - więcej pieniędzy w kieszeniach ludzi</li>
              <li><strong>Zwiększenie transferów (TR ↑)</strong> - wyższe zasiłki, dopłaty</li>
            </ul>
            <div className="formula">
              Efekt: AD ↑ → PKB ↑ → Bezrobocie ↓
            </div>
          </div>

          <div className="modern-example">
            <h4><TrendingUp className="inline-icon" size={20} /> Przykład: CARES Act (USA, 2020)</h4>
            <p>
              <strong>Pakiet stymulacyjny COVID-19:</strong> 2,2 biliona USD wydane na ratowanie gospodarki.
            </p>
            <p className="data-highlight">
              Działania: Czeki po 1200 USD dla obywateli, dopłaty do pensji (PPP), rozszerzone zasiłki dla bezrobotnych (+600 USD/tydzień)
            </p>
            <p><strong>Efekt:</strong> PKB odbił się w rekordowym tempie. Wzrost z -3,5% (2020) do +5,9% (2021)</p>
          </div>

          <div className="modern-example">
            <h4><TrendingUp className="inline-icon" size={20} /> Przykład: Tarcza Antykryzysowa (Polska, 2020)</h4>
            <p>
              <strong>212 miliardów złotych</strong> (~10% PKB) na wsparcie gospodarki.
            </p>
            <p className="data-highlight">
              Działania: Dopłaty do wynagrodzeń, zwolnienia z ZUS, pożyczki dla firm, postojowe dla samozatrudnionych
            </p>
            <p><strong>Efekt:</strong> Spadek PKB tylko -2,2% (jeden z najlepszych wyników w UE)</p>
          </div>
        </div>

        <div className="concept-card">
          <h3><TrendingDown className="inline-icon" /> Polityka fiskalna restrykcyjna</h3>
          <p className="definition">
            Stosowana gdy gospodarka się <strong>przegrzewa</strong> - zbyt wysoki popyt prowadzi do inflacji.
          </p>

          <div className="formula-box">
            <h4>Działania:</h4>
            <ul className="formula-explanation">
              <li><strong>Zmniejszenie wydatków rządowych (G ↓)</strong> - cięcia budżetowe</li>
              <li><strong>Podwyższenie podatków (T ↑)</strong> - mniej pieniędzy do wydania</li>
              <li><strong>Zmniejszenie transferów (TR ↓)</strong> - niższe świadczenia</li>
            </ul>
            <div className="formula">
              Efekt: AD ↓ → PKB ↓ → Inflacja ↓
            </div>
          </div>

          <div className="modern-example">
            <h4><TrendingDown className="inline-icon" size={20} /> Przykład: Zacieśnienie fiskalne (strefa euro, 2010-2012)</h4>
            <p>
              Po kryzysie finansowym 2008 wiele krajów UE miało wysokie deficyty budżetowe.
            </p>
            <p className="data-highlight">
              Działania: Cięcia wydatków publicznych, podwyżki podatków (szczególnie Grecja, Hiszpania, Portugalia)
            </p>
            <p><strong>Skutek:</strong> Głęboka recesja, wzrost bezrobocia. Krytykowane jako "zbyt szybka konsolidacja"</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><AlertTriangle className="section-icon" /> Deficyt i dług publiczny</h2>

        <div className="concept-card">
          <h3>Podstawowe pojęcia</h3>

          <div className="formula-box">
            <h4>Deficyt budżetowy:</h4>
            <div className="formula">
              Deficyt = G + TR - T
            </div>
            <p className="formula-explanation">
              Gdy wydatki rządu (G + TR) przekraczają wpływy z podatków (T), powstaje deficyt.
            </p>
          </div>

          <div className="formula-box">
            <h4>Nadwyżka budżetowa:</h4>
            <div className="formula">
              Nadwyżka = T - G - TR &gt; 0
            </div>
            <p className="formula-explanation">
              Gdy wpływy z podatków są wyższe niż wydatki. Rzadkość w praktyce!
            </p>
          </div>

          <div className="formula-box">
            <h4>Dług publiczny:</h4>
            <p className="formula-explanation">
              <strong>Dług publiczny</strong> to skumulowana suma wszystkich deficytów z przeszłości.
              Jeśli rząd przez 10 lat miał deficyt, to wszystkie te deficyty sumują się w dług.
            </p>
            <div className="formula">
              Dług(t) = Dług(t-1) + Deficyt(t)
            </div>
          </div>

          <div className="note">
            <AlertTriangle className="inline-icon" size={18} />
            <strong>Różnica deficyt vs dług:</strong> Deficyt to "ile wydaliśmy więcej w tym roku",
            dług to "ile łącznie jesteśmy winni". Analogia: deficyt to miesięczne "wejście na minus",
            dług to całkowite saldo karty kredytowej.
          </div>
        </div>

        <div className="modern-example">
          <h4><AlertTriangle className="inline-icon" size={20} /> Dług publiczny w liczbach (2024)</h4>
          <p>
            <strong>Japonia:</strong> Dług 264% PKB (najwyższy na świecie!)
            <br />Mimo to niskooprocentowany, bo kredytodawcy to głównie Japończycy.
          </p>
          <p>
            <strong>USA:</strong> Dług ~120% PKB, około 31 bilionów USD
            <br />Obsługa długu to ~400 mld USD rocznie (odsetki).
          </p>
          <p>
            <strong>Polska:</strong> Dług ~50% PKB, około 1,5 biliona PLN
            <br />Umiarkowany poziom, ale rosnący po COVID-19.
          </p>
          <p className="data-highlight">
            <strong>Próg unijny:</strong> Kryteria z Maastricht - dług nie powinien przekraczać 60% PKB, deficyt 3% PKB.
            Wiele krajów łamie te zasady!
          </p>
        </div>

        <Link to="/chapter/22/calculator" className="interactive-link">
          <Calculator size={20} />
          Kalkulator deficytu budżetowego →
        </Link>
      </section>

      <section className="chapter-section">
        <h2><Globe className="section-icon" /> Handel zagraniczny</h2>

        <div className="concept-card">
          <h3>Bilans handlowy</h3>

          <div className="formula-box">
            <h4>Eksport netto (NX):</h4>
            <div className="formula">
              NX = X - M
            </div>
            <p className="formula-explanation">
              <strong>X</strong> - eksport (sprzedaż za granicę)<br />
              <strong>M</strong> - import (zakup z zagranicy)
            </p>
          </div>

          <div className="key-points">
            <div className="key-point">
              <strong>NX &gt; 0 (nadwyżka handlowa):</strong>
              <ul>
                <li>Eksportujemy więcej niż importujemy</li>
                <li>Pieniądze wpływają do kraju</li>
                <li>Przykład: Niemcy, Chiny - "fabryki świata"</li>
              </ul>
            </div>

            <div className="key-point">
              <strong>NX &lt; 0 (deficyt handlowy):</strong>
              <ul>
                <li>Importujemy więcej niż eksportujemy</li>
                <li>Pieniądze wypływają z kraju</li>
                <li>Przykład: USA, Polska - "konsumujemy więcej niż produkujemy"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h3>Wpływ handlu na PKB</h3>

          <div className="formula-box">
            <div className="formula">
              PKB = C + I + G + (X - M)
            </div>
            <p className="formula-explanation">
              Eksport <strong>dodaje</strong> do PKB (produkujemy dla obcych).<br />
              Import <strong>odejmuje</strong> od PKB (kupujemy zamiast produkować).
            </p>
          </div>

          <div className="example-box">
            <h4>Przykład:</h4>
            <p>Polska produkuje i eksportuje meble do Niemiec za 100 mln zł.</p>
            <p className="calc-result">→ X = +100 mln, PKB Polski ↑</p>
            <br />
            <p>Jednocześnie Polska importuje samochody z Niemiec za 150 mln zł.</p>
            <p className="calc-result">→ M = +150 mln, PKB Polski ↓</p>
            <br />
            <p><strong>Bilans:</strong> NX = 100 - 150 = -50 mln (deficyt handlowy)</p>
          </div>
        </div>

        <div className="modern-example">
          <h4><Globe className="inline-icon" size={20} /> Bilans handlowy w praktyce (2023)</h4>
          <p>
            <strong>Chiny:</strong> Nadwyżka ~880 mld USD. Największy eksporter na świecie.
            <br />Główne towary: elektronika, ubrania, maszyny.
          </p>
          <p>
            <strong>USA:</strong> Deficyt ~950 mld USD. Największy importer.
            <br />Konsumują więcej niż produkują, finansują to długiem.
          </p>
          <p>
            <strong>Niemcy:</strong> Nadwyżka ~250 mld EUR. "Lokomotywa Europy".
            <br />Główne towary: samochody, maszyny, chemikalia.
          </p>
          <p>
            <strong>Polska:</strong> Niewielka nadwyżka ~5 mld EUR (w niektórych latach deficyt).
            <br />Eksport: maszyny, meble, żywność. Import: paliwa, samochody, elektronika.
          </p>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Users className="section-icon" /> Mnożnik w gospodarce otwartej</h2>

        <div className="concept-card">
          <p className="definition">
            W gospodarce otwartej (z handlem zagranicznym) mnożnik jest <strong>słabszy</strong>
            niż w gospodarce zamkniętej.
          </p>

          <div className="formula-box">
            <h4>Dlaczego?</h4>
            <p className="formula-explanation">
              Gdy rząd wydaje 100 zł, część pieniędzy "wycieka" przez import.
              Ludzie kupują zagraniczne towary zamiast krajowych.
            </p>

            <div className="formula">
              Mnożnik gospodarki otwartej &lt; Mnożnik gospodarki zamkniętej
            </div>
          </div>

          <div className="example-box">
            <h4>Przykład:</h4>
            <p><strong>Gospodarka zamknięta (bez importu):</strong></p>
            <p>MPC = 0,8 → mnożnik = 5</p>
            <p>Rząd wydaje 100 zł → PKB rośnie o 500 zł</p>
            <br />
            <p><strong>Gospodarka otwarta (z importem):</strong></p>
            <p>MPC = 0,8, ale 20% wydatków to import (MPM = 0,2)</p>
            <p>Skuteczne MPC = 0,8 - 0,2 = 0,6</p>
            <p>Mnożnik = 1 / (1 - 0,6) = 2,5</p>
            <p>Rząd wydaje 100 zł → PKB rośnie tylko o 250 zł</p>
            <p className="calc-result"><strong>Połowa trafia za granicę!</strong></p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>Kluczowe wnioski</h2>
        <div className="key-points">
          <div className="key-point">
            🎯 <strong>Polityka fiskalna to narzędzie stabilizacji:</strong> Ekspansywna w recesji (G↑, T↓),
            restrykcyjna przy inflacji (G↓, T↑)
          </div>
          <div className="key-point">
            💰 <strong>Deficyt ≠ dług:</strong> Deficyt to roczny wynik (wydatki - dochody),
            dług to suma wszystkich deficytów z przeszłości
          </div>
          <div className="key-point">
            🌍 <strong>Eksport dodaje, import odejmuje:</strong> PKB = C + I + G + (X - M)
          </div>
          <div className="key-point">
            📉 <strong>Import osłabia mnożnik:</strong> Część wydatków "wycieka" za granicę,
            więc wzrost PKB jest mniejszy
          </div>
          <div className="key-point">
            ⚖️ <strong>Dylemat polityki fiskalnej:</strong> Stymulacja pomaga w kryzysie,
            ale zwiększa dług. Cięcia pomagają finansom, ale pogłębiają recesję
          </div>
        </div>
      </section>

      <div className="chapter-nav">
        <Link to="/chapter/21" className="btn-secondary">← Rozdział 21</Link>
        <Link to="/chapter/22/quiz" className="btn-primary">Quiz: Sprawdź wiedzę →</Link>
      </div>
    </div>
  );
}
