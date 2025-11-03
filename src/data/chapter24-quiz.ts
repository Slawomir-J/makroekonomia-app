import type { QuizQuestion } from '../types';

export const chapter24Questions: QuizQuestion[] = [
  {
    id: 'ch24-q1',
    question: 'Które z poniższych są funkcjami banku centralnego? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Emisja pieniądza (drukowanie banknotów)',
      'Udzielanie kredytów hipotecznych obywatelom',
      'Prowadzenie polityki pieniężnej (kontrola stóp procentowych)',
      'Pożyczanie pieniędzy bankom komercyjnym (bank banków)',
      'Zarządzanie rezerwami walutowymi'
    ],
    correctAnswers: [0, 2, 3, 4],
    explanation: 'Bank centralny: (1) emituje pieniądz, (3) prowadzi politykę pieniężną, (4) jest bankiem dla banków komercyjnych, (5) zarządza rezerwami walutowymi. FAŁSZ: BC nie obsługuje zwykłych obywateli - kredyty hipoteczne udzielają banki komercyjne.'
  },
  {
    id: 'ch24-q2',
    question: 'Głównym celem większości współczesnych banków centralnych jest:',
    type: 'single',
    options: [
      'Maksymalizacja wzrostu PKB',
      'Stabilność cen (kontrola inflacji)',
      'Zwiększanie zatrudnienia',
      'Wspieranie budżetu rządu'
    ],
    correctAnswers: [1],
    explanation: 'Głównym celem większości BC (EBC, NBP, Bank of England) jest stabilność cen, czyli utrzymywanie inflacji na niskim i stabilnym poziomie (zazwyczaj około 2%). Fed w USA ma podwójny mandat: stabilność cen + pełne zatrudnienie, ale inne cele (wzrost PKB, budżet) są wtórne.'
  },
  {
    id: 'ch24-q3',
    question: 'Bank centralny chce OBNIŻYĆ inflację. Jakie działania powinien podjąć?',
    type: 'multiple',
    options: [
      'Podwyższyć stopę procentową',
      'Obniżyć stopę procentową',
      'Sprzedać obligacje (operacje otwartego rynku)',
      'Kupić obligacje (operacje otwartego rynku)',
      'Podwyższyć stopę rezerw obowiązkowych'
    ],
    correctAnswers: [0, 2, 4],
    explanation: 'Aby obniżyć inflację, BC stosuje politykę RESTRYKCYJNĄ: (1) Podnosi stopę procentową → droższe kredyty → mniej wydatków → niższy AD → niższa inflacja. (3) Sprzedaje obligacje → banki mają mniej pieniędzy → mniej kredytów. (5) Podnosi stopę rezerw → niższy mnożnik kreacji pieniądza. Obniżka stóp i skup obligacji to polityka EKSPANSYWNA - zwiększa inflację!'
  },
  {
    id: 'ch24-q4',
    question: 'Co to są operacje otwartego rynku (open market operations)?',
    type: 'single',
    options: [
      'Zmiana stopy procentowej przez bank centralny',
      'Kupno lub sprzedaż obligacji przez bank centralny',
      'Udzielanie kredytów przedsiębiorstwom',
      'Zmiana stopy rezerw obowiązkowych'
    ],
    correctAnswers: [1],
    explanation: 'Operacje otwartego rynku to kupno lub sprzedaż obligacji (zwykle skarbowych) przez bank centralny. Gdy BC kupuje obligacje od banków, banki dostają pieniądze → więcej rezerw → mogą więcej pożyczać → wzrost podaży pieniądza. Gdy BC sprzedaje obligacje, działa odwrotnie.'
  },
  {
    id: 'ch24-q5',
    question: 'Bank centralny KUPUJE obligacje za 100 miliardów zł. Stopa rezerw wynosi 10%. O ile MAKSYMALNIE może wzrosnąć podaż pieniądza w gospodarce?',
    type: 'single',
    options: [
      '100 mld zł',
      '110 mld zł',
      '1000 mld zł (1 bilion zł)',
      '10 mld zł'
    ],
    correctAnswers: [2],
    explanation: 'Mnożnik kreacji pieniądza: m = 1 / r = 1 / 0,1 = 10. BC wstrzykuje 100 mld zł bazy monetarnej. Maksymalny wzrost podaży = 100 mld × 10 = 1000 mld zł (1 bilion). W rzeczywistości może być mniej (ludzie trzymają gotówkę, banki mają rezerwy nadwyżkowe), ale teoretycznie 1 bilion.'
  },
  {
    id: 'ch24-q6',
    question: 'Jakie były działania banków centralnych podczas pandemii COVID-19 (2020)?',
    type: 'multiple',
    options: [
      'Obniżenie stóp procentowych do historycznie niskich poziomów (często do ~0%)',
      'Podwyższenie stóp procentowych do walki z inflacją',
      'Masowy skup obligacji (Quantitative Easing)',
      'Sprzedaż obligacji dla ograniczenia podaży pieniądza',
      'Utrzymanie stóp bez zmian'
    ],
    correctAnswers: [0, 2],
    explanation: 'W 2020 podczas COVID-19 banki centralne stosowały ekstremalnie EKSPANSYWNĄ politykę: (1) Obniżyły stopy do ~0% (Fed, EBC, NBP). (3) Masowo skupowały obligacje (QE) - Fed za ~4,5 bln USD, EBC za 1,85 bln EUR. Celem było ratowanie gospodarki przed katastrofą. To zadziałało, ale później przyczyniło się do inflacji 2022-2023.'
  },
  {
    id: 'ch24-q7',
    question: 'Mechanizm transmisji polityki pieniężnej to:',
    type: 'single',
    options: [
      'Proces, przez który BC drukuje nowe banknoty',
      'Łańcuch zdarzeń, przez który decyzje BC wpływają na realną gospodarkę',
      'System płatności między bankami',
      'Emisja obligacji skarbowych'
    ],
    correctAnswers: [1],
    explanation: 'Mechanizm transmisji to łańcuch: BC zmienia stopę → banki zmieniają oprocentowanie kredytów → gospodarstwa i firmy zmieniają wydatki (C, I) → zmienia się AD → zmienia się PKB i inflacja. Ten proces trwa 12-18 miesięcy, dlatego BC musi działać proaktywnie.'
  },
  {
    id: 'ch24-q8',
    question: 'Równanie Fishera (stopa realna) to:',
    type: 'single',
    options: [
      'r = i + π',
      'r = i - π',
      'r = i × π',
      'r = π - i'
    ],
    correctAnswers: [1],
    explanation: 'Równanie Fishera: r = i - π, gdzie r to realna stopa procentowa, i to nominalna stopa, π to inflacja. Przykład: Lokata 5%, inflacja 2% → realna stopa = 5% - 2% = 3%. To ile NAPRAWDĘ zarabiasz po uwzględnieniu inflacji.'
  },
  {
    id: 'ch24-q9',
    question: 'Nominalna stopa procentowa wynosi 4%, inflacja 7%. Jaka jest realna stopa procentowa?',
    type: 'single',
    options: [
      '+3%',
      '-3%',
      '+11%',
      '0%'
    ],
    correctAnswers: [1],
    explanation: 'Realna stopa: r = i - π = 4% - 7% = -3%. Ujemna! Mimo że nominalnie zarabiasz 4%, inflacja "zjada" 7%, więc tracisz 3% wartości oszczędności. Tak było w Polsce/UE w 2022 (wysoka inflacja, niskie oprocentowanie lokat).'
  },
  {
    id: 'ch24-q10',
    question: 'Bank centralny podnosi stopę procentową z 2% do 6%. Co się stanie w gospodarce? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Kredyty staną się droższe',
      'Inwestycje przedsiębiorstw prawdopodobnie spadną',
      'Konsumpcja prawdopodobnie wzrośnie',
      'Inflacja prawdopodobnie spadnie (w dłuższym okresie)',
      'PKB prawdopodobnie wzrośnie szybciej'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Podwyżka stóp (polityka restrykcyjna): (1) Kredyty drożeją - oprocentowanie rośnie. (2) Inwestycje spadają - mniej projektów się opłaca przy droższym kredycie. (4) Inflacja spada - niższy AD → mniejsza presja na ceny. FAŁSZ: Konsumpcja i PKB raczej SPADNĄ (droższe kredyty hipoteczne, wyższe raty).'
  },
  {
    id: 'ch24-q11',
    question: 'Ile czasu zwykle mija od decyzji banku centralnego do pełnego wpływu na PKB i inflację?',
    type: 'single',
    options: [
      '1-2 tygodnie',
      '1-3 miesiące',
      '12-18 miesięcy',
      '5-10 lat'
    ],
    correctAnswers: [2],
    explanation: 'Mechanizm transmisji działa z DŁUGIM opóźnieniem - pełny wpływ na PKB i inflację pojawia się dopiero po 12-18 miesiącach. Dlatego bank centralny musi działać proaktywnie, przewidując przyszłą inflację, a nie reagując na bieżącą. Nie może czekać aż inflacja już jest wysoka - będzie za późno!'
  },
  {
    id: 'ch24-q12',
    question: 'Które stwierdzenia o polityce pieniężnej są prawdziwe? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Bank centralny ma całkowitą kontrolę nad gospodarką',
      'Polityka ekspansywna (niskie stopy) pomaga w recesji, ale może prowadzić do inflacji',
      'Polityka restrykcyjna (wysokie stopy) obniża inflację, ale może spowodować recesję',
      'Niezależność banku centralnego od rządu jest ważna dla skutecznej polityki',
      'Quantitative Easing (QE) to skup obligacji przez BC - forma ekstremalnej polityki ekspansywnej'
    ],
    correctAnswers: [1, 2, 3, 4],
    explanation: 'Prawda: (2) Ekspansywna pomaga w recesji, ale ryzyko inflacji. (3) Restrykcyjna obniża inflację, ale ryzyko recesji. (4) Niezależność BC pozwala podejmować niepopularne, ale konieczne decyzje. (5) QE to masowy skup obligacji - ekstremalna forma ekspansji. FAŁSZ: (1) BC ma DUŻY wpływ, ale nie kontroluje wszystkiego - są też polityka fiskalna, ceny ropy, kursy walutowe, sytuacja globalna, oczekiwania.'
  }
];
