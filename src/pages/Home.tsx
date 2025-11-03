import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Witaj w Interaktywnej Nauce Makroekonomii! 📊</h1>
        <p className="home-subtitle">
          Przygotuj się do kartówki z rozdziałów 20-24 książki Davida Begga
        </p>
      </header>

      <section className="exam-mode-cta">
        <div className="cta-content">
          <div className="cta-icon">🎯</div>
          <div className="cta-text">
            <h2>Gotowy na sprawdzian?</h2>
            <p>Sprawdź swoją wiedzę w Trybie Egzamin - losowe pytania teoretyczne i obliczeniowe ze wszystkich rozdziałów!</p>
          </div>
          <Link to="/exam-mode" className="cta-button">
            Rozpocznij Tryb Egzamin →
          </Link>
        </div>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Quizy interaktywne</h3>
          <p>Sprawdź swoją wiedzę z pytaniami wielokrotnego wyboru i zadaniami prawda/fałsz</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧮</div>
          <h3>Zadania obliczeniowe</h3>
          <p>Praktyczne kalkulatory i zadania do obliczania PKB, inflacji i innych wskaźników</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Wykresy interaktywne</h3>
          <p>Zrozum modele ekonomiczne dzięki interaktywnym diagramom</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📝</div>
          <h3>Śledzenie postępów</h3>
          <p>Zobacz jak daleko zaszedłeś i co jeszcze musisz powtórzyć</p>
        </div>
      </section>

      <section className="home-chapters">
        <h2>Zakres materiału</h2>
        <div className="chapters-list">
          <Link to="/chapter/20" className="chapter-card">
            <span className="chapter-number">20</span>
            <div>
              <h3>Wprowadzenie do makroekonomii</h3>
              <p>Rachunek dochodu narodowego, PKB, inflacja, bezrobocie</p>
            </div>
          </Link>

          <Link to="/chapter/21" className="chapter-card">
            <span className="chapter-number">21</span>
            <div>
              <h3>Determinanty dochodu narodowego</h3>
              <p>Ruch okrężny, popyt globalny, mnożnik</p>
            </div>
          </Link>

          <Link to="/chapter/22" className="chapter-card">
            <span className="chapter-number">22</span>
            <div>
              <h3>Popyt globalny i polityka fiskalna</h3>
              <p>Budżet państwa, handel zagraniczny</p>
            </div>
          </Link>

          <Link to="/chapter/23" className="chapter-card">
            <span className="chapter-number">23</span>
            <div>
              <h3>Pieniądz i system bankowy</h3>
              <p>Funkcje pieniądza, kreacja pieniądza</p>
            </div>
          </Link>

          <Link to="/chapter/24" className="chapter-card">
            <span className="chapter-number">24</span>
            <div>
              <h3>Bank centralny</h3>
              <p>Polityka pieniężna, popyt na pieniądz</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
