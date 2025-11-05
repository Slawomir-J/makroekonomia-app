import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, BookOpen, Lightbulb, CheckCircle, ChevronRight, Home } from 'lucide-react';
import { exampleProblems, problemCategories } from '../../data/example-problems';
import './ProblemDetail.css';

export default function ProblemDetail() {
  const { problemId } = useParams<{ problemId: string }>();
  const navigate = useNavigate();

  const problem = exampleProblems.find(p => p.id === problemId);
  const categoryInfo = problem ? problemCategories.find(c => c.id === problem.category) : null;

  if (!problem) {
    return (
      <div className="problem-not-found">
        <h2>Zadanie nie zostało znalezione</h2>
        <button onClick={() => navigate('/example-problems')} className="btn-primary">
          Wróć do listy zadań
        </button>
      </div>
    );
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Łatwe';
      case 'medium': return 'Średnie';
      case 'hard': return 'Trudne';
      default: return difficulty;
    }
  };

  return (
    <div className="problem-detail-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <button onClick={() => navigate('/')} className="breadcrumb-item">
          <Home size={14} />
          Strona główna
        </button>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <button onClick={() => navigate('/example-problems')} className="breadcrumb-item">
          Zadania Przykładowe
        </button>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span className="breadcrumb-item breadcrumb-current">
          {categoryInfo?.title || 'Zadanie'}
        </span>
      </nav>

      {/* Header */}
      <div className="problem-detail-header">
        <button onClick={() => navigate('/example-problems')} className="back-button">
          <ArrowLeft size={20} />
          Powrót do listy
        </button>

        <div className="problem-meta">
          <span className="category-badge">
            {categoryInfo?.icon} {categoryInfo?.title}
          </span>
          <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
            {getDifficultyLabel(problem.difficulty)}
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 className="problem-title">{problem.title}</h1>
      <p className="problem-description">{problem.description}</p>

      {/* Givens Section */}
      <div className="section-card givens-section">
        <div className="section-header">
          <Calculator size={20} />
          <h2>Dane</h2>
        </div>
        <ul className="givens-list">
          {Object.entries(problem.givens).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      {/* Questions */}
      <div className="section-card questions-section">
        <div className="section-header">
          <BookOpen size={20} />
          <h2>Czego szukamy?</h2>
        </div>
        <ol className="questions-list">
          {problem.questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ol>
      </div>

      {/* Related Formulas */}
      {categoryInfo && categoryInfo.formulas.length > 0 && (
        <div className="section-card formulas-section">
          <div className="section-header">
            <span className="formula-icon">📐</span>
            <h2>Potrzebne wzory</h2>
          </div>
          <div className="formulas-list">
            {categoryInfo.formulas.map((formula, index) => (
              <div key={index} className="formula-item">
                <div className="formula-name">{formula.name}</div>
                <div className="formula-expression">
                  <code>{formula.formula}</code>
                </div>
                <div className="formula-description">{formula.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solution Steps */}
      <div className="section-card solution-section">
        <div className="section-header">
          <CheckCircle size={20} />
          <h2>Rozwiązanie krok po kroku</h2>
        </div>

        <div className="steps-container">
          {problem.solution.steps.map((step) => (
            <div key={step.stepNumber} className="solution-step">
              <div className="step-header">
                <div className="step-number">Krok {step.stepNumber}</div>
                <h3 className="step-title">{step.title}</h3>
              </div>

              <div className="step-content">
                <p className="step-description">{step.description}</p>

                {step.formulas && step.formulas.length > 0 && (
                  <div className="step-formulas">
                    {step.formulas.map((formula, idx) => (
                      <div key={idx} className="formula-box">
                        <code>{formula}</code>
                      </div>
                    ))}
                  </div>
                )}

                {step.calculations && step.calculations.length > 0 && (
                  <div className="step-calculations">
                    {step.calculations.map((calc, idx) => (
                      <div key={idx} className="calculation-item">
                        <div className="calculation-expression">
                          <code>{calc.expression}</code>
                        </div>
                        {calc.explanation && (
                          <div className="calculation-explanation">
                            {calc.explanation}
                          </div>
                        )}
                        <div className="calculation-result">
                          <strong>= {calc.result}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {step.result && (
                  <div className="step-result">
                    <strong>Wynik:</strong> {step.result}
                  </div>
                )}

                {step.note && (
                  <div className="step-note">
                    💡 <em>{step.note}</em>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Answers */}
      <div className="section-card final-answers-section">
        <div className="section-header">
          <CheckCircle size={20} />
          <h2>Odpowiedzi końcowe</h2>
        </div>
        <div className="final-answers-list">
          {Object.entries(problem.solution.finalAnswers).map(([key, value]) => (
            <div key={key} className="final-answer-item">
              <span className="answer-label">{key})</span>
              <span className="answer-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interpretation */}
      {problem.solution.interpretation && (
        <div className="section-card interpretation-section">
          <div className="section-header">
            <Lightbulb size={20} />
            <h2>Interpretacja ekonomiczna</h2>
          </div>
          <p>{problem.solution.interpretation}</p>
        </div>
      )}

      {/* Practical Implications */}
      {problem.solution.practicalImplications && problem.solution.practicalImplications.length > 0 && (
        <div className="section-card implications-section">
          <div className="section-header">
            <Lightbulb size={20} />
            <h2>Wnioski praktyczne</h2>
          </div>
          <ul className="implications-list">
            {problem.solution.practicalImplications.map((implication, index) => (
              <li key={index}>{implication}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Topics */}
      <div className="related-topics">
        <h3>Powiązane tematy:</h3>
        <div className="topics-tags">
          {problem.relatedTopics.map((topic, index) => (
            <span key={index} className="topic-tag">{topic}</span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="problem-navigation">
        <button onClick={() => navigate('/example-problems')} className="btn-secondary">
          <ArrowLeft size={16} />
          Powrót do listy zadań
        </button>
      </div>
    </div>
  );
}
