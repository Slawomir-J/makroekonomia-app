import type { QuizQuestion } from '../types';

export const chapter22Questions: QuizQuestion[] = [
  {
    id: 'ch22-q1',
    question: 'Czym jest polityka fiskalna?',
    type: 'single',
    options: [
      'Działania banku centralnego polegające na zmianie stóp procentowych',
      'Działania rządu polegające na zmianie wydatków rządowych i podatków',
      'Regulacje dotyczące handlu zagranicznego i ceł',
      'Polityka przedsiębiorstw dotycząca inwestycji'
    ],
    correctAnswers: [1],
    explanation: 'Polityka fiskalna to działania rządu polegające na zmianie wydatków rządowych (G) i podatków (T) w celu wpływania na poziom produkcji, zatrudnienia i inflacji w gospodarce.'
  },
  {
    id: 'ch22-q2',
    question: 'Jakie działania podejmuje rząd w ramach ekspansywnej polityki fiskalnej? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Zwiększa wydatki rządowe (G ↑)',
      'Obniża podatki (T ↓)',
      'Zmniejsza wydatki rządowe (G ↓)',
      'Podnosi podatki (T ↑)',
      'Zwiększa transfery socjalne (TR ↑)'
    ],
    correctAnswers: [0, 1, 4],
    explanation: 'Ekspansywna polityka fiskalna stosowana jest w czasie recesji i polega na: zwiększeniu wydatków rządowych (G ↑), obniżeniu podatków (T ↓) i zwiększeniu transferów (TR ↑). Wszystkie te działania mają zwiększyć popyt globalny (AD) i pobudzić gospodarkę.'
  },
  {
    id: 'ch22-q3',
    question: 'Kiedy stosuje się restrykcyjną politykę fiskalną?',
    type: 'single',
    options: [
      'Gdy gospodarka znajduje się w recesji',
      'Gdy bezrobocie jest wysokie',
      'Gdy gospodarka się przegrzewa i pojawia się wysoka inflacja',
      'Gdy dług publiczny jest niski'
    ],
    correctAnswers: [2],
    explanation: 'Restrykcyjna polityka fiskalna stosowana jest, gdy gospodarka się przegrzewa - zbyt wysoki popyt prowadzi do inflacji. Polega na zmniejszeniu wydatków rządowych (G ↓) i podniesieniu podatków (T ↑), co ma schłodzić gospodarkę i obniżyć inflację.'
  },
  {
    id: 'ch22-q4',
    question: 'Jaka jest różnica między deficytem budżetowym a długiem publicznym?',
    type: 'single',
    options: [
      'To dwa różne nazwy tego samego zjawiska',
      'Deficyt to roczny wynik budżetu, a dług to skumulowana suma wszystkich deficytów z przeszłości',
      'Dług to roczny wynik, a deficyt to suma długów z poprzednich lat',
      'Deficyt dotyczy tylko wydatków, a dług tylko podatków'
    ],
    correctAnswers: [1],
    explanation: 'Deficyt budżetowy to roczny wynik - pokazuje, ile państwo wydało więcej niż zarobiło w danym roku. Dług publiczny to skumulowana suma wszystkich deficytów z przeszłości - ile państwo łącznie jest winne swoim wierzycielom. Analogia: deficyt to miesięczne "wejście na minus", dług to całkowite saldo karty kredytowej.'
  },
  {
    id: 'ch22-q5',
    question: 'Jak oblicza się deficyt budżetowy?',
    type: 'single',
    options: [
      'Deficyt = G - T',
      'Deficyt = T - G',
      'Deficyt = G + TR - T',
      'Deficyt = PKB - Podatki'
    ],
    correctAnswers: [2],
    explanation: 'Deficyt budżetowy oblicza się według wzoru: Deficyt = G + TR - T, gdzie G to wydatki rządowe, TR to transfery (emerytury, zasiłki), a T to podatki. Gdy (G + TR) > T, powstaje deficyt.'
  },
  {
    id: 'ch22-q6',
    question: 'Zgodnie z kryteriami z Maastricht, jakie są maksymalne dopuszczalne poziomy dla krajów UE?',
    type: 'single',
    options: [
      'Deficyt < 5% PKB, dług < 80% PKB',
      'Deficyt < 3% PKB, dług < 60% PKB',
      'Deficyt < 2% PKB, dług < 50% PKB',
      'Deficyt < 10% PKB, dług < 100% PKB'
    ],
    correctAnswers: [1],
    explanation: 'Kryteria z Maastricht (traktat z 1992) wymagają, by deficyt budżetowy nie przekraczał 3% PKB, a dług publiczny 60% PKB. Te "hamulce fiskalne" mają zapobiegać nadmiernemu zadłużaniu się krajów strefy euro. W praktyce wiele krajów łamie te zasady!'
  },
  {
    id: 'ch22-q7',
    question: 'Jak nazywa się sytuacja, gdy eksport (X) jest większy niż import (M)?',
    type: 'single',
    options: [
      'Deficyt handlowy',
      'Nadwyżka handlowa',
      'Bilans zrównoważony',
      'Równowaga zewnętrzna'
    ],
    correctAnswers: [1],
    explanation: 'Gdy eksport (X) > import (M), czyli NX = X - M > 0, mamy nadwyżkę handlową. Oznacza to, że kraj eksportuje więcej niż importuje, a pieniądze wpływają do kraju. Przykłady: Niemcy, Chiny - "fabryki świata".'
  },
  {
    id: 'ch22-q8',
    question: 'Jak import wpływa na PKB w równaniu PKB = C + I + G + (X - M)?',
    type: 'single',
    options: [
      'Import zwiększa PKB, bo kupujemy więcej towarów',
      'Import zmniejsza PKB, bo kupujemy towary wyprodukowane za granicą',
      'Import nie wpływa na PKB',
      'Import wpływa tylko na inflację, nie na PKB'
    ],
    correctAnswers: [1],
    explanation: 'Import odejmuje się od PKB (stąd ujemny znak przy M w równaniu). Gdy kupujemy towary wyprodukowane za granicą zamiast krajowych, zwiększamy konsumpcję (C), ale równocześnie zwiększamy import (M), co kompensuje wzrost. PKB mierzy to, co PRODUKUJEMY, a import to towary wyprodukowane gdzie indziej.'
  },
  {
    id: 'ch22-q9',
    question: 'Dlaczego mnożnik w gospodarce otwartej (z handlem zagranicznym) jest słabszy niż w gospodarce zamkniętej?',
    type: 'single',
    options: [
      'Bo ludzie oszczędzają więcej',
      'Bo podatki są wyższe',
      'Bo część wydatków "wycieka" przez import - ludzie kupują zagraniczne towary',
      'Bo eksport jest zbyt wysoki'
    ],
    correctAnswers: [2],
    explanation: 'W gospodarce otwartej mnożnik jest słabszy, bo część pieniędzy "wycieka" przez import. Gdy rząd wydaje 100 zł, część tych pieniędzy trafia na zakup towarów zagranicznych zamiast krajowych. To zmniejsza efekt mnożnikowy - zamiast cyrkulować w krajowej gospodarce, pieniądze odpływają za granicę.'
  },
  {
    id: 'ch22-q10',
    question: 'Który kraj miał najwyższy dług publiczny jako % PKB w 2024?',
    type: 'single',
    options: [
      'USA (~120% PKB)',
      'Polska (~50% PKB)',
      'Japonia (~264% PKB)',
      'Niemcy (~70% PKB)'
    ],
    correctAnswers: [2],
    explanation: 'Japonia ma najwyższy dług publiczny na świecie - około 264% PKB w 2024! Mimo to jest to dług niskooprocentowany, bo kredytodawcy to głównie sami Japończycy (nie obce kraje). Pokazuje to, że nie tylko wielkość długu ma znaczenie, ale także kto jest wierzycielem i jakie są warunki.'
  },
  {
    id: 'ch22-q11',
    question: 'Pakiet stymulacyjny CARES Act w USA (2020) to przykład:',
    type: 'single',
    options: [
      'Ekspansywnej polityki fiskalnej',
      'Restrykcyjnej polityki fiskalnej',
      'Polityki monetarnej',
      'Polityki handlowej'
    ],
    correctAnswers: [0],
    explanation: 'CARES Act ($2,2 biliona) to klasyczny przykład ekspansywnej polityki fiskalnej. Rząd masowo zwiększył wydatki (czeki po $1200 dla obywateli, dopłaty do pensji, zasiłki) w odpowiedzi na recesję COVID-19. Celem było zwiększenie popytu globalnego (AD) i ratowanie gospodarki.'
  },
  {
    id: 'ch22-q12',
    question: 'Które z poniższych stwierdzeń o deficycie i długu są prawdziwe? (wybierz wszystkie poprawne)',
    type: 'multiple',
    options: [
      'Deficyt w jednym roku zwiększa dług publiczny',
      'Nadwyżka budżetowa pozwala zmniejszyć dług publiczny',
      'Wysoki dług zawsze prowadzi do bankructwa państwa',
      'Dług publiczny to "stock", deficyt to "flow"',
      'Każdy deficyt jest szkodliwy dla gospodarki'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Prawdziwe stwierdzenia: (1) Deficyt w danym roku zwiększa dług publiczny o wartość tego deficytu. (2) Nadwyżka pozwala spłacać dług. (4) Dług to "stock" (stan w danym momencie), deficyt to "flow" (przepływ w czasie). FAŁSZ: Wysoki dług nie zawsze prowadzi do bankructwa (zależy od wielu czynników). Deficyt nie zawsze jest szkodliwy - w recesji pomaga stymulować gospodarkę.'
  }
];
