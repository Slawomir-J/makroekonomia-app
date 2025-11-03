import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavItem {
  id: string;
  title: string;
  path: string;
}

const chapters: NavItem[] = [
  { id: '20', title: 'Rozdział 20: Wprowadzenie', path: '/chapter/20' },
  { id: '21', title: 'Rozdział 21: Determinanty dochodu', path: '/chapter/21' },
  { id: '22', title: 'Rozdział 22: Polityka fiskalna', path: '/chapter/22' },
  { id: '23', title: 'Rozdział 23: Pieniądz', path: '/chapter/23' },
  { id: '24', title: 'Rozdział 24: Bank centralny', path: '/chapter/24' },
];

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <h2>📊 Makroekonomia</h2>
        </Link>
      </div>

      <div className="nav-content">
        <h3 className="nav-section-title">Rozdziały</h3>
        <ul className="nav-list">
          {chapters.map(chapter => (
            <li key={chapter.id}>
              <Link to={chapter.path} className="nav-link">
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
