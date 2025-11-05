# Zadania Przykładowe - Dokumentacja

## 📚 Opis funkcji

Nowa sekcja **"Zadania Przykładowe"** została dodana do aplikacji makroekonomicznej. Zawiera szczegółowe rozwiązania krok po kroku najważniejszych typów zadań z makroekonomii.

## ✨ Główne funkcje

### 1. **Przeglądanie kategorii zadań**
- 7 głównych kategorii zadań:
  - 📊 PKB i Wartość Dodana
  - 📈 PKB Nominalny i Realny
  - 💰 Funkcja Konsumpcji i Oszczędności
  - ✖️ Mnożnik Keynesowski
  - ⚖️ Równowaga Makroekonomiczna
  - 🏛️ Polityka Fiskalna
  - 🏦 Kreacja Pieniądza

### 2. **Filtrowanie zadań**
- Filtr po kategorii
- Filtr po poziomie trudności (Łatwe / Średnie / Trudne)
- Wyszukiwarka po słowach kluczowych

### 3. **Wzory i formuły**
- Każda kategoria wyświetla potrzebne wzory
- Definicje zmiennych
- Opisy zastosowania wzorów

### 4. **Szczegółowe rozwiązania**
Każde zadanie zawiera:
- 📝 **Dane** - wszystkie wartości podane w zadaniu
- ❓ **Czego szukamy?** - pytania do rozwiązania (a, b, c, ...)
- 📐 **Potrzebne wzory** - formuly specyficzne dla kategorii
- ✅ **Rozwiązanie krok po kroku** - numerowane kroki z:
  - Opisem co robimy
  - Wzorami
  - Obliczeniami
  - Wynikami pośrednimi
  - Notatkami i wskazówkami
- ✓ **Odpowiedzi końcowe** - zebrane odpowiedzi na wszystkie pytania
- 💡 **Interpretacja ekonomiczna** - co oznaczają wyniki
- 📋 **Wnioski praktyczne** - zastosowanie w rzeczywistości

## 🎨 Interfejs użytkownika

### Strona główna (/example-problems)
- Karty kategorii z licznikiem zadań
- Filtry i wyszukiwarka u góry
- Lista zadań z meta-danymi (kategoria, trudność, słowa kluczowe)

### Strona szczegółów zadania (/example-problems/:problemId)
- Przycisk powrotu
- Oznaczenie kategorii i trudności
- Sekcje z danymi, pytaniami i wzorami
- Rozwiązanie krok po kroku w ładnych kartach
- Nawigacja między zadaniami

## 🛠️ Struktura techniczna

### Pliki utworzone/zmodyfikowane:

```
src/
├── types/
│   └── index.ts                    # Dodane typy: ExampleProblem, ProblemCategory, etc.
├── data/
│   └── example-problems.ts         # Dane zadań i kategorii
├── pages/
│   └── ExampleProblems/
│       ├── ExampleProblems.tsx     # Strona główna z listą
│       ├── ExampleProblems.css     # Style
│       ├── ProblemDetail.tsx       # Strona szczegółów zadania
│       └── ProblemDetail.css       # Style
├── components/
│   └── Navigation/
│       ├── Navigation.tsx          # Dodany link "Zadania Przykładowe"
│       └── Navigation.css          # Dodane style dla linku
└── App.tsx                         # Dodane routy
```

### Typy TypeScript:

```typescript
interface ExampleProblem {
  id: string;
  title: string;
  category: ProblemCategory;
  difficulty: ProblemDifficulty;
  description: string;
  givens: { [key: string]: string | number };
  questions: string[];
  solution: ProblemSolution;
  relatedTopics: string[];
  keywords: string[];
}

interface ProblemSolution {
  steps: DetailedStep[];
  finalAnswers: { [key: string]: string | number };
  interpretation?: string;
  practicalImplications?: string[];
}

interface DetailedStep {
  stepNumber: number;
  title: string;
  description: string;
  formulas?: string[];
  calculations?: CalculationDetail[];
  result?: string;
  note?: string;
}
```

## 🚀 Jak dodać nowe zadania?

### 1. Otwórz plik `src/data/example-problems.ts`

### 2. Dodaj nowy obiekt do tablicy `exampleProblems`:

```typescript
{
  id: 'problem-X-X',  // Unikalny ID
  title: 'Tytuł zadania',
  category: 'pkb-value-added',  // Jedna z kategorii
  difficulty: 'medium',  // easy | medium | hard
  description: 'Opis problemu...',
  givens: {
    'Nazwa zmiennej': 'Wartość',
    'Inna zmienna': 100
  },
  questions: [
    'Pytanie a)',
    'Pytanie b)',
    'Pytanie c)'
  ],
  solution: {
    steps: [
      {
        stepNumber: 1,
        title: 'Tytuł kroku',
        description: 'Opis co robimy...',
        formulas: ['PKB = C + I + G'],
        calculations: [
          {
            expression: 'PKB = 100 + 200 + 300',
            explanation: 'Podstawiamy wartości',
            result: '600'
          }
        ],
        result: 'Wynik kroku',
        note: 'Opcjonalna notatka'
      }
      // ... więcej kroków
    ],
    finalAnswers: {
      'a': 'Odpowiedź na pytanie a',
      'b': 'Odpowiedź na pytanie b',
      'c': 'Odpowiedź na pytanie c'
    },
    interpretation: 'Interpretacja ekonomiczna...',
    practicalImplications: [
      'Wniosek 1',
      'Wniosek 2'
    ]
  },
  relatedTopics: ['Temat 1', 'Temat 2'],
  keywords: ['słowo1', 'słowo2', 'słowo3']
}
```

### 3. Zapisz plik - zadanie automatycznie pojawi się w aplikacji!

## 📊 Aktualny stan

### Liczba zadań: **3**
1. Łańcuch produkcyjny - PKB i wartość dodana (średnie)
2. PKB realny, nominalny i deflator (trudne)
3. Funkcja konsumpcji i oszczędności (średnie)

### Kategorie z zadaniami:
- ✅ PKB i Wartość Dodana - 1 zadanie
- ✅ PKB Nominalny i Realny - 1 zadanie
- ✅ Funkcja Konsumpcji - 1 zadanie
- ⏳ Mnożnik Keynesowski - 0 zadań (wzory gotowe)
- ⏳ Równowaga Makroekonomiczna - 0 zadań (wzory gotowe)
- ⏳ Polityka Fiskalna - 0 zadań (wzory gotowe)
- ⏳ Kreacja Pieniądza - 0 zadań (wzory gotowe)

## 🎯 Planowane rozszerzenia

1. **Więcej zadań** - dodanie przykładów do wszystkich kategorii
2. **Tryb ćwiczeniowy** - możliwość próby samodzielnego rozwiązania przed pokazaniem odpowiedzi
3. **Notatki użytkownika** - możliwość dodawania własnych notatek do zadań
4. **Ulubione zadania** - oznaczanie zadań do późniejszego przejrzenia
5. **Eksport do PDF** - możliwość wydruku zadań z rozwiązaniami
6. **Interaktywne kalkulatory** - wbudowane kalkulatory dla każdego typu zadania

## 🎨 Design system

### Kolory kategorii:
- **Tryb Egzamin**: Zielony gradient (#A7F3D0 → #6EE7B7)
- **Narzędzia**: Niebieski gradient (#BFDBFE → #93C5FD)
- **Zadania Przykładowe**: Fioletowy gradient (#DDD6FE → #C4B5FD)

### Kolory trudności:
- **Łatwe**: Zielony (#c6f6d5, tekst: #22543d)
- **Średnie**: Żółty (#fef5e7, tekst: #9c640c)
- **Trudne**: Czerwony (#fed7d7, tekst: #742a2a)

## 📱 Responsywność

Interfejs jest w pełni responsywny:
- Desktop: Siatka 3 kolumn dla kategorii, 2 kolumny dla wzorów
- Tablet: Siatka 2 kolumn
- Mobile: Pojedyncza kolumna, większe przyciski (56px min-height)

## ✅ Testy

Build aplikacji: ✅ Sukces (bez błędów TypeScript)

## 🔗 Dostęp

- **Nawigacja**: Kliknij "📚 Zadania Przykładowe" w menu bocznym
- **URL**: `/example-problems`
- **Szczegóły zadania**: `/example-problems/:problemId`

---

**Autor**: Claude Code
**Data**: 5 listopada 2025
**Status**: ✅ Gotowe do użycia
