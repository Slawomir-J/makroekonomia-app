# Plan Ujednolicenia Stylu Aplikacji Makroekonomia

## 🎨 Paleta Kolorów (bazując na trybie egzaminu)

### Kolory podstawowe:
- **Niebieski pastelowy** (główny): `#DBEAFE`, `#BFDBFE`, `#93C5FD`, `#60A5FA`
- **Zielony pastelowy** (sukces/pozytywne): `#ECFDF5`, `#D1FAE5`, `#A7F3D0`, `#6EE7B7`
- **Różowy pastelowy** (błędy - TYLKO dla błędów): `#FCE7F3`, `#FBCFE8`
- **Szary** (neutralne tła): `#F9FAFB`, `#F3F4F6`, `#E5E7EB`
- **Tekst**: `#1E3A8A` (ciemny niebieski), `#064E3B` (ciemny zielony)

### Zasady użycia:
- ✅ **Główne elementy UI**: niebieski pastelowy
- ✅ **Elementy pozytywne**: zielony pastelowy
- ❌ **Usunąć**: brązy, pomarańczowe, intensywne fiolety, intensywne różowe
- ❌ **Różowy**: TYLKO dla komunikatów o błędach

---

## 📋 Zmiany do wykonania (od góry do dołu)

### 1. **Nawigacja boczna**
**Problem**: Zaznaczenie aktywnego rozdziału jest nieczytelne (jasne tło + biały tekst)

**Rozwiązanie**:
- Aktywny rozdział: jasny niebieski pastelowy gradient + ciemny tekst + cienka ramka
- Uproszczone zaznaczenie - jedno spojrzenie pokazuje gdzie jest użytkownik
- Usunięcie skomplikowanych efektów

**Pliki**: `src/components/Navigation/Navigation.css`

---

### 2. **Strony rozdziałów - teoria**
**Problem**: Chaos kolorystyczny - zbyt wiele kolorów, brązy, pomarańczowe

**Rozwiązanie**:
- **Sekcja definicji**: niebieski pastelowy
- **Sekcja przykładów**: zielony pastelowy
- **Sekcja ważnych informacji**: jaśniejszy niebieski
- **Wzory matematyczne**: kod na szarym tle `#F3F4F6`
- Usunięcie brązów i pomarańczowych kolorów

**Pliki**:
- `src/pages/chapters/Chapter20/Chapter20.css`
- `src/pages/chapters/Chapter21/Chapter21.css`
- `src/pages/chapters/Chapter22/Chapter22.css`
- `src/pages/chapters/Chapter23/Chapter23.css`
- `src/pages/chapters/Chapter24/Chapter24.css`

---

### 3. **Legenda skrótów (NOWE)**
**Problem**: Brak wyjaśnienia skrótów matematycznych (CPI_t, CPI_(t-1), itp.)

**Rozwiązanie**:
- Dodać panel boczny po prawej stronie od teorii
- Sticky positioning (przykleja się przy scrollowaniu)
- Zawiera najczęstsze skróty używane w rozdziale
- Niebieski pastelowy gradient jako tło

**Implementacja**:
- Nowy komponent: `src/components/GlossaryPanel/GlossaryPanel.tsx`
- Style: `src/components/GlossaryPanel/GlossaryPanel.css`
- Dodać do layoutu każdego rozdziału

**Przykładowa zawartość**:
```
CPI_t = Consumer Price Index w okresie t (bieżącym)
CPI_(t-1) = CPI w okresie poprzednim
Y = Dochód narodowy
C = Konsumpcja
I = Inwestycje
G = Wydatki rządowe
```

---

### 4. **Quizy**
**Problem**: Różowe tło z białym tekstem - całkowicie nieczytelne

**Rozwiązanie**:
- Poprawna odpowiedź: zielony pastelowy + ciemny tekst
- Błędna odpowiedź: różowy pastelowy + ciemny tekst (nie biały!)
- Neutralne opcje: szare tło
- Większy kontrast między tekstem a tłem

**Pliki**:
- `src/pages/chapters/Chapter20/Chapter20Quiz.css`
- `src/pages/chapters/Chapter21/Chapter21Quiz.css`
- `src/pages/chapters/Chapter22/Chapter22Quiz.css`
- `src/pages/chapters/Chapter23/Chapter23Quiz.css`
- `src/pages/chapters/Chapter24/Chapter24Quiz.css`

---

### 5. **Kalkulatory**
**Problem**: Różowo-fioletowe kolory, nieczytelne UI

**Rozwiązanie**:
- **Input fields**: białe tło z niebieską ramką
- **Wyniki**: zielony pastelowy gradient
- **Sekcja danych**: niebieski pastelowy
- **Przyciski**: zielony pastelowy dla akcji, niebieski dla reset
- Usunięcie wszystkich fioletów i intensywnych różowych

**Pliki**:
- `src/components/Exercise/EquilibriumCalculator.css`
- `src/components/Exercise/MultiplierSimulator.css`
- `src/components/Exercise/MoneyCreationCalculator.css`
- `src/components/Exercise/MonetaryPolicySimulator.css`
- `src/components/Exercise/ValueAddedCalculator.css`
- `src/components/Exercise/BudgetCalculator.css`
- `src/pages/chapters/Chapter20/Chapter20Calculator.css`
- `src/pages/chapters/Chapter21/Chapter21Calculator.css`
- `src/pages/chapters/Chapter22/Chapter22Calculator.css`
- `src/pages/chapters/Chapter23/Chapter23Calculator.css`

---

### 6. **Diagram w Rozdziale 20**
**Problem**: Za mały, elementy się zlewają

**Rozwiązanie**:
- Zwiększyć rozmiar kontenera diagramu z 600px do 900px wysokości
- Zwiększyć rozmiar węzłów (boxes)
- Większa czcionka dla etykiet
- Zwiększyć odstępy między elementami

**Plik**: `src/pages/chapters/Chapter20/Chapter20Diagram.css`

---

### 7. **Strona Narzędzia**
**Problem**: Nieczytelne, brak spójności UI

**Rozwiązanie**:
- Uproszczony layout
- Niebieski pastelowy dla nagłówków sekcji
- Większe odstępy między narzędziami
- Cienie pastelowe zamiast intensywnych

**Plik**: `src/pages/Tools/Tools.css`

---

## 🔧 Szczegółowy Plan Implementacji

### Faza 1: Ustalenie podstaw
1. ✅ Stworzenie pliku z paletą kolorów (zmienne CSS)
2. ✅ Aktualizacja nawigacji

### Faza 2: Teoria (rozdziały)
3. Systematyczna aktualizacja styli wszystkich rozdziałów
4. Stworzenie komponentu GlossaryPanel z legendą skrótów
5. Integracja GlossaryPanel z każdym rozdziałem

### Faza 3: Interaktywne elementy
6. Aktualizacja quizów - czytelne kolory
7. Aktualizacja kalkulatorów - usunięcie fioletów
8. Powiększenie diagramu w rozdziale 20

### Faza 4: Strona Narzędzia
9. Redesign strony Tools

### Faza 5: Weryfikacja
10. Build aplikacji
11. Przegląd wszystkich stron pod kątem spójności kolorów

---

## 📊 Metryki sukcesu

- ✅ Wszystkie sekcje używają tylko kolorów z zatwierdzonej palety
- ✅ Tekst jest zawsze czytelny (wystarczający kontrast)
- ✅ Użytkownik od razu widzi gdzie jest w aplikacji
- ✅ Skróty matematyczne są wyjaśnione
- ✅ Diagram jest czytelny
- ✅ Brak intensywnych kolorów (brązy, pomarańczowe, fiolety)

---

## Status Implementacji

- [ ] Faza 1: Podstawy
- [ ] Faza 2: Teoria
- [ ] Faza 3: Interaktywne elementy
- [ ] Faza 4: Strona Narzędzia
- [ ] Faza 5: Weryfikacja
