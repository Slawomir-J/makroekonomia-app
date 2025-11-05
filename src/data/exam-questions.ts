import type { QuizQuestion, CalculationQuestion } from '../types';
import { calculationExamples } from './calculation-examples';

// Wybrane najważniejsze pytania teoretyczne z wszystkich rozdziałów
const theoryQuestions: QuizQuestion[] = [
  // ROZDZIAŁ 20: Wprowadzenie do makroekonomii
  {
    id: 'exam-t1',
    question: 'Czym zajmuje się makroekonomia?',
    type: 'single',
    options: [
      'Analizą pojedynczych firm i konsumentów',
      'Gospodarką jako całością - inflacją, bezrobociem i wzrostem',
      'Tylko cenami na poszczególnych rynkach',
      'Wyłącznie polityką monetarną banku centralnego'
    ],
    correctAnswers: [1],
    explanation: 'Makroekonomia to nauka o gospodarce jako całości. Zajmuje się agregatami takimi jak PKB, inflacja, bezrobocie i wzrost gospodarczy.'
  },
  {
    id: 'exam-t2',
    question: 'Wartość dodana to:',
    type: 'single',
    options: [
      'Całkowita wartość sprzedaży przedsiębiorstwa',
      'Różnica między wartością produkcji a kosztami dóbr pośrednich',
      'Suma wszystkich kosztów produkcji',
      'To samo co zysk przedsiębiorstwa'
    ],
    correctAnswers: [1],
    explanation: 'Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich. To przyrost wartości dóbr w wyniku danego procesu produkcji. Suma wartości dodanych = PKB.'
  },
  {
    id: 'exam-t3',
    question: 'Nominalny PKB to:',
    type: 'single',
    options: [
      'PKB w cenach stałych (z roku bazowego)',
      'PKB w cenach bieżących',
      'PKB minus inflacja',
      'PKB per capita'
    ],
    correctAnswers: [1],
    explanation: 'Nominalny PKB mierzy wartość produkcji w cenach bieżących. Realny PKB to PKB w cenach stałych - pozwala oddzielić wzrost produkcji od inflacji.'
  },
  {
    id: 'exam-t4',
    question: 'Które z poniższych NIE jest uwzględnione w PKB?',
    type: 'single',
    options: [
      'Nowy samochód sprzedany przez dealera',
      'Praca domowa (sprzątanie własnego domu)',
      'Usługi fryzjera',
      'Budowa nowej fabryki'
    ],
    correctAnswers: [1],
    explanation: 'Praca domowa nie jest uwzględniona w PKB, bo nie ma transakcji rynkowej. PKB liczy tylko produkcję wymienianą na rynku.'
  },
  {
    id: 'exam-t5',
    question: 'Stopa bezrobocia oblicza się jako:',
    type: 'single',
    options: [
      '(Bezrobotni / Całkowita populacja) × 100%',
      '(Bezrobotni / Siła robocza) × 100%',
      '(Pracujący / Siła robocza) × 100%',
      '(Bezrobotni / Pracujący) × 100%'
    ],
    correctAnswers: [1],
    explanation: 'Stopa bezrobocia = (Liczba bezrobotnych / Siła robocza) × 100%, gdzie siła robocza = pracujący + bezrobotni poszukujący pracy.'
  },

  // ROZDZIAŁ 21: Determinanty dochodu narodowego
  {
    id: 'exam-t6',
    question: 'Popyt globalny (AD) składa się z czterech elementów. Który z poniższych NIE jest składnikiem popytu globalnego?',
    type: 'single',
    options: [
      'Konsumpcja (C)',
      'Inwestycje (I)',
      'Transfery socjalne (emerytury, zasiłki)',
      'Wydatki rządowe (G)'
    ],
    correctAnswers: [2],
    explanation: 'Transfery socjalne nie wchodzą do popytu globalnego. Są to tylko przesunięcia pieniędzy. Dopiero gdy emeryt wyda pieniądze, trafią one do C (konsumpcja). AD = C + I + G + (X-M).'
  },
  {
    id: 'exam-t7',
    question: 'Student kupuje nowy laptop. Do którego składnika popytu globalnego zaliczamy ten zakup?',
    type: 'single',
    options: [
      'Konsumpcja (C)',
      'Inwestycje (I)',
      'Wydatki rządowe (G)',
      'Import (M)'
    ],
    correctAnswers: [0],
    explanation: 'Zakup laptopa przez studenta (gospodarstwo domowe) to konsumpcja (C). Inwestycje (I) to tylko zakupy PRZEDSIĘBIORSTW na dobra kapitałowe.'
  },
  {
    id: 'exam-t8',
    question: 'Krańcowa skłonność do konsumpcji (MPC) wynosi 0,75. Co to oznacza?',
    type: 'single',
    options: [
      'Ludzie wydają 75% wszystkich swoich dochodów',
      'Z każdej dodatkowej złotówki dochodu 75 groszy idzie na konsumpcję',
      '75% gospodarstw domowych konsumuje wszystkie dochody',
      'Konsumpcja wzrosła o 75%'
    ],
    correctAnswers: [1],
    explanation: 'MPC = 0,75 oznacza, że z każdej dodatkowej złotówki dochodu (ΔY), 75 groszy wydajemy na konsumpcję (ΔC). MPC = ΔC/ΔY.'
  },
  {
    id: 'exam-t9',
    question: 'Paradoks zapobiegliwości mówi, że:',
    type: 'single',
    options: [
      'Oszczędzanie zawsze prowadzi do wzrostu gospodarczego',
      'Próba zwiększenia oszczędności przez wszystkich może obniżyć dochód narodowy',
      'Im więcej oszczędzamy, tym bogatsi jesteśmy',
      'Oszczędności nie wpływają na gospodarkę'
    ],
    correctAnswers: [1],
    explanation: 'Paradoks zapobiegliwości: gdy wszyscy próbują więcej oszczędzać, mniej wydają, co obniża popyt, produkcję i dochody. W efekcie oszczędności mogą nawet nie wzrosnąć, a PKB spadnie.'
  },
  {
    id: 'exam-t10',
    question: 'Co pokazuje mnożnik keynesowski?',
    type: 'single',
    options: [
      'O ile wzrosną ceny przy wzroście popytu',
      'O ile wzrośnie PKB przy wzroście wydatków autonomicznych',
      'Ile razy można pomnożyć pieniądze w banku',
      'Stosunek oszczędności do konsumpcji'
    ],
    correctAnswers: [1],
    explanation: 'Mnożnik keynesowski (k = 1/(1-MPC)) pokazuje, o ile wzrośnie PKB w wyniku wzrostu wydatków autonomicznych (np. inwestycji lub wydatków rządowych).'
  },

  // ROZDZIAŁ 22: Polityka fiskalna
  {
    id: 'exam-t11',
    question: 'Czym jest polityka fiskalna?',
    type: 'single',
    options: [
      'Działania banku centralnego polegające na zmianie stóp procentowych',
      'Działania rządu polegające na zmianie wydatków rządowych i podatków',
      'Regulacje dotyczące handlu zagranicznego i ceł',
      'Polityka przedsiębiorstw dotycząca inwestycji'
    ],
    correctAnswers: [1],
    explanation: 'Polityka fiskalna to działania rządu polegające na zmianie wydatków rządowych (G) i podatków (T) w celu wpływania na poziom produkcji i zatrudnienia.'
  },
  {
    id: 'exam-t12',
    question: 'Kiedy stosuje się ekspansywną politykę fiskalną?',
    type: 'single',
    options: [
      'Gdy gospodarka się przegrzewa i inflacja jest wysoka',
      'Gdy jest recesja i wysokie bezrobocie',
      'Gdy budżet ma nadwyżkę',
      'Zawsze, niezależnie od sytuacji'
    ],
    correctAnswers: [1],
    explanation: 'Ekspansywną politykę fiskalną (↑G, ↓T) stosuje się w recesji, żeby zwiększyć popyt globalny, produkcję i zatrudnienie.'
  },
  {
    id: 'exam-t13',
    question: 'Deficyt budżetowy powstaje, gdy:',
    type: 'single',
    options: [
      'Wydatki rządowe > Dochody podatkowe',
      'Wydatki rządowe < Dochody podatkowe',
      'Wydatki rządowe = Dochody podatkowe',
      'PKB rośnie szybciej niż dochody'
    ],
    correctAnswers: [0],
    explanation: 'Deficyt budżetowy: G > T (wydatki większe niż dochody). Nadwyżka: G < T. Budżet zrównoważony: G = T.'
  },

  // ROZDZIAŁ 23-24: Pieniądz i polityka monetarna
  {
    id: 'exam-t14',
    question: 'Która z funkcji NIE jest podstawową funkcją pieniądza?',
    type: 'single',
    options: [
      'Środek wymiany (płatności)',
      'Miernik wartości (jednostka rozrachunkowa)',
      'Środek tezauryzacji (przechowywania wartości)',
      'Źródło zysku (generowanie dochodu)'
    ],
    correctAnswers: [3],
    explanation: 'Trzy podstawowe funkcje pieniądza to: (1) środek wymiany, (2) miernik wartości, (3) środek tezauryzacji. Pieniądz sam w sobie nie generuje zysku.'
  },
  {
    id: 'exam-t15',
    question: 'Co to jest podaż pieniądza (masa monetarna)?',
    type: 'single',
    options: [
      'Tylko gotówka w obiegu',
      'Tylko depozyty bankowe',
      'Gotówka + depozyty na żądanie (rachunki bieżące)',
      'Wyłącznie pieniądze wydrukowane przez bank centralny'
    ],
    correctAnswers: [2],
    explanation: 'Podaż pieniądza M1 = gotówka w obiegu + depozyty na żądanie. Obejmuje wszystkie środki płatnicze łatwo dostępne do transakcji.'
  },
  {
    id: 'exam-t16',
    question: 'Bank centralny może zwiększyć podaż pieniądza poprzez: (zaznacz wszystkie)',
    type: 'multiple',
    options: [
      'Obniżenie stopy rezerw obowiązkowych',
      'Obniżenie stopy procentowej',
      'Skup obligacji (operacje otwartego rynku)',
      'Podwyżkę stopy rezerw obowiązkowych'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Ekspansywna polityka monetarna: ↓ rezerwy obowiązkowe, ↓ stopa procentowa, skup obligacji. Wszystkie te działania zwiększają podaż pieniądza.'
  },
  {
    id: 'exam-t17',
    question: 'Co to są rezerwy obowiązkowe?',
    type: 'single',
    options: [
      'Pieniądze, które banki muszą pożyczyć firmom',
      'Część depozytów, którą banki muszą zatrzymać (nie mogą pożyczyć)',
      'Oszczędności gospodarstw domowych',
      'Zyski banków komercyjnych'
    ],
    correctAnswers: [1],
    explanation: 'Rezerwy obowiązkowe to procent depozytów, który banki muszą zatrzymać w sejfie lub w banku centralnym. Reszty mogą udzielić jako kredytów.'
  },
  {
    id: 'exam-t18',
    question: 'Mnożnik pieniężny pokazuje:',
    type: 'single',
    options: [
      'Ile razy wzrośnie inflacja',
      'O ile maksymalnie wzrośnie podaż pieniądza przy danym wzroście bazy monetarnej',
      'Zyski banków komercyjnych',
      'Stosunek kredytów do depozytów'
    ],
    correctAnswers: [1],
    explanation: 'Mnożnik pieniężny m = 1/r pokazuje, ile razy baza monetarna może być "pomnożona" w systemie bankowym. Im niższe rezerwy, tym wyższy mnożnik.'
  }
];

// Wybrane kluczowe zadania obliczeniowe
const calculationQuestions: CalculationQuestion[] = [
  calculationExamples[0],  // Wartość dodana - chleb
  calculationExamples[1],  // PKB realny
  calculationExamples[2],  // Deflator PKB
  calculationExamples[3],  // Funkcja konsumpcji
  calculationExamples[4],  // Oszczędności
  calculationExamples[5],  // MPC
  calculationExamples[6],  // Mnożnik
  calculationExamples[7],  // Efekt mnożnika na PKB
  calculationExamples[8],  // Równowaga Y=C+I
  calculationExamples[9],  // Równowaga z państwem
  calculationExamples[10], // Polityka fiskalna
  calculationExamples[11]  // Kreacja pieniądza - bank
];

// Połączona pula pytań egzaminacyjnych
export const examQuestions: (QuizQuestion | CalculationQuestion)[] = [
  ...theoryQuestions,
  ...calculationQuestions
];

// Funkcja do losowego wyboru pytań
export function getRandomExamQuestions(
  count: number,
  includeTheory: boolean = true,
  includeCalculations: boolean = true
): (QuizQuestion | CalculationQuestion)[] {
  let pool: (QuizQuestion | CalculationQuestion)[] = [];

  if (includeTheory) {
    pool = [...pool, ...theoryQuestions];
  }
  if (includeCalculations) {
    pool = [...pool, ...calculationQuestions];
  }

  // Losowe mieszanie (Fisher-Yates shuffle)
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Funkcja do analizy słabych obszarów na podstawie błędnych odpowiedzi
export function analyzeWeakAreas(answeredQuestions: { questionId: string; correct: boolean }[]): string[] {
  const weakAreas: Set<string> = new Set();

  // Mapa ID pytań na tematy/rozdziały
  const topicMap: Record<string, string> = {
    // Rozdział 20: Wprowadzenie do makroekonomii
    'exam-t1': 'Rozdział 20: Wprowadzenie do makroekonomii',
    'exam-t2': 'Rozdział 20: Wprowadzenie do makroekonomii',
    'exam-t3': 'Rozdział 20: Wprowadzenie do makroekonomii',
    'exam-t4': 'Rozdział 20: Wprowadzenie do makroekonomii',
    'exam-t5': 'Rozdział 20: Wprowadzenie do makroekonomii',

    // Rozdział 21: Determinanty dochodu narodowego
    'exam-t6': 'Rozdział 21: Determinanty dochodu narodowego',
    'exam-t7': 'Rozdział 21: Determinanty dochodu narodowego',
    'exam-t8': 'Rozdział 21: Determinanty dochodu narodowego',
    'exam-t9': 'Rozdział 21: Determinanty dochodu narodowego',
    'exam-t10': 'Rozdział 21: Determinanty dochodu narodowego',

    // Rozdział 22: Polityka fiskalna
    'exam-t11': 'Rozdział 22: Polityka fiskalna',
    'exam-t12': 'Rozdział 22: Polityka fiskalna',
    'exam-t13': 'Rozdział 22: Polityka fiskalna',

    // Rozdziały 23-24: Pieniądz i polityka monetarna
    'exam-t14': 'Rozdziały 23-24: Pieniądz i polityka monetarna',
    'exam-t15': 'Rozdziały 23-24: Pieniądz i polityka monetarna',
    'exam-t16': 'Rozdziały 23-24: Pieniądz i polityka monetarna',
    'exam-t17': 'Rozdziały 23-24: Pieniądz i polityka monetarna',
    'exam-t18': 'Rozdziały 23-24: Pieniądz i polityka monetarna',

    // Obliczenia: PKB i wartość dodana
    'calc-1': 'Obliczenia: PKB i wartość dodana',
    'calc-2': 'Obliczenia: PKB i wartość dodana',
    'calc-3': 'Obliczenia: PKB i wartość dodana',

    // Obliczenia: Funkcja konsumpcji i oszczędności
    'calc-4': 'Obliczenia: Funkcja konsumpcji i oszczędności',
    'calc-5': 'Obliczenia: Funkcja konsumpcji i oszczędności',
    'calc-6': 'Obliczenia: Funkcja konsumpcji i oszczędności',

    // Obliczenia: Mnożnik keynesowski
    'calc-7': 'Obliczenia: Mnożnik keynesowski',
    'calc-8': 'Obliczenia: Mnożnik keynesowski',

    // Obliczenia: Równowaga i polityka fiskalna
    'calc-9': 'Obliczenia: Równowaga i polityka fiskalna',
    'calc-10': 'Obliczenia: Równowaga i polityka fiskalna',
    'calc-11': 'Obliczenia: Równowaga i polityka fiskalna',

    // Obliczenia: Kreacja pieniądza
    'calc-12': 'Obliczenia: Kreacja pieniądza',
    'calc-13': 'Obliczenia: Kreacja pieniądza'
  };

  answeredQuestions.forEach(({ questionId, correct }) => {
    if (!correct) {
      const topic = topicMap[questionId];
      if (topic) {
        weakAreas.add(topic);
      }
    }
  });

  return Array.from(weakAreas);
}
