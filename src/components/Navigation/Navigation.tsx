import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import './Navigation.css';

interface SubLink {
  title: string;
  path: string;
  icon: string;
}

interface Chapter {
  id: string;
  title: string;
  path: string;
  subLinks: SubLink[];
}

const chapters: Chapter[] = [
  {
    id: '20',
    title: 'Rozdział 20: Wprowadzenie',
    path: '/chapter/20',
    subLinks: [
      { title: 'Teoria', path: '/chapter/20', icon: '📖' },
      { title: 'Quiz', path: '/chapter/20/quiz', icon: '❓' },
      { title: 'Kalkulator', path: '/chapter/20/calculator', icon: '🧮' },
      { title: 'Diagram', path: '/chapter/20/diagram', icon: '📊' },
    ]
  },
  {
    id: '21',
    title: 'Rozdział 21: Determinanty dochodu',
    path: '/chapter/21',
    subLinks: [
      { title: 'Teoria', path: '/chapter/21', icon: '📖' },
      { title: 'Quiz', path: '/chapter/21/quiz', icon: '❓' },
      { title: 'Mnożnik', path: '/chapter/21/multiplier', icon: '📈' },
      { title: 'Kalkulator', path: '/chapter/21/calculator', icon: '🧮' },
    ]
  },
  {
    id: '22',
    title: 'Rozdział 22: Polityka fiskalna',
    path: '/chapter/22',
    subLinks: [
      { title: 'Teoria', path: '/chapter/22', icon: '📖' },
      { title: 'Quiz', path: '/chapter/22/quiz', icon: '❓' },
      { title: 'Kalkulator', path: '/chapter/22/calculator', icon: '🧮' },
    ]
  },
  {
    id: '23',
    title: 'Rozdział 23: Pieniądz',
    path: '/chapter/23',
    subLinks: [
      { title: 'Teoria', path: '/chapter/23', icon: '📖' },
      { title: 'Quiz', path: '/chapter/23/quiz', icon: '❓' },
      { title: 'Kalkulator', path: '/chapter/23/calculator', icon: '🧮' },
    ]
  },
  {
    id: '24',
    title: 'Rozdział 24: Bank centralny',
    path: '/chapter/24',
    subLinks: [
      { title: 'Teoria', path: '/chapter/24', icon: '📖' },
      { title: 'Quiz', path: '/chapter/24/quiz', icon: '❓' },
      { title: 'Symulator', path: '/chapter/24/simulator', icon: '🎮' },
    ]
  },
];

export default function Navigation() {
  const location = useLocation();
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);

  const toggleChapter = (chapterId: string) => {
    if (expandedChapters.includes(chapterId)) {
      setExpandedChapters(expandedChapters.filter(id => id !== chapterId));
    } else {
      setExpandedChapters([...expandedChapters, chapterId]);
    }
  };

  // Auto-expand current chapter
  useEffect(() => {
    const currentChapter = chapters.find(ch =>
      location.pathname.startsWith(ch.path)
    );

    if (currentChapter && !expandedChapters.includes(currentChapter.id)) {
      setExpandedChapters(prev => [...prev, currentChapter.id]);
    }
  }, [location.pathname]);

  return (
    <nav className="navigation">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <h2>📊 Makroekonomia</h2>
        </Link>
      </div>

      <div className="nav-content">
        <div className="exam-mode-link-container">
          <Link to="/exam-mode" className="exam-mode-link">
            <span className="exam-icon">🎯</span>
            <span className="exam-text">Tryb Egzamin</span>
          </Link>
        </div>

        <div className="tools-link-container">
          <Link to="/tools" className="tools-link">
            <span className="tools-icon">🧮</span>
            <span className="tools-text">Narzędzia</span>
          </Link>
        </div>

        <h3 className="nav-section-title">Rozdziały</h3>
        <div className="chapters-list">
          {chapters.map(chapter => {
            const isExpanded = expandedChapters.includes(chapter.id);
            const isActive = location.pathname.startsWith(chapter.path);

            return (
              <div key={chapter.id} className="chapter-item">
                <button
                  className={`chapter-toggle ${isActive ? 'active' : ''}`}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <span className="chapter-icon">
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                  <span className="chapter-title">{chapter.title}</span>
                </button>

                {isExpanded && (
                  <ul className="sublinks-list">
                    {chapter.subLinks.map(subLink => (
                      <li key={subLink.path}>
                        <Link
                          to={subLink.path}
                          className={`sublink ${location.pathname === subLink.path ? 'active' : ''}`}
                        >
                          <span className="sublink-icon">{subLink.icon}</span>
                          <span className="sublink-title">{subLink.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
