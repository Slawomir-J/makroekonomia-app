import type { QuizQuestion } from '../types';

export const chapter20Quiz: QuizQuestion[] = [
  {
    id: 'ch20-q1',
    question: 'Czym zajmuje się makroekonomia?',
    type: 'single',
    options: [
      'Analizą pojedynczych firm i konsumentów',
      'Gospodarką jako całością - inflacją, bezrobociem i wzrostem',
      'Tylko cenami na poszczególnych rynkach',
      'Wyłącznie polityką monetarną banku centralnego'
    ],
    correctAnswers: [1],
    explanation: 'Makroekonomia to nauka o gospodarce jako całości. Zajmuje się agregatami takimi jak PKB, inflacja, bezrobocie i wzrost gospodarczy, podczas gdy mikroekonomia koncentruje się na jednostkowych rynkach.'
  },
  {
    id: 'ch20-q2',
    question: 'Produkt Krajowy Brutto (PKB) mierzy:',
    type: 'single',
    options: [
      'Tylko dochody gospodarstw domowych',
      'Wartość wszystkich transakcji w gospodarce (łącznie z pośrednimi)',
      'Wartość produkcji wytworzonej przez czynniki na terytorium kraju',
      'Wyłącznie eksport kraju'
    ],
    correctAnswers: [2],
    explanation: 'PKB mierzy wartość produkcji wytworzonej przez czynniki wytwórcze zlokalizowane na terytorium danego kraju. Liczymy tylko dobra finalne, żeby uniknąć podwójnego liczenia dóbr pośrednich.'
  },
  {
    id: 'ch20-q3',
    question: 'Które stwierdzenia o PKB są prawdziwe? (zaznacz wszystkie)',
    type: 'multiple',
    options: [
      'Można go obliczyć trzema metodami: produkcyjną, dochodową i wydatkową',
      'Wszystkie trzy metody obliczania dają ten sam wynik',
      'PKB uwzględnia tylko dobra finalne, nie pośrednie',
      'PKB mierzy wyłącznie produkcję eksportową'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'PKB można obliczyć trzema metodami i wszystkie dają identyczny wynik. Liczymy tylko dobra finalne (aby uniknąć podwójnego liczenia). PKB obejmuje całą produkcję krajową, nie tylko eksport.'
  },
  {
    id: 'ch20-q4',
    question: 'Wartość dodana to:',
    type: 'single',
    options: [
      'Całkowita wartość sprzedaży przedsiębiorstwa',
      'Różnica między wartością produkcji a kosztami dóbr pośrednich',
      'Suma wszystkich kosztów produkcji',
      'To samo co zysk przedsiębiorstwa'
    ],
    correctAnswers: [1],
    explanation: 'Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich. To przyrost wartości dóbr w wyniku danego procesu produkcji. Suma wartości dodanych wszystkich przedsiębiorstw = PKB.'
  },
  {
    id: 'ch20-q5',
    question: 'Stal zakupiona przez producenta samochodów jest:',
    type: 'single',
    options: [
      'Dobrem finalnym',
      'Dobrem pośrednim',
      'Dobrem kapitałowym',
      'Nie jest liczona w PKB'
    ],
    correctAnswers: [1],
    explanation: 'Stal użyta do produkcji samochodów jest dobrem pośrednim - zostaje zużyta w procesie produkcji. Dobrem finalnym jest dopiero samochód. Gdybyśmy liczyli i stal, i samochód, policzylibyśmy stal dwa razy (podwójne liczenie).'
  },
  {
    id: 'ch20-q6',
    question: 'Maszyna zakupiona przez firmę produkującą samochody jest:',
    type: 'single',
    options: [
      'Dobrem pośrednim (zużywa się w produkcji)',
      'Dobrem finalnym (dobrem kapitałowym/inwestycyjnym)',
      'Nie jest liczona w PKB',
      'Liczy się jako konsumpcja'
    ],
    correctAnswers: [1],
    explanation: 'Maszyna zakupiona przez przedsiębiorstwo to dobro finalne - konkretnie dobro kapitałowe (inwestycyjne). Nie zużywa się jednorazowo, służy do produkcji przez wiele lat. Zalicza się do inwestycji (I) w PKB.'
  },
  {
    id: 'ch20-q7',
    question: 'Producent stali sprzedaje stal za 4000 £, z czego 1000 £ idzie do producenta maszyn, a 3000 £ do producenta samochodów. Producent maszyn sprzedaje maszynę za 2000 £. Jaka jest wartość dodana producenta maszyn?',
    type: 'single',
    options: [
      '2000 £',
      '3000 £',
      '1000 £',
      '4000 £'
    ],
    correctAnswers: [2],
    explanation: 'Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich = 2000 £ - 1000 £ = 1000 £. Producent maszyn kupił stal za 1000 £, przerobił ją i sprzedał maszynę za 2000 £, dodając 1000 £ wartości.'
  },
  {
    id: 'ch20-q8',
    question: 'Roczna stopa inflacji wynosi 8%, co oznacza że:',
    type: 'single',
    options: [
      'Wszystkie ceny wzrosły dokładnie o 8%',
      'Przeciętny poziom cen wzrósł o 8% w ciągu roku',
      'PKB wzrósł o 8%',
      'Bezrobocie wzrosło o 8%'
    ],
    correctAnswers: [1],
    explanation: 'Stopa inflacji 8% oznacza, że przeciętny poziom cen (mierzony np. wskaźnikiem CPI) wzrósł o 8% w ciągu roku. Poszczególne ceny mogą rosnąć w różnym tempie - inflacja to średnia.'
  },
  {
    id: 'ch20-q9',
    question: 'Stopa bezrobocia oblicza się jako:',
    type: 'single',
    options: [
      '(Bezrobotni / Całkowita populacja) × 100%',
      '(Bezrobotni / Siła robocza) × 100%',
      '(Pracujący / Siła robocza) × 100%',
      '(Bezrobotni / Pracujący) × 100%'
    ],
    correctAnswers: [1],
    explanation: 'Stopa bezrobocia = (Liczba bezrobotnych / Siła robocza) × 100%, gdzie siła robocza = pracujący + bezrobotni poszukujący pracy. Nie liczymy osób nieposzukujących pracy (np. studentów, emerytów).'
  },
  {
    id: 'ch20-q10',
    question: 'Nominalny PKB to:',
    type: 'single',
    options: [
      'PKB w cenach stałych (z roku bazowego)',
      'PKB w cenach bieżących',
      'PKB minus inflacja',
      'PKB per capita'
    ],
    correctAnswers: [1],
    explanation: 'Nominalny PKB mierzy wartość produkcji w cenach bieżących (aktualnych). Realny PKB to PKB w cenach stałych z roku bazowego - pozwala oddzielić wzrost produkcji od inflacji.'
  },
  {
    id: 'ch20-q11',
    question: 'Gospodarka produkuje 100 samochodów po 10 000 £ w 2020 r. W 2021 r. produkuje 100 samochodów po 11 000 £. Nominalny PKB wzrósł o 10%. Co możemy powiedzieć o realnym PKB?',
    type: 'single',
    options: [
      'Realny PKB również wzrósł o 10%',
      'Realny PKB nie zmienił się (0% wzrostu)',
      'Realny PKB spadł o 10%',
      'Nie można określić bez dodatkowych danych'
    ],
    correctAnswers: [1],
    explanation: 'Realny PKB (w cenach 2020) = 100 × 10 000 £ = 1 000 000 £ w obu latach. Produkcja fizyczna nie zmieniła się (100 aut), wzrósł tylko nominalny PKB przez wzrost cen (inflację 10%). Realny PKB = 0% wzrostu.'
  },
  {
    id: 'ch20-q12',
    question: 'W ruchu okrężnym gospodarki (bez państwa i handlu zagranicznego), które stwierdzenia są prawdziwe? (zaznacz wszystkie)',
    type: 'multiple',
    options: [
      'Gospodarstwa domowe dostarczają usługi czynników produkcji przedsiębiorstwom',
      'Przedsiębiorstwa płacą gospodarstwom domowym za czynniki (płace, zyski)',
      'Gospodarstwa domowe wydają dochody na dobra i usługi od przedsiębiorstw',
      'Wartość produkcji = Dochody czynników = Wydatki'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'Wszystkie stwierdzenia są prawdziwe! Ruch okrężny pokazuje przepływy między gospodarstwami domowymi a przedsiębiorstwami. Wartość produkcji musi równać się dochodom czynników i wydatkom - to fundamentalna tożsamość rachunku narodowego.'
  }
];
