import type { ExampleProblem, ProblemCategoryInfo } from '../types';

// Category definitions with formulas
export const problemCategories: ProblemCategoryInfo[] = [
  {
    id: 'pkb-value-added',
    title: 'PKB i Wartość Dodana',
    description: 'Obliczanie PKB metodą wartości dodanej i dóbr finalnych',
    icon: '📊',
    formulas: [
      {
        name: 'Wartość dodana',
        formula: 'WD = Wartość produkcji - Koszty dóbr pośrednich',
        description: 'Wartość dodana to przyrost wartości dóbr w procesie produkcji',
        variables: {
          'WD': 'Wartość dodana',
          'Wartość produkcji': 'Całkowita wartość wyprodukowanych dóbr',
          'Koszty dóbr pośrednich': 'Wartość zakupionych dóbr pośrednich'
        }
      },
      {
        name: 'PKB (metoda wartości dodanej)',
        formula: 'PKB = Σ (Wartości dodane wszystkich przedsiębiorstw)',
        description: 'PKB to suma wszystkich wartości dodanych w gospodarce',
        variables: {
          'PKB': 'Produkt Krajowy Brutto'
        }
      }
    ]
  },
  {
    id: 'pkb-real-nominal',
    title: 'PKB Nominalny i Realny',
    description: 'Różnica między PKB nominalnym a realnym, deflator PKB, stopy wzrostu',
    icon: '📈',
    formulas: [
      {
        name: 'PKB nominalny',
        formula: 'PKB nominalny = Σ (Ilość × Cena bieżąca)',
        description: 'PKB w cenach bieżących danego roku',
        variables: {
          'Ilość': 'Wyprodukowana ilość dóbr',
          'Cena bieżąca': 'Cena w danym roku'
        }
      },
      {
        name: 'PKB realny',
        formula: 'PKB realny = Σ (Ilość × Cena roku bazowego)',
        description: 'PKB w cenach stałych roku bazowego',
        variables: {
          'Cena roku bazowego': 'Cena z roku przyjętego jako bazowy'
        }
      },
      {
        name: 'Deflator PKB',
        formula: 'Deflator = (PKB nominalny / PKB realny) × 100',
        description: 'Wskaźnik poziomu cen w gospodarce',
        variables: {
          'Deflator': 'Indeks cen (rok bazowy = 100)'
        }
      },
      {
        name: 'Stopa wzrostu realnego PKB',
        formula: 'Wzrost = [(PKBᵗ / PKBᵗ⁻¹) - 1] × 100%',
        description: 'Procentowa zmiana realnego PKB',
        variables: {
          'PKBᵗ': 'PKB w roku t',
          'PKBᵗ⁻¹': 'PKB w roku poprzednim'
        }
      }
    ]
  },
  {
    id: 'consumption-savings',
    title: 'Funkcja Konsumpcji i Oszczędności',
    description: 'Analiza zachowań konsumpcyjnych i oszczędnościowych gospodarstw domowych',
    icon: '💰',
    formulas: [
      {
        name: 'Funkcja konsumpcji',
        formula: 'C = C₀ + MPC × Y',
        description: 'Keynesiańska funkcja konsumpcji',
        variables: {
          'C': 'Konsumpcja',
          'C₀': 'Konsumpcja autonomiczna (przy Y=0)',
          'MPC': 'Krańcowa skłonność do konsumpcji',
          'Y': 'Dochód rozporządzalny'
        }
      },
      {
        name: 'Oszczędności',
        formula: 'S = Y - C',
        description: 'Oszczędności to dochód niewydatkowany na konsumpcję',
        variables: {
          'S': 'Oszczędności',
          'Y': 'Dochód',
          'C': 'Konsumpcja'
        }
      },
      {
        name: 'MPC i MPS',
        formula: 'MPC + MPS = 1',
        description: 'Suma skłonności do konsumpcji i oszczędzania wynosi 1',
        variables: {
          'MPC': 'Marginal Propensity to Consume',
          'MPS': 'Marginal Propensity to Save'
        }
      },
      {
        name: 'Przeciętna skłonność do konsumpcji',
        formula: 'APC = C / Y',
        description: 'Jaka część dochodu jest konsumowana',
        variables: {
          'APC': 'Average Propensity to Consume'
        }
      }
    ]
  },
  {
    id: 'multiplier',
    title: 'Mnożnik Keynesowski',
    description: 'Efekt mnożnikowy zmian wydatków autonomicznych',
    icon: '✖️',
    formulas: [
      {
        name: 'Mnożnik prosty',
        formula: 'k = 1 / (1 - MPC)',
        description: 'Mnożnik w gospodarce bez podatków i importu',
        variables: {
          'k': 'Mnożnik',
          'MPC': 'Krańcowa skłonność do konsumpcji'
        }
      },
      {
        name: 'Mnożnik z podatkami',
        formula: 'k = 1 / (1 - MPC(1 - t))',
        description: 'Mnożnik z uwzględnieniem stopy podatkowej',
        variables: {
          't': 'Stopa podatkowa'
        }
      },
      {
        name: 'Efekt mnożnikowy',
        formula: 'ΔY = k × ΔA',
        description: 'Zmiana PKB w wyniku zmiany wydatków autonomicznych',
        variables: {
          'ΔY': 'Zmiana PKB',
          'ΔA': 'Zmiana wydatków autonomicznych'
        }
      }
    ]
  },
  {
    id: 'equilibrium',
    title: 'Równowaga Makroekonomiczna',
    description: 'Wyznaczanie dochodu równowagi w różnych modelach',
    icon: '⚖️',
    formulas: [
      {
        name: 'Warunek równowagi (model prosty)',
        formula: 'Y = C + I',
        description: 'W równowadze dochód równa się wydatkom',
        variables: {
          'Y': 'Dochód/PKB',
          'C': 'Konsumpcja',
          'I': 'Inwestycje'
        }
      },
      {
        name: 'Równowaga z państwem',
        formula: 'Y = C + I + G',
        description: 'Model z sektorem państwowym',
        variables: {
          'G': 'Wydatki rządowe'
        }
      },
      {
        name: 'Równowaga w gospodarce otwartej',
        formula: 'Y = C + I + G + (X - M)',
        description: 'Model z handlem zagranicznym',
        variables: {
          'X': 'Eksport',
          'M': 'Import',
          '(X - M)': 'Eksport netto'
        }
      }
    ]
  },
  {
    id: 'fiscal-policy',
    title: 'Polityka Fiskalna',
    description: 'Wpływ polityki fiskalnej na PKB i zatrudnienie',
    icon: '🏛️',
    formulas: [
      {
        name: 'Mnożnik wydatków rządowych',
        formula: 'k_G = 1 / (1 - MPC)',
        description: 'Efekt zmiany wydatków rządowych',
        variables: {
          'k_G': 'Mnożnik wydatków'
        }
      },
      {
        name: 'Mnożnik podatkowy',
        formula: 'k_T = -MPC / (1 - MPC)',
        description: 'Efekt zmiany podatków (mniejszy niż wydatków)',
        variables: {
          'k_T': 'Mnożnik podatkowy (ujemny)'
        }
      },
      {
        name: 'Saldo budżetu',
        formula: 'Saldo = T - G',
        description: 'Różnica między wpływami a wydatkami',
        variables: {
          'T': 'Wpływy podatkowe',
          'G': 'Wydatki rządowe'
        }
      }
    ]
  },
  {
    id: 'money-creation',
    title: 'Kreacja Pieniądza',
    description: 'Proces tworzenia pieniądza przez system bankowy',
    icon: '🏦',
    formulas: [
      {
        name: 'Mnożnik pieniężny',
        formula: 'm = 1 / r',
        description: 'Maksymalna kreacja pieniądza w systemie',
        variables: {
          'm': 'Mnożnik pieniężny',
          'r': 'Stopa rezerw obowiązkowych'
        }
      },
      {
        name: 'Maksymalna podaż pieniądza',
        formula: 'M = m × Baza monetarna',
        description: 'Całkowita podaż pieniądza w gospodarce',
        variables: {
          'M': 'Podaż pieniądza',
          'Baza monetarna': 'Pieniądz banku centralnego'
        }
      },
      {
        name: 'Kredyt możliwy do udzielenia',
        formula: 'Kredyt = Depozyt × (1 - r)',
        description: 'Kwota jaką bank może pożyczyć',
        variables: {
          'Depozyt': 'Otrzymany depozyt'
        }
      }
    ]
  }
];

// Example problems
export const exampleProblems: ExampleProblem[] = [
  // ZADANIE 1: PKB i Wartość Dodana
  {
    id: 'problem-1-1',
    title: 'Łańcuch produkcyjny - od surowca do produktu finalnego',
    category: 'pkb-value-added',
    difficulty: 'medium',
    description: 'W gospodarce funkcjonuje pięciostopniowy łańcuch produkcyjny. Oblicz PKB powstałe w tym łańcuchu używając metody wartości dóbr finalnych i metody wartości dodanej.',
    givens: {
      'Sprzedaż rudy': '500 zł',
      'Sprzedaż stali': '1 200 zł',
      'Sprzedaż części': '2 000 zł',
      'Sprzedaż maszyn': '3 500 zł',
      'Sprzedaż samochodu': '6 000 zł'
    },
    questions: [
      'Oblicz PKB metodą wartości dóbr finalnych',
      'Oblicz PKB metodą wartości dodanej',
      'Wyjaśnij, dlaczego obie metody dają ten sam wynik'
    ],
    solution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Metoda wartości dóbr finalnych',
          description: 'Dobrem finalnym jest samochód kupiony przez konsumenta (ostatecznego użytkownika).',
          formulas: ['PKB = Wartość dobra finalnego'],
          calculations: [
            {
              expression: 'PKB = 6 000 zł',
              explanation: 'Wartość samochodu (jedyne dobro finalne)',
              result: '6 000 zł'
            }
          ],
          result: 'PKB = 6 000 zł'
        },
        {
          stepNumber: 2,
          title: 'Metoda wartości dodanej - Wartość dodana górnika',
          description: 'Górnik wydobywa rudę (surowiec naturalny), więc cała wartość to wartość dodana.',
          calculations: [
            {
              expression: 'WD górnika = 500 - 0',
              explanation: 'Brak kosztów dóbr pośrednich',
              result: '500 zł'
            }
          ],
          result: '500 zł'
        },
        {
          stepNumber: 3,
          title: 'Wartość dodana hutnika',
          description: 'Hutnik kupuje rudę za 500 zł i wytapia stal wartą 1 200 zł.',
          formulas: ['WD = Wartość produkcji - Koszty dóbr pośrednich'],
          calculations: [
            {
              expression: 'WD hutnika = 1 200 - 500',
              explanation: 'Wartość stali minus koszt rudy',
              result: '700 zł'
            }
          ],
          result: '700 zł'
        },
        {
          stepNumber: 4,
          title: 'Wartość dodana producenta części',
          description: 'Producent kupuje stal za 1 200 zł i wytwarza części za 2 000 zł.',
          calculations: [
            {
              expression: 'WD producenta części = 2 000 - 1 200',
              result: '800 zł'
            }
          ],
          result: '800 zł'
        },
        {
          stepNumber: 5,
          title: 'Wartość dodana fabryki maszyn',
          description: 'Fabryka kupuje części za 2 000 zł i produkuje maszyny za 3 500 zł.',
          calculations: [
            {
              expression: 'WD fabryki maszyn = 3 500 - 2 000',
              result: '1 500 zł'
            }
          ],
          result: '1 500 zł'
        },
        {
          stepNumber: 6,
          title: 'Wartość dodana producenta samochodów',
          description: 'Producent kupuje maszyny za 3 500 zł i wytwarza samochód za 6 000 zł.',
          calculations: [
            {
              expression: 'WD producenta samochodów = 6 000 - 3 500',
              result: '2 500 zł'
            }
          ],
          result: '2 500 zł'
        },
        {
          stepNumber: 7,
          title: 'Suma wartości dodanych',
          description: 'PKB to suma wszystkich wartości dodanych w gospodarce.',
          formulas: ['PKB = Σ WD'],
          calculations: [
            {
              expression: 'PKB = 500 + 700 + 800 + 1 500 + 2 500',
              result: '6 000 zł'
            }
          ],
          result: 'PKB = 6 000 zł',
          note: 'Obie metody dają identyczny wynik!'
        }
      ],
      finalAnswers: {
        'a': '6 000 zł (metoda dóbr finalnych)',
        'b': '6 000 zł (metoda wartości dodanej)',
        'c': 'Obie metody dają ten sam wynik, ponieważ suma wartości dodanych na każdym etapie produkcji równa się wartości dobra finalnego'
      },
      interpretation: 'PKB w tym łańcuchu produkcyjnym wynosi 6 000 zł. Wartość ta reprezentuje nowo wytworzoną wartość w gospodarce.',
      practicalImplications: [
        'Metoda wartości dodanej unika podwójnego liczenia',
        'Każdy uczestnik łańcucha produkcyjnego dodaje pewną wartość',
        'Suma tych wkładów równa się wartości produktu finalnego',
        'W rzeczywistej gospodarce stosuje się metodę wartości dodanej (łatwiejsza do obliczenia z podatku VAT)'
      ]
    },
    relatedTopics: ['Rachunkowość narodowa', 'PKB', 'Wartość dodana', 'Dobra finalne i pośrednie'],
    keywords: ['PKB', 'wartość dodana', 'łańcuch produkcyjny', 'dobra pośrednie', 'dobra finalne']
  },

  // ZADANIE 2: PKB Realny i Nominalny
  {
    id: 'problem-2-1',
    title: 'Obliczanie PKB realnego i deflatora',
    category: 'pkb-real-nominal',
    difficulty: 'hard',
    description: 'Gospodarka wytwarza dwa dobra: komputery i książki. Oblicz PKB nominalny, realny, deflator PKB oraz stopy wzrostu dla trzech lat.',
    givens: {
      'Komputery 2022': '100 szt. po 3 000 zł',
      'Książki 2022': '500 szt. po 50 zł',
      'Komputery 2023': '120 szt. po 3 300 zł',
      'Książki 2023': '550 szt. po 60 zł',
      'Komputery 2024': '140 szt. po 3 600 zł',
      'Książki 2024': '600 szt. po 70 zł',
      'Rok bazowy': '2022'
    },
    questions: [
      'Oblicz PKB nominalny dla każdego roku',
      'Oblicz PKB realny dla każdego roku',
      'Oblicz deflator PKB dla każdego roku',
      'Oblicz stopę wzrostu realnego PKB',
      'Oblicz stopę inflacji'
    ],
    solution: {
      steps: [
        {
          stepNumber: 1,
          title: 'PKB Nominalny (w cenach bieżących)',
          description: 'Wartość produkcji w cenach danego roku.',
          formulas: ['PKB nominalny = Σ (Ilość × Cena bieżąca)'],
          calculations: [
            {
              expression: 'PKB₂₀₂₂ = (100 × 3 000) + (500 × 50)',
              result: '325 000 zł'
            },
            {
              expression: 'PKB₂₀₂₃ = (120 × 3 300) + (550 × 60)',
              result: '429 000 zł'
            },
            {
              expression: 'PKB₂₀₂₄ = (140 × 3 600) + (600 × 70)',
              result: '546 000 zł'
            }
          ],
          result: '2022: 325 000 | 2023: 429 000 | 2024: 546 000'
        },
        {
          stepNumber: 2,
          title: 'PKB Realny (w cenach stałych roku 2022)',
          description: 'Wartość produkcji w cenach roku bazowego - eliminuje wpływ inflacji.',
          formulas: ['PKB realny = Σ (Ilość bieżąca × Cena roku bazowego)'],
          calculations: [
            {
              expression: 'PKB realny₂₀₂₂ = (100 × 3 000) + (500 × 50)',
              result: '325 000 zł'
            },
            {
              expression: 'PKB realny₂₀₂₃ = (120 × 3 000) + (550 × 50)',
              result: '387 500 zł'
            },
            {
              expression: 'PKB realny₂₀₂₄ = (140 × 3 000) + (600 × 50)',
              result: '450 000 zł'
            }
          ],
          result: '2022: 325 000 | 2023: 387 500 | 2024: 450 000',
          note: 'W roku bazowym PKB nominalny = PKB realny'
        },
        {
          stepNumber: 3,
          title: 'Deflator PKB',
          description: 'Wskaźnik poziomu cen w gospodarce.',
          formulas: ['Deflator = (PKB nominalny / PKB realny) × 100'],
          calculations: [
            {
              expression: 'Deflator₂₀₂₂ = (325 000 / 325 000) × 100',
              result: '100,00'
            },
            {
              expression: 'Deflator₂₀₂₃ = (429 000 / 387 500) × 100',
              result: '110,71'
            },
            {
              expression: 'Deflator₂₀₂₄ = (546 000 / 450 000) × 100',
              result: '121,33'
            }
          ],
          result: '2022: 100,00 | 2023: 110,71 | 2024: 121,33'
        },
        {
          stepNumber: 4,
          title: 'Stopa wzrostu realnego PKB',
          description: 'Procentowa zmiana realnego PKB - pokazuje rzeczywisty wzrost gospodarczy.',
          formulas: ['Wzrost = [(PKBᵗ / PKBᵗ⁻¹) - 1] × 100%'],
          calculations: [
            {
              expression: 'Wzrost₂₀₂₃ = [(387 500 / 325 000) - 1] × 100%',
              result: '19,23%'
            },
            {
              expression: 'Wzrost₂₀₂₄ = [(450 000 / 387 500) - 1] × 100%',
              result: '16,13%'
            }
          ],
          result: '2023: +19,23% | 2024: +16,13%'
        },
        {
          stepNumber: 5,
          title: 'Stopa inflacji (zmiana deflatora)',
          description: 'Procentowa zmiana poziomu cen.',
          formulas: ['Inflacja = [(Deflatorᵗ / Deflatorᵗ⁻¹) - 1] × 100%'],
          calculations: [
            {
              expression: 'Inflacja₂₀₂₃ = [(110,71 / 100) - 1] × 100%',
              result: '10,71%'
            },
            {
              expression: 'Inflacja₂₀₂₄ = [(121,33 / 110,71) - 1] × 100%',
              result: '9,59%'
            }
          ],
          result: '2023: 10,71% | 2024: 9,59%'
        }
      ],
      finalAnswers: {
        'a': 'PKB nominalny: 2022: 325 000 | 2023: 429 000 | 2024: 546 000',
        'b': 'PKB realny: 2022: 325 000 | 2023: 387 500 | 2024: 450 000',
        'c': 'Deflator: 2022: 100,00 | 2023: 110,71 | 2024: 121,33',
        'd': 'Wzrost realny: 2023: +19,23% | 2024: +16,13%',
        'e': 'Inflacja: 2023: 10,71% | 2024: 9,59%'
      },
      interpretation: 'Gospodarka rośnie realnie o około 17-19% rocznie, ale jednocześnie występuje inflacja na poziomie 10%. PKB nominalny rośnie szybciej niż realny ze względu na wzrost cen.',
      practicalImplications: [
        'PKB realny pokazuje rzeczywisty wzrost produkcji',
        'PKB nominalny jest zawyżony przez inflację',
        'Deflator PKB mierzy ogólny poziom cen w gospodarce',
        'Ważne jest oddzielenie wzrostu od inflacji przy ocenie gospodarki'
      ]
    },
    relatedTopics: ['PKB nominalny', 'PKB realny', 'Deflator PKB', 'Inflacja', 'Wzrost gospodarczy'],
    keywords: ['PKB', 'realny', 'nominalny', 'deflator', 'inflacja', 'wzrost gospodarczy']
  },

  // Więcej zadań można dodać później...
  // ZADANIE 3: Funkcja Konsumpcji
  {
    id: 'problem-3-1',
    title: 'Pełna analiza funkcji konsumpcji',
    category: 'consumption-savings',
    difficulty: 'medium',
    description: 'Funkcja konsumpcji ma postać C = 80 + 0,75Y. Przeanalizuj zachowania konsumpcyjne dla różnych poziomów dochodu.',
    givens: {
      'Funkcja konsumpcji': 'C = 80 + 0,75Y',
      'Konsumpcja autonomiczna': '80',
      'MPC': '0,75',
      'Poziomy dochodu': 'Y = 0, 200, 400, 600'
    },
    questions: [
      'Oblicz konsumpcję dla każdego poziomu dochodu',
      'Oblicz oszczędności dla każdego poziomu',
      'Znajdź punkt progu oszczędności (gdzie S = 0)',
      'Oblicz APC i APS dla Y = 400',
      'Wyjaśnij relację między MPC a MPS'
    ],
    solution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Konsumpcja dla różnych poziomów dochodu',
          description: 'Podstawiamy wartości Y do funkcji konsumpcji.',
          formulas: ['C = 80 + 0,75Y'],
          calculations: [
            {
              expression: 'C(0) = 80 + 0,75 × 0',
              result: '80 zł'
            },
            {
              expression: 'C(200) = 80 + 0,75 × 200',
              result: '230 zł'
            },
            {
              expression: 'C(400) = 80 + 0,75 × 400',
              result: '380 zł'
            },
            {
              expression: 'C(600) = 80 + 0,75 × 600',
              result: '530 zł'
            }
          ],
          result: 'Konsumpcja rośnie wraz z dochodem'
        },
        {
          stepNumber: 2,
          title: 'Oszczędności',
          description: 'Oszczędności to różnica między dochodem a konsumpcją.',
          formulas: ['S = Y - C'],
          calculations: [
            {
              expression: 'S(0) = 0 - 80',
              result: '-80 zł (ujemne oszczędności)'
            },
            {
              expression: 'S(200) = 200 - 230',
              result: '-30 zł'
            },
            {
              expression: 'S(400) = 400 - 380',
              result: '20 zł'
            },
            {
              expression: 'S(600) = 600 - 530',
              result: '70 zł'
            }
          ],
          result: 'Przy niskim dochodzie oszczędności są ujemne',
          note: 'Ujemne oszczędności oznaczają życie na kredyt lub wykorzystanie oszczędności z przeszłości'
        },
        {
          stepNumber: 3,
          title: 'Punkt progu oszczędności',
          description: 'Znajdźmy dochód, przy którym S = 0 (czyli C = Y).',
          formulas: ['Y = C', 'Y = 80 + 0,75Y'],
          calculations: [
            {
              expression: 'Y - 0,75Y = 80',
              result: '0,25Y = 80'
            },
            {
              expression: 'Y = 80 / 0,25',
              result: '320 zł'
            }
          ],
          result: 'Przy dochodzie 320 zł gospodarstwa nie oszczędzają (S = 0)',
          note: 'Poniżej tego poziomu mają ujemne oszczędności, powyżej - dodatnie'
        },
        {
          stepNumber: 4,
          title: 'Przeciętne skłonności (dla Y = 400)',
          description: 'APC i APS pokazują jaka część dochodu jest konsumowana/oszczędzana.',
          formulas: ['APC = C / Y', 'APS = S / Y'],
          calculations: [
            {
              expression: 'APC = 380 / 400',
              result: '0,95 (95%)'
            },
            {
              expression: 'APS = 20 / 400',
              result: '0,05 (5%)'
            },
            {
              expression: 'Sprawdzenie: APC + APS',
              result: '0,95 + 0,05 = 1 ✓'
            }
          ],
          result: 'Przy Y=400: 95% dochodu konsumowane, 5% oszczędzane'
        },
        {
          stepNumber: 5,
          title: 'Relacja między MPC a MPS',
          description: 'Krańcowe skłonności sumują się do 1.',
          formulas: ['MPC + MPS = 1', 'MPS = 1 - MPC'],
          calculations: [
            {
              expression: 'MPS = 1 - 0,75',
              result: '0,25'
            }
          ],
          result: 'MPS = 0,25 (z każdej dodatkowej złotówki 25 gr jest oszczędzane)',
          note: 'MPC i MPS są stałe w funkcji liniowej, ale APC i APS zmieniają się wraz z dochodem'
        }
      ],
      finalAnswers: {
        'a': 'C: 80 | 230 | 380 | 530 zł',
        'b': 'S: -80 | -30 | 20 | 70 zł',
        'c': 'Punkt progu: Y = 320 zł',
        'd': 'APC = 0,95 (95%), APS = 0,05 (5%)',
        'e': 'MPC + MPS = 1, więc MPS = 0,25'
      },
      interpretation: 'Funkcja konsumpcji pokazuje, że gospodarstwa domowe mają konsumpcję autonomiczną (80 zł) nawet przy zerowym dochodzie. Z każdej dodatkowej złotówki wydają 75 groszy na konsumpcję.',
      practicalImplications: [
        'Przy niskim dochodzie ludzie żyją na kredyt lub z oszczędności',
        'Im wyższy dochód, tym większy odsetek jest oszczędzany (APS rośnie)',
        'MPC = 0,75 oznacza silny efekt mnożnikowy w gospodarce',
        'Punkt progu (320 zł) to minimalny dochód pozwalający na oszczędzanie'
      ]
    },
    relatedTopics: ['Funkcja konsumpcji', 'Funkcja oszczędności', 'MPC', 'MPS', 'APC', 'APS'],
    keywords: ['konsumpcja', 'oszczędności', 'MPC', 'MPS', 'funkcja konsumpcji', 'próg oszczędności']
  }
];
