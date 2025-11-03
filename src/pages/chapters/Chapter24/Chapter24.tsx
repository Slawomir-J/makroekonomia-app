import { Building2, TrendingUp, TrendingDown, Target, Shield, DollarSign, AlertCircle, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlossaryPanel from '../../../components/GlossaryPanel/GlossaryPanel';
import '../Chapter20/Chapter20.css';

export default function Chapter24() {
  return (
    <div className="chapter">
      <div className="chapter-with-glossary">
        <div className="chapter-main-content">
          <header className="chapter-header">
            <span className="chapter-badge">Rozdział 24</span>
            <h1>Bank centralny i polityka pieniężna</h1>
          </header>

      <section className="chapter-section">
        <h2><Building2 className="section-icon" /> Czym jest bank centralny?</h2>

        <div className="concept-card">
          <h3>Definicja banku centralnego</h3>
          <p className="definition">
            <strong>Bank centralny</strong> to instytucja odpowiedzialna za prowadzenie polityki pieniężnej w kraju,
            emisję pieniądza i nadzór nad systemem bankowym. To "bank banków" - nie obsługuje zwykłych obywateli,
            ale banki komercyjne i rząd.
          </p>

          <div className="example-box">
            <h4>Przykłady banków centralnych:</h4>
            <p><strong>🇵🇱 NBP (Narodowy Bank Polski):</strong> Prezes Adam Glapiński, główny cel: stabilność cen (inflacja ~2,5%)</p>
            <p><strong>🇪🇺 EBC (Europejski Bank Centralny):</strong> Obsługuje strefę euro, cel: inflacja blisko 2%</p>
            <p><strong>🇺🇸 Fed (Federal Reserve):</strong> Bank centralny USA, podwójny mandat: stabilność cen + pełne zatrudnienie</p>
            <p><strong>🇬🇧 Bank of England:</strong> Jeden z najstarszych BC (założony 1694!), cel inflacyjny: 2%</p>
          </div>
        </div>

        <div className="concept-card">
          <h3>Funkcje banku centralnego</h3>

          <div className="key-points">
            <div className="key-point">
              <strong>1. Emisja pieniądza (bank emisyjny):</strong>
              <p>
                Bank centralny ma monopol na drukowanie banknotów i bicie monet. To jedyna instytucja,
                która może tworzyć bazę monetarną (M0).
              </p>
              <div className="example-box">
                <h4>Przykład:</h4>
                <p>Wszystkie banknoty w Twoim portfelu zostały wyemitowane przez NBP. Na banknocie jest podpis Prezesa NBP.</p>
              </div>
            </div>

            <div className="key-point">
              <strong>2. Bank banków:</strong>
              <p>
                Banki komercyjne trzymają swoje rezerwy w banku centralnym. BC pożycza pieniądze bankom komercyjnym,
                gdy mają krótkoterminowe problemy z płynnością.
              </p>
              <div className="example-box">
                <h4>Przykład:</h4>
                <p>Jeśli PKO BP potrzebuje gotówki na koniec dnia, może pożyczyć od NBP na noc (tzw. overnight lending). Stopa procentowa to stopa referencyjna NBP.</p>
              </div>
            </div>

            <div className="key-point">
              <strong>3. Prowadzenie polityki pieniężnej:</strong>
              <p>
                BC kontroluje podaż pieniądza i stopy procentowe, aby wpływać na inflację, bezrobocie i wzrost gospodarczy.
                To główna funkcja BC!
              </p>
            </div>

            <div className="key-point">
              <strong>4. Nadzór nad systemem bankowym:</strong>
              <p>
                BC pilnuje, żeby banki komercyjne były bezpieczne. Sprawdza ich kapitały, rezerwy, zarządzanie ryzykiem.
                W Polsce nadzór sprawuje KNF (współpracująca z NBP).
              </p>
            </div>

            <div className="key-point">
              <strong>5. Zarządzanie rezerwami walutowymi:</strong>
              <p>
                BC trzyma rezerwy w walutach obcych (dolary, euro, złoto), żeby móc interweniować na rynku walutowym
                i stabilizować kurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Target className="section-icon" /> Narzędzia polityki pieniężnej</h2>

        <div className="concept-card">
          <h3>1. Stopa procentowa (stopa referencyjna)</h3>
          <p className="definition">
            <strong>Stopa referencyjna</strong> (stopa podstawowa) to stopa procentowa, po której bank centralny
            pożycza pieniądze bankom komercyjnym. To główne narzędzie polityki pieniężnej.
          </p>

          <div className="formula-box">
            <h4>Jak działa?</h4>
            <ul className="formula-explanation">
              <li><strong>BC podnosi stopę:</strong> Kredyty drożeją → ludzie i firmy pożyczają mniej → mniejsze wydatki → spadek AD → niższa inflacja</li>
              <li><strong>BC obniża stopę:</strong> Kredyty tańsze → więcej pożyczek → większe wydatki → wzrost AD → wyższy PKB (i potencjalnie inflacja)</li>
            </ul>
          </div>

          <div className="modern-example">
            <h4><TrendingUp className="inline-icon" size={20} /> Podwyżki stóp w walce z inflacją (2022-2023)</h4>
            <p>
              <strong>Problem:</strong> Po COVID-19 inflacja skoczyła do ~10-15% w wielu krajach (zbyt dużo pieniądza w gospodarce + problemy z dostawami)
            </p>
            <p className="data-highlight">
              <strong>Fed (USA):</strong> Podniósł stopę z 0,25% (marzec 2022) do 5,5% (lipiec 2023) - najszybsze podwyżki od 40 lat!<br/>
              <strong>EBC (strefa euro):</strong> Podniósł z 0% do 4,5% (2022-2023)<br/>
              <strong>NBP (Polska):</strong> Podniósł z 0,1% (wrzesień 2021) do 6,75% (wrzesień 2022) - 16 podwyżek z rzędu!
            </p>
            <p>
              <strong>Efekt:</strong> Inflacja zaczęła spadać (do ~3-4% w 2024), ale gospodarka zwolniła.
              Kredyty hipoteczne stały się bardzo drogie (w Polsce oprocentowanie z ~3% do ~8-9%).
            </p>
          </div>

          <div className="modern-example">
            <h4><TrendingDown className="inline-icon" size={20} /> Obniżki stóp w czasie kryzysu (2020)</h4>
            <p>
              <strong>Problem:</strong> Pandemia COVID-19 zatrzymała gospodarkę. Lockdowny, zamknięte firmy, rosnące bezrobocie.
            </p>
            <p className="data-highlight">
              <strong>Fed:</strong> Obniżył stopę do 0-0,25% (prawie zero!)<br/>
              <strong>EBC:</strong> Utrzymał stopę na 0% i wprowadził ujemne stopy depozytowe (-0,5%)<br/>
              <strong>NBP:</strong> Obniżył stopę z 1,5% do 0,1%
            </p>
            <p>
              <strong>Efekt:</strong> Tanie kredyty pomogły firmom przetrwać kryzys. Ludzie refinansowali hipoteki.
              To uratowało gospodarkę, ale później przyczyniło się do inflacji.
            </p>
          </div>
        </div>

        <div className="concept-card">
          <h3>2. Operacje otwartego rynku (Open Market Operations)</h3>
          <p className="definition">
            BC kupuje lub sprzedaje obligacje skarbowe, żeby wpływać na ilość pieniądza w systemie bankowym.
          </p>

          <div className="formula-box">
            <h4>Jak działa?</h4>
            <ul className="formula-explanation">
              <li>
                <strong>BC kupuje obligacje od banków:</strong> Banki dostają pieniądze → więcej rezerw → mogą więcej pożyczać → wzrost podaży pieniądza
                <br/><em>(Polityka ekspansywna - stymulacja gospodarki)</em>
              </li>
              <li>
                <strong>BC sprzedaje obligacje bankom:</strong> Banki płacą → mniej rezerw → mogą mniej pożyczać → spadek podaży pieniądza
                <br/><em>(Polityka restrykcyjna - hamowanie inflacji)</em>
              </li>
            </ul>
          </div>

          <div className="modern-example">
            <h4><DollarSign className="inline-icon" size={20} /> Quantitative Easing (QE) - "luzowanie ilościowe"</h4>
            <p>
              <strong>Co to jest?</strong> BC masowo skupuje obligacje (setki miliardów!), aby zalać system bankowy pieniędzmi.
              To skrajna forma polityki ekspansywnej, stosowana gdy stopy są już przy zero.
            </p>
            <p className="data-highlight">
              <strong>Fed (2020-2021):</strong> Skupił obligacje za ~4,5 biliona USD. Bilans Fed wzrósł z 4 do 9 bilionów USD!<br/>
              <strong>EBC (2020-2022):</strong> Program PEPP - skup obligacji za 1,85 biliona EUR<br/>
              <strong>NBP (2020-2021):</strong> Skupił polskie obligacje za ~140 mld PLN
            </p>
            <p>
              <strong>Efekt:</strong> Ogromny wzrost bazy monetarnej (M0) i podaży pieniądza (M2, M3).
              To uratowało gospodarkę przed katastrofą, ale... przyczyniło się do późniejszej inflacji.
            </p>
          </div>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Dlaczego nie można robić QE zawsze?</strong> Zbyt dużo pieniądza w gospodarce prowadzi do inflacji.
            QE to "narkotyk" dla gospodarki - działa krótkoterminowo, ale ma skutki uboczne (bańki na rynkach, inflacja).
          </div>
        </div>

        <div className="concept-card">
          <h3>3. Stopa rezerw obowiązkowych</h3>
          <p className="definition">
            BC może zmieniać stopę rezerw obowiązkowych (r), którą banki muszą trzymać.
            Niższa r → wyższy mnożnik kreacji pieniądza → więcej pieniądza w gospodarce.
          </p>

          <div className="formula-box">
            <h4>Przypomnienie z Rozdziału 23:</h4>
            <div className="formula">
              Mnożnik kreacji pieniądza: m = 1 / r
            </div>
            <div className="formula">
              Podaż pieniądza: M = m × M0 = (1/r) × M0
            </div>
            <p className="formula-explanation">
              BC może zmienić r, aby kontrolować, ile pieniądza tworzą banki komercyjne.
            </p>
          </div>

          <div className="example-box">
            <h4>Przykład:</h4>
            <p><strong>Scenariusz:</strong> BC obniża stopę rezerw z 10% do 5%</p>
            <p>Mnożnik rośnie: m = 1/0,1 = 10 → m = 1/0,05 = 20</p>
            <p>Przy tej samej bazie monetarnej (M0), podaż pieniądza (M) się podwaja!</p>
            <p className="calc-result">Efekt: Więcej pieniądza w gospodarce → niższe stopy procentowe na rynku → łatwiejszy dostęp do kredytów</p>
          </div>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>W praktyce:</strong> Współczesne banki centralne rzadko zmieniają stopę rezerw. USA całkowicie zniosło wymóg rezerw (0% od 2020).
            Bardziej popularne są zmiany stopy referencyjnej i operacje otwartego rynku.
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><ArrowRight className="section-icon" /> Mechanizm transmisji polityki pieniężnej</h2>

        <div className="concept-card">
          <h3>Jak decyzje BC wpływają na gospodarkę?</h3>
          <p className="definition">
            <strong>Mechanizm transmisji</strong> to łańcuch zdarzeń, przez który decyzje banku centralnego
            (np. zmiana stopy procentowej) wpływają na realną gospodarkę (PKB, inflację, bezrobocie).
          </p>

          <div className="calc-step">
            <strong>KROK 1: Bank centralny zmienia stopę referencyjną</strong>
            <p>Przykład: NBP obniża stopę z 6% do 5%</p>
          </div>

          <div className="calc-step">
            <strong>KROK 2: Banki komercyjne zmieniają oprocentowanie</strong>
            <p>Banki mogą taniej pożyczać od BC → obniżają oprocentowanie kredytów dla klientów</p>
            <p className="calc-result">Kredyt hipoteczny: był 7%, teraz 6%<br/>Kredyt firmowy: był 8%, teraz 7%</p>
          </div>

          <div className="calc-step">
            <strong>KROK 3: Gospodarstwa domowe zwiększają wydatki</strong>
            <p>Tańszy kredyt → więcej ludzi bierze hipoteki i kupuje mieszkania, samochody</p>
            <p>Tańsze raty kredytów → więcej pieniędzy do wydania na konsumpcję</p>
            <p className="calc-result">Wzrost konsumpcji (C ↑)</p>
          </div>

          <div className="calc-step">
            <strong>KROK 4: Przedsiębiorstwa zwiększają inwestycje</strong>
            <p>Tańszy kredyt → opłaca się pożyczyć na nowe maszyny, fabryki, ekspansję</p>
            <p>Projekty, które wcześniej były nieopłacalne, teraz się opłacają</p>
            <p className="calc-result">Wzrost inwestycji (I ↑)</p>
          </div>

          <div className="calc-step">
            <strong>KROK 5: Rośnie popyt globalny</strong>
            <p>C ↑ i I ↑ → AD ↑ (przypomnienie: AD = C + I + G + NX)</p>
          </div>

          <div className="calc-step">
            <strong>KROK 6: Rośnie produkcja i zatrudnienie</strong>
            <p>Firmy widzą większy popyt → zwiększają produkcję → zatrudniają więcej ludzi</p>
            <p className="calc-result">PKB ↑, Bezrobocie ↓</p>
          </div>

          <div className="calc-step">
            <strong>KROK 7: (Potencjalnie) rośnie inflacja</strong>
            <p>Więcej popytu + pełne zatrudnienie → ceny rosną</p>
            <p className="calc-result">Inflacja ↑ (jeśli gospodarka była już blisko pełnego wykorzystania)</p>
          </div>

          <div className="interpretation-box">
            <h4>⏱️ Opóźnienia w transmisji:</h4>
            <p>
              <strong>Proces ten nie działa natychmiast!</strong> Od decyzji BC do wpływu na PKB mija zwykle:
            </p>
            <ul>
              <li><strong>3-6 miesięcy:</strong> Banki zmieniają oprocentowanie</li>
              <li><strong>6-12 miesięcy:</strong> Widoczny wpływ na konsumpcję i inwestycje</li>
              <li><strong>12-18 miesięcy:</strong> Pełny wpływ na PKB i inflację</li>
            </ul>
            <p>
              Dlatego BC musi działać <strong>proaktywnie</strong> - przewidywać przyszłą inflację,
              a nie reagować na bieżącą. "Polityka pieniężna działa z długim opóźnieniem."
            </p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Shield className="section-icon" /> Polityka ekspansywna vs restrykcyjna</h2>

        <div className="concept-card">
          <h3><TrendingUp className="inline-icon" /> Polityka ekspansywna (łagodna, luźna)</h3>
          <p className="definition">
            Stosowana gdy gospodarka jest w <strong>recesji</strong> - niski popyt, wysokie bezrobocie, PKB spada.
          </p>

          <div className="formula-box">
            <h4>Działania BC:</h4>
            <ul className="formula-explanation">
              <li>Obniżenie stopy referencyjnej → tańsze kredyty</li>
              <li>Skup obligacji (operacje otwartego rynku) → więcej pieniądza</li>
              <li>Obniżenie stopy rezerw → wyższy mnożnik kreacji pieniądza</li>
            </ul>
            <div className="formula">
              Efekt: Podaż pieniądza ↑ → Stopy rynkowe ↓ → C ↑, I ↑ → AD ↑ → PKB ↑, Bezrobocie ↓
            </div>
          </div>

          <div className="example-box">
            <h4>Kiedy stosować?</h4>
            <p>✓ Recesja, kryzys gospodarczy</p>
            <p>✓ Wysokie bezrobocie</p>
            <p>✓ Deflacja lub bardzo niska inflacja</p>
            <p>✓ Spadający PKB</p>
          </div>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Ryzyko:</strong> Jeśli BC przesadzi, może powstać zbyt dużo pieniądza → inflacja.
            To właśnie stało się po COVID-19 (ekspansja 2020 → inflacja 2022-2023).
          </div>
        </div>

        <div className="concept-card">
          <h3><TrendingDown className="inline-icon" /> Polityka restrykcyjna (zacieśniająca, jastrzębia)</h3>
          <p className="definition">
            Stosowana gdy gospodarka się <strong>przegrzewa</strong> - zbyt wysoki popyt prowadzi do wysokiej inflacji.
          </p>

          <div className="formula-box">
            <h4>Działania BC:</h4>
            <ul className="formula-explanation">
              <li>Podwyższenie stopy referencyjnej → droższe kredyty</li>
              <li>Sprzedaż obligacji → mniej pieniądza w systemie</li>
              <li>Podwyższenie stopy rezerw → niższy mnożnik</li>
            </ul>
            <div className="formula">
              Efekt: Podaż pieniądza ↓ → Stopy rynkowe ↑ → C ↓, I ↓ → AD ↓ → Inflacja ↓ (ale też PKB ↓)
            </div>
          </div>

          <div className="example-box">
            <h4>Kiedy stosować?</h4>
            <p>✓ Wysoka inflacja (powyżej celu, np. {'>'} 4-5%)</p>
            <p>✓ Przegrzana gospodarka</p>
            <p>✓ Bańki spekulacyjne (nieruchomości, akcje)</p>
            <p>✓ Zbyt szybki wzrost PKB (może być niestabilny)</p>
          </div>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Ryzyko:</strong> Jeśli BC przesadzi z podwyżkami, może spowodować recesję.
            Za drogie kredyty → firmy bankrutują, ludzie tracą pracę. Balans jest kluczowy!
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><DollarSign className="section-icon" /> Stopa nominalna vs realna</h2>

        <div className="concept-card">
          <h3>Równanie Fishera</h3>

          <div className="formula-box">
            <h4>Wzór:</h4>
            <div className="formula">
              r = i - π
            </div>
            <p className="formula-explanation">
              <strong>r</strong> - realna stopa procentowa<br/>
              <strong>i</strong> - nominalna stopa procentowa (to, co widzisz w banku)<br/>
              <strong>π</strong> - stopa inflacji
            </p>
          </div>

          <div className="interpretation-box">
            <h4>💡 Intuicja:</h4>
            <p>
              <strong>Stopa nominalna (i)</strong> to liczba, którą widzisz: "Lokata 5% rocznie".
            </p>
            <p>
              <strong>Stopa realna (r)</strong> to ile NAPRAWDĘ zarabiasz po uwzględnieniu inflacji.
            </p>
            <p>
              Jeśli lokata daje 5%, ale inflacja wynosi 3%, to naprawdę zarabiasz tylko 5% - 3% = 2%.
            </p>
          </div>

          <div className="example-box">
            <h4>Przykład 1: Dodatnia stopa realna</h4>
            <p>Lokata: i = 6%</p>
            <p>Inflacja: π = 2%</p>
            <p>Stopa realna: r = 6% - 2% = <strong>4%</strong></p>
            <p className="calc-result">Twoje oszczędności ROSNĄ w rzeczywistej wartości. Możesz kupić więcej za rok.</p>
          </div>

          <div className="example-box">
            <h4>Przykład 2: Ujemna stopa realna (!)</h4>
            <p>Lokata: i = 3%</p>
            <p>Inflacja: π = 8%</p>
            <p>Stopa realna: r = 3% - 8% = <strong>-5%</strong></p>
            <p className="calc-result">
              Twoje oszczędności TRACĄ wartość! Za rok możesz kupić mniej, mimo że nominalnie masz więcej złotych.
              To się działo w Polsce w 2022-2023 (wysoka inflacja, niskie oprocentowanie lokat).
            </p>
          </div>

          <div className="modern-example">
            <h4><TrendingDown className="inline-icon" size={20} /> Ujemne stopy realne w czasie wysokiej inflacji (2022-2023)</h4>
            <p className="data-highlight">
              <strong>Polska (2022):</strong> Inflacja ~15%, lokaty ~5-6% → stopa realna ≈ -9%<br/>
              <strong>USA (2022):</strong> Inflacja ~9%, stopy Fed ~2-3% → stopa realna ≈ -6%<br/>
              <strong>Strefa euro (2022):</strong> Inflacja ~10%, stopy EBC ~0-2% → stopa realna ≈ -8%
            </p>
            <p>
              <strong>Efekt:</strong> Ludzie masowo tracili na oszczędnościach. Dlatego wielu inwestowało w nieruchomości,
              złoto, akcje - żeby uchronić wartość pieniędzy przed inflacją.
            </p>
          </div>

          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Dlaczego to ważne dla polityki pieniężnej?</strong> Przedsiębiorstwa podejmują decyzje inwestycyjne
            na podstawie REALNEJ stopy procentowej, nie nominalnej. Jeśli r jest ujemne, opłaca się brać kredyty
            (bo inflacja "zjada" dług szybciej niż rosną odsetki).
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>Kluczowe wnioski</h2>
        <div className="key-points">
          <div className="key-point">
            🏦 <strong>Bank centralny kontroluje podaż pieniądza:</strong> Przez stopy procentowe, operacje otwartego rynku
            i stopę rezerw. To główne narzędzia polityki pieniężnej.
          </div>
          <div className="key-point">
            📊 <strong>Mechanizm transmisji:</strong> BC zmienia stopę → banki zmieniają oprocentowanie → C i I się zmieniają → zmiana AD → zmiana PKB i inflacji.
            Proces trwa 12-18 miesięcy!
          </div>
          <div className="key-point">
            💹 <strong>Ekspansywna vs restrykcyjna:</strong> Ekspansywna (niskie stopy) w recesji → stymulacja gospodarki.
            Restrykcyjna (wysokie stopy) przy inflacji → schładzanie gospodarki.
          </div>
          <div className="key-point">
            🔢 <strong>Stopa realna = nominalna - inflacja:</strong> r = i - π. To realna stopa ma znaczenie dla decyzji
            inwestycyjnych. Może być ujemna (jak w 2022-2023)!
          </div>
          <div className="key-point">
            ⚖️ <strong>Dylemat BC:</strong> Walka z inflacją (wysokie stopy) vs pobudzanie gospodarki (niskie stopy).
            BC musi balansować między tymi celami. Za szybkie podwyżki → recesja. Za wolne → inflacja wymyka się spod kontroli.
          </div>
          <div className="key-point">
            🌍 <strong>Niezależność BC jest kluczowa:</strong> Politycy chcą niskich stóp przed wyborami (popularne!),
            ale to może prowadzić do inflacji. Niezależny BC może podejmować niepopularne, ale konieczne decyzje.
          </div>
        </div>
      </section>

      <Link to="/chapter/24/simulator" className="interactive-link">
        <Calculator size={20} />
        Symulator polityki pieniężnej →
      </Link>

          <div className="chapter-nav">
            <Link to="/chapter/23" className="btn-secondary">← Rozdział 23</Link>
            <Link to="/chapter/24/quiz" className="btn-primary">Quiz: Sprawdź wiedzę →</Link>
          </div>
        </div>

        <GlossaryPanel />
      </div>
    </div>
  );
}
