import { Coins, Building2, TrendingUp, RefreshCw, CreditCard, Wallet, Calculator, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Chapter20/Chapter20.css';

export default function Chapter23() {
  return (
    <div className="chapter">
      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 23</span>
        <h1>Pieniądz i system bankowy</h1>
      </header>

      <section className="chapter-section">
        <h2><Coins className="section-icon" /> Czym jest pieniądz?</h2>

        <div className="concept-card">
          <h3>Definicja pieniądza</h3>
          <p className="definition">
            <strong>Pieniądz</strong> to powszechnie akceptowany środek wymiany, który pełni trzy podstawowe funkcje
            w gospodarce. To nie tylko fizyczne monety i banknoty - dzisiaj większość pieniądza istnieje jako zapisy elektroniczne.
          </p>
        </div>

        <div className="concept-card">
          <h3>Trzy funkcje pieniądza</h3>

          <div className="key-points">
            <div className="key-point">
              <strong>1. Środek wymiany (medium of exchange):</strong>
              <p>Pieniądz ułatwia transakcje - nie trzeba szukać osoby, która akurat chce wymienić to, co mamy, na to, czego potrzebujemy.</p>
              <div className="example-box">
                <h4>Przykład:</h4>
                <p><strong>Bez pieniądza (barter):</strong> Piekarz chce buty, ale szewc nie potrzebuje chleba - wymiana niemożliwa.</p>
                <p><strong>Z pieniądzem:</strong> Piekarz sprzedaje chleb za pieniądze, kupuje buty za pieniądze. Szewc sprzedaje buty za pieniądze, kupuje to, czego potrzebuje.</p>
              </div>
            </div>

            <div className="key-point">
              <strong>2. Miernik wartości (unit of account):</strong>
              <p>Pieniądz pozwala porównywać wartość różnych dóbr - wszystkie ceny wyrażamy w tej samej jednostce.</p>
              <div className="example-box">
                <h4>Przykład:</h4>
                <p><strong>Bez pieniądza:</strong> Musiałbyś pamiętać, że 1 komputer = 200 bochenków chleba = 10 par butów = 5 koszulek...</p>
                <p><strong>Z pieniądzem:</strong> Komputer kosztuje 3000 zł, chleb 5 zł, buty 300 zł. Łatwo porównać!</p>
              </div>
            </div>

            <div className="key-point">
              <strong>3. Środek tezauryzacji (store of value):</strong>
              <p>Pieniądz zachowuje wartość w czasie - możesz odłożyć go na później i wciąż będzie coś wart.</p>
              <div className="example-box">
                <h4>Przykład:</h4>
                <p><strong>Problem z dobrami psującymi się:</strong> Nie możesz "zaoszczędzić" 100 bochenków chleba - spleśnieją.</p>
                <p><strong>Z pieniądzem:</strong> Możesz odłożyć 500 zł w czerwcu i wydać w grudniu. Pieniądz zachowuje wartość (jeśli nie ma dużej inflacji!).</p>
              </div>
            </div>
          </div>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Uwaga:</strong> Funkcja środka tezauryzacji działa dobrze tylko przy niskiej inflacji.
            Gdy inflacja wynosi 20% rocznie, pieniądz szybko traci wartość - lepiej trzymać wartość w innych aktywach (nieruchomości, złoto, akcje).
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Wallet className="section-icon" /> Agregaty pieniężne (M0, M1, M2, M3)</h2>

        <div className="concept-card">
          <h3>Dlaczego mamy różne miary pieniądza?</h3>
          <p className="definition">
            Pieniądz to nie tylko gotówka! Banki centralne mierzą podaż pieniądza na różne sposoby,
            w zależności od tego, jak "płynne" (łatwe do wydania) są poszczególne aktywa.
          </p>

          <div className="formula-box">
            <h4>M0 - Baza monetarna (najwęższe pojęcie)</h4>
            <p className="formula-explanation">
              <strong>M0 = gotówka w obiegu + rezerwy banków w banku centralnym</strong>
            </p>
            <p>
              To pieniądz, który został bezpośrednio wyemitowany przez bank centralny.
              Gotówka w Twoim portfelu + pieniądze, które banki trzymają w NBP/EBC/Fed.
            </p>
            <div className="example-box">
              <h4>Przykład M0 w Polsce (2024):</h4>
              <p>Około 350 mld zł - gotówka w portfelach Polaków + rezerwy banków komercyjnych w NBP</p>
            </div>
          </div>

          <div className="formula-box">
            <h4>M1 - Pieniądz w wąskim rozumieniu</h4>
            <p className="formula-explanation">
              <strong>M1 = gotówka w obiegu + depozyty na żądanie (konta bieżące)</strong>
            </p>
            <p>
              To pieniądz, którym możesz zapłacić od ręki. Gotówka + saldo na koncie, z którego możesz przelać pieniądze lub wypłacić kartą natychmiast.
            </p>
            <div className="example-box">
              <h4>Co wchodzi w M1:</h4>
              <p>✓ Banknoty i monety w Twoim portfelu</p>
              <p>✓ Pieniądze na Twoim koncie osobistym (ROR)</p>
              <p>✓ Konto firmowe, z którego można płacić</p>
            </div>
          </div>

          <div className="formula-box">
            <h4>M2 - Pieniądz w szerszym rozumieniu</h4>
            <p className="formula-explanation">
              <strong>M2 = M1 + depozyty krótkoterminowe (lokaty do 2 lat)</strong>
            </p>
            <p>
              Dodajemy aktywa, które nie są tak płynne jak gotówka, ale można je szybko zamienić na pieniądz.
              Musisz poczekać lub stracić trochę odsetek, ale w krótkim czasie masz dostęp.
            </p>
            <div className="example-box">
              <h4>Co dodatkowo wchodzi w M2:</h4>
              <p>✓ Lokata 3-miesięczna (możesz wypłacić, tracąc odsetki)</p>
              <p>✓ Lokata roczna</p>
              <p>✓ Oszczędnościowe konta typu "cel"</p>
            </div>
          </div>

          <div className="formula-box">
            <h4>M3 - Pieniądz w najszerszym rozumieniu</h4>
            <p className="formula-explanation">
              <strong>M3 = M2 + depozyty długoterminowe + inne instrumenty</strong>
            </p>
            <p>
              Dodajemy wszystko, co można w miarę łatwo zamienić na pieniądz. Obligacje rynku pieniężnego,
              jednostki funduszy, repurchase agreements (repo).
            </p>
            <div className="example-box">
              <h4>M3 w strefie euro (2024):</h4>
              <p>Około 16 bilionów EUR - pokazuje ogromną ilość "quasi-pieniądza" w gospodarce</p>
            </div>
          </div>

          <div className="interpretation-box">
            <h4>📊 Intuicja: M0 {'<'} M1 {'<'} M2 {'<'} M3</h4>
            <p>
              Im wyższy numer, tym <strong>szersza</strong> definicja pieniądza, ale aktywa są mniej płynne.
            </p>
            <p>
              <strong>M0</strong> to "surowy" pieniądz stworzony przez bank centralny.<br/>
              <strong>M1</strong> to pieniądz gotowy do wydania już teraz.<br/>
              <strong>M2</strong> to pieniądz, który możesz wydać w kilka dni/tygodni.<br/>
              <strong>M3</strong> to wszystko, co przypomina pieniądz i można to względnie szybko upłynnić.
            </p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Building2 className="section-icon" /> Kreacja pieniądza przez banki</h2>

        <div className="concept-card">
          <h3>Skąd się bierze pieniądz?</h3>
          <p className="definition">
            Bank centralny drukuje tylko niewielką część pieniądza w gospodarce (M0).
            Większość pieniądza powstaje przez <strong>kreację pieniądza</strong> - proces, w którym banki komercyjne
            "tworzą" pieniądz udzielając kredytów!
          </p>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Zaskakujący fakt:</strong> Gdy bank udziela Ci kredytu 10 000 zł, nie "pożycza" Ci pieniędzy kogoś innego.
            Bank po prostu zapisuje na Twoim koncie "+10 000 zł" - i tym samym tworzy nowy pieniądz w gospodarce!
          </div>
        </div>

        <div className="concept-card">
          <h3>Jak banki tworzą pieniądz? Przykład krok po kroku</h3>

          <div className="example-box">
            <h4>📝 Założenia:</h4>
            <p><strong>Stopa rezerw obowiązkowych (r) = 10%</strong></p>
            <p>Bank musi zatrzymać 10% depozytów jako rezerwy w banku centralnym. Resztę (90%) może pożyczyć.</p>
          </div>

          <div className="calc-step">
            <strong>Krok 1: Początkowy depozyt</strong>
            <p>Klient A wpłaca do Banku 1 gotówkę: <strong>1000 zł</strong></p>
            <p>Bank 1 musi zatrzymać rezerwy: 10% × 1000 = <strong>100 zł</strong></p>
            <p>Bank 1 może pożyczyć: 90% × 1000 = <strong>900 zł</strong></p>
            <p className="calc-result">Pieniądz w gospodarce: 1000 zł (gotówka przekształcona w depozyt)</p>
          </div>

          <div className="calc-step">
            <strong>Krok 2: Pierwszy kredyt</strong>
            <p>Bank 1 pożycza 900 zł Klientowi B, który kupuje coś od Klienta C</p>
            <p>Klient C wpłaca 900 zł do Banku 2</p>
            <p>Bank 2 musi zatrzymać rezerwy: 10% × 900 = <strong>90 zł</strong></p>
            <p>Bank 2 może pożyczyć: 90% × 900 = <strong>810 zł</strong></p>
            <p className="calc-result">Pieniądz w gospodarce: 1000 + 900 = 1900 zł (pojawiło się 900 zł nowego pieniądza!)</p>
          </div>

          <div className="calc-step">
            <strong>Krok 3: Drugi kredyt</strong>
            <p>Bank 2 pożycza 810 zł Klientowi D, który kupuje coś od Klienta E</p>
            <p>Klient E wpłaca 810 zł do Banku 3</p>
            <p>Bank 3 musi zatrzymać rezerwy: 10% × 810 = <strong>81 zł</strong></p>
            <p>Bank 3 może pożyczyć: 90% × 810 = <strong>729 zł</strong></p>
            <p className="calc-result">Pieniądz w gospodarce: 1000 + 900 + 810 = 2710 zł</p>
          </div>

          <div className="calc-step">
            <strong>Krok 4: Proces trwa dalej...</strong>
            <p>Bank 4: 729 zł → rezerwy 72,9 zł, kredyt 656,1 zł</p>
            <p>Bank 5: 656,1 zł → rezerwy 65,61 zł, kredyt 590,49 zł</p>
            <p>...</p>
            <p className="calc-result">
              <strong>Po nieskończenie wielu rundach:</strong> Z początkowego depozytu 1000 zł powstaje łącznie
              <strong> 10 000 zł pieniądza w gospodarce!</strong>
            </p>
          </div>

          <div className="interpretation-box">
            <h4>🔢 Wzór matematyczny:</h4>
            <p>To suma ciągu geometrycznego:</p>
            <div className="formula">
              Całkowity pieniądz = 1000 + 900 + 810 + 729 + ... = 1000 × (1 + 0,9 + 0,9² + 0,9³ + ...)
            </div>
            <div className="formula">
              = 1000 × [1 / (1 - 0,9)] = 1000 × [1 / 0,1] = 1000 × 10 = 10 000 zł
            </div>
          </div>
        </div>

        <div className="concept-card">
          <h3><RefreshCw className="inline-icon" /> Mnożnik kreacji pieniądza</h3>

          <div className="formula-box">
            <h4>Wzór na mnożnik:</h4>
            <div className="formula">
              m = 1 / r
            </div>
            <p className="formula-explanation">
              <strong>m</strong> - mnożnik kreacji pieniądza<br/>
              <strong>r</strong> - stopa rezerw obowiązkowych (jako ułamek, np. 0,1 dla 10%)
            </p>
          </div>

          <div className="formula-box">
            <h4>Podaż pieniądza w gospodarce:</h4>
            <div className="formula">
              M = m × M0 = (1/r) × M0
            </div>
            <p className="formula-explanation">
              <strong>M</strong> - całkowita podaż pieniądza (np. M1)<br/>
              <strong>M0</strong> - baza monetarna (pieniądz banku centralnego)<br/>
              <strong>m</strong> - mnożnik kreacji pieniądza
            </p>
          </div>

          <div className="example-box">
            <h4>Przykłady dla różnych stóp rezerw:</h4>
            <p><strong>r = 10% (0,1):</strong> m = 1/0,1 = 10 → Depozyt 1000 zł tworzy 10 000 zł pieniądza</p>
            <p><strong>r = 5% (0,05):</strong> m = 1/0,05 = 20 → Depozyt 1000 zł tworzy 20 000 zł pieniądza</p>
            <p><strong>r = 20% (0,2):</strong> m = 1/0,2 = 5 → Depozyt 1000 zł tworzy 5 000 zł pieniądza</p>
            <p className="calc-result">
              <strong>Wniosek:</strong> Im niższa stopa rezerw, tym więcej pieniądza powstaje w gospodarce!
            </p>
          </div>
        </div>

        <div className="modern-example">
          <h4><TrendingUp className="inline-icon" size={20} /> Kreacja pieniądza w praktyce (2020-2024)</h4>
          <p>
            <strong>COVID-19 i "drukowanie pieniędzy":</strong> Podczas pandemii banki centralne obniżyły stopy rezerw
            i masowo skupowały obligacje (tzw. quantitative easing).
          </p>
          <p className="data-highlight">
            <strong>Fed (USA):</strong> Baza monetarna (M0) wzrosła z ~3,4 bln USD (2019) do ~6,5 bln USD (2021) - prawie podwojenie!<br/>
            <strong>EBC (strefa euro):</strong> Bilans wzrósł o ~2 bln EUR przez skup obligacji (PEPP program).<br/>
            <strong>NBP (Polska):</strong> Baza monetarna wzrosła z ~280 mld PLN (2019) do ~450 mld PLN (2021).
          </p>
          <p>
            <strong>Efekt:</strong> Ogromny wzrost podaży pieniądza (M2, M3). To pomogło gospodarce przetrwać kryzys,
            ale przyczyniło się do inflacji w 2022-2023 (zbyt dużo pieniądza w gospodarce!).
          </p>
        </div>

        <div className="modern-example">
          <h4><Building2 className="inline-icon" size={20} /> Stopa rezerw obowiązkowych w różnych krajach (2024)</h4>
          <p>
            <strong>Strefa euro:</strong> 1% - bardzo niska, EBC stymuluje kreację pieniądza
          </p>
          <p>
            <strong>USA:</strong> 0% od marca 2020 (!) - Fed całkowicie zniósł wymóg rezerw obowiązkowych
          </p>
          <p>
            <strong>Polska:</strong> 3,5% - umiarkowany poziom
          </p>
          <p>
            <strong>Chiny:</strong> 8-12% (zależy od typu banku) - wyższa kontrola nad podażą pieniądza
          </p>
          <p className="data-highlight">
            <strong>Wniosek:</strong> Kraje rozwinięte mają bardzo niskie stopy rezerw → wysoki mnożnik → dużo pieniądza w gospodarce.
            Banki centralne kontrolują podaż głównie przez inne narzędzia (stopy procentowe, operacje otwartego rynku).
          </p>
        </div>

        <Link to="/chapter/23/calculator" className="interactive-link">
          <Calculator size={20} />
          Kalkulator kreacji pieniądza →
        </Link>
      </section>

      <section className="chapter-section">
        <h2><CreditCard className="section-icon" /> Współczesny system bankowy</h2>

        <div className="concept-card">
          <h3>Bilans banku komercyjnego</h3>
          <p className="definition">
            Bank działa jak każda firma - ma <strong>aktywa</strong> (to, co posiada) i <strong>pasywa</strong> (zobowiązania).
            Bilans musi się zawsze bilansować: Aktywa = Pasywa.
          </p>

          <div className="formula-box">
            <h4>Aktywa banku (lewa strona bilansu):</h4>
            <ul className="formula-explanation">
              <li><strong>Rezerwy:</strong> Pieniądze trzymane w banku centralnym (obowiązkowe + nadwyżkowe)</li>
              <li><strong>Kredyty:</strong> Pożyczki udzielone klientom (hipoteki, kredyty konsumpcyjne, firmowe)</li>
              <li><strong>Obligacje:</strong> Skarbowe i korporacyjne (inwestycje banku)</li>
              <li><strong>Inne aktywa:</strong> Nieruchomości, sprzęt, gotówka w kasach</li>
            </ul>
          </div>

          <div className="formula-box">
            <h4>Pasywa banku (prawa strona bilansu):</h4>
            <ul className="formula-explanation">
              <li><strong>Depozyty:</strong> Pieniądze klientów na kontach (ROR, lokaty)</li>
              <li><strong>Pożyczki od innych banków:</strong> Kredyt międzybankowy</li>
              <li><strong>Kapitał własny:</strong> Pieniądze akcjonariuszy + zatrzymane zyski</li>
            </ul>
          </div>

          <div className="example-box">
            <h4>Przykładowy bilans banku (uproszczony):</h4>
            <table style={{width: '100%', textAlign: 'center', marginTop: '1rem'}}>
              <thead>
                <tr>
                  <th>AKTYWA</th>
                  <th>PASYWA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rezerwy: 100 mln zł</td>
                  <td>Depozyty: 900 mln zł</td>
                </tr>
                <tr>
                  <td>Kredyty: 800 mln zł</td>
                  <td>Kapitał własny: 100 mln zł</td>
                </tr>
                <tr>
                  <td>Obligacje: 100 mln zł</td>
                  <td></td>
                </tr>
                <tr style={{borderTop: '2px solid var(--primary-color)', fontWeight: 'bold'}}>
                  <td>SUMA: 1000 mln zł</td>
                  <td>SUMA: 1000 mln zł</td>
                </tr>
              </tbody>
            </table>
            <p style={{marginTop: '1rem'}}>
              <strong>Interpretacja:</strong> Bank ma depozyty 900 mln zł. Zatrzymuje 100 mln zł jako rezerwy (11%),
              a 800 mln zł pożycza jako kredyty. Dodatkowo inwestuje 100 mln zł w obligacje.
            </p>
          </div>
        </div>

        <div className="concept-card">
          <h3>Pieniądz elektroniczny i przyszłość</h3>

          <div className="key-points">
            <div className="key-point">
              <strong>💳 Pieniądz bezgotówkowy dzisiaj:</strong>
              <p>
                W krajach rozwiniętych większość transakcji to przelewy elektroniczne, płatności kartą, BLIK, Apple/Google Pay.
                Gotówka to tylko ~5-10% M1. Pieniądz to głównie zapisy w komputerach banków!
              </p>
            </div>

            <div className="key-point">
              <strong>💎 Kryptowaluty (Bitcoin, Ethereum):</strong>
              <p>
                Próba stworzenia pieniądza bez banku centralnego. Blockchain zapewnia bezpieczeństwo.
                Problem: wysoka zmienność wartości (słaby środek tezauryzacji), wolne transakcje, wysokie opłaty.
                Raczej spekulacyjny asset niż prawdziwy pieniądz.
              </p>
            </div>

            <div className="key-point">
              <strong>🏦 CBDC (Central Bank Digital Currency):</strong>
              <p>
                Cyfrowy pieniądz emitowany przez bank centralny. Pilotaż w Chinach (e-CNY), prace w UE (cyfrowe euro), USA (cyfrowy dolar).
                Cel: połączenie wygody płatności elektronicznych z bezpieczeństwem pieniądza banku centralnego.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>Kluczowe wnioski</h2>
        <div className="key-points">
          <div className="key-point">
            💰 <strong>Pieniądz ma trzy funkcje:</strong> Środek wymiany (płacisz), miernik wartości (porównujesz ceny),
            środek tezauryzacji (oszczędzasz)
          </div>
          <div className="key-point">
            📊 <strong>Agregaty pieniężne:</strong> M0 (baza) {"<"} M1 (gotówka + konta) {"<"} M2 (+ lokaty krótkoterminowe) {"<"} M3 (wszystko)
          </div>
          <div className="key-point">
            🏦 <strong>Kreacja pieniądza:</strong> Banki tworzą pieniądz udzielając kredytów. Z 1000 zł depozytu
            może powstać 10 000 zł pieniądza w gospodarce (przy r=10%)!
          </div>
          <div className="key-point">
            🔢 <strong>Mnożnik m = 1/r:</strong> Im niższa stopa rezerw, tym więcej pieniądza w gospodarce.
            Dlatego bank centralny może kontrolować podaż pieniądza zmieniając r.
          </div>
          <div className="key-point">
            ⚠️ <strong>Zbyt dużo pieniądza = inflacja:</strong> Kreacja pieniądza w 2020-2021 pomogła w kryzysie,
            ale przyczyniła się do inflacji 2022-2023. Równowaga jest kluczowa!
          </div>
        </div>
      </section>

      <div className="chapter-nav">
        <Link to="/chapter/22" className="btn-secondary">← Rozdział 22</Link>
        <Link to="/chapter/23/quiz" className="btn-primary">Quiz: Sprawdź wiedzę →</Link>
      </div>
    </div>
  );
}
