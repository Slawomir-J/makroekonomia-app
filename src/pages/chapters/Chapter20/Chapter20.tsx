import { Target, BookOpen, TrendingUp, Users, DollarSign, AlertCircle, Calculator, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlossaryPanel from '../../../components/GlossaryPanel/GlossaryPanel';
import './Chapter20.css';

export default function Chapter20() {
  return (
    <div className="chapter">
      <div className="chapter-with-glossary">
        <div className="chapter-main-content">
          <header className="chapter-header">
            <span className="chapter-badge">Rozdział 20</span>
            <h1>Wprowadzenie do makroekonomii i rachunku dochodu narodowego</h1>
          </header>

      <section className="chapter-section">
        <h2><Target className="section-icon" /> Cele rozdziału</h2>
        <div className="objectives">
          <div className="objective-item">
            ✓ Wyjaśnić istotę podejścia makroekonomicznego
          </div>
          <div className="objective-item">
            ✓ Zbudować system rachunków narodowych
          </div>
          <div className="objective-item">
            ✓ Wykorzystać schemat ruchu okrężnego
          </div>
          <div className="objective-item">
            ✓ Rozumieć ograniczenia PKB jako miernika
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><BookOpen className="section-icon" /> Kluczowe pojęcia</h2>

        <div className="concept-card">
          <h3><Globe className="inline-icon" /> Makroekonomia</h3>
          <p className="definition">
            Nauka o gospodarce jako całości. Zajmuje się takimi zagadnieniami jak bezrobocie,
            inflacja i wzrost gospodarczy.
          </p>
          <div className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Różnica mikro vs makro:</strong> Mikroekonomia przypomina oglądanie wyścigów
            przez lornetkę - widzisz detale, ale tracisz obraz całości. Makroekonomia to obserwacja
            "gołym okiem" - widzisz całą gonitę, wszystkie powiązania, ale bez szczegółów pojedynczych koni.
          </div>
        </div>

        <div className="concept-card">
          <h3><DollarSign className="inline-icon" /> Produkt Krajowy Brutto (PKB)</h3>
          <p className="definition">
            Miara wielkości produkcji wytworzonej przez czynniki wytwórcze zlokalizowane
            na terytorium danego kraju, niezależnie od tego, kto jest ich właścicielem.
          </p>

          <div className="formula-box">
            <h4>Trzy metody obliczania PKB:</h4>
            <div className="formula">
              1. Metoda produkcyjna: PKB = Σ wartości dodanej
            </div>
            <div className="formula">
              2. Metoda dochodowa: PKB = płace + zyski + czynsze + odsetki
            </div>
            <div className="formula">
              3. Metoda wydatkowa: PKB = C + I + G + (X - M)
            </div>
            <p className="formula-note">
              <strong>Ważne:</strong> Wszystkie trzy metody dają identyczny wynik!
            </p>
          </div>

          <div className="modern-example">
            <h4><TrendingUp className="inline-icon" size={20} /> Nowoczesny przykład: Recesja COVID-19</h4>
            <p>
              <strong>USA (2020):</strong> Pandemia COVID-19 spowodowała największy spadek PKB od 1946 roku.
              W drugim kwartale 2020 PKB spadło o 31,4% (w ujęciu annualizowanym).
            </p>
            <p className="data-highlight">
              PKB USA: -3,5% w 2020 r. → +5,9% w 2021 r. (efekt polityki fiskalnej i szczepień)
            </p>
            <p>
              <strong>Polska (2024):</strong> Pomimo kryzysów, polska gospodarka utrzymała dodatni wzrost:
              PKB wzrosło o 3,0%, osiągając 914,7 mld USD (17 984 USD per capita).
            </p>
          </div>
        </div>

        <div className="concept-card">
          <h3><TrendingUp className="inline-icon" /> Inflacja</h3>
          <p className="definition">
            Roczna stopa inflacji to procentowy wzrost przeciętnego poziomu cen
            dóbr i usług w ciągu roku.
          </p>
          <div className="formula-box">
            <div className="formula">
              Stopa inflacji = [(CPI_t - CPI_(t-1)) / CPI_(t-1)] × 100%
            </div>
            <p className="formula-explanation">
              <strong>Odczytywanie wzoru:</strong>
            </p>
            <ul className="formula-explanation">
              <li><strong>CPI_t</strong> = wskaźnik cen konsumpcyjnych w bieżącym roku (current period)</li>
              <li><strong>CPI_(t-1)</strong> = wskaźnik cen konsumpcyjnych w roku poprzednim</li>
              <li><strong>(CPI_t - CPI_(t-1))</strong> = zmiana poziomu cen między rokami</li>
              <li><strong>/ CPI_(t-1)</strong> = dzielimy przez poziom wyjściowy (rok poprzedni)</li>
              <li><strong>× 100%</strong> = zamieniamy na procenty</li>
            </ul>
            <div className="example-box">
              <h4>Przykład:</h4>
              <p>CPI w 2023 r. = 120, CPI w 2022 r. = 110</p>
              <p className="calc-result">Stopa inflacji = [(120 - 110) / 110] × 100% = (10/110) × 100% = 9,1%</p>
              <p className="highlight">
                Ceny wzrosły o 9,1% w ciągu roku - jeśli coś kosztowało 100 zł w 2022, to w 2023 kosztuje 109,10 zł.
              </p>
            </div>
          </div>

          <div className="modern-example">
            <h4><TrendingUp className="inline-icon" size={20} /> Nowoczesny przykład: Szczyt inflacji 2022-2023</h4>
            <p>
              <strong>USA:</strong> Rezerwa Federalna dopuściła do najwyższej inflacji od 40 lat.
              Szczyt: 8,6% w maju 2022 r. → spadek do 4,9% w kwietniu 2023 r.
            </p>
            <p>
              <strong>Polska:</strong> Wojna w Ukrainie spowodowała wzrost cen energii i żywności.
              Inflacja wzrosła z 9,4% (styczeń 2022) do szczytu 18,4% (luty 2023).
            </p>
            <p className="data-highlight">
              Strefa euro: szczyt 10,6% w październiku 2022 r. (kryzys energetyczny po odcięciu gazu z Rosji)
            </p>
          </div>
        </div>

        <div className="concept-card">
          <h3><Users className="inline-icon" /> Bezrobocie</h3>
          <p className="definition">
            <strong>Stopa bezrobocia</strong> to odsetek siły roboczej pozostającej bez pracy.
          </p>
          <div className="formula">
            Stopa bezrobocia = (Liczba bezrobotnych / Siła robocza) × 100%
          </div>
          <p className="note">
            <AlertCircle className="inline-icon" size={18} />
            <strong>Siła robocza</strong> = liczba ludzi pracujących + poszukujących pracy
            <br />
            (Nie obejmuje: studentów, emerytów, osób nieposzukujących pracy)
          </p>

          <div className="modern-example">
            <h4><Users className="inline-icon" size={20} /> Nowoczesny przykład: Lockdown 2020</h4>
            <p>
              <strong>USA:</strong> Zamknięcie gospodarki spowodowało rekordowy wzrost bezrobocia.
              W ciągu 7 tygodni o zasiłek zgłosiło się 33,5 mln Amerykanów.
            </p>
            <p className="data-highlight">
              Stopa bezrobocia: 3,5% (luty 2020) → 14,7% (kwiecień 2020) - najwyżej od Wielkiego Kryzysu!
            </p>
            <p>
              <strong>Polska:</strong> Dzięki tarczy antykryzysowej uniknęła masowego bezrobocia:
              5,3% → 5,8% (szczyt w kwietniu 2020) → 5,0% (2024)
            </p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2><ArrowRight className="section-icon" /> Ruch okrężny</h2>
        <p>
          Ruch okrężny oznacza przepływy zasobów rzeczowych i pieniężnych między
          gospodarstwami domowymi oraz przedsiębiorstwami.
        </p>

        <Link to="/chapter/20/diagram" className="interactive-link">
          <ArrowRight size={20} />
          Eksploruj interaktywny diagram ruchu okrężnego →
        </Link>

        <div className="info-box">
          <h4>Kluczowe przepływy:</h4>
          <div className="flow-explanation">
            <div className="flow-item">
              <strong>Gospodarstwa domowe → Przedsiębiorstwa:</strong>
              <ul>
                <li>Usługi czynników produkcji (praca, kapitał, ziemia)</li>
              </ul>
            </div>
            <div className="flow-item">
              <strong>Przedsiębiorstwa → Gospodarstwa domowe:</strong>
              <ul>
                <li>Płace, zyski, czynsze (dochody czynników)</li>
              </ul>
            </div>
            <div className="flow-item">
              <strong>Gospodarstwa domowe → Przedsiębiorstwa:</strong>
              <ul>
                <li>Wydatki na dobra i usługi</li>
              </ul>
            </div>
            <div className="flow-item">
              <strong>Przedsiębiorstwa → Gospodarstwa domowe:</strong>
              <ul>
                <li>Dobra i usługi finalne</li>
              </ul>
            </div>
          </div>
          <p className="highlight">
            ⚡ Wartość produkcji = Dochody czynników = Wydatki na dobra i usługi
          </p>
        </div>
      </section>

      <section className="chapter-section">
        <h2><Calculator className="section-icon" /> Wartość dodana</h2>
        <div className="concept-card">
          <h3>Czym jest wartość dodana?</h3>
          <p className="definition">
            Wartość dodana to przyrost wartości dóbr w wyniku określonego procesu produkcji.
          </p>
          <div className="formula-box">
            <div className="formula">
              Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich
            </div>
            <p className="formula-explanation">
              <strong>Krok po kroku:</strong>
            </p>
            <ol className="steps-list">
              <li>Przedsiębiorstwo kupuje surowce/materiały (dobra pośrednie)</li>
              <li>Przetwarza je w produkt</li>
              <li>Sprzedaje produkt za wyższą cenę</li>
              <li><strong>Wartość dodana</strong> = różnica między ceną sprzedaży a kosztem zakupu dóbr pośrednich</li>
            </ol>
          </div>
        </div>

        <Link to="/chapter/20/calculator" className="interactive-link">
          <Calculator size={20} />
          Wypróbuj interaktywny kalkulator wartości dodanej →
        </Link>

        <div className="example-box">
          <h4>Przykład: Łańcuch produkcji samochodu</h4>
          <div className="calculation-example">
            <div className="calc-step">
              <strong>Krok 1: Producent stali</strong>
              <p>Wydobywa rudę i produkuje stal o wartości 4000 £</p>
              <p>Nakłady: 0 £ (surowce naturalne)</p>
              <p className="calc-result">Wartość dodana = 4000 £ - 0 £ = 4000 £</p>
            </div>

            <div className="calc-step">
              <strong>Krok 2: Producent maszyn</strong>
              <p>Kupuje stal za 1000 £</p>
              <p>Produkuje maszynę, którą sprzedaje za 2000 £</p>
              <p className="calc-result">Wartość dodana = 2000 £ - 1000 £ = 1000 £</p>
            </div>

            <div className="calc-step">
              <strong>Krok 3: Producent opon</strong>
              <p>Produkuje opony o wartości 500 £</p>
              <p>Nakłady pośrednie: 0 £</p>
              <p className="calc-result">Wartość dodana = 500 £</p>
            </div>

            <div className="calc-step">
              <strong>Krok 4: Producent samochodów</strong>
              <p>Kupuje: stal (3000 £) + maszynę (2000 £) + opony (500 £)</p>
              <p>Sprzedaje samochód za 5000 £</p>
              <p className="calc-result">Wartość dodana = 5000 £ - 5500 £... Czekaj!</p>
              <p className="note">
                <AlertCircle className="inline-icon" size={16} />
                Maszynę zaliczamy jako dobro kapitałowe (nie zużywa się od razu), więc:
                <br />Wartość dodana = 5000 £ - (3000 £ + 500 £) = 1500 £
              </p>
            </div>

            <div className="calc-summary">
              <strong>Suma wartości dodanych = PKB</strong>
              <p>4000 £ + 1000 £ + 500 £ + 1500 £ = 7000 £</p>
              <p>To samo co wartość dobra finalnego (samochodu) + maszyny = 5000 £ + 2000 £ = 7000 £</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>Kluczowe rozróżnienia</h2>
        <div className="key-points">
          <div className="key-point">
            <strong>Dobra finalne</strong> to dobra nabyte przez ostatecznego użytkownika:
            <ul>
              <li>Konsument kupuje chleb → dobro finalne</li>
              <li>Przedsiębiorstwo kupuje maszynę → dobro finalne (kapitałowe)</li>
            </ul>
          </div>
          <div className="key-point">
            <strong>Dobra pośrednie</strong> to dobra zużywane w produkcji:
            <ul>
              <li>Piekarz kupuje mąkę → dobro pośrednie</li>
              <li>Producent samochodów kupuje stal → dobro pośrednie</li>
            </ul>
          </div>
          <div className="key-point">
            <AlertCircle className="inline-icon" size={20} />
            <strong>Dlaczego to ważne?</strong> PKB mierzy tylko dobra finalne, aby uniknąć podwójnego liczenia!
            <br />
            Gdybyśmy liczyli stal (4000 £) + samochód (5000 £) = 9000 £, policzylibyśmy stal dwa razy!
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h2>Nominalny vs Realny PKB</h2>
        <div className="concept-card">
          <p className="definition">
            <strong>Nominalny PKB</strong> mierzy wartość produkcji w cenach bieżących.
            <br />
            <strong>Realny PKB</strong> mierzy wartość produkcji w cenach stałych (z roku bazowego).
          </p>
          <div className="formula-box">
            <div className="formula">
              Realny PKB = (Nominalny PKB / Deflator PKB) × 100
            </div>
            <p className="formula-explanation">
              <strong>Dlaczego potrzebujemy realnego PKB?</strong>
              <br />
              Żeby oddzielić wzrost produkcji od wzrostu cen (inflacji).
            </p>
          </div>
          <div className="example-box">
            <h4>Przykład:</h4>
            <p>Gospodarka produkuje 100 samochodów po 10 000 £ w 2020 r.</p>
            <p><strong>Nominalny PKB 2020</strong> = 100 × 10 000 £ = 1 000 000 £</p>
            <br />
            <p>W 2021 r. produkuje 100 samochodów po 11 000 £ (ceny wzrosły o 10%)</p>
            <p><strong>Nominalny PKB 2021</strong> = 100 × 11 000 £ = 1 100 000 £ (+10%)</p>
            <p><strong>Realny PKB 2021</strong> (w cenach 2020) = 100 × 10 000 £ = 1 000 000 £ (bez zmian)</p>
            <br />
            <p className="highlight">
              Nominalny PKB wzrósł o 10%, ale realny PKB nie zmienił się - to był tylko efekt inflacji!
            </p>
          </div>
        </div>
      </section>

          <div className="chapter-nav">
            <button className="btn-secondary" disabled>← Poprzedni rozdział</button>
            <Link to="/chapter/20/quiz" className="btn-primary">Quiz: Sprawdź wiedzę →</Link>
          </div>
        </div>

        <GlossaryPanel />
      </div>
    </div>
  );
}
