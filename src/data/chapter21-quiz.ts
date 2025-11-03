import type { QuizQuestion } from '../types';

export const chapter21Quiz: QuizQuestion[] = [
  {
    id: 'ch21-q1',
    question: 'Popyt globalny (AD) składa się z czterech elementów. Który z poniższych NIE jest składnikiem popytu globalnego?',
    type: 'single',
    options: [
      'Konsumpcja (C)',
      'Inwestycje (I)',
      'Transfery socjalne (emerytury, zasiłki)',
      'Wydatki rządowe (G)'
    ],
    correctAnswers: [2],
    explanation: 'Transfery socjalne (emerytury, zasiłki) nie wchodzą do popytu globalnego. Są to tylko przesunięcia pieniędzy. Dopiero gdy emeryt wyda pieniądze, trafią one do składnika C (konsumpcja). Wzór: AD = C + I + G + (X-M).'
  },
  {
    id: 'ch21-q2',
    question: 'Student kupuje nowy laptop do nauki. Do którego składnika popytu globalnego zaliczamy ten zakup?',
    type: 'single',
    options: [
      'Konsumpcja (C)',
      'Inwestycje (I)',
      'Wydatki rządowe (G)',
      'Import (M)'
    ],
    correctAnswers: [0],
    explanation: 'Zakup laptopa przez studenta (gospodarstwo domowe) to konsumpcja (C). Inwestycje (I) to tylko zakupy PRZEDSIĘBIORSTW na dobra kapitałowe (maszyny, budynki). Uwaga: w potocznym języku mówimy "inwestuję w laptop", ale w makroekonomii to konsumpcja!'
  },
  {
    id: 'ch21-q3',
    question: 'Firma budowlana kupuje nową koparkę za 500 000 zł. Jak klasyfikujemy ten zakup?',
    type: 'single',
    options: [
      'Konsumpcja (C)',
      'Inwestycje (I)',
      'Wydatki rządowe (G)',
      'Eksport (X)'
    ],
    correctAnswers: [1],
    explanation: 'Zakup koparki przez firmę to inwestycje (I). Inwestycje to wydatki przedsiębiorstw na nowe dobra kapitałowe (maszyny, budynki, sprzęt). Koparka będzie służyć do produkcji przez wiele lat.'
  },
  {
    id: 'ch21-q4',
    question: 'Krańcowa skłonność do konsumpcji (MPC) wynosi 0,75. Co to oznacza?',
    type: 'single',
    options: [
      'Ludzie wydają 75% wszystkich swoich dochodów',
      'Z każdej dodatkowej złotówki dochodu 75 groszy idzie na konsumpcję',
      '75% gospodarstw domowych konsumuje wszystkie dochody',
      'Konsumpcja wynosi 75% PKB'
    ],
    correctAnswers: [1],
    explanation: 'MPC = 0,75 oznacza, że z każdej dodatkowej złotówki dochodu 75 groszy (75%) zostanie wydane na konsumpcję, a 25 groszy (25%) zaoszczędzone. MPC pokazuje PRZYROST konsumpcji na PRZYROST dochodu: MPC = ΔC / ΔY.'
  },
  {
    id: 'ch21-q5',
    question: 'Dochód wzrósł z 2000 zł do 2500 zł, a konsumpcja z 1600 zł do 2000 zł. Oblicz MPC.',
    type: 'single',
    options: [
      'MPC = 0,6',
      'MPC = 0,7',
      'MPC = 0,8',
      'MPC = 0,9'
    ],
    correctAnswers: [2],
    explanation: 'MPC = ΔC / ΔY = (2000 - 1600) / (2500 - 2000) = 400 / 500 = 0,8. Z każdej dodatkowej złotówki dochodu 80 groszy idzie na konsumpcję.'
  },
  {
    id: 'ch21-q6',
    question: 'Jakie jest kluczowe założenie dotyczące MPC i MPS?',
    type: 'single',
    options: [
      'MPC + MPS = 0',
      'MPC + MPS = 1',
      'MPC + MPS = 100',
      'MPC × MPS = 1'
    ],
    correctAnswers: [1],
    explanation: 'MPC + MPS = 1 (zawsze!). Dodatkowy dochód może być TYLKO wydany na konsumpcję (MPC) lub zaoszczędzony (MPS). Przykład: jeśli MPC = 0,7, to MPS = 1 - 0,7 = 0,3.'
  },
  {
    id: 'ch21-q7',
    question: 'Jeśli MPC = 0,8, ile wynosi mnożnik wydatków?',
    type: 'single',
    options: [
      'k = 2',
      'k = 4',
      'k = 5',
      'k = 8'
    ],
    correctAnswers: [2],
    explanation: 'Mnożnik k = 1 / (1 - MPC) = 1 / (1 - 0,8) = 1 / 0,2 = 5. To oznacza, że wzrost wydatków autonomicznych (np. wydatków rządowych) o 100 zł zwiększy PKB o 5 × 100 = 500 zł!'
  },
  {
    id: 'ch21-q8',
    question: 'Rząd zwiększa wydatki o 200 mln zł. Mnożnik wynosi 4. O ile wzrośnie PKB?',
    type: 'single',
    options: [
      '50 mln zł',
      '200 mln zł',
      '400 mln zł',
      '800 mln zł'
    ],
    correctAnswers: [3],
    explanation: 'Wzrost PKB = Wzrost wydatków × Mnożnik = 200 mln × 4 = 800 mln zł. Każda złotówka wydana przez rząd generuje 4 złote wzrostu PKB dzięki efektowi mnożnikowemu.'
  },
  {
    id: 'ch21-q9',
    question: 'Które stwierdzenie o mnożniku jest PRAWDZIWE?',
    type: 'single',
    options: [
      'Im wyższe MPC, tym niższy mnożnik',
      'Im wyższe MPC, tym wyższy mnożnik',
      'Mnożnik nie zależy od MPC',
      'Mnożnik zawsze wynosi 1'
    ],
    correctAnswers: [1],
    explanation: 'Im wyższe MPC (ludzie więcej wydają), tym wyższy mnożnik. Przykład: MPC=0,9 daje k=10, ale MPC=0,5 daje k=2. Gdy ludzie dużo wydają, pieniądze "krążą" szybciej w gospodarce, generując większy wzrost PKB.'
  },
  {
    id: 'ch21-q10',
    question: 'W równowadze makroekonomicznej:',
    type: 'single',
    options: [
      'Y = C + S',
      'Y = AD',
      'AD = C + I',
      'Y = 0'
    ],
    correctAnswers: [1],
    explanation: 'W równowadze makroekonomicznej produkcja (Y) równa się popytowi globalnemu (AD): Y = AD = C + I + G + (X-M). Wszystko co wyprodukowaliśmy, zostaje sprzedane. Brak nadmiaru ani niedoboru dóbr.'
  },
  {
    id: 'ch21-q11',
    question: 'Funkcja konsumpcji: C = 100 + 0,6·Y. Co oznacza liczba 100?',
    type: 'single',
    options: [
      'Całkowitą konsumpcję',
      'MPC',
      'Konsumpcję autonomiczną (niezależną od dochodu)',
      'Mnożnik'
    ],
    correctAnswers: [2],
    explanation: 'Liczba 100 to konsumpcja autonomiczna (C₀). Nawet przy zerowym dochodzie (Y=0) ludzie muszą coś jeść i pić - wydają oszczędności lub pożyczają. C₀ to "bazowa" konsumpcja niezależna od dochodu.'
  },
  {
    id: 'ch21-q12',
    question: 'Który z poniższych zakupów ZWIĘKSZA PKB Polski jako wydatek finalny?',
    type: 'multiple',
    options: [
      'Polski konsument kupuje polskie jabłka w sklepie',
      'Polska firma kupuje maszynę wyprodukowaną w Polsce',
      'Polski rząd buduje nową drogę w Polsce',
      'Polska firma kupuje stal jako surowiec'
    ],
    correctAnswers: [0, 1, 2],
    explanation: 'Zwiększają PKB: (1) jabłka - konsumpcja C, (2) maszyna - inwestycje I, (3) droga - wydatki rządowe G. Stal jako surowiec (dobro pośrednie) NIE zwiększa bezpośrednio PKB - zostanie uwzględniona w wartości dodanej produktu finalnego.'
  }
];
