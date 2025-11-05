import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, Filter, Search, Home } from 'lucide-react';
import { exampleProblems, problemCategories } from '../../data/example-problems';
import type { ProblemCategory, ProblemDifficulty } from '../../types';
import './ExampleProblems.css';

export default function ExampleProblems() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<ProblemCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<ProblemDifficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter problems
  const filteredProblems = exampleProblems.filter(problem => {
    const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    const matchesSearch = searchQuery === '' ||
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyClass = (difficulty: ProblemDifficulty) => {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
    }
  };

  const getDifficultyLabel = (difficulty: ProblemDifficulty) => {
    switch (difficulty) {
      case 'easy': return 'Łatwe';
      case 'medium': return 'Średnie';
      case 'hard': return 'Trudne';
    }
  };

  const getCategoryInfo = (categoryId: ProblemCategory) => {
    return problemCategories.find(c => c.id === categoryId);
  };

  return (
    <div className="example-problems-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <button onClick={() => navigate('/')} className="breadcrumb-item">
          <Home size={14} />
          Strona główna
        </button>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span className="breadcrumb-item breadcrumb-current">
          Zadania Przykładowe
        </span>
      </nav>

      <div className="page-header">
        <div className="header-content">
          <div className="header-icon">
            <BookOpen size={32} />
          </div>
          <div>
            <h1>Zadania Przykładowe</h1>
            <p className="header-description">
              Szczegółowe rozwiązania krok po kroku najważniejszych typów zadań z makroekonomii
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <label className="filter-label">
            <Filter size={16} />
            Kategoria
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ProblemCategory | 'all')}
            className="filter-select"
          >
            <option value="all">Wszystkie kategorie</option>
            {problemCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.title}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">
            <Filter size={16} />
            Poziom trudności
          </label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as ProblemDifficulty | 'all')}
            className="filter-select"
          >
            <option value="all">Wszystkie poziomy</option>
            <option value="easy">Łatwe</option>
            <option value="medium">Średnie</option>
            <option value="hard">Trudne</option>
          </select>
        </div>

        <div className="filter-group search-group">
          <label className="filter-label">
            <Search size={16} />
            Szukaj
          </label>
          <input
            type="text"
            placeholder="Wpisz słowo kluczowe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Categories Overview */}
      {selectedCategory === 'all' && searchQuery === '' && (
        <div className="categories-grid">
          {problemCategories.map(category => {
            const problemsCount = exampleProblems.filter(p => p.category === category.id).length;

            // Ukryj kategorie bez zadań
            if (problemsCount === 0) return null;

            return (
              <div
                key={category.id}
                className="category-card"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-stats">
                  <span className="problems-count">{problemsCount} {problemsCount === 1 ? 'zadanie' : 'zadań'}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Formulas for selected category */}
      {selectedCategory !== 'all' && (
        <div className="formulas-section">
          <h2>📐 Potrzebne wzory</h2>
          {(() => {
            const categoryInfo = getCategoryInfo(selectedCategory);
            if (!categoryInfo) return null;

            return (
              <div className="formulas-grid">
                {categoryInfo.formulas.map((formula, index) => (
                  <div key={index} className="formula-card">
                    <h4>{formula.name}</h4>
                    <div className="formula-expression">
                      <code>{formula.formula}</code>
                    </div>
                    <p className="formula-description">{formula.description}</p>
                    {Object.keys(formula.variables).length > 0 && (
                      <div className="formula-variables">
                        <strong>Gdzie:</strong>
                        <ul>
                          {Object.entries(formula.variables).map(([symbol, meaning]) => (
                            <li key={symbol}>
                              <code>{symbol}</code> = {meaning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* Problems List */}
      <div className="problems-section">
        <div className="problems-header">
          <h2>
            {selectedCategory === 'all' ? 'Wszystkie zadania' : getCategoryInfo(selectedCategory)?.title}
          </h2>
          <span className="results-count">
            {filteredProblems.length} {filteredProblems.length === 1 ? 'zadanie' : 'zadań'}
          </span>
        </div>

        <div className="problems-list">
          {filteredProblems.map(problem => {
            const categoryInfo = getCategoryInfo(problem.category);

            return (
              <div
                key={problem.id}
                className="problem-card"
                onClick={() => navigate(`/example-problems/${problem.id}`)}
              >
                <div className="problem-card-header">
                  <div className="problem-meta">
                    <span className="problem-category">
                      {categoryInfo?.icon} {categoryInfo?.title}
                    </span>
                    <span className={`problem-difficulty ${getDifficultyClass(problem.difficulty)}`}>
                      {getDifficultyLabel(problem.difficulty)}
                    </span>
                  </div>
                </div>

                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-description">{problem.description}</p>

                <div className="problem-card-footer">
                  <div className="problem-keywords">
                    {problem.keywords.slice(0, 3).map((keyword, idx) => (
                      <span key={idx} className="keyword-tag">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <button className="view-solution-btn">
                    Rozwiąż zadanie
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}

          {filteredProblems.length === 0 && (
            <div className="no-results">
              <p>Nie znaleziono zadań pasujących do wybranych filtrów.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
