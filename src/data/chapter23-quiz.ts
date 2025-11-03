import type { QuizQuestion } from '../types';

export const chapter23Questions: QuizQuestion[] = [
  {
    id: 'ch23-q1',
    question: 'Które z poniższych są funkcjami pieniądza? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Środek wymiany',
      'Miernik wartości',
      'Środek tezauryzacji (przechowywania wartości)',
      'Źródło inflacji',
      'Narzędzie produkcji'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Pieniądz pełni trzy podstawowe funkcje: (1) Środek wymiany - ułatwia transakcje, (2) Miernik wartości - pozwala porównywać ceny, (3) Środek tezauryzacji - zachowuje wartość w czasie. Inflacja i produkcja nie są funkcjami pieniądza.'
  },
  {
    id: 'ch23-q2',
    question: 'Co to jest M0 (baza monetarna)?',
    type: 'single',
    options: [
      'Gotówka w obiegu + depozyty na żądanie',
      'Gotówka w obiegu + rezerwy banków w banku centralnym',
      'Wszystkie depozyty w bankach komercyjnych',
      'Całkowita wartość kredytów w gospodarce'
    ],
    correctAnswers: [1],
    explanation: 'M0 (baza monetarna) to najwęższa miara pieniądza, obejmująca gotówkę w obiegu oraz rezerwy banków komercyjnych trzymane w banku centralnym. To pieniądz bezpośrednio wyemitowany przez bank centralny.'
  },
  {
    id: 'ch23-q3',
    question: 'Które agregaty pieniężne są wymienione w poprawnej kolejności od najwęższego do najszerszego?',
    type: 'single',
    options: [
      'M3 < M2 < M1 < M0',
      'M0 < M1 < M2 < M3',
      'M1 < M0 < M3 < M2',
      'M0 < M2 < M1 < M3'
    ],
    correctAnswers: [1],
    explanation: 'Poprawna kolejność agregatów pieniężnych od najwęższego do najszerszego to: M0 (baza monetarna) < M1 (gotówka + konta bieżące) < M2 (M1 + lokaty krótkoterminowe) < M3 (M2 + inne instrumenty). Każdy kolejny agregat jest szerszy i obejmuje mniej płynne aktywa.'
  },
  {
    id: 'ch23-q4',
    question: 'Co wchodzi w skład M1?',
    type: 'multiple',
    options: [
      'Gotówka w obiegu (banknoty i monety)',
      'Depozyty na żądanie (konta bieżące)',
      'Lokaty terminowe 2-letnie',
      'Obligacje korporacyjne',
      'Konto oszczędnościowe, z którego można od razu przelać pieniądze'
    ],
    correctAnswers: [0, 1, 4],
    explanation: 'M1 to pieniądz w wąskim rozumieniu - obejmuje gotówkę oraz depozyty, z których można natychmiast płacić (konta bieżące, niektóre konta oszczędnościowe). Lokaty terminowe należą do M2, a obligacje do M3.'
  },
  {
    id: 'ch23-q5',
    question: 'Jak banki komercyjne "tworzą" pieniądz?',
    type: 'single',
    options: [
      'Drukują własne banknoty',
      'Udzielają kredytów, tworząc nowe depozyty w systemie bankowym',
      'Zamieniają stare banknoty na nowe',
      'Kupują pieniądze od banku centralnego'
    ],
    correctAnswers: [1],
    explanation: 'Banki komercyjne tworzą pieniądz przez kreację depozytów - gdy bank udziela kredytu, zapisuje na koncie kredytobiorcy kwotę kredytu, tworząc tym samym nowy pieniądz w gospodarce. To proces znany jako kreacja pieniądza kredytowego.'
  },
  {
    id: 'ch23-q6',
    question: 'Stopa rezerw obowiązkowych wynosi 10%. Bank otrzymuje depozyt 5000 zł. Ile maksymalnie może pożyczyć?',
    type: 'single',
    options: [
      '500 zł',
      '4500 zł',
      '5000 zł',
      '50 000 zł'
    ],
    correctAnswers: [1],
    explanation: 'Bank musi zatrzymać 10% depozytu jako rezerwy: 10% × 5000 = 500 zł. Resztę może pożyczyć: 5000 - 500 = 4500 zł. Alternatywnie: 90% × 5000 = 4500 zł.'
  },
  {
    id: 'ch23-q7',
    question: 'Jak oblicza się mnożnik kreacji pieniądza?',
    type: 'single',
    options: [
      'm = r (stopa rezerw)',
      'm = 1 / r',
      'm = 1 - r',
      'm = r / (1 - r)'
    ],
    correctAnswers: [1],
    explanation: 'Mnożnik kreacji pieniądza to m = 1 / r, gdzie r to stopa rezerw obowiązkowych (jako ułamek). Na przykład, jeśli r = 0,1 (10%), to m = 1 / 0,1 = 10.'
  },
  {
    id: 'ch23-q8',
    question: 'Stopa rezerw obowiązkowych wynosi 5%. Jaki jest mnożnik kreacji pieniądza?',
    type: 'single',
    options: [
      '5',
      '10',
      '20',
      '50'
    ],
    correctAnswers: [2],
    explanation: 'Mnożnik m = 1 / r = 1 / 0,05 = 20. Oznacza to, że z każdej złotówki bazy monetarnej może powstać 20 złotych pieniądza w całym systemie bankowym.'
  },
  {
    id: 'ch23-q9',
    question: 'Bank centralny zwiększa stopę rezerw obowiązkowych z 10% do 20%. Co się stanie z podażą pieniądza?',
    type: 'single',
    options: [
      'Podaż pieniądza wzrośnie, bo banki będą miały więcej rezerw',
      'Podaż pieniądza spadnie, bo mnożnik się zmniejszy',
      'Podaż pieniądza nie zmieni się',
      'Podaż pieniądza podwoi się'
    ],
    correctAnswers: [1],
    explanation: 'Gdy stopa rezerw rośnie z 10% do 20%, mnożnik spada z m = 1/0,1 = 10 do m = 1/0,2 = 5. Niższy mnożnik oznacza, że banki mogą pożyczać mniej → mniej kreacji pieniądza → podaż pieniądza spada.'
  },
  {
    id: 'ch23-q10',
    question: 'Depozyt początkowy wynosi 2000 zł, stopa rezerw 20%. Jaka będzie całkowita podaż pieniądza w systemie bankowym?',
    type: 'single',
    options: [
      '2000 zł',
      '4000 zł',
      '10 000 zł',
      '40 000 zł'
    ],
    correctAnswers: [2],
    explanation: 'Mnożnik m = 1 / 0,2 = 5. Całkowita podaż = depozyt × mnożnik = 2000 × 5 = 10 000 zł. Z początkowego depozytu 2000 zł powstaje 10 000 zł pieniądza w gospodarce.'
  },
  {
    id: 'ch23-q11',
    question: 'Co się stało z bazą monetarną (M0) podczas pandemii COVID-19 (2020-2021)?',
    type: 'single',
    options: [
      'Znacznie spadła, bo ludzie przestali używać gotówki',
      'Nie zmieniła się',
      'Znacznie wzrosła przez operacje banków centralnych (quantitative easing)',
      'Wzrosła nieznacznie, o około 5%'
    ],
    correctAnswers: [2],
    explanation: 'Podczas pandemii COVID-19 banki centralne (Fed, EBC, NBP) masowo zwiększyły bazę monetarną przez skup obligacji i inne operacje (quantitative easing). Na przykład, baza monetarna Fed niemal się podwoiła (z ~3,4 bln USD do ~6,5 bln USD). Celem było ratowanie gospodarki, ale przyczyniło się to do inflacji 2022-2023.'
  },
  {
    id: 'ch23-q12',
    question: 'Które stwierdzenia o kreacji pieniądza są prawdziwe? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Im niższa stopa rezerw, tym więcej pieniądza powstaje w gospodarce',
      'Bank centralny bezpośrednio tworzy całą podaż pieniądza w gospodarce',
      'Kreacja pieniądza przez banki komercyjne może prowadzić do inflacji, jeśli jest zbyt duża',
      'Mnożnik kreacji pieniądza w rzeczywistości jest niższy niż teoretyczny m = 1/r',
      'Banki mogą tworzyć nieskończoną ilość pieniądza bez ograniczeń'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Prawda: (1) Niższa r → wyższy mnożnik → więcej pieniądza. (3) Nadmierna kreacja pieniądza prowadzi do inflacji. (4) W rzeczywistości mnożnik jest niższy, bo ludzie trzymają gotówkę, banki mają rezerwy nadwyżkowe. Fałsz: (2) BC tworzy tylko bazę (M0), reszta to kreacja banków komercyjnych. (5) Banki są ograniczone przez stopę rezerw, popyt na kredyty, regulacje kapitałowe.'
  }
];
