import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Summary from './pages/Summary/Summary';
import Chapter20 from './pages/chapters/Chapter20/Chapter20';
import Chapter20Quiz from './pages/chapters/Chapter20/Chapter20Quiz';
import Chapter20Calculator from './pages/chapters/Chapter20/Chapter20Calculator';
import Chapter20Diagram from './pages/chapters/Chapter20/Chapter20Diagram';
import Chapter21 from './pages/chapters/Chapter21/Chapter21';
import Chapter21Quiz from './pages/chapters/Chapter21/Chapter21Quiz';
import Chapter21Multiplier from './pages/chapters/Chapter21/Chapter21Multiplier';
import Chapter21Calculator from './pages/chapters/Chapter21/Chapter21Calculator';
import Chapter22 from './pages/chapters/Chapter22/Chapter22';
import Chapter22Quiz from './pages/chapters/Chapter22/Chapter22Quiz';
import Chapter22Calculator from './pages/chapters/Chapter22/Chapter22Calculator';
import Chapter23 from './pages/chapters/Chapter23/Chapter23';
import Chapter23Quiz from './pages/chapters/Chapter23/Chapter23Quiz';
import Chapter23Calculator from './pages/chapters/Chapter23/Chapter23Calculator';
import Chapter24 from './pages/chapters/Chapter24/Chapter24';
import Chapter24Quiz from './pages/chapters/Chapter24/Chapter24Quiz';
import Chapter24Simulator from './pages/chapters/Chapter24/Chapter24Simulator';
import ExamMode from './pages/ExamMode/ExamMode';
import Tools from './pages/Tools/Tools';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary />} />
          <Route path="exam-mode" element={<ExamMode />} />
          <Route path="tools" element={<Tools />} />
          <Route path="chapter/20" element={<Chapter20 />} />
          <Route path="chapter/20/quiz" element={<Chapter20Quiz />} />
          <Route path="chapter/20/calculator" element={<Chapter20Calculator />} />
          <Route path="chapter/20/diagram" element={<Chapter20Diagram />} />
          <Route path="chapter/21" element={<Chapter21 />} />
          <Route path="chapter/21/quiz" element={<Chapter21Quiz />} />
          <Route path="chapter/21/multiplier" element={<Chapter21Multiplier />} />
          <Route path="chapter/21/calculator" element={<Chapter21Calculator />} />
          <Route path="chapter/22" element={<Chapter22 />} />
          <Route path="chapter/22/quiz" element={<Chapter22Quiz />} />
          <Route path="chapter/22/calculator" element={<Chapter22Calculator />} />
          <Route path="chapter/23" element={<Chapter23 />} />
          <Route path="chapter/23/quiz" element={<Chapter23Quiz />} />
          <Route path="chapter/23/calculator" element={<Chapter23Calculator />} />
          <Route path="chapter/24" element={<Chapter24 />} />
          <Route path="chapter/24/quiz" element={<Chapter24Quiz />} />
          <Route path="chapter/24/simulator" element={<Chapter24Simulator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
