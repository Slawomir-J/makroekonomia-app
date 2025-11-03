import { TrendingUp, DollarSign, Calculator, Users, ShoppingCart, Building, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Chapter20/Chapter20.css';

export default function Chapter21() {
  return (
    <div className="chapter">
      <header className="chapter-header">
        <span className="chapter-badge">Rozdział 21</span>
        <h1>Determinanty dochodu narodowego w krótkim okresie</h1>
      </header>

      <section className="chapter-section">
        <h2><TrendingUp className="section-icon" /> Popyt globalny (Aggregate Demand - AD)</h2>

        <div className="concept-card">
          <h3><ShoppingCart className="inline-icon" /> Czym jest popyt globalny?</h3>
          <p className="definition">
            <strong>Popyt globalny (AD)</strong> to całkowita wielkość popytu na dobra i usługi
            wytworzone w gospodarce przy danym poziomie cen.
          </p>

          <div className="formula-box">
            <h4>Wzór na popyt globalny:</h4>
            <div className="formula">
              AD = C + I + G + (X - M)
            </div>
            <p className="formula-note">
              <strong>gdzie:</strong>
            </p>
            <ul className="formula-explanation">
              <li><strong>C</strong> - Konsumpcja (wydatki gospodarstw domowych)</li>
              <li><strong>I</strong> - Inwestycje (wydatki przedsiębiorstw na dobra kapitałowe)</li>
              <li><strong>G</strong> - Wydatki rządowe (zakupy dóbr i usług przez państwo)</li>
              <li><strong>(X - M)</strong> - Eksport netto (eksport minus import)</li>
            </ul>
          </div>
        </div>

        <div className="concept-card">
          <h3><DollarSign className="inline-icon" /> Składniki popytu globalnego - szczegółowo</h3>

          <div className="key-points">
            <div className="key-point">
              <strong><ShoppingCart className="inline-icon" size={18} /> Konsumpcja (C)</strong>
              <p>Wydatki gospodarstw domowych na dobra i usługi konsumpcyjne.</p>
              <p className="highlight">Przykłady: zakup żywności, odzieży, biletów do kina, fryzjer, restauracja</p>
              <p><strong>Najważniejszy składnik!</strong> W większości krajów C stanowi 50-70% PKB</p>
            </div>

            <div className="key-point">
              <strong><Building className="inline-icon" size={18} /> Inwestycje (I)</strong>
              <p>Wydatki przedsiębiorstw na nowe dobra kapitałowe.</p>
              <p className="highlight">Przykłady: zakup maszyn, budowa fabryk, kupno sprzętu komputerowego, budowa biurowców</p>
              <p><strong>Uwaga:</strong> Zakup akcji NIE jest inwestycją w sensie makroekonomicznym!</p>
              <div className="note">
                <strong>Różnica mikro vs makro:</strong> W mowie potocznej "inwestujesz w akcje",
                ale w makroekonomii inwestycja to tylko zakup NOWYCH dóbr kapitałowych (rzeczowych).
              </div>
            </div>

            <div className="key-point">
              <strong><Users className="inline-icon" size={18} /> Wydatki rządowe (G)</strong>
              <p>Zakupy dóbr i usług przez państwo.</p>
              <p className="highlight">Przykłady: pensje urzędników i żołnierzy, zakup czołgów, budowa dróg, wydatki na szkolnictwo</p>
              <p><strong>Ważne:</strong> Transfery socjalne (zasiłki, emerytury) NIE wchodzą do G!</p>
              <div className="note">
                Emerytury to tylko przesunięcie pieniędzy - nie kupujemy za nie bezpośrednio dóbr dla państwa.
                Dopiero gdy emeryt wyda pieniądze, trafią one do składnika C.
              </div>
            </div>

            <div className="key-point">
              <strong><Globe className="inline-icon" size={18} /> Eksport netto (X - M)</strong>
              <p>Różnica między eksportem a importem.</p>
              <p className="highlight">
                <strong>X</strong> - sprzedaż dóbr za granicę (dodaje się do PKB krajowego)<br />
                <strong>M</strong> - kupno dóbr z zagranicy (odejmuje się od PKB krajowego)
              </p>
              <p><strong>Eksport netto &gt; 0:</strong> nadwyżka handlowa (dobry znak dla kraju)</p>
              <p><strong>Eksport netto &lt; 0:</strong> deficyt handlowy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Calculator className="section-icon" /> Funkcja konsumpcji</h2>

        <div className="concept-card">
          <p className="definition">
            <strong>Funkcja konsumpcji</strong> pokazuje zależność między dochodem rozporządzalnym
            a wydatkami konsumpcyjnymi.
          </p>

          <div className="formula-box">
            <h4>Prosta funkcja konsumpcji:</h4>
            <div className="formula">
              C = C₀ + c · Y<sub>d</sub>
            </div>
            <p className="formula-note">
              <strong>gdzie:</strong>
            </p>
            <ul className="formula-explanation">
              <li><strong>C₀</strong> - konsumpcja autonomiczna (niezależna od dochodu)</li>
              <li><strong>c</strong> - krańcowa skłonność do konsumpcji (MPC)</li>
              <li><strong>Y<sub>d</sub></strong> - dochód rozporządzalny</li>
            </ul>
          </div>

          <div className="example-box">
            <h4>Przykład:</h4>
            <p><strong>C = 100 + 0,8 · Y<sub>d</sub></strong></p>
            <ul>
              <li><strong>C₀ = 100</strong> - nawet przy zerowym dochodzie ludzie muszą coś jeść (wydają oszczędności lub pożyczają)</li>
              <li><strong>c = 0,8</strong> - z każdej dodatkowej złotówki dochodu, 80 groszy idzie na konsumpcję</li>
            </ul>
            <br />
            <p><strong>Obliczenia:</strong></p>
            <p>Jeśli Y<sub>d</sub> = 500 zł, to C = 100 + 0,8 × 500 = 100 + 400 = <strong>500 zł</strong></p>
            <p>Jeśli Y<sub>d</sub> = 1000 zł, to C = 100 + 0,8 × 1000 = 100 + 800 = <strong>900 zł</strong></p>
          </div>
        </div>

        <div className="concept-card">
          <h3>Krańcowa skłonność do konsumpcji (MPC) i oszczędności (MPS)</h3>

          <div className="formula-box">
            <div className="formula">
              MPC = ΔC / ΔY
            </div>
            <p className="formula-explanation">
              MPC pokazuje, jaka część dodatkowego dochodu zostanie wydana na konsumpcję.
            </p>
            <div className="formula">
              MPS = ΔS / ΔY
            </div>
            <p className="formula-explanation">
              MPS pokazuje, jaka część dodatkowego dochodu zostanie zaoszczędzona.
            </p>
            <div className="formula">
              MPC + MPS = 1
            </div>
            <p className="formula-note">
              <strong>Ważna tożsamość!</strong> Dodatkowy dochód może być tylko wydany albo zaoszczędzony.
            </p>
          </div>

          <div className="example-box">
            <h4>Przykład obliczania MPC i MPS:</h4>
            <p>Dochód wzrósł z 1000 zł do 1200 zł (ΔY = 200 zł)</p>
            <p>Konsumpcja wzrosła z 800 zł do 960 zł (ΔC = 160 zł)</p>
            <br />
            <p className="calc-result">
              <strong>MPC</strong> = 160 zł / 200 zł = <strong>0,8</strong>
            </p>
            <p className="calc-result">
              <strong>MPS</strong> = 1 - 0,8 = <strong>0,2</strong>
            </p>
            <p><strong>Interpretacja:</strong> Z każdej dodatkowej złotówki dochodu 80 groszy idzie na konsumpcję, a 20 groszy na oszczędności.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><TrendingUp className="section-icon" /> Mnożnik wydatków</h2>

        <div className="concept-card">
          <p className="definition">
            <strong>Mnożnik wydatków</strong> pokazuje, o ile wzrośnie PKB, gdy wydatki autonomiczne
            (np. wydatki rządowe lub inwestycje) wzrosną o 1 jednostkę.
          </p>

          <div className="formula-box">
            <h4>Wzór na mnożnik:</h4>
            <div className="formula">
              k = 1 / (1 - MPC) = 1 / MPS
            </div>
            <p className="formula-note">
              <strong>Gdzie:</strong> k - mnożnik, MPC - krańcowa skłonność do konsumpcji
            </p>
          </div>

          <div className="example-box">
            <h4>Przykłady obliczania mnożnika:</h4>
            <div className="calc-step">
              <p><strong>Jeśli MPC = 0,8:</strong></p>
              <p className="calc-result">k = 1 / (1 - 0,8) = 1 / 0,2 = <strong>5</strong></p>
              <p><strong>Interpretacja:</strong> Wzrost wydatków rządowych o 100 mln zł zwiększy PKB o 500 mln zł!</p>
            </div>

            <div className="calc-step">
              <p><strong>Jeśli MPC = 0,5:</strong></p>
              <p className="calc-result">k = 1 / (1 - 0,5) = 1 / 0,5 = <strong>2</strong></p>
              <p><strong>Interpretacja:</strong> Wzrost wydatków o 100 mln zł zwiększy PKB o 200 mln zł.</p>
            </div>

            <div className="calc-step">
              <p><strong>Jeśli MPC = 0,9:</strong></p>
              <p className="calc-result">k = 1 / (1 - 0,9) = 1 / 0,1 = <strong>10</strong></p>
              <p><strong>Interpretacja:</strong> Bardzo silny efekt mnożnikowy!</p>
            </div>
          </div>

          <div className="note">
            <strong>💡 Dlaczego działa mnożnik?</strong>
            <ol className="steps-list">
              <li>Rząd wydaje 100 zł na budowę drogi</li>
              <li>Robotnicy otrzymują 100 zł płacy</li>
              <li>Wydają 80 zł (przy MPC=0,8) na zakupy w sklepach</li>
              <li>Sprzedawcy otrzymują 80 zł i wydają 64 zł (80 × 0,8)</li>
              <li>I tak dalej... 100 + 80 + 64 + 51,2 + ...</li>
              <li><strong>Suma geometryczna = 100 × 5 = 500 zł</strong></li>
            </ol>
          </div>
        </div>

        <Link to="/chapter/21/multiplier" className="interactive-link">
          <ArrowRight size={20} />
          Zobacz interaktywną symulację mnożnika →
        </Link>
      </section>

      <section className="chapter-section">
        <h2>Równowaga makroekonomiczna</h2>

        <div className="concept-card">
          <p className="definition">
            <strong>Równowaga makroekonomiczna</strong> występuje, gdy produkcja (Y) równa się
            popytowi globalnemu (AD).
          </p>

          <div className="formula-box">
            <div className="formula">
              Y = AD = C + I + G + (X - M)
            </div>
            <p className="formula-note">
              W równowadze wszystko, co wyprodukowaliśmy, zostaje sprzedane.
            </p>
          </div>

          <div className="modern-example">
            <h4><TrendingUp className="inline-icon" size={20} /> Przykład: Pakiety stymulacyjne COVID-19</h4>
            <p>
              <strong>USA (2020-2021):</strong> Rząd wydał około 5 bilionów USD na pakiety pomocowe
              (CARES Act, American Rescue Plan). Bezpośrednie czeki po 1200-1400 USD dla obywateli.
            </p>
            <p className="data-highlight">
              Efekt: PKB odbił się z -3,5% w 2020 do +5,9% w 2021. Mnożnik zadziałał!
            </p>
            <p>
              <strong>Polska (2020):</strong> Tarcza antykryzysowa o wartości 212 mld PLN (10% PKB).
              Dopłaty do pensji, zwolnienia z ZUS, subwencje dla firm.
            </p>
            <p className="data-highlight">
              Efekt: Spadek PKB ograniczony do -2,2% (znacznie lepiej niż oczekiwano).
            </p>
          </div>
        </div>

        <Link to="/chapter/21/calculator" className="interactive-link">
          <Calculator size={20} />
          Kalkulator równowagi makroekonomicznej →
        </Link>
      </section>

      <section className="chapter-section">
        <h2>Kluczowe wnioski</h2>
        <div className="key-points">
          <div className="key-point">
            📊 <strong>Popyt globalny składa się z czterech elementów:</strong> C + I + G + (X-M)
          </div>
          <div className="key-point">
            💰 <strong>MPC + MPS = 1:</strong> Dodatkowy dochód można tylko wydać lub zaoszczędzić
          </div>
          <div className="key-point">
            ⚡ <strong>Im wyższe MPC, tym silniejszy mnożnik:</strong> k = 1 / (1 - MPC)
          </div>
          <div className="key-point">
            ⚖️ <strong>Równowaga gdy Y = AD:</strong> Wszystko co wyprodukowano, zostaje sprzedane
          </div>
          <div className="key-point">
            🔄 <strong>Mnożnik działa w obie strony:</strong> Wzrost wydatków rządowych zwiększa PKB,
            ale cięcia też zmniejszają PKB o więcej niż sama cięta kwota
          </div>
        </div>
      </section>

      <div className="chapter-nav">
        <Link to="/chapter/20" className="btn-secondary">← Rozdział 20</Link>
        <Link to="/chapter/21/quiz" className="btn-primary">Quiz: Sprawdź wiedzę →</Link>
      </div>
    </div>
  );
}
