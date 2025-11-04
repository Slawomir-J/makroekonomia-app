import { BookOpen, Calculator, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlowDiagram from './components/FlowDiagram';
import './Summary.css';

export default function Summary() {
  return (
    <div className="summary-page">
      <header className="summary-header">
        <BookOpen className="header-icon" size={48} />
        <h1>Podsumowanie przed kartkówką</h1>
        <p className="summary-subtitle">
          Kluczowe wzory i praktyczne przykłady z rozdziałów 20-24
        </p>
      </header>

      {/* Przepływ miar narodowych - Komponent */}
      <FlowDiagram />

      {/* ROZDZIAŁ 20 - SKRÓT */}
      <section className="chapter-summary-compact">
        <div className="chapter-badge-large">Rozdział 20</div>
        <h2>PKB, inflacja, bezrobocie - Najważniejsze wzory</h2>

        <div className="formula-card">
          <h3>PKB (metoda wydatkowa) ⭐ NAJWAŻNIEJSZE</h3>
          <div className="formula-big">PKB = C + I + G + (X - M)</div>

          <div className="practical-example">
            <h4>📊 Przykład z życia - Polska 2024:</h4>
            <ul className="example-list">
              <li><strong>C</strong> (Konsumpcja) = 500 mld zł - Polacy kupują jedzenie, ubrania, telefony</li>
              <li><strong>I</strong> (Inwestycje) = 150 mld zł - Firmy budują fabryki, kupują maszyny</li>
              <li><strong>G</strong> (Wydatki rządowe) = 200 mld zł - Pensje urzędników, budowa dróg, szkoły</li>
              <li><strong>X - M</strong> (Eksport netto) = -50 mld zł - Więcej importujemy niż eksportujemy (deficyt)</li>
            </ul>
            <div className="result-box">PKB = 500 + 150 + 200 - 50 = <strong>800 mld zł</strong></div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Dlaczego M jest z minusem?</strong> Bo gdy kupujesz Samsunga z Korei, to wydajesz pieniądze
            (wchodzi do C), ale produkcja była w Korei, nie w Polsce! Więc odejmujemy M żeby nie liczyć cudzej produkcji.
          </div>
        </div>

        <div className="formula-card">
          <h3>Wartość dodana</h3>
          <div className="formula-big">Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich</div>

          <div className="practical-example">
            <h4>🍞 Przykład - Produkcja chleba:</h4>
            <ol className="step-list">
              <li>Rolnik sprzedaje pszenicę młynowi za 10 zł
                <div className="substep">→ Wartość dodana rolnika = 10 zł (żadnych kosztów, wyhodował z ziemi)</div>
              </li>
              <li>Młyn robi mąkę, sprzedaje piekarni za 18 zł
                <div className="substep">→ Wartość dodana = 18 - 10 = <strong>8 zł</strong></div>
              </li>
              <li>Piekarz robi chleb, sprzedaje Tobie za 25 zł
                <div className="substep">→ Wartość dodana = 25 - 18 = <strong>7 zł</strong></div>
              </li>
            </ol>
            <div className="result-box">
              PKB = suma wartości dodanych = 10 + 8 + 7 = <strong>25 zł</strong><br/>
              = wartość dobra finalnego (chleba)
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Po co to liczymy?</strong> Żeby nie liczyć pszenicy 3 razy! Pszenica jest dobrem pośrednim,
            więc NIE wchodzi bezpośrednio do PKB. Liczymy tylko chleb (dobro finalne) LUB sumy wartości dodanych.
          </div>
        </div>

        <div className="formula-card">
          <h3>Inflacja</h3>
          <div className="formula-big">Inflacja = [(CPI<sub>t</sub> - CPI<sub>t-1</sub>) / CPI<sub>t-1</sub>] × 100%</div>

          <div className="practical-example">
            <h4>🛒 Przykład - Twój koszyk zakupów:</h4>
            <p>2023: Koszyk (chleb + mleko + benzyna) kosztuje 100 zł → CPI = 100</p>
            <p>2024: Ten sam koszyk kosztuje 110 zł → CPI = 110</p>
            <div className="calculation">
              Inflacja = [(110 - 100) / 100] × 100% = <strong>10%</strong>
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Co to znaczy?</strong> Ceny wzrosły o 10%. Twoja stówka z zeszłego roku kupuje teraz towary
            za tylko 90 zł. Tracisz siłę nabywczą!
          </div>
        </div>

        <div className="formula-card">
          <h3>Nominalny vs Realny PKB</h3>
          <div className="formula-big">Realny PKB = (Nominalny PKB / Deflator PKB) × 100</div>

          <div className="practical-example">
            <h4>🚗 Przykład - Fabryka samochodów:</h4>
            <div className="year-comparison">
              <div className="year-box">
                <strong>2020 (rok bazowy):</strong><br/>
                Produkujemy 100 aut × 50 000 zł = 5 mln zł<br/>
                Deflator = 100
              </div>
              <div className="year-box">
                <strong>2024:</strong><br/>
                Produkujemy 100 aut × 60 000 zł = 6 mln zł<br/>
                Deflator = 120 (ceny wzrosły o 20%)
              </div>
            </div>
            <div className="calculation">
              Nominalny PKB 2024 = 6 mln zł (+20% od 2020)<br/>
              Realny PKB 2024 = (6 mln / 120) × 100 = <strong>5 mln zł</strong> (bez zmian!)
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Wniosek:</strong> Nominalny PKB wzrósł, ale to TYLKO efekt inflacji. Realnie produkujemy
            tyle samo aut! Dlatego używamy realnego PKB - pokazuje PRAWDZIWY wzrost gospodarczy.
          </div>
        </div>
      </section>

      {/* ROZDZIAŁ 21 - SKRÓT */}
      <section className="chapter-summary-compact">
        <div className="chapter-badge-large">Rozdział 21</div>
        <h2>Mnożnik i równowaga - Praktyczne zastosowanie</h2>

        <div className="formula-card">
          <h3>Funkcja konsumpcji ⭐</h3>
          <div className="formula-big">C = a + b × Y<sub>d</sub></div>
          <div className="formula-explain">
            <strong>a</strong> = konsumpcja autonomiczna (wydasz nawet jak zarobisz 0)<br/>
            <strong>b</strong> = MPC (Krańcowa Skłonność do Konsumpcji) - ile wydasz z każdej dodatkowej złotówki<br/>
            <strong>Y<sub>d</sub></strong> = dochód rozporządzalny (twoja pensja)
          </div>

          <div className="practical-example">
            <h4>💰 Przykład - Twój budżet:</h4>
            <p><strong>Sytuacja:</strong> Nawet bez zarobków musisz wydać 500 zł/mies (czynsz, jedzenie z oszczędności)</p>
            <p>Z każdej zarobionej złotówki wydajesz 80 groszy, a 20 groszy oszczędzasz</p>
            <div className="calculation">
              a = 500 zł (konsumpcja autonomiczna)<br/>
              b = 0,8 (MPC)<br/>
              <br/>
              Jeśli zarobisz 3000 zł:<br/>
              C = 500 + 0,8 × 3000 = 500 + 2400 = <strong>2900 zł</strong>
            </div>
            <p className="note-small">Oszczędzasz: 3000 - 2900 = 100 zł. Część dochodu idzie na przyszłość!</p>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>MPC + MPS = 1</strong> (zawsze!). Jeśli wydajesz 80%, to oszczędzasz 20%.
            To matematyczna pewność - każda złotówka albo idzie na konsumpcję, albo na oszczędności.
          </div>
        </div>

        <div className="formula-card">
          <h3>Mnożnik keynesowski ⭐⭐⭐</h3>
          <div className="formula-big">Mnożnik = 1 / (1 - MPC) = 1 / MPS</div>

          <div className="practical-example">
            <h4>🏗️ Przykład - Rząd buduje autostradę:</h4>
            <p><strong>Dane:</strong> MPC = 0,8 (ludzie wydają 80% dochodu)</p>
            <div className="calculation">
              Mnożnik = 1 / (1 - 0,8) = 1 / 0,2 = <strong>5</strong>
            </div>

            <h4>Mechanizm krok po kroku:</h4>
            <ol className="step-list">
              <li>Rząd płaci 100 mln zł firmie budowlanej → <strong>+100 mln PKB</strong></li>
              <li>Pracownicy dostają 100 mln pensji → wydają 80 mln (MPC=0,8) → <strong>+80 mln PKB</strong></li>
              <li>Ci, którzy dostali 80 mln → wydają 64 mln (0,8 × 80) → <strong>+64 mln PKB</strong></li>
              <li>Dalej: 51,2 mln, potem 40,96 mln, itd...</li>
            </ol>
            <div className="result-box">
              Suma: 100 + 80 + 64 + 51,2 + ... = 100 × 5 = <strong>500 mln zł PKB!</strong>
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Magia mnożnika:</strong> Rząd wydał 100 mln, a PKB wzrosło o 500 mln! Dlaczego? Bo pieniądze
            krążą w gospodarce. Twoja pensja = wydatki w sklepie = pensja sprzedawcy = kolejne wydatki...
          </div>
        </div>

        <div className="formula-card">
          <h3>Warunek równowagi</h3>
          <div className="formula-big">Y = AD</div>
          <div className="formula-explain">Produkcja = Popyt globalny</div>

          <div className="practical-example">
            <h4>⚖️ Co to znaczy w praktyce?</h4>
            <div className="comparison-boxes">
              <div className="bad-box">
                <strong>❌ Y &gt; AD (nadprodukcja)</strong><br/>
                Firmy produkują 1000 aut, ale ludzie kupują tylko 800<br/>
                → 200 aut stoi w magazynie<br/>
                → Firmy zwolnią ludzi i zmniejszą produkcję
              </div>
              <div className="bad-box">
                <strong>❌ Y &lt; AD (niedobór)</strong><br/>
                Firmy produkują 800 aut, ale ludzie chcą kupić 1000<br/>
                → Kolejki, braki w sklepach<br/>
                → Firmy zwiększą produkcję
              </div>
              <div className="good-box">
                <strong>✅ Y = AD (równowaga)</strong><br/>
                Firmy produkują 1000, ludzie kupują 1000<br/>
                → Wszystko się sprzedaje, nikt nie czeka<br/>
                → Gospodarka stabilna
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROZDZIAŁ 22 - SKRÓT */}
      <section className="chapter-summary-compact">
        <div className="chapter-badge-large">Rozdział 22</div>
        <h2>Polityka fiskalna - Jak rząd wpływa na gospodarkę</h2>

        <div className="formula-card">
          <h3>Mnożnik z podatkami</h3>
          <div className="formula-big">Mnożnik = 1 / (1 - MPC(1 - t))</div>
          <div className="formula-explain"><strong>t</strong> = stopa podatku (np. 0,2 = 20%)</div>

          <div className="practical-example">
            <h4>💸 Przykład - PIT 20%:</h4>
            <p><strong>Dane:</strong> MPC = 0,8, podatek t = 0,2</p>
            <div className="calculation">
              Mnożnik = 1 / (1 - 0,8 × (1 - 0,2)) = 1 / (1 - 0,64) = 1 / 0,36 = <strong>2,78</strong>
            </div>

            <p><strong>Porównanie:</strong></p>
            <ul className="comparison-list">
              <li>Bez podatków (t=0): mnożnik = 5</li>
              <li>Z podatkiem 20% (t=0,2): mnożnik = 2,78</li>
            </ul>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Dlaczego mnożnik jest mniejszy?</strong> Bo część pieniędzy "wycieka" do rządu jako podatki.
            Zarabiasz 100 zł → państwo zabiera 20 zł → zostaję Ci 80 zł → wydajesz 80% z 80 zł = tylko 64 zł wraca do gospodarki
            (zamiast 80 zł bez podatków).
          </div>
        </div>

        <div className="formula-card">
          <h3>Saldo budżetu</h3>
          <div className="formula-big">Saldo = T - G</div>

          <div className="practical-example">
            <h4>🏛️ Przykład - Budżet państwa:</h4>
            <div className="scenario-grid">
              <div className="scenario good">
                <strong>✅ Nadwyżka (rzadkość!)</strong><br/>
                T = 500 mld, G = 450 mld<br/>
                Saldo = +50 mld<br/>
                <em>Państwo zbiera więcej niż wydaje</em>
              </div>
              <div className="scenario neutral">
                <strong>⚖️ Budżet zrównoważony</strong><br/>
                T = 500 mld, G = 500 mld<br/>
                Saldo = 0<br/>
                <em>Wpływy = Wydatki</em>
              </div>
              <div className="scenario bad">
                <strong>❌ Deficyt (normalka)</strong><br/>
                T = 500 mld, G = 600 mld<br/>
                Saldo = -100 mld<br/>
                <em>Państwo wydaje więcej - musi pożyczać</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROZDZIAŁ 23 - SKRÓT */}
      <section className="chapter-summary-compact">
        <div className="chapter-badge-large">Rozdział 23</div>
        <h2>Kreacja pieniądza przez banki</h2>

        <div className="formula-card">
          <h3>Mnożnik kreacji pieniądza ⭐</h3>
          <div className="formula-big">Mnożnik = 1 / Stopa rezerw obowiązkowych</div>

          <div className="practical-example">
            <h4>🏦 Przykład - Magia banków:</h4>
            <p><strong>Dane:</strong> Wpłacasz do banku 1000 zł, rezerwy obowiązkowe = 10%</p>

            <h4>Krok po kroku:</h4>
            <ol className="step-list">
              <li><strong>Bank A:</strong> Dostaje 1000 zł
                <div className="substep">→ Rezerwuje 100 zł (10%), pożycza 900 zł Kowalskiemu</div>
              </li>
              <li><strong>Bank B:</strong> Kowalski wpłaca 900 zł
                <div className="substep">→ Rezerwuje 90 zł, pożycza 810 zł firmie</div>
              </li>
              <li><strong>Bank C:</strong> Firma wpłaca 810 zł
                <div className="substep">→ Rezerwuje 81 zł, pożycza 729 zł</div>
              </li>
              <li>I tak dalej...</li>
            </ol>

            <div className="result-box">
              Suma: 1000 + 900 + 810 + 729 + ... = 1000 × (1/0,1) = <strong>10 000 zł!</strong>
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Z Twojej 1000 zł powstało 10 000 zł!</strong> To nie jest oszustwo - to system rezerw cząstkowych.
            Każdy bank musi mieć tylko 10% gotówki, resztę może pożyczyć. Pieniądze krążą i mnożą się!
          </div>
        </div>

        <div className="formula-card">
          <h3>Miary pieniądza</h3>

          <div className="practical-example">
            <h4>💵 Od najwęższego do najszerszego:</h4>
            <div className="money-ladder">
              <div className="money-level">
                <strong>M0 (Baza monetarna)</strong><br/>
                Gotówka w obiegu + rezerwy banków w BC<br/>
                <em>Przykład: 100 mld (gotówka) + 100 mld (rezerwy) = 200 mld zł</em>
              </div>
              <div className="arrow-down">↓</div>
              <div className="money-level">
                <strong>M1 (Pieniądz wąski)</strong><br/>
                Gotówka w obiegu (bez rezerw) + depozyty bieżące<br/>
                <em>Przykład: 100 mld (gotówka) + 600 mld (depozyty) = 700 mld zł</em>
              </div>
              <div className="arrow-down">↓</div>
              <div className="money-level">
                <strong>M2</strong><br/>
                M1 + depozyty terminowe (lokaty)<br/>
                <em>Przykład: 700 mld (M1) + 300 mld (lokaty) = 1000 mld zł</em>
              </div>
              <div className="arrow-down">↓</div>
              <div className="money-level highlight">
                <strong>M3 (Pieniądz szeroki)</strong><br/>
                M2 + inne instrumenty płynne<br/>
                <em>Przykład: 1000 mld (M2) + 200 mld = 1200 mld zł</em>
              </div>
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Zapamiętaj:</strong> M0 &lt; M1 &lt; M2 &lt; M3 (każda miara jest szersza). Bank centralny
            najczęściej kontroluje M0 (bazę), a reszta "mnoży się" przez banki komercyjne.
          </div>
        </div>
      </section>

      {/* ROZDZIAŁ 24 - SKRÓT */}
      <section className="chapter-summary-compact">
        <div className="chapter-badge-large">Rozdział 24</div>
        <h2>Bank centralny - Narzędzia polityki pieniężnej</h2>

        <div className="formula-card">
          <h3>3 główne narzędzia BC ⭐⭐⭐</h3>

          <div className="practical-example">
            <h4>🏛️ Jak NBP steruje gospodarką:</h4>

            <div className="tool-grid">
              <div className="tool-box">
                <h4>1️⃣ Stopa rezerw obowiązkowych</h4>
                <div className="effect-box">
                  <strong>BC podwyższa rezerwę 10% → 20%:</strong><br/>
                  Banki muszą trzymać więcej gotówki<br/>
                  → Mniej pożyczają<br/>
                  → ↓ Kreacja pieniądza<br/>
                  → ↓ Inflacja
                </div>
              </div>

              <div className="tool-box">
                <h4>2️⃣ Stopa dyskontowa (referencyjna)</h4>
                <div className="effect-box">
                  <strong>NBP podnosi stopę 2% → 5%:</strong><br/>
                  Banki pożyczają od NBP drożej<br/>
                  → Kredyty dla firm/ludzi droższe<br/>
                  → Mniej kredytów<br/>
                  → ↓ Inwestycje, ↓ Konsumpcja<br/>
                  → ↓ Inflacja
                </div>
              </div>

              <div className="tool-box highlight">
                <h4>3️⃣ Operacje otwartego rynku (NAJWAŻNIEJSZE!)</h4>
                <div className="effect-box">
                  <strong>NBP kupuje obligacje za 10 mld:</strong><br/>
                  NBP "drukuje" 10 mld i kupuje obligacje od banków<br/>
                  → Banki mają +10 mld gotówki<br/>
                  → ↑ Podaż pieniądza<br/>
                  → ↑ Kredyty, ↓ Stopy %<br/>
                  → ↑ Gospodarka
                </div>
              </div>
            </div>
          </div>

          <div className="key-insight">
            <AlertCircle size={18} />
            <strong>Zapamiętaj kierunki:</strong><br/>
            Ekspansywna (pobudzanie): BC kupuje obligacje / obniża stopy → więcej pieniędzy → wzrost gospodarki<br/>
            Restrykcyjna (hamowanie): BC sprzedaje obligacje / podnosi stopy → mniej pieniędzy → walka z inflacją
          </div>
        </div>
      </section>

      {/* SZYBKA ŚCIĄGA */}
      <section className="cheat-sheet">
        <h2><Calculator /> Ściąga - Wszystkie wzory</h2>

        <div className="cheat-grid">
          <div className="cheat-category">
            <h3>PKB i Inflacja</h3>
            <div className="cheat-item">PKB = C + I + G + (X - M)</div>
            <div className="cheat-item">Inflacja = (ΔP / P) × 100%</div>
            <div className="cheat-item">Realny = Nominalny / Deflator</div>
            <div className="cheat-item">Bezrobocie = Bezrobotni / Siła robocza</div>
          </div>

          <div className="cheat-category">
            <h3>Mnożniki</h3>
            <div className="cheat-item">Prosty: 1/(1-MPC) = 1/MPS</div>
            <div className="cheat-item">Z podatkami: 1/(1-MPC(1-t))</div>
            <div className="cheat-item">Kreacji $: 1/stopa rezerw</div>
            <div className="cheat-item">MPC + MPS = 1</div>
          </div>

          <div className="cheat-category">
            <h3>Równowaga</h3>
            <div className="cheat-item">Y = AD</div>
            <div className="cheat-item">C = a + bY<sub>d</sub></div>
            <div className="cheat-item">Saldo = T - G</div>
          </div>

          <div className="cheat-category">
            <h3>Miary pieniądza</h3>
            <div className="cheat-item">M0 &lt; M1 &lt; M2 &lt; M3</div>
            <div className="cheat-item">M1 = Gotówka + depozyty bieżące</div>
            <div className="cheat-item">M2 = M1 + depozyty terminowe</div>
          </div>
        </div>
      </section>

      {/* WSKAZÓWKI */}
      <section className="tips-compact">
        <h2><CheckCircle /> 5 rzeczy, które MUSISZ zapamiętać</h2>

        <div className="tip-list">
          <div className="tip-item">
            <strong>1.</strong> PKB = C + I + G + (X-M) i wszystkie 3 metody (wydatkowa, dochodowa, produkcyjna) dają TEN SAM wynik
          </div>
          <div className="tip-item">
            <strong>2.</strong> MPC + MPS = 1 ZAWSZE. Jeśli wydajesz 80%, to oszczędzasz 20%. Mnożnik = 1/MPS
          </div>
          <div className="tip-item">
            <strong>3.</strong> Im wyższe MPC, tym WIĘKSZY mnożnik → silniejszy efekt polityki fiskalnej
          </div>
          <div className="tip-item">
            <strong>4.</strong> Kreacja pieniądza: 1000 zł wpłaty × (1/10% rezerw) = 10 000 zł podaży pieniądza!
          </div>
          <div className="tip-item">
            <strong>5.</strong> BC obniża stopy % → tańsze kredyty → więcej inwestycji → wzrost PKB (i odwrotnie)
          </div>
        </div>
      </section>

      {/* Linki do rozdziałów */}
      <section className="chapters-links">
        <h3>Przejdź do szczegółów:</h3>
        <div className="chapters-grid">
          <Link to="/chapter/20" className="chapter-link-compact">
            Rozdział 20 <ArrowRight size={16} />
          </Link>
          <Link to="/chapter/21" className="chapter-link-compact">
            Rozdział 21 <ArrowRight size={16} />
          </Link>
          <Link to="/chapter/22" className="chapter-link-compact">
            Rozdział 22 <ArrowRight size={16} />
          </Link>
          <Link to="/chapter/23" className="chapter-link-compact">
            Rozdział 23 <ArrowRight size={16} />
          </Link>
          <Link to="/chapter/24" className="chapter-link-compact">
            Rozdział 24 <ArrowRight size={16} />
          </Link>
          <Link to="/exam-mode" className="exam-link-compact">
            🎯 Tryb Egzamin <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
