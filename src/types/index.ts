export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'truefalse' | 'calculation';
  options: string[];
  correctAnswers: number[]; // indices of correct options
  explanation?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  type: 'calculation' | 'matching' | 'interactive';
  data?: any; // specific to exercise type
}

export interface ChapterContent {
  id: string;
  title: string;
  sections: Section[];
  quizzes: QuizQuestion[];
  exercises: Exercise[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
}

export interface UserProgress {
  chapterId: string;
  completedQuizzes: string[];
  completedExercises: string[];
  score: number;
}

// Calculation question with step-by-step solution
export interface CalculationQuestion extends QuizQuestion {
  type: 'calculation';
  calculationType: 'gdp' | 'consumption' | 'multiplier' | 'equilibrium' | 'value-added' | 'fiscal' | 'money-creation';
  givens: { [key: string]: number | string }; // Given values in the problem
  steps: CalculationStep[]; // Step-by-step solution
  finalAnswer: number | string;
  unit?: string; // e.g., "mln zł", "%", etc.
}

export interface CalculationStep {
  description: string;
  formula?: string;
  calculation?: string;
  result?: string | number;
}

// Exam mode settings
export interface ExamSettings {
  questionCount: number;
  timeLimit: number; // in minutes, 0 = no limit
  includeTheory: boolean;
  includeCalculations: boolean;
}

// Exam result
export interface ExamResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  timeTaken: number; // in seconds
  answeredQuestions: {
    questionId: string;
    correct: boolean;
    userAnswer: number[];
    correctAnswer: number[];
  }[];
  weakAreas: string[]; // chapter IDs where user struggled
}
