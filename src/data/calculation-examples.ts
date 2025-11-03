import type { CalculationQuestion } from '../types';

export const calculationExamples: CalculationQuestion[] = [
  // ===== PKB i WARTOŚĆ DODANA =====
  {
    id: 'calc-1',
    question: 'Rolnik sprzedaje pszenicę młynarzowi za 200 zł. Młynarz sprzedaje mąkę piekarzowi za 350 zł. Piekarz sprzedaje chleb konsumentom za 600 zł. Oblicz PKB powstałe w tym łańcuchu produkcyjnym.',
    type: 'calculation',
    calculationType: 'value-added',
    givens: {
      'Sprzedaż pszenicy': '200 zł',
      'Sprzedaż mąki': '350 zł',
      'Sprzedaż chleba': '600 zł'
    },
    steps: [
      {
        description: 'Metoda 1: Wartość dobra finalnego',
        calculation: 'PKB = wartość chleba (dobra finalnego)',
        result: '600 zł'
      },
      {
        description: 'Metoda 2: Suma wartości dodanych',
        formula: 'Wartość dodana = Wartość produkcji - Koszty dóbr pośrednich'
      },
      {
        description: 'Wartość dodana rolnika',
        calculation: '200 - 0',
        result: '200 zł'
      },
      {
        description: 'Wartość dodana młynarza',
        calculation: '350 - 200',
        result: '150 zł'
      },
      {
        description: 'Wartość dodana piekarza',
        calculation: '600 - 350',
        result: '250 zł'
      },
      {
        description: 'Suma wartości dodanych',
        calculation: '200 + 150 + 250',
        result: '600 zł'
      }
    ],
    options: ['500 zł', '600 zł', '1150 zł', '400 zł'],
    correctAnswers: [1],
    finalAnswer: 600,
    unit: 'zł',
    explanation: 'PKB można obliczyć na dwa sposoby: (1) wartość dobra finalnego = 600 zł lub (2) suma wartości dodanych wszystkich firm = 200 + 150 + 250 = 600 zł. Obie metody dają ten sam wynik!'
  },

  {
    id: 'calc-2',
    question: 'W 2023 r. gospodarka wytworzyła 1000 telewizorów po 2000 zł każdy. W 2024 r. wytworzono 1100 telewizorów po 2200 zł. Przyjmując 2023 jako rok bazowy, oblicz realny PKB w 2024 r.',
    type: 'calculation',
    calculationType: 'gdp',
    givens: {
      'Produkcja 2023': '1000 szt.',
      'Cena 2023': '2000 zł',
      'Produkcja 2024': '1100 szt.',
      'Cena 2024': '2200 zł',
      'Rok bazowy': '2023'
    },
    steps: [
      {
        description: 'Nominalny PKB w 2023 r. (rok bazowy)',
        calculation: '1000 × 2000',
        result: '2 000 000 zł'
      },
      {
        description: 'Nominalny PKB w 2024 r. (w cenach bieżących)',
        calculation: '1100 × 2200',
        result: '2 420 000 zł'
      },
      {
        description: 'Realny PKB w 2024 r. (w cenach 2023)',
        formula: 'Realny PKB = Produkcja 2024 × Ceny roku bazowego',
        calculation: '1100 × 2000',
        result: '2 200 000 zł'
      }
    ],
    options: ['2 000 000 zł', '2 200 000 zł', '2 420 000 zł', '2 100 000 zł'],
    correctAnswers: [1],
    finalAnswer: 2200000,
    unit: 'zł',
    explanation: 'Realny PKB liczymy w cenach stałych (z roku bazowego 2023). Realny PKB 2024 = 1100 szt. × 2000 zł = 2 200 000 zł. Wzrósł on o 10% (z 2 mln do 2,2 mln), co odzwierciedla rzeczywisty wzrost produkcji.'
  },

  {
    id: 'calc-3',
    question: 'Nominalny PKB wzrósł z 100 mld zł do 115 mld zł. Deflator PKB wzrósł ze 100 do 110. Oblicz realny wzrost PKB (w %).',
    type: 'calculation',
    calculationType: 'gdp',
    givens: {
      'PKB nominalny początkowy': '100 mld zł',
      'PKB nominalny końcowy': '115 mld zł',
      'Deflator początkowy': '100',
      'Deflator końcowy': '110'
    },
    steps: [
      {
        description: 'Oblicz realny PKB początkowy',
        formula: 'Realny PKB = (Nominalny PKB / Deflator) × 100',
        calculation: '(100 / 100) × 100',
        result: '100 mld zł'
      },
      {
        description: 'Oblicz realny PKB końcowy',
        calculation: '(115 / 110) × 100',
        result: '104,55 mld zł'
      },
      {
        description: 'Oblicz procentowy wzrost realnego PKB',
        formula: 'Wzrost = [(PKB końcowy - PKB początkowy) / PKB początkowy] × 100%',
        calculation: '[(104,55 - 100) / 100] × 100%',
        result: '4,55%'
      }
    ],
    options: ['15%', '10%', '4,55%', '5%'],
    correctAnswers: [2],
    finalAnswer: 4.55,
    unit: '%',
    explanation: 'Realny wzrost PKB wynosi około 4,55%. Nominalny PKB wzrósł o 15%, ale część tego wzrostu (10%) to inflacja. Rzeczywisty wzrost produkcji = 15% - 10% ≈ 4,55%.'
  },

  // ===== FUNKCJA KONSUMPCJI I OSZCZĘDNOŚCI =====
  {
    id: 'calc-4',
    question: 'Funkcja konsumpcji ma postać: C = 50 + 0,75Y. Oblicz konsumpcję, gdy dochód narodowy Y = 400 mld zł.',
    type: 'calculation',
    calculationType: 'consumption',
    givens: {
      'Funkcja konsumpcji': 'C = 50 + 0,75Y',
      'Dochód narodowy Y': '400 mld zł',
      'Konsumpcja autonomiczna': '50 mld zł',
      'Krańcowa skłonność do konsumpcji (MPC)': '0,75'
    },
    steps: [
      {
        description: 'Podstaw Y do funkcji konsumpcji',
        formula: 'C = 50 + 0,75Y'
      },
      {
        description: 'Oblicz',
        calculation: 'C = 50 + 0,75 × 400',
        result: 'C = 50 + 300'
      },
      {
        description: 'Konsumpcja całkowita',
        result: '350 mld zł'
      }
    ],
    options: ['300 mld zł', '350 mld zł', '400 mld zł', '450 mld zł'],
    correctAnswers: [1],
    finalAnswer: 350,
    unit: 'mld zł',
    explanation: 'C = 50 + 0,75 × 400 = 50 + 300 = 350 mld zł. Składa się z konsumpcji autonomicznej (50) i indukowanej (0,75 × 400 = 300).'
  },

  {
    id: 'calc-5',
    question: 'Przy funkcji konsumpcji C = 50 + 0,75Y, oblicz oszczędności (S), gdy Y = 400 mld zł.',
    type: 'calculation',
    calculationType: 'consumption',
    givens: {
      'Funkcja konsumpcji': 'C = 50 + 0,75Y',
      'Dochód narodowy Y': '400 mld zł'
    },
    steps: [
      {
        description: 'Oblicz konsumpcję',
        calculation: 'C = 50 + 0,75 × 400',
        result: '350 mld zł'
      },
      {
        description: 'Oblicz oszczędności',
        formula: 'S = Y - C',
        calculation: 'S = 400 - 350',
        result: '50 mld zł'
      },
      {
        description: 'Weryfikacja: Krańcowa skłonność do oszczędzania',
        formula: 'MPS = 1 - MPC = 1 - 0,75',
        result: 'MPS = 0,25'
      },
      {
        description: 'Alternatywnie: S = -50 + 0,25Y',
        calculation: 'S = -50 + 0,25 × 400 = -50 + 100',
        result: '50 mld zł ✓'
      }
    ],
    options: ['25 mld zł', '50 mld zł', '75 mld zł', '100 mld zł'],
    correctAnswers: [1],
    finalAnswer: 50,
    unit: 'mld zł',
    explanation: 'Oszczędności S = Y - C = 400 - 350 = 50 mld zł. Można też użyć funkcji oszczędności: S = -50 + 0,25Y = -50 + 100 = 50.'
  },

  {
    id: 'calc-6',
    question: 'Gdy dochód wzrasta z 200 do 300 mld zł, konsumpcja wzrasta z 180 do 255 mld zł. Oblicz krańcową skłonność do konsumpcji (MPC).',
    type: 'calculation',
    calculationType: 'consumption',
    givens: {
      'Y początkowy': '200 mld zł',
      'Y końcowy': '300 mld zł',
      'C początkowa': '180 mld zł',
      'C końcowa': '255 mld zł'
    },
    steps: [
      {
        description: 'Oblicz zmianę konsumpcji (ΔC)',
        calculation: 'ΔC = 255 - 180',
        result: '75 mld zł'
      },
      {
        description: 'Oblicz zmianę dochodu (ΔY)',
        calculation: 'ΔY = 300 - 200',
        result: '100 mld zł'
      },
      {
        description: 'Oblicz MPC',
        formula: 'MPC = ΔC / ΔY',
        calculation: 'MPC = 75 / 100',
        result: '0,75'
      }
    ],
    options: ['0,5', '0,6', '0,75', '0,8'],
    correctAnswers: [2],
    finalAnswer: 0.75,
    unit: '',
    explanation: 'MPC = ΔC / ΔY = 75 / 100 = 0,75. Oznacza to, że z każdej dodatkowej złotówki dochodu, gospodarstwa domowe wydają 75 groszy na konsumpcję.'
  },

  // ===== MNOŻNIK KEYNESOWSKI =====
  {
    id: 'calc-7',
    question: 'Krańcowa skłonność do konsumpcji wynosi 0,8. Oblicz mnożnik keynesowski.',
    type: 'calculation',
    calculationType: 'multiplier',
    givens: {
      'MPC': '0,8'
    },
    steps: [
      {
        description: 'Wzór na mnożnik',
        formula: 'k = 1 / (1 - MPC)'
      },
      {
        description: 'Podstaw MPC = 0,8',
        calculation: 'k = 1 / (1 - 0,8)'
      },
      {
        description: 'Oblicz',
        calculation: 'k = 1 / 0,2',
        result: '5'
      }
    ],
    options: ['2', '4', '5', '8'],
    correctAnswers: [2],
    finalAnswer: 5,
    unit: '',
    explanation: 'Mnożnik k = 1 / (1 - 0,8) = 1 / 0,2 = 5. Oznacza to, że wzrost inwestycji o 1 mld zł spowoduje wzrost PKB o 5 mld zł.'
  },

  {
    id: 'calc-8',
    question: 'MPC = 0,75. Inwestycje wzrosły o 20 mld zł. O ile wzrośnie dochód narodowy w równowadze?',
    type: 'calculation',
    calculationType: 'multiplier',
    givens: {
      'MPC': '0,75',
      'Wzrost inwestycji (ΔI)': '20 mld zł'
    },
    steps: [
      {
        description: 'Oblicz mnożnik',
        formula: 'k = 1 / (1 - MPC)',
        calculation: 'k = 1 / (1 - 0,75) = 1 / 0,25',
        result: '4'
      },
      {
        description: 'Oblicz wzrost dochodu narodowego',
        formula: 'ΔY = k × ΔI',
        calculation: 'ΔY = 4 × 20',
        result: '80 mld zł'
      }
    ],
    options: ['20 mld zł', '40 mld zł', '60 mld zł', '80 mld zł'],
    correctAnswers: [3],
    finalAnswer: 80,
    unit: 'mld zł',
    explanation: 'Mnożnik = 4, więc wzrost inwestycji o 20 mld zł powoduje wzrost PKB o 4 × 20 = 80 mld zł. Efekt mnożnikowy działa!'
  },

  // ===== RÓWNOWAGA MAKROEKONOMICZNA =====
  {
    id: 'calc-9',
    question: 'C = 100 + 0,8Y, Inwestycje I = 50. Znajdź dochód równowagi (bez państwa i handlu zagranicznego).',
    type: 'calculation',
    calculationType: 'equilibrium',
    givens: {
      'Funkcja konsumpcji': 'C = 100 + 0,8Y',
      'Inwestycje': 'I = 50',
      'Model': 'Y = C + I'
    },
    steps: [
      {
        description: 'Warunek równowagi',
        formula: 'Y = C + I'
      },
      {
        description: 'Podstaw funkcję konsumpcji',
        calculation: 'Y = (100 + 0,8Y) + 50',
        result: 'Y = 150 + 0,8Y'
      },
      {
        description: 'Przenieś 0,8Y na lewą stronę',
        calculation: 'Y - 0,8Y = 150',
        result: '0,2Y = 150'
      },
      {
        description: 'Rozwiąż równanie',
        calculation: 'Y = 150 / 0,2',
        result: '750'
      }
    ],
    options: ['500', '600', '750', '800'],
    correctAnswers: [2],
    finalAnswer: 750,
    unit: 'mld zł',
    explanation: 'Dochód równowagi Y = 750. W równowadze: Y = C + I, czyli 750 = (100 + 0,8×750) + 50 = 600 + 50 + 100 = 750 ✓'
  },

  {
    id: 'calc-10',
    question: 'C = 80 + 0,75Y, I = 60, G = 40, T = 60 (podatki zryczałtowane). Znajdź dochód równowagi.',
    type: 'calculation',
    calculationType: 'equilibrium',
    givens: {
      'Funkcja konsumpcji': 'C = 80 + 0,75Y',
      'Inwestycje': 'I = 60',
      'Wydatki państwa': 'G = 40',
      'Podatki': 'T = 60'
    },
    steps: [
      {
        description: 'Warunek równowagi (z państwem)',
        formula: 'Y = C + I + G'
      },
      {
        description: 'Podstaw dane',
        calculation: 'Y = (80 + 0,75Y) + 60 + 40',
        result: 'Y = 180 + 0,75Y'
      },
      {
        description: 'Rozwiąż równanie',
        calculation: 'Y - 0,75Y = 180',
        result: '0,25Y = 180'
      },
      {
        description: 'Dochód równowagi',
        calculation: 'Y = 180 / 0,25',
        result: '720'
      },
      {
        description: 'Uwaga: Podatki T nie wpływają bezpośrednio w tym modelu',
        result: '(dla uproszczenia przyjmujemy C zależy od Y brutto)'
      }
    ],
    options: ['600', '660', '720', '800'],
    correctAnswers: [2],
    finalAnswer: 720,
    unit: 'mld zł',
    explanation: 'Y = C + I + G. Po podstawieniu: Y = 180 + 0,75Y, stąd 0,25Y = 180, czyli Y = 720.'
  },

  // ===== POLITYKA FISKALNA =====
  {
    id: 'calc-11',
    question: 'Rząd zwiększa wydatki o 10 mld zł. MPC = 0,8. O ile wzrośnie PKB?',
    type: 'calculation',
    calculationType: 'fiscal',
    givens: {
      'Wzrost wydatków rządowych (ΔG)': '10 mld zł',
      'MPC': '0,8'
    },
    steps: [
      {
        description: 'Oblicz mnożnik wydatków rządowych',
        formula: 'k = 1 / (1 - MPC)',
        calculation: 'k = 1 / (1 - 0,8) = 1 / 0,2',
        result: '5'
      },
      {
        description: 'Oblicz wzrost PKB',
        formula: 'ΔY = k × ΔG',
        calculation: 'ΔY = 5 × 10',
        result: '50 mld zł'
      }
    ],
    options: ['10 mld zł', '25 mld zł', '50 mld zł', '80 mld zł'],
    correctAnswers: [2],
    finalAnswer: 50,
    unit: 'mld zł',
    explanation: 'Mnożnik wydatków rządowych = 5, więc wzrost G o 10 mld zł powoduje wzrost PKB o 5 × 10 = 50 mld zł.'
  },

  // ===== KREACJA PIENIĄDZA =====
  {
    id: 'calc-12',
    question: 'Bank centralny wymaga, by banki trzymały 10% depozytów jako rezerwę. Bank otrzymuje depozyt 1000 zł. Ile maksymalnie może pożyczyć?',
    type: 'calculation',
    calculationType: 'money-creation',
    givens: {
      'Depozyt początkowy': '1000 zł',
      'Stopa rezerw obowiązkowych': '10% (0,1)'
    },
    steps: [
      {
        description: 'Oblicz wymaganą rezerwę',
        formula: 'Rezerwa = Depozyt × Stopa rezerw',
        calculation: 'Rezerwa = 1000 × 0,1',
        result: '100 zł'
      },
      {
        description: 'Oblicz kwotę do pożyczenia',
        formula: 'Kredyt = Depozyt - Rezerwa',
        calculation: 'Kredyt = 1000 - 100',
        result: '900 zł'
      }
    ],
    options: ['100 zł', '500 zł', '900 zł', '1000 zł'],
    correctAnswers: [2],
    finalAnswer: 900,
    unit: 'zł',
    explanation: 'Bank musi trzymać 10% × 1000 = 100 zł jako rezerwę. Może więc pożyczyć 1000 - 100 = 900 zł.'
  },

  {
    id: 'calc-13',
    question: 'Stopa rezerw = 20%. Bank centralny wpompowuje 100 mln zł do systemu. Jaka będzie maksymalna kreacja pieniądza (mnożnik pieniężny)?',
    type: 'calculation',
    calculationType: 'money-creation',
    givens: {
      'Stopa rezerw (r)': '20% (0,2)',
      'Baza monetarna (ΔB)': '100 mln zł'
    },
    steps: [
      {
        description: 'Oblicz mnożnik pieniężny',
        formula: 'm = 1 / r',
        calculation: 'm = 1 / 0,2',
        result: '5'
      },
      {
        description: 'Oblicz maksymalną kreację pieniądza',
        formula: 'ΔM = m × ΔB',
        calculation: 'ΔM = 5 × 100',
        result: '500 mln zł'
      }
    ],
    options: ['100 mln zł', '200 mln zł', '400 mln zł', '500 mln zł'],
    correctAnswers: [3],
    finalAnswer: 500,
    unit: 'mln zł',
    explanation: 'Mnożnik pieniężny = 1/0,2 = 5. Kreacja pieniądza = 5 × 100 mln = 500 mln zł. Baza 100 mln zostanie "pomnożona" do 500 mln.'
  }
];
